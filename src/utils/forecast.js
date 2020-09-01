const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=afda15b1fd5bce59836d28ce631a8d3e&query=${latitude},${longitude}`;

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to fecth data', undefined)
        } else if (!body.current) {
            callback('Error with fetching weather data, please try again', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degrees out. There is a ${body.current.precip} % chance of rain.`)
        }
    })
}

module.exports = forecast;

