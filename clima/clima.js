const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d1b1ac177f7361d5413e8dafe0a1debc`);

    if (resp.data.cod === '400') {
        throw new Error('Las latitudes ingresadas no son válidas');
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}