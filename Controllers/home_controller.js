
// including express server,database,urldecoder and dbschema  
const db = require('../Config/dbsetting');
const express = require('express');
const app = express();
app.use(express.urlencoded());
const taskdets = require('../Models/dbschema');

// controller to render home ejs file
module.exports.home = function(req,res){

    taskdets.find({},function(err,taskdets){
        if(err){
            console.log("There is an error")
            }

        res.render('home-Views',{
            title:"ToDo List",
            taskdetail:taskdets
    });
});
}


// controller to add task details to database 
module.exports.addtask = function(req,res)
{

    if(req.query.taskname!=""&&req.query.taskdate!=""&&req.query.tasktype!=""){

taskdets.create({
    taskname:req.query.taskname,
    tasktype:req.query.taskdate,
    taskdate:req.query.tasktype
},function(err){
    if(err){console.log("There is an error",err); return;}
    
    return res.redirect('back');
    });
}
else{
    res.redirect('back');
}  
} 
var id; 

// controller for getting checkbox list(field) id from added task details  
module.exports.sendnumber = function(req,res){
     id = req.query.id;   
}

// controller to delete selected list item this receives list id and gets that field 
module.exports.removetask = function(req,res)
{    
    taskdets.findByIdAndDelete(id,function(err){

    
        if(err){
    console.log("error while deleting");
    return;
    }

    return res.redirect('back');
    })
 }