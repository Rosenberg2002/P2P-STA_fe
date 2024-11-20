const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  fileName: String,
  infoHash: String,
  infoHashBuffer: Buffer,
  seeders: Array,
  numOfPieces: Number,
});

const FileModel = mongoose.model("file", fileSchema);

module.exports = FileModel;
