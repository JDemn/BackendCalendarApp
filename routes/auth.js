/*
    Rutas de usuarios /Auth
    host + /api/auth
*/
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
//OUR IMPORTS of controllers ()=>{}
const { CREATE_USER, USER_LOGIN, RENEW_TOKEN } = require('../controllers/auth');

router.post(
    '/new',
    [  //middlewares
        check('name', 'Es necesario el parámetro de nombre de usuario').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser mayor a 6 caracteres').isLength({ min : 6 }),
    ],
    CREATE_USER
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser mayor a 6 caracteres').isLength({ min : 6 }),
    ],
    USER_LOGIN
);

router.get('/renew', RENEW_TOKEN );


module.exports = router;