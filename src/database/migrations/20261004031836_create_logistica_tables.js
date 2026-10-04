/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  // 1. Tabla categorias (T1)
  await knex.schema.createTable('categorias', (table) => {
    table.increments('id').primary(); // id INT AUTO_INCREMENT PRIMARY KEY
    table.string('categoria', 100).notNullable(); // categoria VARCHAR(100) NOT NULL
  });

  // 2. Tabla activos (T2)
  await knex.schema.createTable('activos', (table) => {
    table.increments('id').primary(); // id INT AUTO_INCREMENT PRIMARY KEY
    
    // idcategoria como clave foránea referenciando a categorias(id)
    table.integer('idcategoria').unsigned().notNullable()
      .references('id').inTable('categorias')
      .onDelete('CASCADE');

    table.string('descripcion', 255).notNullable();
    table.string('fotografia', 255).nullable();
    table.string('estado', 50).defaultTo('DISPONIBLE');
    table.decimal('precio', 10, 2).notNullable();
    table.timestamp('fecharegistro').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  // Se eliminan en orden inverso por la llave foránea
  await knex.schema.dropTableIfExists('activos');
  await knex.schema.dropTableIfExists('categorias');
};