var express = require('express');
var app = express();

app.get("/", function(request, response){
	response.end("Hello and welcome to our Site!");
});

app.listen(1337, function(){console.log("Listening on port: 1337");});