const express = require("express");
const router = express.Router();
const gamesController = require("../Controllers/VIdeoJuegosController")


router
    .get("/ObtenerTodosLosJuegos", gamesController.ObtenerTodosLosJuegos)


module.exports = router;



