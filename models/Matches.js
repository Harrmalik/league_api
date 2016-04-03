var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matchSchema = new Schema({
   _id: {
     matchID: { type: String, default: "NULL"},
     region: { type: String, default: "NULL"}
  },
   matchMode: { type: String, default: "NULL"},
   matchType: { type: String, default: "NULL"},
   matchCreation: Date,
   matchDuration: { type: Number, default: 0},
   queueType: { type: String, default: "NULL"},
   mapId: { type: Number, default: 0},
   season: { type: String, default: "NULL"},
   matchVersion: { type: String, default: "NULL"},
   participants: [{
      summonerId: { type: Number, default: 0},
      teamId: { type: Number, default: 0},
      spell1Id: { type: Number, default: 0},
      spell2Id: { type: Number, default: 0},
      championId: { type: Number, default: 0},
      highestAchievedSeasonTier: { type: String, default: "NULL"},
      role: { type: String, default: "NULL"},
      lane: { type: String, default: "NULL"},
      timeline: {
         creepsPerMinDeltas: {
         zeroToTen: { type: Number, default: 0},
         tenToTwenty: { type: Number, default: 0}
      },
         xpPerMinDeltas: {
         zeroToTen: { type: Number, default: 0},
         tenToTwenty: { type: Number, default: 0}
      },
         goldPerMinDeltas: {
         zeroToTen: { type: Number, default: 0},
         tenToTwenty: { type: Number, default: 0}
      },
         csDiffPerMinDeltas: {
         zeroToTen: { type: Number, default: 0},
         tenToTwenty: { type: Number, default: 0}
      },
         xpDiffPerMinDeltas: {
         zeroToTen: { type: Number, default: 0},
         tenToTwenty: { type: Number, default: 0}
      },
         damageTakenPerMinDeltas: {
         zeroToTen: { type: Number, default: 0},
         tenToTwenty: { type: Number, default: 0}
      },
         damageTakenDiffPerMinDeltas: {
         zeroToTen: { type: Number, default: 0},
         tenToTwenty: { type: Number, default: 0}
         }
      },
      masteries: [{
         masteryId: { type: Number, default: 0},
         rank: { type: Number, default: 0}
      }],
      stats: {
         winner: { type: String, default: "NULL"},
         champLevel: { type: Number, default: 0},
         item0: { type: Number, default: 0},
         item1: { type: Number, default: 0},
         item2: { type: Number, default: 0},
         item3: { type: Number, default: 0},
         item4: { type: Number, default: 0},
         item5: { type: Number, default: 0},
         item6: { type: Number, default: 0},
         kills: { type: Number, default: 0},
         doubleKills: { type: Number, default: 0},
         tripleKills: { type: Number, default: 0},
         quadraKills: { type: Number, default: 0},
         pentaKills: { type: Number, default: 0},
         unrealKills: { type: Number, default: 0},
         largestKillingSpree: { type: Number, default: 0},
         deaths: { type: Number, default: 0},
         assists: { type: Number, default: 0},
         totalDamageDealt: { type: Number, default: 0},
         totalDamageDealtToChampions: { type: Number, default: 0},
         totalDamageTaken: { type: Number, default: 0},
         largestCriticalStrike: { type: Number, default: 0},
         totalHeal: { type: Number, default: 0},
         minionsKilled: { type: Number, default: 0},
         neutralMinionsKilled: { type: Number, default: 0},
         neutralMinionsKilledTeamJungle: { type: Number, default: 0},
         neutralMinionsKilledEnemyJungle: { type: Number, default: 0},
         goldEarned: { type: Number, default: 0},
         goldSpent: { type: Number, default: 0},
         combatPlayerScore: { type: Number, default: 0},
         objectivePlayerScore: { type: Number, default: 0},
         totalPlayerScore: { type: Number, default: 0},
         totalScoreRank: { type: Number, default: 0},
         magicDamageDealtToChampions: { type: Number, default: 0},
         physicalDamageDealtToChampions: { type: Number, default: 0},
         trueDamageDealtToChampions: { type: Number, default: 0},
         visionWardsBoughtInGame: { type: Number, default: 0},
         sightWardsBoughtInGame: { type: Number, default: 0},
         magicDamageDealt: { type: Number, default: 0},
         physicalDamageDealt: { type: Number, default: 0},
         trueDamageDealt: { type: Number, default: 0},
         magicDamageTaken: { type: Number, default: 0},
         physicalDamageTaken: { type: Number, default: 0},
         trueDamageTaken: { type: Number, default: 0},
         firstBloodKill: { type: Boolean, default: "False"},
         firstBloodAssist: { type: Boolean, default: "False"},
         firstTowerKill: { type: Boolean, default: "False"},
         firstTowerAssist: { type: Boolean, default: "False"},
         firstInhibitorKill: { type: Boolean, default: "False"},
         firstInhibitorAssist: { type: Boolean, default: "False"},
         inhibitorKills: { type: Number, default: 0},
         towerKills: { type: Number, default: 0},
         wardsPlaced: { type: Number, default: 0},
         wardsKilled: { type: Number, default: 0},
         largestMultiKill: { type: Number, default: 0},
         killingSprees: { type: Number, default: 0},
         totalUnitsHealed: { type: Number, default: 0},
         totalTimeCrowdControlDealt: { type: Number, default: 0}
      },
      runes: [{
         runeId: { type: Number, default: 0},
         rank: { type: Number, default: 0}
      }]
   }],
   teams: [{
      teamId: { type: Number, default: 0},
      winner: { type: Boolean, default: "False"},
      firstBlood: { type: Boolean, default: "False"},
      firstTower: { type: Boolean, default: "False"},
      firstInhibitor: { type: Boolean, default: "False"},
      firstBaron: { type: Boolean, default: "False"},
      firstDragon: { type: Boolean, default: "False"},
      firstRiftHerald: { type: Boolean, default: "False"},
      towerKills: { type: Number, default: 0},
      inhibitorKills: { type: Number, default: 0},
      baronKills: { type: Number, default: 0},
      dragonKills: { type: Number, default: 0},
      vilemawKills: { type: Number, default: 0},
      riftHeraldKills: { type: Number, default: 0},
      dominionVictoryScore: { type: Number, default: 0},
      bans: [{
         championId: { type: Number, default: 0},
         pickTurn: { type: Number, default: 0}
      }]
   }]
});

mongoose.model('Match', matchSchema);
