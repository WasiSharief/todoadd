const express = require('express');
const port = 8000;
const path = require('path');
const app = express();

app.use('/',require('./Routes/home')); 
app.set('view engine','ejs');
app.set('Views',path.join(__dirname,'Views'));

app.listen(port,function(err){
if(err)
{
    console.log("Error on starting server",err);
}

console.log("Running server on port:",port);

});