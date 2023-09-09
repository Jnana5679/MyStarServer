const mongoose = require("mongoose");

const actorImagesSchema = mongoose.Schema({
  actorId: {
    type: String,
  },
  actorImages: {
    type: Array,
  },
});

const ActorImagesSchema = new mongoose.model("actorimages", actorImagesSchema);
module.exports = ActorImagesSchema;
