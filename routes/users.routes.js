const express = require('express');
const { getUsersController, insertUserController, authenticateController, getUserByIdController } = require('../controllers/users.controller');
const router = express.Router();

router.post('/user', insertUserController);
router.post('/authenticate', authenticateController);

router.get('/users', getUsersController);

router.get('/user/:id', getUserByIdController);




module.exports = router;