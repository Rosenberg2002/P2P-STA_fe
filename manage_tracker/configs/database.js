const mongoose = require("mongoose");

module.exports.connect = () => {
  mongoose.connect(process.env.MONGODB_URL, {
    authSource: "admin",
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
  }).then(() => {
    console.log("Database connected!");
  })
};
