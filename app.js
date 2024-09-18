var express = require('express');
//create new instance of express app
var path = require('path'); //= call module for node called path - no need to do npm install - included in node

var app = express(); 

//use fx -> to specify global settings for your app - call static fx in library 
// to specify directory for serving static files - eec 'public'
// instead of using this: app.use(express.static('public'));
//to be able to run from any directory- set path to the public folder relative from app.js
//join method as arguments passed - / node will take care of it
app.use(express.static(path.join(__dirname, 'public'))); //or dirname +'/public'

//path which website is used can be changed by putting: app.use('/website', express..) _> then search localhost:3010/website

app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404: Resource not found</h1>`);
})

app.listen(3010, () => {
    console.log('App listening on port 3010')
})