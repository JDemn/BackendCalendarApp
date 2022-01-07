const { response, request } = require('express');

const CREATE_USER = ( req, res = response)=>{  //express.response es para recuperar la ayuda del tipado de node

    const { name, email, password } = req.body;

    if(name.length<5){
        return res.status(400).json(
            {
                ok : false,
                msj : "El nombre de usuario debe ser mayor a 5"
            }
        )
    }

    res.json({
        ok : true,
        msj :'new',
        name,
        email,
        password
    });
};

const USER_LOGIN = ( req, res = response )=>{
    const { email, password } = req.body;
    res.json({
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