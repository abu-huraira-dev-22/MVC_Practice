const express = require('express')
const { signupController, loginController } = require('../controllers/AuthController')

const authRoutes = express.Router()

authRoutes.post('/signup',signupController)
authRoutes.post('/signup',loginController)

module.exports = authRoutes