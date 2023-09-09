require("dotenv").config();
const config = require("../configs/config.json");
const mongoose = require("mongoose");
const mongo_uri = config.mongo.uri;

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
