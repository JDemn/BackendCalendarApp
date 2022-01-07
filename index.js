//configuración básica de express
const express = require('express');
require('dotenv').config();

//variables de entorno
const PORT = process.env.PORT;

//crear el servidor de express
const app = express();

//Directorio p[u]blico
app.use(express.static('public')); //args = path de directorio publico

//RUTAS de mi aplicación 
//enpoint para auth
app.use('/api/auth', require('./routes/auth'));

//escuchar peticiones
// const _PORT = process.env.PORT;
app.listen( PORT, ()=>{
    console.log(`Servidor corriendo en ${PORT}`);
})