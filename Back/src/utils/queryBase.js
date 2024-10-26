const { realizarQuery } = require('../../modulos/mysql');

const query = `
SELECT * FROM Jugadores;
`;

async function queryBase() {
    try {
        const returnedData = await realizarQuery(query);
        console.log("Tablas eliminadas de Jugadores y Puntajes");
        return returnedData;
    } catch (error) {
        console.error("Error al intentar hacer la query", query);
        throw error;
    }
}

// Exporta la función usando module.exports para Node.js
module.exports = {
    queryBase
};
