const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('./controllers/registerController');
const {login} = require('./controllers/loginController');

router.post('/register', [
    body('name',"The name must be of minimum 6 characters length")
    .notEmpty()
    .escape()
    .trim()
    .isLength({ min: 6 }),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 6 }),
], register);


router.post('/login',[
    body('name',"Invalid username name")
    .notEmpty()
    .escape()
    .trim(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
],login);


module.exports = router;