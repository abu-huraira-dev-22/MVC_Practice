const express = require('express')
const { getUsersController, updateUserController } = require('../controllers/UsersController')

const usersRoutes = express.Router()

usersRoutes.get('/',getUsersController)
// usersRoutes.post('/users',addUserController)
usersRoutes.put('/',updateUserController)
// usersRoutes.delete('/users',deleteUserController)

module.exports = usersRoutes