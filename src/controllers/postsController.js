
const Post = require('../models/postModel');

const postsController = {
    getAllPosts: (req, res) => {
        Post.getAllPosts((err, result) => {
            if (err) {
                console.error('Error al obtener los posts:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else {
                res.json(result);
            }
        });
    },

    createPost: (req, res) => {
        const postData = req.body;
        Post.createPost(postData, (err, result) => {
            if (err) {
                console.error('Error al crear un nuevo post:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else {
                res.json({ message: 'Post creado exitosamente' });
            }
        });
    },

    getPostsByAuthor: (req, res) => {
        const autorId = req.params.autorId;
        Post.getPostsByAuthor(autorId, (err, result) => {
            if (err) {
                console.error('Error al obtener los posts del autor:', err);
                res.status(500).json({ error: 'Error interno del servidor' });
            } else {
                res.json(result);
            }
        });
    }
};

module.exports = postsController;
