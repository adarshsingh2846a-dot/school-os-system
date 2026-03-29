const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = 'mongodb://localhost:27017/school-os-system'; // Update with your MongoDB URI

// Middleware configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
gmongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// API route initialization
app.get('/', (req, res) => {
    res.send('Welcome to the School OS System API');
});

// TODO: Add other routes here

// Start the serverapp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});