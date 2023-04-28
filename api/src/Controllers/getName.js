const axios = require("axios")
require('dotenv').config()
const {API_KEY} = process.env
const {Videogame} = require("../db")
const { Op } = require("sequelize")

const getName =async (name) => {
    try {
         const apiGames = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
    const apiGamesList = apiGames.data.results.map((game)=> ({
            id: game.id,
            name: game.name,
            genres: game.genres?.map((gen)=> gen.name),
            platforms: game.platforms? game.platforms.map((plat)=> plat.platform.name).join(', '):null,
            released: game.released,
            image: game.image,
            rating: game.rating,
    }));
//traemos juegos desde la base de datos
    const dbGames = await Videogame.findAll({
        where : {
            name: {
                [Op.iLike]: `%${name}%`,},
            },
        include: {
            model: Genre,
            as: 'Genres',
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
        
    });
    const dbGameList = Array.isArray(dbGames)? dbGames.map((game)=>({
        
            id: game.id,
            name: game.name,
            genres: game.genres?.map((gen)=> gen.name),
            platforms: game.platforms?game.platforms.map((plat)=> plat.platform.name).split(',').join(', '): null,
            released: game.released,
            image: game.image,
            rating: game.rating,
        
    })):[];
    const games= apiGamesList.concat(dbGameList);
    if(games.length=== 0){
        return null;
    }
    return games.slice(0, 15);
    } catch (error) {
        console.error(error);
        throw new Error("ERROR AL BUSCAR JUEGOS")
    }
}
module.exports = {getName}