const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routes'); // Путь к вашим маршрутам
const PORT='8080'
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:4200', // Домен Angular додатку
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Дозволяє передавати креденції (cookies)
}));

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use('/', routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});