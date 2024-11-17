const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/suraj');

const conn= mongoose.connection;

conn.once('open ',()=>{
    console.log("succesfully");

})
conn.on('error',()=>{
    console.log("error");
})
app.listen(3000);