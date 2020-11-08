var cities = require('../mock/city')
var weather = require('../mock/weather')

var weatherApis = {
    getCities: (req,res) => {
        res.send(cities)
    },
    getWeatherInformation:(req,res) => {
        let {cityId} = req.query
        res.send(weather[cityId])
    }
}
module.exports = weatherApis