
const express = require('express');
const autoresController = require('../controllers/autoresController');
const postsController = require('../controllers/postsController');

const router = express.Router();

router.get('/autores', autoresController.getAllAutores);
router.post('/autores', autoresController.createAutor);

router.get('/posts', postsController.getAllPosts);
router.post('/posts', postsController.createPost);
router.get('/posts/autor/:autorId', postsController.getPostsByAuthor);

module.exports = router;
