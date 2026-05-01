const express = require('express')
const { signupController, loginController } = require('../controllers/AuthController')

const authRoutes = express.Router()

authRoutes.post('/signup',signupController)
authRoutes.post('/login',loginController)

module.exports = authRoutes