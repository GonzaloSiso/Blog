
const Autor = require('../models/autorModel');

const autoresController = {
    getAllAutores: (req, res) => {
        Autor.getAllAutores((err, result) => {
            if (err) {
                console.error('Error al obtener todos los autores:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else {
                res.json(result);
            }
        });
    },

    createAutor: (req, res) => {
        const autorData = req.body;
        Autor.createAutor(autorData, (err, result) => {
            if (err) {
                console.error('Error al crear un nuevo autor:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else {
                res.json({ message: 'Autor creado exitosamente' });
            }
        });
    }
 
};

module.exports = autoresController;
