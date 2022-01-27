const jwt = require('jsonwebtoken');

//recibe lo que va recibir en el payload del jwt
const createJWT =(uid, name)=>{
    return new Promise((resolve, reject)=>{

        const payload = { uid, name };

        //generar JWT
        jwt.sign(payload,process.env.SECRET_JWT_SEED,{
            expiresIn : '2h'
        }, (error, token)=>{
            if( error ){
                console.log(error);
                reject( 'No se pudo generar el token' );
            }else {
                resolve( token );
            }
        })
    })
}


module.exports = {
    createJWT,
}