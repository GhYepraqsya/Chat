const express = require('express');
const mongoose = require('mongoose');

const app = express();

const connectDB = async () => {
    mongoose.connect('mongodb://localhost:27017/myDB');
    const chatSchema = mongoose.Schema({});
    
}

// app.get('/', (req, res) => {
//     res.send("app is working")
// });

app.listen(5000)

