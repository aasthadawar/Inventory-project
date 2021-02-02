const mongoose = require('mongoose');
const DBPATH = require('../utils/config').DBPATH;
const logger = require('../utils/logger');

// to create a mongoose connection with required mongoDB path
mongoose.connect(DBPATH, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected', () => {
    logger.log({
        level: 'debug',
        message: 'mongoose connected'
    });
});

mongoose.connection.on('error', () => {
    logger.log({
        level: 'debug',
        message: 'error in mongoose'
    });
});

module.exports = mongoose;