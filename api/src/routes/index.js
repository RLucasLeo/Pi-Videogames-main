const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const genresRoute = require ("./genres.js")
const videogameRouter = require ("./videogame.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogameRouter);
//router.use('/genres', genresRoute);
//router.use('/videogame', videogameRoute);

module.exports = router;
