const express = require('express');
const { getBMIController } = require('../controllers/bmi.controller');
const router = express.Router();

router.get('/bmi', getBMIController);





module.exports = router;