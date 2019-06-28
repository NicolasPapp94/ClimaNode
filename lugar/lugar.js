const axios = require('axios');
const getLugarLatLng = async ( lugar )=>{
    const encodedUrl = encodeURI(lugar);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': '2b124b59b0msh7f55a719766bb80p1589cdjsnca85122944fc'}
    });

    const resp = await instance.get()
    
    if (resp.data.Results.length ===0){
        throw new Error(`No hay resultados para ${direccion}`);
    } 

    const data = resp.data.Results[0];
    const direccion  = data.name;
    const lat  = data.lat;
    const lng  = data.lon;

    return{
        direccion,
        lat,
        lng
    }

}


module.exports =  {
    getLugarLatLng
}