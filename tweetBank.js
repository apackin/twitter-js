//---Require Module---
var _ = require('lodash');

var data = [ { name: 'Nimit Hashington',
    text: 'Fullstack Academy is awesome! The instructors are just so breathtaking. #fullstacklove #codedreams',
    id: 0 },
  { name: 'Nimit Hashington',
    text: 'Fullstack Academy is awesome! The instructors are just so amazing. #fullstacklove #codedreams',
    id: 1 },
  { name: 'Nimit Hashington',
    text: 'Fullstack Academy is mindblowing! The instructors are just so wonderful. #fullstacklove #codedreams',
    id: 2 },
  { name: 'Nimit McQueue',
    text: 'Fullstack Academy is wonderful! The instructors are just so cool. #fullstacklove #codedreams',
    id: 3 },
  { name: 'Ayana Dunderproto',
    text: 'Fullstack Academy is breathtaking! The instructors are just so sweet. #fullstacklove #codedreams',
    id: 4 },
  { name: 'Ayana Claujure',
    text: 'Fullstack Academy is sweet! The instructors are just so funny. #fullstacklove #codedreams',
    id: 5 },
  { name: 'Nimit Hashington',
    text: 'Fullstack Academy is mindblowing! The instructors are just so breathtaking. #fullstacklove #codedreams',
    id: 6 },
  { name: 'Dave Stackson',
    text: 'Fullstack Academy is wonderful! The instructors are just so mindblowing. #fullstacklove #codedreams',
    id: 7 },
  { name: 'Omri OLogn',
    text: 'Fullstack Academy is mindblowing! The instructors are just so funny. #fullstacklove #codedreams',
    id: 8 },
  { name: 'Gabriel OLogn',
    text: 'Fullstack Academy is awesome! The instructors are just so wonderful. #fullstacklove #codedreams',
    id: 9 } ];

function add (name, text) {
  var id = data.length;
  data.push({ name: name, text: text, id:id });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.filter(data, properties);
}

module.exports = { add: add, list: list, find: find };

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};


for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet());
}

console.log(list());

