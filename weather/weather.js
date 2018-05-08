const request = require('request');


var getWeather = (lat,long, callback) => {

    request({
        url: `https://api.darksky.net/forecast/09810b2048988220919a39dfe0d36f10/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
           callback(undefined, {
               temperature: body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};



module.exports.getWeather = getWeather;