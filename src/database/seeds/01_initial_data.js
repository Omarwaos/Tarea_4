/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // 1. Limpiar las tablas en orden (primero hijos por las FK)
  await knex('activos').del();
  await knex('categorias').del();

  // 2. Insertar categorías de prueba
  await knex('categorias').insert([
    { id: 1, categoria: 'Equipos de Cómputo' },
    { id: 2, categoria: 'Mobiliario de Oficina' },
    { id: 3, categoria: 'Herramientas y Redes' }
  ]);

  // 3. Insertar activos asociados a esas categorías
  await knex('activos').insert([
    {
      id: 1,
      idcategoria: 1,
      descripcion: 'Laptop Lenovo ThinkPad T14 16GB',
      fotografia: 'thinkpad_t14.jpg',
      estado: 'OPERATIVO',
      precio: 3500.00
    },
    {
      id: 2,
      idcategoria: 1,
      descripcion: 'Monitor Dell 24 pulgadas FHD',
      fotografia: 'monitor_dell.jpg',
      estado: 'OPERATIVO',
      precio: 650.00
    },
    {
      id: 3,
      idcategoria: 2,
      descripcion: 'Silla Ergonómica Ejecutiva',
      fotografia: 'silla_ergo.jpg',
      estado: 'DISPONIBLE',
      precio: 420.50
    },
    {
      id: 4,
      idcategoria: 3,
      descripcion: 'Switch Cisco 24 Puertos Gigabit',
      fotografia: 'switch_cisco.jpg',
      estado: 'MANTENIMIENTO',
      precio: 1200.00
    }
  ]);
};