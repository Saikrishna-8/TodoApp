const mongoose = require('mongoose');

const todocats = require('../models/TodoCategory');

//Connect to the MongoDB server using mongoose.connect():

mongoose.connect('mongodb://localhost/TodoListApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

const db = mongoose.connection;

//const db = mongoose.createConnection('mongodb://localhost:27017/TodoListApp', { useNewUrlParser: true, useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
    console.log('Connected to MongoDB database!');

    // const cats = await todocats.find({});
    // console.log('cats in config ==> ', cats);
});

module.exports = db;



