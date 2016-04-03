var express = require('express');
var request = require('request');
var router = express.Router();
var keys = require("../keys");
var regions = require("../data/regions");
var mongoose = require('mongoose');
var Match = mongoose.model('Match');
var buildMatch = require('../models/convertData.js');
var na =
{"value":"na",
"title":"North America",
"startID": 2063559734
}

key = 0;

setInterval( function(){
   for(var i = 0; i< regions.length; i++) {
   var method = "https://" + regions[i].value + ".api.pvp.net/api/lol/"+ regions[i].value + "/v2.2/match/" + regions[i].start + "?api_key=";
   request.get(method + keys[key], function (error, response, body) {
      if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
         if (body.matchType == "MATCHED_GAME") {

            match = buildMatch(body);

            match.save(function(err, match) {
              if (err){
                //return res.send(500, err);
              }

            });
         }
      }
   });

  regions[i].start--;
  console.log(regions[i].value + ": " + regions[i].start);
}
console.log(" ");
key++;
key = key % 3;
}, 500);

setInterval( function(){
   var method = "https://" + na.value + ".api.pvp.net/api/lol/"+ na.value + "/v2.2/match/" + na.startID + "?api_key=";
      request.get(method + keys[key], function (error, response, body) {
      if (!error && response.statusCode == 200) {
         body = JSON.parse(body);
         if (body.matchType == "MATCHED_GAME") {

            match = buildMatch(body);

            match.save(function(err, match) {
              if (err){
                //return res.send(500, err);
              }

            });
         }
      }
   });

na.startID--;
console.log("NA: " + na.startID);
key = key % 3;
}, 700);

module.exports = router;
