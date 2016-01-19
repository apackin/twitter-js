//---Require Modules----
var express = require('express');
var app = express();

var swig = require('swig');
swig.setDefaults({ cache: false });

var chalk = require('chalk');

//---Set render engine---
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//--- ---
app.use(function(req, res, next){
	console.log(chalk.magenta(req.method), req.url, chalk.green(res.statusCode));
	next();
});

app.use("/special", function(req, res, next){
	console.log(cyan("You have reached a special area with a", req.method));
	next();
});

app.get("/", function(req, res){
	res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(1337, function(){console.log("Listening on port: 1337");});