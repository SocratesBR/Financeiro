const express = require('express');
const app = express();
app.listen(666,()=> console.log("Hades"));
app.get('/',(req,res)=>{res.send("bem vindo")})
app.get('/vaca',(req,res)=>{res.send("muuu")})
app.get('/cachorro',(req,res)=>{res.send("au au")})
const dados = ["Gato"];
app.get('/j',(req,res)=>{res.json({dados})})