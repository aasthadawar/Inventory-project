const itemCrud = require('../service/item');
const logger = require('../utils/logger');

/**
 * itemControllerCrud is an object
 * it has all the methods to perform functions on results recieved from service file of items
 */
const itemControllerCrud = {
    // function to insert object in the service file
    create: async (req, res) => {
        try{
            let item = await itemCrud.create(req.body);
            if(item){
                if(item.nModified === 1){
                    logger.log({
                        level: 'debug',
                        message: 'item object update from controller while creating a new object'
                    });
                    res.send('Record Already exist and modified');
                }
                else if(item.nModified === 0){
                    logger.log({
                        level: 'debug',
                        message: 'item object already exist from controller while creating a new object'
                    });
                    res.send('The same record already exist');
                }
                else if(item._id){
                    logger.log({
                        level: 'debug',
                        message: 'item object send from controller while creating a new object'
                    });
                    res.json(item);
                }
            }
            else{
                logger.log({
                    level: 'error',
                    message: 'error in item object send from controller while creating a new object'
                });
                res.send('Please make sure all the fields(name, description,quantity,dom) are required in correct format. Date is required in the format either DD/MM/YYYY or DD-MM-YYYY');
            }
        }
        catch(err){
            logger.log({
                level: 'error',
                message: 'error in item creating in controller '
            });
            res.sendStatus(500);
        }
    },
    // function to get all the items from service file
    readAll: async (req, res) => {
        try{
            let item = await itemCrud.readAll();
            if(item){
                logger.log({
                    level: 'debug',
                    message: 'item object send from controller while searching object all'
                });
                res.send(item);
            }
            else{
                logger.log({
                    level: 'error',
                    message: 'error in finding item object by id from databse in controller '
                });
                res.sendStatus(503);
            }
        }
        catch(err){
            logger.log({
                level: 'error',
                message: 'error in finding item by id in controller '
            });
            res.sendStatus(500);
        }
    },
    // function to get the object by name from service file
    readById: async (req, res) => {
        try{
            let item = await itemCrud.readById(req.params.id);
            if(item){
                logger.log({
                    level: 'debug',
                    message: 'item object send from controller while searching object by id'
                });
                res.send(item);
            }
            else{
                logger.log({
                    level: 'error',
                    message: 'error in finding item object by id from databse in controller '
                });
                res.sendStatus(503);
            }
        }
        catch(err){
            logger.log({
                level: 'error',
                message: 'error in finding item by id in controller '
            });
            res.sendStatus(500);
        }
    },
    // function to get the object by _id from service file
    readByName: async (req, res) => {
        try{
            let item = await itemCrud.readByName(req.params.name);
            if(item){
                logger.log({
                    level: 'debug',
                    message: 'item object send from controller while searching object by name'
                });
                res.send(item);
            }
            else{
                logger.log({
                    level: 'error',
                    message: 'error in finding item object from databse in controller '
                });
                res.sendStatus(503);
            }
        }
        catch(err){
            logger.log({
                level: 'error',
                message: 'error in finding item by name in controller '
            });
            res.sendStatus(500);
        }
    },
    //function to modify a item from a service file
    update: async (req, res) => {
        try{
            let item = await itemCrud.update(req.body);
            if(item.nModified === 0){
                logger.log({
                    level: 'debug',
                    message: 'item object already updated from controller while searching object by name'
                });
                res.send('Already updated');
            }
            else if(item.nModified === 1){
                logger.log({
                    level: 'debug',
                    message: 'item object updated from controller while searching object by name'
                });
                res.send('Record updated');
            }
            else{
                logger.log({
                    level: 'error',
                    message: 'error in updating item object from databse in controller '
                });
                res.sendStatus(503);
            }
        }
        catch(err){
            logger.log({
                level: 'error',
                message: 'error in updating item in controller '
            });
            res.sendStatus(500);
        }
    },
    // function to delete item by name from service file
    removeByName: async (req, res) => {
        try{
            let item = await itemCrud.removeByName(req.params.name);
            if(item){
                if(item.deletedCount === 1){
                    res.send('Item Deleted');
                }
                else{
                    res.send('Item is not Deleted either item does not exist or there is some wrong information');
                }
            }
            else{
                logger.log({
                    level: 'error',
                    message: 'error in deleting item in controller from service file '
                });
                res.sendStatus(503);
            }
        }
        catch(err){
            logger.log({
                level: 'error',
                message: 'error in deleting item in controller '
            });
            res.sendStatus(500);
        }
    },
    //function to remove all items from service file
    removeAll: async (req, res) => {
        try{
            let item = await itemCrud.removeAll();
            if(item){
                if(item.deletedCount === 0){
                    res.send('Items is not Deleted either item does not exist or there is some wrong information');
                }
                else{
                    res.send('Items Deleted');
                }
            }
            else{
                logger.log({
                    level: 'error',
                    message: 'error in deleting all item in controller from service file '
                });
                res.sendStatus(503);
            }
        }
        catch(err){
            logger.log({
                level: 'error',
                message: 'error in deleting item in controller '
            });
            res.sendStatus(500);
        }
    },
};

module.exports = itemControllerCrud;