// src/controllers/categoriaController.js
const db = require('../config/db');

// Listar todas las categorías
const getCategorias = async (req, res) => {
  try {
    const categorias = await db('categorias').select('*');
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una categoría por ID
const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await db('categorias').where({ id }).first();
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva categoría
const createCategoria = async (req, res) => {
  try {
    const { categoria } = req.body;
    if (!categoria) {
      return res.status(400).json({ error: 'El campo categoria es obligatorio' });
    }
    const [id] = await db('categorias').insert({ categoria });
    res.status(201).json({ id, categoria, mensaje: 'Categoría creada con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCategorias,
  getCategoriaById,
  createCategoria
};