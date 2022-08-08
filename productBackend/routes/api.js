const bodyParser = require("body-parser");
const express = require("express");
const Product = require('../model/product');

const router = express.Router();

const app = express()
router.get('/product',(req,res,next)=>{
    Product.find().then(function(product){
        res.send(product);
}).catch(next);
})


router.post('/product',(req,res,next)=>{
    console.log('worked');
    Product.create(req.body).then(function(product){
        res.send(product);
    }).catch(next);
})

router.get('/product/:id',(req,res,next)=>{
    Product.findById({_id: req.params.id}).then(function(product){
            res.send(product);
    }).catch(next);
})
    
router.put('/product/:id',(req,res,next)=>{
    Product.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Product.findOne({_id: req.params.id}).then(function(product){
            res.send(product);
        });
    }).catch(next);
})
       
router.delete('/product/:id',(req,res,next)=>{
    console.log('deleted')
    Product.findByIdAndRemove({_id: req.params.id}).then(function(product){
        res.send(product);
    }).catch(next);
})

module.exports = router;

    