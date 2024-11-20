const announceRoute = require("./announce.route");
const homeRoute = require("./home.route");

module.exports = (app) => {
  app.get("/", (req, res) => res.redirect("/home"));

  app.use("/home", homeRoute);

  app.use("/announce", announceRoute);
};
