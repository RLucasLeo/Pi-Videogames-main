const axios = require("axios")
require('dotenv').config()
const {API_KEY} = process.env
const {Videogame} = require("../db")
const { Op } = require("sequelize")

const getName =async (name) => {
    const apiGames = await axios.get(`https://api.rawg.io/api/games?name=${name}&key=${API_KEY}`)
    const games = apiGames.data.results;
    const dbGames = await Videogame.findAll({
        where : {
        [Op.iLike]: `%${name}`}
    });
    

    const gameApi = games.map((game)=>{
        return {
            id: game.id,
            name: game.name,
            genres: game.genres?.map((gen)=> gen.name),
            platforms: game.platforms?.map((plat)=> plat.platform.name),
            released: game.released,
            image: game.image,
            rating: game.rating,
        }
    })
    const allGames = gameApi.concat(dbGames)
    return allGames;
}
module.exports = {getName}