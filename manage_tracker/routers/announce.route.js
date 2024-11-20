const express = require("express");
const router = express.Router();
const controller = require("../controllers/announce.controller");

router.get("/", controller.index);

router.post("/infoHashBuffer", controller.infoHashBuffer);

router.post("/find", controller.find);

router.post("/upload", controller.upload);

router.post("/cancel", controller.cancel);

router.post("/online", controller.online);

module.exports = router;