var express = require('express');
var request = require('request');
var router = express.Router();
var keys = require("../keys");
var regions = require("../data/regions");
var mongoose = require('mongoose');
var Match = mongoose.model('Match');
var ny =
{"value":"na",
"title":"North America",
"startID": 2014502562
}

key = 0;

setInterval( function(){
  for(var i = 0; i<regions.length; i++) {
  var method = "https://" + regions[i].value + ".api.pvp.net/api/lol/"+ regions[i].value + "/v2.2/match/" + regions[i].startID + "?api_key=";
  request.get(method + keys[key], function (error, response, body) {
     if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      var championsPlayed = [];
      for (var j = 0; j <body.participants.length;j++){
         championsPlayed.push({
          championId: body.participants[j].championId,
          winner: body.participants[j].stats.winner,
          role: body.participants[j].timeline.role,
          lane: body.participants[j].timeline.lane,
          KDR: (body.participants[j].stats.kills) / body.participants[j].stats.deaths,
          kills: body.participants[j].stats.kills,
          deaths: body.participants[j].stats.deaths,
          assists: body.participants[j].stats.assists
        });
      }

      var match = new Match();
      match.matchID = body.matchId,
      match.region = body.region,
      match.matchCreation = new Date(body.matchCreation),
      match.matchMode = body.matchMode,
      match.matchVersion = body.matchVersion,
      match.queueType = body.queueType,
      match.season = body.season,
      match.champions = championsPlayed

      match.save(function(err, match) {
        if (err){
          //return res.send(500, err);
        }

      });
     }
  });

  regions[i].startID--;
  console.log(regions[i].startID);
}
key++;
key = key % 3;
console.log(key);
}, 500);

setInterval( function(){
  var method = "https://" + ny.value + ".api.pvp.net/api/lol/"+ ny.value + "/v2.2/match/" + ny.startID + "?api_key=";
  request.get(method + keys[key], function (error, response, body) {
     if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      var championsPlayed = [];
      for (var j = 0; j <body.participants.length;j++){
         championsPlayed.push({
          championId: body.participants[j].championId,
          winner: body.participants[j].stats.winner,
          role: body.participants[j].timeline.role,
          lane: body.participants[j].timeline.lane,
          KDR: (body.participants[j].stats.kills) / body.participants[j].stats.deaths,
          kills: body.participants[j].stats.kills,
          deaths: body.participants[j].stats.deaths,
          assists: body.participants[j].stats.assists
        });
      }

      var match = new Match();
      match.matchID = body.matchId,
      match.region = body.region,
      match.matchCreation = new Date(body.matchCreation),
      match.matchMode = body.matchMode,
      match.matchVersion = body.matchVersion,
      match.queueType = body.queueType,
      match.season = body.season,
      match.champions = championsPlayed

      match.save(function(err, match) {
        if (err){
          //return res.send(500, err);
        }

      });
     }
  });

ny.startID--;
console.log(ny.startID);
key = key % 3;
}, 700);

module.exports = router;
