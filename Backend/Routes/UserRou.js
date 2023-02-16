const express = require('express')
const routes = express.Router();
const { register, getAllUsers, login, test } = require('../Controllers/UserCon')
const verifyToken = require('./verifyToken')


routes.route('/register').post(register)
routes.route('/login').post(login)
routes.route('/test').get(verifyToken,test)
routes.route('/Users').get(getAllUsers)

module.exports = routes