const mongoose = require("mongoose");

const actorAwardsSchema = mongoose.Schema({
  actorId: {
    type: String,
  },
  actorAwards: {
    type: Array,
  },
});

const ActorAwardsSchema = new mongoose.model("actorsawards", actorAwardsSchema);
module.exports = ActorAwardsSchema;
