/*
    Rutas de usuarios /Auth
    host + /api/auth
*/
const express = require('express');

const router = express.Router();
//OUR IMPORTS
const { CREATE_USER, USER_LOGIN, RENEW_TOKEN } = require('../controllers/auth');

router.post('/new', CREATE_USER);

router.post('/', USER_LOGIN);

router.get('/renew', RENEW_TOKEN );


module.exports = router;