var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matchSchema = new Schema({
   _id: {
     matchID: String,
     region: String
  },
   matchMode: String,
   matchType: String,
   matchCreation: Date,
   matchDuration: Number,
   queueType: String,
   mapId: Number,
   season: String,
   matchVersion: String,
   participants: [{
      summonerId: Number,
      teamId: Number,
      spell1Id: Number,
      spell2Id: Number,
      championId: Number,
      highestAchievedSeasonTier: String,
      role: String,
      lane: String,
      timeline: {
         creepsPerMinDeltas: {
         zeroToTen: Number,
         tenToTwenty: Number
      },
         xpPerMinDeltas: {
         zeroToTen: Number,
         tenToTwenty: Number
      },
         goldPerMinDeltas: {
         zeroToTen: Number,
         tenToTwenty: Number
      },
         csDiffPerMinDeltas: {
         zeroToTen: Number,
         tenToTwenty: Number
      },
         xpDiffPerMinDeltas: {
         zeroToTen: Number,
         tenToTwenty: Number
      },
         damageTakenPerMinDeltas: {
         zeroToTen: Number,
         tenToTwenty: Number
      },
         damageTakenDiffPerMinDeltas: {
         zeroToTen: Number,
         tenToTwenty: Number
         }
      },
      masteries: [{
         masteryId: Number,
         rank: Number
      }],
      stats: {
         winner: String,
         champLevel: Number,
         item0: Number,
         item1: Number,
         item2: Number,
         item3: Number,
         item4: Number,
         item5: Number,
         item6: Number,
         kills: Number,
         doubleKills: Number,
         tripleKills: Number,
         quadraKills: Number,
         pentaKills: Number,
         unrealKills: Number,
         largestKillingSpree: Number,
         deaths: Number,
         assists: Number,
         totalDamageDealt: Number,
         totalDamageDealtToChampions: Number,
         totalDamageTaken: Number,
         largestCriticalStrike: Number,
         totalHeal: Number,
         minionsKilled: Number,
         neutralMinionsKilled: Number,
         neutralMinionsKilledTeamJungle: Number,
         neutralMinionsKilledEnemyJungle: Number,
         goldEarned: Number,
         goldSpent: Number,
         combatPlayerScore: Number,
         objectivePlayerScore: Number,
         totalPlayerScore: Number,
         totalScoreRank: Number,
         magicDamageDealtToChampions: Number,
         physicalDamageDealtToChampions: Number,
         trueDamageDealtToChampions: Number,
         visionWardsBoughtInGame: Number,
         sightWardsBoughtInGame: Number,
         magicDamageDealt: Number,
         physicalDamageDealt: Number,
         trueDamageDealt: Number,
         magicDamageTaken: Number,
         physicalDamageTaken: Number,
         trueDamageTaken: Number,
         firstBloodKill: Boolean,
         firstBloodAssist: Boolean,
         firstTowerKill: Boolean,
         firstTowerAssist: Boolean,
         firstInhibitorKill: Boolean,
         firstInhibitorAssist: Boolean,
         inhibitorKills: Number,
         towerKills: Number,
         wardsPlaced: Number,
         wardsKilled: Number,
         largestMultiKill: Number,
         killingSprees: Number,
         totalUnitsHealed: Number,
         totalTimeCrowdControlDealt: Number
      },
      runes: [{
         runeId: Number,
         rank: Number
      }]
   }],
   teams: [{
      teamId: Number,
      winner: Boolean,
      firstBlood: Boolean,
      firstTower: Boolean,
      firstInhibitor: Boolean,
      firstBaron: Boolean,
      firstDragon: Boolean,
      towerKills: Number,
      inhibitorKills: Number,
      baronKills: Number,
      dragonKills: Number,
      vilemawKills: Number,
      dominionVictoryScore: Number,
      bans: [{
         championId: Number,
         pickTurn: Number
      }]
   }]
});

mongoose.model('Match', matchSchema);
