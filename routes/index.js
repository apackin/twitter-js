//---Require Modules---
var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//---Routes---
module.exports = function (io) {
router.post("/tweets", urlencodedParser, function(req, res, next){
	var body = req.body;
	tweetBank.add(body.name, body.text);
	io.sockets.emit('new_tweet', tweetBank.find({text:body.text}));
	res.redirect('/');
});

router.get('/users/:name', function(req, res){
	var name = req.params.name;
	var list = tweetBank.find({name:name});
	res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: list, name: name, showForm: true} );
});

router.get('/tweets/:id', function(req, res){
	var id = Number(req.params.id);
	var list = tweetBank.find({id:id});
	res.render('index', { title: 'Twitter.js - Posts by '+id, tweets: list } );
});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true});
});

  return router;
};