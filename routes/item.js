/**
 * this file contains all the routes for item required for REST API (get, post, put, delete)
 */
const express = require('express');
const itemRoute = express.Router();
const itemController = require('../controller/item');

itemRoute.post('/', itemController.create);

itemRoute.get('/:name', itemController.readByName);

itemRoute.get('/:id', itemController.readByName);

itemRoute.get('/', itemController.readAll);

itemRoute.put('/:id', itemController.update);

itemRoute.delete('/:name', itemController.removeByName);

itemRoute.delete('/', itemController.removeAll);

module.exports = itemRoute;