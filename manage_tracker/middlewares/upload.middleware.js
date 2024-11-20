const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

module.exports = async (req, res, next) => {
  try {
    let streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const originalFileName = req.file.originalname;
        let stream = cloudinary.uploader.upload_stream(
          {
            public_id: originalFileName,
            use_filename: true,
            resource_type: "auto",
            unique_filename: false,
          },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    async function upload(req) {
      let result = await streamUpload(req);
      req.file.result = result;
    }

    await upload(req);
    next();
  } catch (error) {
    console.log(error);
  }
};
