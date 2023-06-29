const router = require("express").Router();

const mongoose = require("mongoose");
const Game = require('../models/Game.model');
const Review = require("../models/Review.model");



//  POST /api/reviews  -  Creates a new review
router.post("/reviews", (req, res, next) => {
    const { description, rating, gameId } = req.body;

    const newReview = {
        description: description,
        rating: rating,
        game: gameId
    }

    Review.create(newReview)
    .then(reviewFromDB => {
        return Game.findByIdAndUpdate(gameId, { $push: { reviews: reviewFromDB._id } });
    })
    .then(response => res.status(201).json(response))
    .catch(err => {
        console.log("error creating a new review", err);
        res.status(500).json({
            message: "error creating a new review",
            error: err
        });
    })
});

module.exports = router;
