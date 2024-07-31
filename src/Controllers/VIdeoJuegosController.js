const gamesDB = require("../DataBase/VideoJuegosDB")


const ObtenerTodosLosJuegos  = (req, res) =>
    {        
        const TodosLosJuegos = gamesDB.ObtenerTodosLosJuegos();
                
        const RespuestaServicio = 
        {
            CodigoRespuesta: 0,
            DetalleRespuesta: "Transaccion Exitosa"
            
        }
                
        res.status(200).send({ RespuestaServicio, TodosLosJuegos})
    }

module.exports = 
{
    ObtenerTodosLosJuegos
}