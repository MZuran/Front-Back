const { realizarQuery } = require('../../modulos/mysql');

// INSERT INTO nombre_de_la_tabla VALUES (valor1, valor2, valor3, ...);

function parsearValores(array) {
    return `(${array.map(valor => 
        typeof valor === 'string' ? `'${valor}'` : valor
    ).join(',')})`;
}

async function ingresarValoresATabla(nombreTabla, arrayDeValores) {
    //console.log(parsearValores(arrayDeValores))
    const query = `INSERT INTO ${nombreTabla} (Nombre, Contraseña) VALUES ${parsearValores(arrayDeValores)}`
    console.log(query)
    const resultado = await realizarQuery(query);
    return resultado;
}

module.exports = {
    ingresarValoresATabla
};