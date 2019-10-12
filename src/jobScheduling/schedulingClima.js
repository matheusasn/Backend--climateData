const schedule = require('node-schedule');



climaData = schedule.scheduleJob('1 * * * *', () => {
    console.log('112');
    
});

module.exports = climaData;