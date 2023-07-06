const router = require("express").Router();
const mongoose = require("mongoose");

const Game = require("../models/Game.model");
const Review = require("../models/Review.model");

// CODE HERE

// GET /api/games -  Retrieves all of the games
router.get("/games", (req, res, next) => {
  Game.find()
    //    .populate("reviews")
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      console.log("error getting list of games", err);
      res.status(500).json({
        message: "error getting list of games",
        error: err,
      });
    });
});


//  GET /api/games/:gameId  -  Get details of a specific game by id
router.get("/games/:gameId", (req, res, next) => {
  const { gameId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    res.status(400).json({ message: "Specified ID is not valid" });
    return;
  }

  Game.findById(gameId)
    .populate("reviews") 
    .then((game) => res.json(game))
    .catch((err) => {
      console.log("error getting details of a game", err);
      res.status(500).json({
        message: "error getting details of a game",
        error: err,
      });
    });
});

//  POST /api/games  -  Creates a new game
router.post("/games", (req, res, next) => {
  const {
    game: { name, summary },
    campaigncoop,
    offlinecoop,
    onlinecoop,
    onlinemax,
  } = req.body;

  const newGame = {
    game: {
      name,
      summary,
    },
    campaigncoop,
    offlinecoop,
    onlinecoop,
    onlinemax,
    review: [],
  };

  Game.create(newGame)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      console.log("error creating a new gane", err);
      res.status(500).json({
        message: "error creating a new game",
        error: err,
      });
    });
});

// PUT : update a game
router.put("/games/:gameId", (req, res, next) => {
  const { gameId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Game.findByIdAndUpdate(gameId, req.body, { new: true })
    .then((updatedGame) => res.json(updatedGame))
    .catch((error) => res.json(error));
});



// DELETE : delete a specific game by ID
router.delete("/games/:gameId", (req, res, next) => {
  const { gameId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(gameId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Game.findByIdAndRemove(gameId)
    .then(() =>
      res.json({
        message: `Game with ${gameId} is removed successfully.`,
      })
    )
    .catch((error) => res.json(error));
});
module.exports = router;
