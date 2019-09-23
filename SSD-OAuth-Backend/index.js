const express = require('express');
const cors = require('cors');
var bodyParser = require ('body-parser');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use('/',routes);

var port = process.env.PORT || 7070;

app.listen(port,function(){
    console.log("App is listening on "+port);
});