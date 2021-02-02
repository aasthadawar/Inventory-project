const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const itemRouter = require('./routes/item');
const logger = require('./utils/logger');

app.use(bodyParser.json());

app.use('/item', itemRouter);

app.listen(process.env.PORT || 1234, () => {
    logger.log({
        level: 'debug',
        message: 'server start'
    });
});