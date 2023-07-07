const express = require("express");
const Game = require("../models/Game.model");
const router = express.Router();



router.get("/", (req, res, next) => {
  res.json("All good in here");
});


module.exports = router;
