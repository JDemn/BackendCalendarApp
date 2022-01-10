const { response } = require('express');


const CREATE_USER = ( req, res = response)=>{  //express.response es para recuperar la ayuda del tipado de node

    const { name, email, password } = req.body;
    //validaciones con express validator > manejo de errores con express validator. all in middlewares   
    res.status( 201 ).json({
        ok : true,
        msj :'new',
        name,
        email,
        password
    });
};

const USER_LOGIN = ( req, res = response )=>{
    const { email, password } = req.body;  
    //el manejo de errores lo hacemos con un custom middleware. file validar-campos.js
    res.status( 201 ).json({
        ok : true,
        msg : 'login',
        email,
        password,
    });
};

const RENEW_TOKEN = ( req, res = response  )=>{
    res.json({
        ok : true,
        msg : 'renew token',
    });
};

module.exports = {
    CREATE_USER,
    USER_LOGIN,
    RENEW_TOKEN,
}