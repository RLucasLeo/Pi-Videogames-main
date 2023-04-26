const {Router} = require("express");
const {getGames} = require ("../Controllers/getGames");
const {postGames} = require ('../Controllers/postGames');

const videogamesRouter = Router ();

videogamesRouter.get('/', async (req, res)=>{
    try {
        const allGames= await getGames();
        res.status(200).json(allGames)
    } catch (error){
        res.status(500).json({error: error.message})
    }
})

videogamesRouter.post('/', async (req, res)=>{
    const {name, description, platforms, image, released, rating} = req.body

    try {
        const nuevoJuego= await postGames(name, description, platforms, image, released, rating)
        res.status(200).json(nuevoJuego)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = videogamesRouter;