const mongoose = require("mongoose");

const actorFilmHistoriesSchema = mongoose.Schema({
  actorId: {
    type: String,
  },
  actorFilmsHistory: {
    type: Array,
  },
});

const actorsFilmHistories = new mongoose.model(
  "actorsfilmhistories",
  actorFilmHistoriesSchema
);
module.exports = actorsFilmHistories;
