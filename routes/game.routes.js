const router = require("express").Router();
const mongoose = require("mongoose");

const Game = require('../models/Game.model');
const Review = require('../models/Review.model');

// CODE HERE


// GET /api/games -  Retrieves all of the games
router.get('/games', (req, res, next) => {
    Game.find()
       // .populate("reviews")
        .then(response => {
           console.log(response)
            res.json(response)
        })
        .catch(err => {
            console.log("error getting list of games", err);
            res.status(500).json({
                message: "error getting list of games",
                error: err
            });
        })
});



module.exports = router;
