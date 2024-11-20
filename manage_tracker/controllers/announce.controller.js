const DownloadFileModel = require("../models/downloadFile.model");
const FileModel = require("../models/file.model");

module.exports.index = async (req, res) => {
  try {
    const file_name = req.query.file_name;
    const info_hash = req.query.info_hash;
    const ip = req.query.ip;
    const port = req.query.port;
    const left = parseInt(req.query.left);
    const num_of_pieces = req.query.num_of_pieces;

    //detect seeder
    if (left === 0) {
      const file = await FileModel.findOne({
        infoHash: info_hash,
      });

      if (file) {
        const seeders = file.seeders;

        const address = `${ip}:${port}`;

        const check = seeders.find((item) => item === address);

        if (!check) {
          seeders.push(address);

          await FileModel.updateOne(
            {
              infoHash: info_hash,
            },
            {
              seeders: seeders,
            }
          );

          await DownloadFileModel.updateOne(
            {
              infoHash: info_hash,
            },
            {
              $push: { seeders: address },
            }
          );
        }
      } else {
        const address = [`${ip}:${port}`];
        const newFile = await FileModel.create({
          fileName: file_name,
          infoHash: info_hash,
          seeders: address,
          numOfPieces: num_of_pieces,
        });
      }

      res.json({ message: "Upload to tracker successfully" });
    }
    //detect leechers
    else {
      const info_hash = req.query.info_hash;

      const file = await FileModel.findOne({
        infoHash: info_hash,
      });

      res.json(file.seeders);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.infoHashBuffer = async (req, res) => {
  try {
    // console.log(req.body);

    const infoHash = req.body.infoHash;
    const infoHashBuffer = Buffer.from(req.body.infoHashBuffer, "base64");

    // console.log(infoHashBuffer);

    await FileModel.updateOne(
      {
        infoHash: infoHash,
      },
      {
        infoHashBuffer: infoHashBuffer,
      }
    );

    res.json("OK");
  } catch (error) {
    console.log(error);
  }
};

module.exports.find = async (req, res) => {
  try {
    const infoHash = Buffer.from(req.body.infoHash, "base64").toString("hex");
    // console.log(req.body);

    const file = await FileModel.findOne({
      infoHash: infoHash,
    });

    // console.log(file);

    res.json(file);

    // res.json("OK");
  } catch (error) {
    console.log(error);
  }
};

module.exports.upload = async (req, res) => {
  try {
    const data = {
      fileName: req.body.fileName,
      size: req.body.size,
      link: req.body.link,
      seeders: [req.body.seeders],
      leechers: [],
      infoHash: req.body.infoHash,
    };

    const file = await DownloadFileModel.findOne({
      infoHash: req.body.infoHash,
    });

    if (!file) {
      const downloadFile = new DownloadFileModel(data);
      await downloadFile.save();
    }

    res.json("OK");
  } catch (error) {
    console.log(error);
  }
};

module.exports.cancel = async (req, res) => {
  try {
    const address = req.body.address;

    await FileModel.updateMany(
      {},
      {
        $pull: { seeders: address },
      }
    );

    await DownloadFileModel.updateMany(
      {},
      {
        $pull: { seeders: address },
      }
    );

    res.json("OK");
  } catch (error) {
    console.log(error);
  }
};

module.exports.online = (req, res) => {};
