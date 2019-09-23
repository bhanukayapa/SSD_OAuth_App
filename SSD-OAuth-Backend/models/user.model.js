'use strict';

//authentication
exports.authenticateUser=function (body) {
    return new Promise(function (res,rej) {

        if(body){
            res({
                authenticated : true
            })
        }else{
            res({
                authenticated : false
            });
        }
    })
};
