// src/index.js
require('dotenv').config();
const express = require('express');
const categoriaRoutes = require('./routers/categoriaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para entender JSON en las peticiones POST/PUT
app.use(express.json());

// Registrar rutas
app.use('/api/categorias', categoriaRoutes);

// Ruta base de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Logística funcionando correctamente' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});