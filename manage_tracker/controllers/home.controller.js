const DownloadFileModel = require("../models/downloadFile.model");
const parseTorrent = require("parse-torrent-updated");
const FileModel = require("../models/file.model");

module.exports.index = async (req, res) => {
  try {
    const files = await DownloadFileModel.find({});

    res.render("client/pages/home/index", {
      pageTitle: "File list",
      files: files,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.upload = async (req, res) => {
  try {
    res.render("client/pages/home/upload", {
      pageTitle: "Upload",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.uploadPost = async (req, res) => {
  try {
    const parsedTorrentFile = await parseTorrent(req.file.buffer);

    const data = {
      fileName: parsedTorrentFile.name,
      size: parsedTorrentFile.length,
      link: parsedTorrentFile.infoHash,
      seeders: [],
      leechers: [],
    };

    const file = new DownloadFileModel(data);
    await file.save();

    const torrentFileData = {
      fileName: parsedTorrentFile.name,
      infoHash: parsedTorrentFile.infoHash,
      numOfPieces: parsedTorrentFile.pieces.length,
    };

    const torrentFileInfo = new FileModel(torrentFileData);
    await torrentFileInfo.save();

    res.redirect("/home");
  } catch (error) {
    console.log(error);
  }
};
