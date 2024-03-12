const express = require('express');
const { getUsersController, insertUserController, authenticateController, getUserByIdController, updateUserController } = require('../controllers/users.controller');
const { insertUserValidation, updateUserValidation } = require('../validation/user-validator');
const router = express.Router();

router.post('/user', insertUserValidation, insertUserController);
router.post('/authenticate', authenticateController);

router.put('/user', updateUserValidation, updateUserController);

router.get('/users', getUsersController);

router.get('/user/:id', getUserByIdController);




module.exports = router;