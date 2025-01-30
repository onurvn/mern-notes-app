const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/auth');

router.post('/create-account', userController.createAccount);
router.post('/login', userController.login);
router.get('/get-user', authenticateToken, userController.getUser);

module.exports = router;