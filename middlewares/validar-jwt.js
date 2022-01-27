
const { response } = require('express');
const { jwt } = require('jsonwebtoken');

const validateJWT = ( req, res = response, next )=>{

    //x-token header   - como voy a esperar mi token y donde del body en postman
    const token = req.header('x-token');

    if( !token ){
        res.status(401).json({
            ok: false,
            msj : 'No hay token en la petición'
        });

    };

    //verificación del token
    try{
        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED,
        );
        console.log(payload);
    }catch( error ){
        return res.status(401).json({
            ok : false,
            msj : 'token no válido'
        });
    }
    next();
}


module.exports = {
    validateJWT,
}