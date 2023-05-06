const axios = require ("axios");
require('dotenv').config();
const {API_KEY} = process.env;
const {Videogame} = require('../db')

const getGames = async ()=>{
    const apiGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const games = apiGames.data.results;
    const dbGames = await Videogame.findAll();

    const gameDB = dbGames.map((game)=>{return {
        id: game.id,
        name: game.name,
        image: game.background_image,
        genres: game.genres?.map((gen)=> gen.name),
        platforms: game.platforms?.map((platform)=> platform),
        released: game.released,
        rating: game.rating,
    }})

    const gameApi = games.map((game)=>{
        return {
            id: game.id,
            name: game.name,
            image: game.background_image,
            genres: game.genres?.map((gen)=> gen.name),
            platforms: game.platforms?.map((plat)=> plat.platform.name),
            released: game.released,
            rating: game.rating,
        }
    })

    //console.log(gameApi)
    const allGames = gameApi.concat(gameDB)

    if (allGames){
        return allGames;
    } else {
        throw Error('Juego no encontrado')
    }
}
module.exports ={ getGames }