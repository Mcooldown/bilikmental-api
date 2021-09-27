const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth');

router.post('/add-user', authController.addUser);
router.post('/check-email', authController.checkEmail);
router.post('/login', authController.login);

module.exports = router;