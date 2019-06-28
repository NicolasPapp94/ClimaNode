const axios = require('axios');
const getClima = async ( lat, long)=>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=00643bfc27255be8661d72ec273b2573&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}