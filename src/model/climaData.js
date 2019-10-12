const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const climaSchema = new Schema({
    clima: {
        type: Number
     },
    climaMax: {
        type: Number
    },
    climaMin: {
        type: Number
    },
    createdAt: {
       type: Date,
       default: Date.now,

    }, 
});

const clima = mongoose.model('Clima', climaSchema);

module.exports = clima;