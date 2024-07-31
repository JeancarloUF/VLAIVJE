const path = require('path');

const db_file_path = path.join(__dirname, '../DataBase/VideoJuegos.json');


const ObtenerTodosLosJuegos = () =>
    {
        try
        {
            let infoGame = require(db_file_path);
            return infoGame.Games;
        }
        catch(error)
        {
            return error;
        }
    
}
module.exports = 
{
    ObtenerTodosLosJuegos
}