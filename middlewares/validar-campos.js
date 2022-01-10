//Las validaciones de las peticiones las hacemos en los middlewares
const { response } = require('express');
const { validationResult } = require('express-validator');
const validarCampos = (req, res = response , next)=>{

    const errors = validationResult( req );
    //si hay errores en la petición
    if(!errors.isEmpty()){
        return res.status( 400 ).json({
            ok: false,
            errors : errors.mapped(),
        });
    }

    //el next se debe de llamar de manera condicional, lo que hace es pasar al siguiente middleware en auth.js
    next();
}

module.exports = {
    validarCampos,
}