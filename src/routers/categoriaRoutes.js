// src/routers/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const {
  getCategorias,
  getCategoriaById,
  createCategoria
} = require('../controllers/categoriaController');

// Definir endpoints
router.get('/', getCategorias);
router.get('/:id', getCategoriaById);
router.post('/', createCategoria);

module.exports = router;