const axios = require('axios');
const clima = require('../model/climaData');

// Cidade Campina grande
var url = 'https://api.openweathermap.org/data/2.5/weather?id=3403642&APPID=1e2f3297a7e2748e6f170e15ea3388af'; 

//função para recuperar todos os dados da api
function dadosClimaticos(){
  return axios.get(url)
}

const dados = dadosClimaticos();

//funcao para chamar a API acada 600000ns = 10m e salvar os dados no banco de dados mongoDB
funcao = () => {
  dados.then(function (data){
    
    const temp = data['data']['main']['temp'] - 273.15;
    const temp_max = data['data']['main']['temp_max'] - 273.15;
    const temp_min = data['data']['main']['temp_min'] - 273.15;

    clima.create({ clima: temp, climaMax: temp_max, climaMin: temp_min } );

    console.log(temp)
 
  }).catch(function(error, res){
    if(error) return res.send({error: 'ERRO!: '})
  });
}
setInterval(funcao, 600000);






















//Local onde faz a requisição do clima de campina grande pela API openweathermap, tempo de chamada definida para acada 10m.
// funcao = () => {
//   request(url, (error, res, body) => {
//     console.log('error:', error);
//     console.log('status:', res && res.statusCode); 
//     const parsedWeather = JSON.parse(body);
    
//     //const temperaturaMax = parsedWeather['main']['temp_max'];
//     //const temperaturaMin = parsedWeather['main']['temp_min'];
//     console.log('A temperatura atual em Campina Grande é ' + (parsedWeather.main.temp - 273.15));
   
//     parsedWeather.main.temp.save();
//   })
// }
// setInterval(funcao, 10000);
