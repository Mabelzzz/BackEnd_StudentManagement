// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const studentRoutes = require('./routes/student.routes');

const app = express();

// Use CORS middleware
app.use(cors());

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Student routes
app.use('/api/students', studentRoutes);

module.exports = app;
