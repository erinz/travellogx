'use strict';

var express = require('express');
var app = express();
app.use(express.json());
var plans = require('./controllers/plans');


app.get('/', function(req, res){
    res.send('hello world');
});

app.post('/add/plan', plans.save, function(req, res){
    res.send('\ndone\n\n');
});
app.get('/get/plans', plans.get);

var server = app.listen(4000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

