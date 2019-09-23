'use strict';

const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');

//authentication
router.post('/authenticate',function (req,res) {
    userModel.authenticateUser().then(result=>{
        res.status(200).send(result);
        console.log('User validate function executed successfully!');
    }).catch(err=>{
        res.send(err);
        console.error(err);
    });
});

module.exports=router;
