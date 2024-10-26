const express = require('express');   // Importo el paquete Express al archivo
const router = express.Router();      // Invoco el método de .Router() de express y lo asigno a una variable

// Importamos funciones sql
const { mostrarTablas } = require("../funcionesSql/mostrarTablas.js")
const { ingresarValoresATabla } = require("../funcionesSql/ingresarValorATablas.js")
const { leerTabla } = require("../funcionesSql/leerTablas.js")

router.post("/home", async (req, res) => {
    console.log(req.body)
})

/*
    {
        nombreTabla: el nombre de la tabla
        arrayValores: array de los valores
    }
*/

router.post("/ingresoATabla/:nombreTabla", async (req, res) => {

    const nombreTabla = req.params.nombreTabla
    const valores = req.body.datos // req.body.datos es un array que nos envía el frontend

    console.log("Datos a ingresar a la Tabla ", nombreTabla, valores)

    const aux = await ingresarValoresATabla(nombreTabla, valores)
    res.json(aux)
})

router.get("/tabla/:nombre", async (req, res) => {
    
    const nombreTabla = req.params.nombre

    const aux = await leerTabla(nombreTabla)
    console.log(aux)
    res.json(aux)
})

router.get("/listTables", async (req, res) => {
    const aux = await mostrarTablas()
    console.log(aux)
    res.json(aux)
})

module.exports = router;              // Exporto Router