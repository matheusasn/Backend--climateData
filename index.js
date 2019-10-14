const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const server = express();

const url = 'mongodb+srv://user_admin:CfWEe82UIIHkQRGf@cluster0-tn1aa.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {
    reconnectTries: Number.MAX_VALUE, 
    useNewUrlParser: true,
    reconnectInterval: 500,
    poolSize: 5,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => {
    console.log("Erro na conexão com o BD: " + err);
});

mongoose.connection.on('connected', () => {
    console.log('Servidor rodando...');
})

//BodyParser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false}));

require('./src/controller/routerClima');
const climaRoute = require('./src/controller/clima')

let port = process.env.PORT || 9090;
server.listen(port);

server.use(climaRoute);

