const express = require("express");
const path = require("path");
const fs = require("fs");
const https = require("https");
const cors = require("cors");
require("dotenv").config();
require("./mongoDBConnection/mongoDBConnection");
const expressRoutes = require("./expressRoutes/routes");
const axios = require("axios");

const actorsBios = require("./mongoSchemas/actorBiosSchema");

const app = express();
app.use(express.json(), cors());

app.use("/", expressRoutes);

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "ssl", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "ssl", "cert.pem")),
  },
  app
);

app.listen(process.env.SERVER, () => {
  console.log(`Server is running on port 3005`);
});
