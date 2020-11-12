const mongoose = require('mongoose');

// creating fields schema using mongoose 
const tasksschema = new mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    tasktype:{
        type:String,
        required:true
    },
    taskdate:{
        type:String,
        required:true
    }
});
// combining documnents  with schema model 
const taskdetails = mongoose.model('taskdetails',tasksschema);

// exporting model of database which is documents and schema
module.exports = taskdetails;