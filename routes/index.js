//---Require Modules---
var router = require('express').Router();

var tweetBank = require('../tweetBank');

//---Routes---
router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;