//---Require Modules----
var express = require('express');
var app = express();
var morgan = require('morgan');
var chalk = require('chalk');
var routes = require('./routes/');
var socketio = require('socket.io');


var swig = require('swig');
swig.setDefaults({ cache: false });

//---Set render engine---
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

app.use(morgan('tiny'));
app.use(express.static('public'));


app.use('/', routes);

var server = app.listen(1337, function(){
	console.log("Listening on port: 1337");});

var io = socketio.listen(server);