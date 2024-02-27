const express = require('express');
const { getUsersController, insertUserController, authenticateController } = require('../controllers/users.controller');
const router = express.Router();
router.get('/users', authenticateToken, getUsersController);
router.post('/user', insertUserValidation, insertUserController);
router.post('/authenticate', authenticateController);



module.exports = router;