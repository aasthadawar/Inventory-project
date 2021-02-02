const connection = require('../database/connection');
const Schema = connection.Schema;

// the details of item
const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name Required'],
        unique: [true, 'name must be unique']
    },
    description: {
        type: String,
        required: [true, 'description Required'],
    },
    quantity: {
        type: Number,
        required: [true, 'quantity Required'],
    },
    dom: {
        type: String,
        required: true,
        validate: {
            validator: function(v){
                return (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(v));
            },
            message: () => `Please enter the correct date format DD/MM/YYYY or DD-MM-YYYY`
        }
    }
});

// items is the collection name
const itemModel = connection.model('items', itemSchema);

module.exports = itemModel;