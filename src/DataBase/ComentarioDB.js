const fs =  require('fs');
const path = require('path');

const db_file_path = path.join(__dirname, '../DataBase/Comentarios.json');

const GuardarComentario = (comentario) =>
    {
        try
        {
            let infoComentario = require(db_file_path);
            infoComentario.Comentarios.push(comentario);
            fs.writeFileSync(db_file_path, JSON.stringify(infoComentario, null, 2));
        }
        catch(error)
        {
            console.log("Error al guardar el comentario", error);
        }
    }

module.exports = 
{
   GuardarComentario
}