'use strict';

const express = require('express');
const router = express.Router();
const userModel = require('./user.controller');

//authentication
router.post('/authenticate',function (req,res) {
    userModel.authenticateUser(req.body).then(result=>{
        res.status(200).send(result);
        console.log('User validate function executed successfully!');
    }).catch(err=>{
        res.status(500).send(err);
        console.error(err);
    });
});

module.exports=router;
