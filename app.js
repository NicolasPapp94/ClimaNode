const Lugar = require('./lugar/lugar');
const Clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async ( direccion )=>{
    try{
        const coords = await Lugar.getLugarLatLng(direccion)
        const temp = await Clima.getClima(coords.lat,coords.lng);
        return `La temperatura de ${direccion} es de ${temp} º.`;
    } catch(e){
        console.log(`No se pudo obtener la temperatura de ${direccion} .`);
    } 
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);