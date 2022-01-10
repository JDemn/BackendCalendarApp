const { response } = require('express');
const { validationResult } = require('express-validator');

const CREATE_USER = ( req, res = response)=>{  //express.response es para recuperar la ayuda del tipado de node

    const { name, email, password } = req.body;

    // if(name.length<5){
    //     return res.status(400).json(
    //         {
    //             ok : false,
    //             msj : "El nombre de usuario debe ser mayor a 5"
    //         }
    //     )
    // }
    //validaciones con express validator > manejo de errores con express validator
    const errors = validationResult( req );
    if( !errors.isEmpty() ){
        return res.status( 400).json({
            ok : false,
            errors : errors.mapped()
        });
    } 


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
    const errors = validationResult( req );

    //si hay errores en la petición
    if(!errors.isEmpty()){
        return res.status( 400 ).json({
            ok: false,
            errors : errors.mapped(),
        });
    }

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