const express = require('express');
const cors = require('cors');


const todoRoutes = require('./routes/todoRoutes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();


app.use(express.json());

app.use(cors());

app.use('/todos', todoRoutes);

app.use(errorHandler);


module.exports = app;