const express = require('express');
const cors = require('cors');


const todoRoutes = require('./routes/todoRoutes');
const errorHandler = require('./middlewares/error.middleware');
const connectDB = require('./config/db');
const app = express();

connectDB();


app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Todo API is running "
  });
});

app.use('/todos', todoRoutes);

app.use(errorHandler);


module.exports = app;