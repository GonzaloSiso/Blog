
const db = require('../db/db');

const Post = {
    getAllPosts: (callback) => {
        const query = `
            SELECT posts.*, autores.nombre AS nombre_autor
            FROM posts
            JOIN autores ON posts.autor_id = autores.id;
        `;
        db.query(query, callback);
    },

    createPost: (postData, callback) => {
        const { titulo, descripcion, categoria, autor_id } = postData;
        const query = `
            INSERT INTO posts (titulo, descripcion, categoria, autor_id)
            VALUES (?, ?, ?, ?);
        `;
        db.query(query, [titulo, descripcion, categoria, autor_id], callback);
    },

    getPostsByAuthor: (autorId, callback) => {
        const query = `
            SELECT posts.*, autores.nombre AS nombre_autor
            FROM posts
            JOIN autores ON posts.autor_id = autores.id
            WHERE posts.autor_id = ?;
        `;
        db.query(query, [autorId], callback);
    }
    // Otras funciones según tus necesidades
};

module.exports = Post;
