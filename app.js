const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
var cors = require('cors')
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello, From Notebook Server! ✌')
});



module.exports = app;