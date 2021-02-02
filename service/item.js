const itemCollection = require('../model/item');
const logger = require('../utils/logger');

/**
 * itemCollectionCrud is an object
 * it has all the methods to perform functions on database for items
 */
const itemCollectionCrud = {
    // function to insert object in the database
    create: async function(itemObject){
        try{
            let findItem = await this.readByName(itemObject.name);
            if(findItem === 'No Item Exist'){
                let item = await itemCollection.create({...itemObject});
                logger.log({
                    level: 'debug',
                    message: `item created in database ${item}`
                });
                return item;
            }
            else if(findItem !== null){
                let item = await this.update(itemObject);
                return item;
            }
            else{
                logger.log({
                    level: 'error',
                    message: `errror in creating item object in dabase in service ${err}`
                });
                return null;
            }
        }
        catch(err){
            logger.log({
                level: 'error',
                message: `errror in creating item object in dabase in service ${err}`
            });
            return null;
        }
    },
    // function to get all the items in the database
    readAll: async () => {
        try{
            let item = await itemCollection.find();
            logger.log({
                level: 'debug',
                message: `item found allfrom database ${item}`
            });
            if(item.length !== 0){
                return item;
            }
            else{
                return 'No Item Exist';
            }  
        }
        catch(err){
            logger.log({
                level: 'error',
                message: `errror in finding all item object from dabase in service ${err}`
            });
            return null;
        }
    },
    // function to get the object by name from database
    readByName: async function(itemName){
        try{
            let item = await itemCollection.findOne({name: itemName});
            logger.log({
                level: 'debug',
                message: `item found by name from database ${item}`
            });
            if(item){
                return item;
            }
            else{
                return 'No Item Exist';
            }  
        }
        catch(err){
            logger.log({
                level: 'error',
                message: `errror in finding item object from dabase in service ${err}`
            });
            return null;
        }
    },
    // function to get the object by _id from database
    readById: async (itemId) => {
        try{
            let item = await itemCollection.findOne({_id: itemId});
            logger.log({
                level: 'debug',
                message: `item found by id from database ${item}`
            });
            if(item){
                return item;
            }
            else{
                return 'No Item Exist';
            }   
        }
        catch(err){
            logger.log({
                level: 'error',
                message: `errror in finding item object from dabase in service ${err}`
            });
            return null;
        }
    },
    //function to modify a item in the database
    update: async function(itemObject){
        try{
            let item = await itemCollection.updateOne({name: itemObject.name}, {...itemObject});
            logger.log({
                level: 'debug',
                message: `item updated from database ${item}`
            });
            return item;
        }
        catch(err){
            logger.log({
                level: 'error',
                message: `errror in finding item object from dabase in service ${err}`
            });
            return null;
        }
    },
    // function to delete item by name from database
    removeByName: async (itemName) => {
        try{
            let item = await itemCollection.deleteOne({name: itemName});
            logger.log({
                level: 'debug',
                message: `item deleted from database ${item}`
            });
            return item;
        }
        catch(err){
            logger.log({
                level: 'error',
                message: `errror in deleting item object from dabase in service ${err}`
            });
            return null;
        }
    },
    // function to remove all items from database
    removeAll: async () => {
        try{
            let item = await itemCollection.deleteMany();
            logger.log({
                level: 'debug',
                message: `item deleted all from database ${item}`
            });
            return item;
        }
        catch(err){
            logger.log({
                level: 'error',
                message: `errror in deleting item object all from dabase in service ${err}`
            });
            return null;
        }
    },
};

module.exports = itemCollectionCrud;