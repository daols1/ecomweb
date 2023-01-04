const express = require('express')
const {getUser} = require('./../controller/userController')
const {register, refreshToken, login, logout, protect, role } = require('./../controller/authController')
const router = express.Router();

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/refresh_token', refreshToken)
router.get('/infor',protect, getUser)


module.exports = router;