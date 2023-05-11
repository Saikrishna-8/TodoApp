const mongoose = require('mongoose');

//Connect to the MongoDB server using mongoose.connect():

mongoose.connect('mongodb://localhost/TodoListApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB database!');
});


module.exports = db;


