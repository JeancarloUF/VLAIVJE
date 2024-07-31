const express = require("express");
const router = express.Router();
const comentariosController = require("../Controllers/ComentariosController");


router
    .post("/GuardarComentario", comentariosController.GuardarComentario)



module.exports = router;




