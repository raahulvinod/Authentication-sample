const express = require('express');

const authConrtroller = require('../controllers/auth-controller');

const router = express.Router();



router.get('/signup', authConrtroller.getSignUp);

router.get('/login', authConrtroller.getLogin);

router.post('/signup', authConrtroller.signUp);

router.post('/login', authConrtroller.login);

router.post('/logout', authConrtroller.logout);

router.get('/401', authConrtroller.get401);


module.exports = router;
