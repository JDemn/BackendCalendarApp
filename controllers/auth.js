const { response } = require('express');
const Usuario = require('../model/Usuario'); //vamos usar el modelo de db
const bcrypt = require('bcryptjs');
const { off } = require('../model/Usuario');

const CREATE_USER = async (req, res = response) => {  //express.response es para recuperar la ayuda del tipado de node
    const { name, email, password } = req.body;
    try {
        
        let usuario = await Usuario.findOne({email}).exec();
        
        console.log(Usuario.findOne({email, name}));
        if(usuario){
            return res.status( 400 ).json({
                ok : false,
                msj : 'Este usuario ya existe en la base de datos'
            })
        } 
        usuario = new Usuario(req.body);
        //encriptat contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password,salt);

        usuario.save();
        
        //validaciones con express validator > manejo de errores con express validator. all in middlewares   
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name : usuario.name
        });
    } catch (error) {
        console.log(error);
        res.status( 500).json({
            ok : false,
            msj : 'Por favor comuniquese con el administrador'
        });
    }
};

const USER_LOGIN = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({email}).exec();
        if(!usuario){
            return res.status( 400 ).json({
                ok : false,
                msj : 'El usuario no existe con este email'
            });
        } 

        //comparar password del login con password que existe en la base de datos
        const validPass = bcrypt.compareSync( email, usuario.password ); //true / false
        if( !validPass ){
            res.status( 400 ).json({
                ok : false,
                msj : 'password incorrecto',
            })
        }
        //JWT
        res.json({
            ok: true,
            uid : usuario.id,
            name : usuario.name,
        })
        
    } catch ( error ) {
        console.log(error);
        res.status( 500).json({
            ok : false,
            msj : 'Por favor comuniquese con el administrador'
        });
    }
    //el manejo de errores lo hacemos con un custom middleware. file validar-campos.js
    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
};

const RENEW_TOKEN = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew token',
    });
};

module.exports = {
    CREATE_USER,
    USER_LOGIN,
    RENEW_TOKEN,
}