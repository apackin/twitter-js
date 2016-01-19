var express = require('express');
var app = express();
var chalk = require('chalk');

app.use(function(req, res, next){
	console.log(chalk.magenta(req.method), req.url, chalk.green(res.statusCode));
	next();
});

app.use("/special", function(req, res, next){
	console.log(cyan("You have reached a special area with a", req.method));
	next();
});

app.get("/", function(req, res){
	res.end("Hello and welcome to our Site!");
});

app.listen(1337, function(){console.log("Listening on port: 1337");});