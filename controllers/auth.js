const { response } = require('express');

const CREATE_USER = ( req, res = response)=>{  //express.response es para recuperar la ayuda del tipado de node
    res.json({
        ok : true,
        msj :'new',
    });
};

const USER_LOGIN = ( req, res = response )=>{
    res.json({
        ok : true,
        msg : 'login',
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