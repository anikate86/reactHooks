const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    },
    launchDate:{
        type:Date,
        default:new Date()
    }
})

const Product = mongoose.model('product',ProductSchema);
module.exports = Product;