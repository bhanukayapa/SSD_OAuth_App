const express=require('express');
const routes=express.Router();

routes.use('/users',require('./controllers/user.controller'));

module.exports=routes;
