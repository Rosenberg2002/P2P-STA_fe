const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const databaseConfig = require("./configs/database");
const mainRoute = require("./routers/index.route");
require("dotenv").config();

const app = express();

databaseConfig.connect();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mainRoute(app);

app.listen(3000, () => {
  console.log("App listen on port", 3000);
});
