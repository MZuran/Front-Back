const { listTables } = require('../utils/listTables')

// Ruta para el login
const listDbHandler = async (req, res) => {
    
    try {
        const tables = await listTables()
        res.json(tables)
    } catch (error) {
        console.error('Error en la base de datos:', error);
        res.json({ message: 'Error interno del servidor' });
    }
}


module.exports = {
    listDbHandler
};