const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const todos = require("./data/todo")
dotenv.config();
var cors = require('cors')
app.use(cors());


// Connect to Database
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.62sfwlg.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url,{
})
.then(()=> console.log('Database connection established'))
.catch(err => console.log(err));



// Default Get Route
app.get('/', (req, res) => {
  res.send('Hello, From Notebook Server! ✌✔')
});

// Get All Route
app.get('/api/todo',(req,res)=>{
  res.json(todos);
})

// Get Single Todo
app.get('/api/todo/:id', (req,res)=>{
  const todo = todos.find((n)=> n._id === req.params.id);
  res.send(todo)
  console.log(todo);
})


module.exports = app;