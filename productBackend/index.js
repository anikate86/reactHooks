const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');
var cors = require('cors')

mongoose.connect("mongodb+srv://zunito:GFmQ8yWXVow8bmwI@cluster0.d5yio.mongodb.net/testing?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

const app = express();

app.use(cors())
app.options('*',cors())
app.use(bodyParser.json())
app.use('/api',require('./routes/api'))
app.use((err,req,res,next)=>{
 res.status(401).send({error:err.message})
})

app.listen(process.env.port||4000,()=>{
    console.log("started,..")
})