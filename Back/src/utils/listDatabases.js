const { realizarQuery } = require('../../modulos/mysql');	

/**
 * Función para listar todas las bases de datos en el servidor MySQL conectado.
 * @returns Una lista de las bases de datos.
 */
async function listDatabases() {
    try {
        const databases = await realizarQuery('SHOW DATABASES;');
        console.log("Bases de datos:", databases);
        return databases;  // Retorna la lista de bases de datos
    } catch (error) {
        console.error(error);
        throw error;  // Lanza el error nuevamente para que el llamador lo maneje
    }
}

// Exporta la función usando module.exports para Node.js
module.exports = {
    listDatabases
};
