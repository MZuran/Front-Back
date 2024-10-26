const { realizarQuery } = require('../../modulos/mysql');

// SELECT * FROM nombre_de_la_tabla;

/*
    RealizarQuery DEVUELVE los resultados de la query
*/

async function leerTabla(nombreTabla) {
    const query = `SELECT * FROM ${nombreTabla}`
    console.log("Realizando Query:", query)
    const resultado = await realizarQuery(query);
    return resultado;
}

module.exports = {
    leerTabla
};