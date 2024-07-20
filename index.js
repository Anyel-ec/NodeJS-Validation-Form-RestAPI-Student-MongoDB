const express = require('express');
const EnvLoader = require('./src/config/environment');
const { connectDB } = require('./src/config/db');
const studentRoutes = require('./src/routes/studentRoutes');

const envLoader = new EnvLoader(); // Cargar variables de entorno desde el archivo .env

const app = express();
app.use(express.json());

const PORT = envLoader.get('PORT') || 3000;

// Conectar a la base de datos
connectDB().then(() => {
  // Definir las rutas
  app.use('/api/students', studentRoutes);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
