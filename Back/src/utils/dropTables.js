const { realizarQuery } = require('../../modulos/mysql');

/**
 * Función para eliminar las tablas de Jugadores y Puntajes
 */
const dropQuery1 = `
DROP TABLE IF EXISTS Puntajes;
`;

const dropQuery2 = `
DROP TABLE IF EXISTS Jugadores;
`;

async function dropTables() {
    try {
        const droppedTable1 = await realizarQuery(dropQuery1);
        const droppedTable2 = await realizarQuery(dropQuery2);
        console.log("Tablas eliminadas de Jugadores y Puntajes");
        return [droppedTable1, droppedTable2];
    } catch (error) {
        console.error("Error al eliminar las tablas:", error);
        throw error;
    }
}

// Exporta la función usando module.exports para Node.js
module.exports = {
    dropTables
};
