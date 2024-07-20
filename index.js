const express = require('express');
const EnvLoader = require('./src/config/environment');
const { connectDB } = require('./src/config/db');
const studentRoutes = require('./src/routes/studentRoutes');

const envLoader = new EnvLoader(); // change env file path if needed

const app = express();
app.use(express.json()); // parse JSON request bodies

const PORT = envLoader.get('PORT') || 3000; // get the PORT environment variable

// connect to the database
connectDB().then(() => {
  // define the routes for the students API
  app.use('/api/students', studentRoutes);

  // start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
