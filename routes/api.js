 var express = require('express');
var request = require('request');
var router = express.Router();
var keys = require("../keys");
var regions = require("../data/regions");
console.log(regions[0].value);

router.get('/matches/:id', function(req, res, next) {
    //1989504754
    for(var i = 0; i<regions.length; i++) {
      var match = {};
      //Keeps running even if it found a match fix later
      var method = "https://na.api.pvp.net/api/lol/"+ regions[i].value + "/v2.2/match/" + req.param('id') + "?api_key=";
      request.get(method + keys[1], function (error, response, body) {
         if (!error && response.statusCode == 200) {
          body = JSON.parse(body);
          var championsPlayed = [];
          for (var j = 0; j <body.participants.length;j++){
             championsPlayed.push({
              champID: body.participants[j].championId,
              winner: body.participants[j].stats.winner,
              role: body.participants[j].timeline.role,
              lane: body.participants[j].timeline.lane,
              KDR: (body.participants[j].stats.kills) / body.participants[j].stats.deaths
            });
          }
          match = {
            matchID: body.matchId,
            region: body.region,
            date: new Date(body.matchCreation),
            gameMode: body.matchMode,
            queueType: body.queueType,
            season: body.season,
            champions: championsPlayed
          };
            
           
            return res.send(match);
         }  
      });
    }
});

module.exports = router;