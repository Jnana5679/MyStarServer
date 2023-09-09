require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGO_DB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });
