const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/buzz');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting mongodb"));

db.once('open',function(){
    console.log('connected to database:: mongodb');
});

module.exports = db;