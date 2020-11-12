// including mongoos module 
const mongoose = require('mongoose');

// making connect request with mongodb and localhost by adding special objects to parase url
mongoose.connect('mongodb://localhost/todo-app', { useNewUrlParser: true,useUnifiedTopology: true  });
console.log("passed");

// using connection between mongoose and mongodb 
const db = mongoose.connection;

// functions to perform post connection 
db.on('error',console.error.bind(console,"Connection Failed"));
db.once('open',function(){
    console.log("connected successfully");
});
