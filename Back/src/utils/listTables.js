const { realizarQuery } = require('../../modulos/mysql');	

/**
 * Función para listar todas las tablas en una base de datos específica.
 * @returns Una lista de las tablas en la base de datos especificada.
 */
async function listTables() {
    try {
        // Consulta para obtener todas las tablas
        const tables = await realizarQuery('SHOW TABLES;');
        
        console.log(`Tablas en la base de datos:`, tables);
        return tables;  // Retorna la lista de tablas
    } catch (error) {
        console.error(error);
        throw error;  // Lanza el error nuevamente para que el llamador lo maneje
    }
}

// Exporta la función usando module.exports para Node.js
module.exports = {
    listTables
};
