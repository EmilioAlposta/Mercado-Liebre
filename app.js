const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/Register', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/Login', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.use(express.static(path.resolve(__dirname, './public')));


app.listen(3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});