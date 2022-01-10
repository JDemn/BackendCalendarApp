/*
    Rutas de usuarios /Auth
    host + /api/auth
*/
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
//OUR IMPORTS of controllers ()=>{}
const { CREATE_USER, USER_LOGIN, RENEW_TOKEN } = require('../controllers/auth');


router.post(
    '/new',
    [  //middlewares
        check('name', 'Es necesario el parámetro de nombre de usuario').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser mayor a 6 caracteres').isLength({ min : 6 }),
        validarCampos,
    ],
    CREATE_USER
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser mayor a 6 caracteres').isLength({ min : 6 }),
        validarCampos,
    ],
    USER_LOGIN
);

router.get('/renew', RENEW_TOKEN );


module.exports = router;