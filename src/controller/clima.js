 
const express = require('express');
const climaData = require('../model/climaData');
const router = express.Router();

//Rota onde o front ira passar os dados da API onde irei salvar esses dados no mongoDB.
router.get('/dadosClimaticos', async (req, res) =>{
    const { clima } = req.body;

    if (clima == null || clima <= 0) return res.json({error: 'Dados invalidos'});
    
    climaData.create(req.body, (err, data) =>{
        if(err) res.send({error: 'Erro ao salvar dados'});
        return res.json(data)
    })

});