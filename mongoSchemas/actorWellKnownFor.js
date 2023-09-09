const mongoose = require("mongoose");

const actorWellKnownForSchema = mongoose.Schema({
  actorId: {
    type: String,
  },
  actorFilmsHistory: {
    type: Array,
  },
});

const actorWellKnownFor = new mongoose.model(
  "actorwellknownfor",
  actorWellKnownForSchema
);
module.exports = actorWellKnownFor;
