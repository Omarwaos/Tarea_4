# API Logística - NodeJS & Express

Proyecto backend desarrollado con Express y Knex para la gestión de logística.

## Instalación y ejecución

1. Instalar dependencias:
   ```bash
   npm install
## Configurar variables de entorno:

1. Copiar o crear el archivo .env con las credenciales de la base de datos MySQL.

2. Ejecutar migraciones (crear tablas):

 ```bash
  npx knex migrate:latest
```

3. Ejecutar semillas (poblar datos de prueba):
 ```bash
  npx knex seed:run
```

4. Iniciar en modo desarrollo:
 ```bash
  npm run dev
```

## Créditos

Proyecto realizado por *Omar Ramos*