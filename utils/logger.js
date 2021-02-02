// winston npm module to create logs for the project
const winston = require('winston');
const formatting = winston.format;

/**
 * error.log containing error logs in error level
 * debug.log containing debug logs in debug level
 */
const options = {
    level: 'debug',
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'debug.log', level: 'debug'}),
    ],
    format: formatting.combine(
        formatting.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        formatting.json()
    ),
};

// to create logger with desired options
const logger = winston.createLogger(options);

module.exports = logger;