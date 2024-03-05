const express = require('express');
const { getCountriesController, searchCountriesController, getCountyByIdController, getCountryByNameController } = require('../controllers/countries.controller');
const router = express.Router();

router.get('/countries', getCountriesController);
router.get('/country/:id', getCountyByIdController);

router.get('/country-name/:name', getCountryByNameController);

router.get('/search-country/:keyword', searchCountriesController);




module.exports = router;