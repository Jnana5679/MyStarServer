const mongoose = require("mongoose");

const actorBiosSchema = mongoose.Schema({
  actorId: {
    type: String,
  },
  actorImage: {
    type: String,
  },
  actorLegacyName: {
    type: String,
  },
  actorName: {
    type: String,
  },
  actorBirthDay: {
    type: String,
  },
  actorDeathDetails: {
    type: Array,
  },
  actorBirthPlace: {
    type: String,
  },
  actorGender: {
    type: String,
  },
  actorHeight: {
    type: String,
  },
  actorNickNames: {
    type: Array,
  },
  actorRelations: {
    type: Array,
  },
  actorTradeMarks: {
    type: Array,
  },
  actorMiniBio: {
    type: Array,
  },
});

const actorsBios = new mongoose.model("actorsbios", actorBiosSchema);
module.exports = actorsBios;
