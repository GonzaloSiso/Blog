
const db = require('../db/db');

const Autor = {
    getAllAutores: (callback) => {
        const query = 'SELECT * FROM autores';
        db.query(query, callback);
    },

    createAutor: (autorData, callback) => {
        const { nombre, email, imagen } = autorData;
        const query = 'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)';
        db.query(query, [nombre, email, imagen], callback);
    }
};

module.exports = Autor;

