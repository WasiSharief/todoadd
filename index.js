const db = require('./Config/dbsetting');
const express = require('express');
const port = 8000;
const path = require('path');
const app = express();

//adding route middleware
app.use('/',require('./Routes/homeRouter'));

//adding static middleware for css and js  
app.use(express.static('Assets'));

//added view engine setup
app.set('view engine','ejs');
app.set('Views',path.join(__dirname,'Views'));


//added server listener
app.listen(port,function(err){
if(err)
{
    console.log("Error on starting server",err);
}

console.log("Running server on port:",port);

});