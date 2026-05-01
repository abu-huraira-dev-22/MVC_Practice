const express = require('express')
const { signupController, loginController } = require('../controllers/AuthController')

const authRoutes = express.Router()

authRoutes.post('/signup',signupController)
authRoutes.post('/login',loginController)

<<<<<<< HEAD
// update code


=======
>>>>>>> 0795a31ba88e1a04def2dbbb73a2d48bd05775ce
module.exports = authRoutes