const express=require('express');
const routes=express.Router();

routes.use('/user',require('./controllers/user.controller'));

module.exports=routes;
