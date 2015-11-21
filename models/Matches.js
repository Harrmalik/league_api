var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matchSchema = new Schema({
  matchID: {type: String, required: true},
  region: {type: String},
  matchMode: {type: String},
  queueType: {type: String},
  matchVersion: String,
  matchCreation: Date,
  season: {type: String},
  champions: [{
    championId: String,
    imgPath: String,
    available: String,
    role: String,
    lane: String,
    winner: Boolean,
    kills: Number,
    deaths: Number,
    assists: Number,
    KDR: Number
  }]
});

mongoose.model('Match', matchSchema);
