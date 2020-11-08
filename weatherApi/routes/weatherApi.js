var express = require('express');
var router = express.Router();
let {
    getCities,
    getWeatherInformation
} = require('../apis/weather')

/* GET users listing. */
router.get('/getCities', (req, res, next) => {
    getCities(req, res)
});

router.get('/getWeatherInformation', (req, res, next) => {
    getWeatherInformation(req, res)
});


module.exports = router;