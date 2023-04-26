const {Router} = require("express");
const {getGames} = require ("../Controllers/getGames");

const videogamesRouter = Router ();
videogamesRouter.get('/', async (req, res)=>{
    try {
        const allGames= await getGames();
        res.status(200).json(allGames)
    } catch (error){
        res.status(500).json({error: error.message})
    }
})
module.exports = videogamesRouter;