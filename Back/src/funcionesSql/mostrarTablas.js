// SHOW TABLES;

const { realizarQuery } = require('../../modulos/mysql');

/*
    RealizarQuery DEVUELVE los resultados de la query
*/

async function mostrarTablas() {
    const query = `SHOW TABLES`
    const resultado = await realizarQuery(query);
    return resultado;
}

module.exports = {
    mostrarTablas
};