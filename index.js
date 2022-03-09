//const { request } = require("express");
//1. Import NPM Libraries from node_modules
const express = require('express');
const bodyParser = require ('body-parser');
const { append } = require('express/lib/response');

//2. Create app
const App = express();

//3. Use body parser in app 
App.use(bodyParser.urlencoded());
App.use(bodyParser.json());

//4. Create the route
const ActionsRoute = require('./Actions');
App.use('/api',ActionsRoute);

//5. Create virtual Server environment
const port= 1000;
App.listen(port,function(){
    console.log(`Server is working vie port ${port}`);
});