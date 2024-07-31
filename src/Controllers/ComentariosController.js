const comentariosDataBase = require("../DataBase/ComentarioDB")

const GuardarComentario = (req, res) =>
    {        
        const nuevoComentario = req.body;
    
        const RespuestaServicio = 
        {
            CodigoRespuesta: -1,
            DetalleRespuesta: "Error al ingresar"
        }
        {
            comentariosDataBase.GuardarComentario(nuevoComentario);
            RespuestaServicio.CodigoRespuesta = 0;
            RespuestaServicio.DetalleRespuesta = "Comentario Ingresado"
        } 
        res.status(200).send({RespuestaServicio })
    }

module.exports = 
{
   GuardarComentario
}