# APP_TO_DO_LIST

Backend para Aplicación de Gestión de Tareas

Esta es una aplicación simple para la gestión de tareas que permite crear, obtener, actualizar y eliminar.

- Instalación:
  Instala las dependencias ejecutando el siguiente comando en la terminal:

  npm install

- Uso:
  Para ejecutar la aplicación, utiliza en la terminal el siguiente comando:

  node app.js

- Configuración de la Base de Datos:
  La aplicación requiere de una base de datos MySQL, el script es el siguiente:

  CREATE DATABASE tasks_db;
  USE tasks_db;
  
  CREATE TABLE tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
