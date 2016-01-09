var mongoose = require('mongoose');
var Match = mongoose.model('Match');

buildMatch = function(body) {
   var buildParticipants = [];
   var buildTeams = [];

   for (var i = 0; i <body.participants.length; i++){
      var buildRunes = [];
      var buildMasteries = [];
      if(body.participants[i].masteries){
         for (var j = 0; j <body.participants[i].masteries.length; j++){
            buildMasteries.push({
               masteryId: body.participants[i].masteries[j].masteryId,
               rank: body.participants[i].masteries[j].rank
            });
         }
      }

      if(body.participants[i].runes){
         for (var k = 0; k <body.participants[i].runes.length; k++){
            buildRunes.push({
               runeId: body.participants[i].runes[k].runeId,
               rank: body.participants[i].runes[k].rank
            });
         }
      }

      buildParticipants.push({
         summonerId: body.participantIdentities[i].summonerId,
         teamId: body.participants[i].teamId,
         spell1Id: body.participants[i].spell1Id,
         spell2Id: body.participants[i].spell2Id,
         championId: body.participants[i].championId,
         highestAchievedSeasonTier: body.participants[i].highestAchievedSeasonTier,
         role: body.participants[i].timeline.role,
         lane: body.participants[i].timeline.lane,
         runes: buildRunes,
         masteries: buildMasteries,
         timeline: {
               creepsPerMinDeltas: {
               zeroToTen: body.participants[i].timeline.creepsPerMinDeltas.zeroToTen,
               tenToTwenty: body.participants[i].timeline.creepsPerMinDeltas.tenToTwenty
            },
               xpPerMinDeltas: {
               zeroToTen: body.participants[i].timeline.xpPerMinDeltas.zeroToTen,
               tenToTwenty: body.participants[i].timeline.xpPerMinDeltas.tenToTwenty
            },
               goldPerMinDeltas: {
               zeroToTen: body.participants[i].timeline.goldPerMinDeltas.zeroToTen,
               tenToTwenty: body.participants[i].timeline.goldPerMinDeltas.tenToTwenty
            },
               csDiffPerMinDeltas: {
               zeroToTen: body.participants[i].timeline.goldPerMinDeltas.zeroToTen,
               tenToTwenty: body.participants[i].timeline.goldPerMinDeltas.tenToTwenty
            },
               xpDiffPerMinDeltas: {
               zeroToTen: body.participants[i].timeline.goldPerMinDeltas.zeroToTen,
               tenToTwenty: body.participants[i].timeline.goldPerMinDeltas.tenToTwenty
            },
               damageTakenPerMinDeltas: {
               zeroToTen: body.participants[i].timeline.goldPerMinDeltas.zeroToTen,
               tenToTwenty: body.participants[i].timeline.goldPerMinDeltas.tenToTwenty
            },
            damageTakenDiffPerMinDeltas: {
            zeroToTen: body.participants[i].timeline.goldPerMinDeltas.zeroToTen,
            tenToTwenty: body.participants[i].timeline.goldPerMinDeltas.tenToTwenty
            }
         },
         stats: {
            winner: body.participants[i].stats.winner,
            champLevel: body.participants[i].stats.champLevel,
            item0: body.participants[i].stats.item0,
            item1: body.participants[i].stats.item1,
            item2: body.participants[i].stats.item2,
            item3: body.participants[i].stats.item3,
            item4: body.participants[i].stats.item4,
            item5: body.participants[i].stats.item5,
            item6: body.participants[i].stats.item6,
            kills: body.participants[i].stats.kills,
            doubleKills: body.participants[i].stats.doubleKills,
            tripleKills: body.participants[i].stats.tripleKills,
            quadraKills: body.participants[i].stats.quadraKills,
            pentaKills: body.participants[i].stats.pentaKills,
            unrealKills: body.participants[i].stats.unrealKills,
            largestKillingSpree: body.participants[i].stats.largestKillingSpree,
            deaths: body.participants[i].stats.deaths,
            assists: body.participants[i].stats.assists,
            totalDamageDealt: body.participants[i].stats.totalDamageDealt,
            totalDamageDealtToChampions: body.participants[i].stats.totalDamageDealtToChampions,
            totalDamageTaken: body.participants[i].stats.totalDamageTaken,
            largestCriticalStrike: body.participants[i].stats.largestCriticalStrike,
            totalHeal: body.participants[i].stats.totalHeal,
            minionsKilled: body.participants[i].stats.minionsKilled,
            neutralMinionsKilled: body.participants[i].stats.neutralMinionsKilled,
            neutralMinionsKilledTeamJungle: body.participants[i].stats.neutralMinionsKilledTeamJungle,
            neutralMinionsKilledEnemyJungle: body.participants[i].stats.neutralMinionsKilledEnemyJungle,
            goldEarned: body.participants[i].stats.goldEarned,
            goldSpent: body.participants[i].stats.goldSpent,
            combatPlayerScore: body.participants[i].stats.combatPlayerScore,
            objectivePlayerScore: body.participants[i].stats.objectivePlayerScore,
            totalPlayerScore: body.participants[i].stats.totalPlayerScore,
            totalScoreRank: body.participants[i].stats.totalScoreRank,
            magicDamageDealtToChampions: body.participants[i].stats.magicDamageDealtToChampions,
            physicalDamageDealtToChampions: body.participants[i].stats.physicalDamageDealtToChampions,
            trueDamageDealtToChampions: body.participants[i].stats.trueDamageDealtToChampions,
            visionWardsBoughtInGame: body.participants[i].stats.visionWardsBoughtInGame,
            sightWardsBoughtInGame: body.participants[i].stats.sightWardsBoughtInGame,
            magicDamageDealt: body.participants[i].stats.magicDamageDealt,
            physicalDamageDealt: body.participants[i].stats.physicalDamageDealt,
            trueDamageDealt: body.participants[i].stats.trueDamageDealt,
            magicDamageTaken: body.participants[i].stats.magicDamageTaken,
            physicalDamageTaken: body.participants[i].stats.physicalDamageTaken,
            trueDamageTaken: body.participants[i].stats.trueDamageTaken,
            firstBloodKill: body.participants[i].stats.firstBloodKill,
            firstBloodAssist: body.participants[i].stats.firstBloodAssist,
            firstTowerKill: body.participants[i].stats.firstTowerKill,
            firstTowerAssist: body.participants[i].stats.firstTowerAssist,
            firstInhibitorKill: body.participants[i].stats.firstInhibitorKill,
            firstInhibitorAssist: body.participants[i].stats.firstInhibitorAssist,
            inhibitorKills: body.participants[i].stats.inhibitorKills,
            towerKills: body.participants[i].stats.towerKills,
            wardsPlaced: body.participants[i].stats.wardsPlaced,
            wardsKilled: body.participants[i].stats.wardsKilled,
            largestMultiKill: body.participants[i].stats.largestMultiKill,
            killingSprees: body.participants[i].stats.killingSprees,
            totalUnitsHealed: body.participants[i].stats.totalUnitsHealed,
            totalTimeCrowdControlDealt: body.participants[i].stats.totalTimeCrowdControlDealt
         }
      });
   }

   for (var i = 0; i <body.teams.length; i++){
      var buildBans = [];

      if (body.teams[i].bans){
         for (var j = 0; j <body.teams[i].bans.length; j++){
            buildBans.push({
               championId: body.teams[i].bans[j].championId,
               pickTurn: body.teams[i].bans[j].pickTurn
            })
         }
      }

      buildTeams.push({
         teamId: body.teams[i].teamId,
         winner: body.teams[i].winner,
         firstBlood: body.teams[i].firstBlood,
         firstTower: body.teams[i].firstTower,
         firstInhibitor: body.teams[i].firstInhibitor,
         firstBaron: body.teams[i].firstBaron,
         firstDragon: body.teams[i].firstDragon,
         towerKills: body.teams[i].towerKills,
         inhibitorKills: body.teams[i].inhibitorKills,
         baronKills: body.teams[i].baronKills,
         dragonKills: body.teams[i].dragonKills,
         vilemawKills: body.teams[i].vilemawKills,
         dominionVictoryScore: body.teams[i].dominionVictoryScore,
         bans: buildBans
      });
   }

   var match = new Match();

   match._id = {
   matchID: body.matchId,
   region: body.region
   };
   match.matchMode = body.matchMode;
   match.matchType = body.matchType;
   match.matchCreation = new Date(body.matchCreation);
   match.matchDuration = body.matchDuration;
   match.queueType = body.queueType;
   match.mapId = body.mapId;
   match.season = body.season;
   match.matchVersion = body.matchVersion;
   match.participants = buildParticipants;
   match.teams = buildTeams;



   return match;
}

module.exports = buildMatch;
