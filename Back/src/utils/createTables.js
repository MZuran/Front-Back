/*
CREATE TABLE Jugadores ( 
ID INT PRIMARY KEY AUTO_INCREMENT, 
Nombre VARCHAR(100), 
Contraseña VARCHAR(100)
);

CREATE TABLE Puntajes ( 
ID_Jugador INT, 
Puntos INT, 
FOREIGN KEY (ID_Jugador) REFERENCES Jugadores(ID) 
);
*/

const { realizarQuery } = require('../../modulos/mysql');

/**
 * Función para crear las tablas de Jugadores y Puntajes
 * @returns Una lista de las bases de datos.
 */

const query1 = `
CREATE TABLE Jugadores ( 
ID INT PRIMARY KEY AUTO_INCREMENT, 
Nombre VARCHAR(100), 
Contraseña VARCHAR(100)
);
`

const query2 = `
CREATE TABLE Puntajes ( 
ID_Jugador INT, 
Puntos INT, 
FOREIGN KEY (ID_Jugador) REFERENCES Jugadores(ID) 
);
`

async function createTables() {
    try {
        const createdTable1 = await realizarQuery(query1);
        const createdTable2 = await realizarQuery(query2);
        console.log("Tablas de jugadores y puntajes creadas");
        return [createdTable1, createdTable2];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Exporta la función usando module.exports para Node.js
module.exports = {
    createTables
};
