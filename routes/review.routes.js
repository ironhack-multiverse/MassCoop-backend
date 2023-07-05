const router = require("express").Router();

const mongoose = require("mongoose");
const Game = require('../models/Game.model');
const Review = require("../models/Review.model");



//  POST /api/reviews  -  Creates a new review
router.post("/reviews/:gameId", (req, res, next) => {
    const { comment, rating } = req.body;
    const gameId = req.params.gameId;
    console.log(req.body);
    console.log(gameId)

    const newReview = {
        comment: comment,
        rating: rating,
       
    }
console.log(newReview);
    Review.create(newReview)
    .then(reviewFromDB => {
        return Game.findByIdAndUpdate(gameId, { $push: { reviews: reviewFromDB._id } }, {new: true});
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


// PUT /api/reviews/:reviewId  -  Updates a specific review by id
router.put('/reviews/:reviewId', (req, res, next) => {
    const { reviewId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
        res.status(400).json({ message: 'Specified ID is not valid' });
        return;
    }

    const newDetails = {
        comment: req.body.comment,
        rating: req.body.rating,
    }

    Review.findByIdAndUpdate(reviewId, newDetails, { new: true })
        .then((updatedReview) => res.json(updatedReview))
        .catch(err => {
            console.log("error updating review", err);
            res.status(500).json({
                message: "error updating review",
                error: err
            });
        })
});
// DELETE /api/reviews/:reviewId  -  Delete a specific review by id
router.delete('/reviews/:reviewId', (req, res, next) => {
    const { reviewId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
        res.status(400).json({ message: 'Specified ID is not valid' });
        return;
    }

    Review.findByIdAndRemove(reviewId)
        .then(deletedReview => {
            return Game.findOneAndUpdate({ reviews: { $in: reviewId } }, {$pull:{reviews: reviewId}}, { new: true }); // Finding a specific game, pulling the review by id and delete 
        })
        .then(() => res.json({ message: `Review with id ${reviewId} & all associated reviews were removed successfully.` }))
        .catch(err => {
            console.log("error deleting review", err);
            res.status(500).json({
                message: "error deleting review",
                error: err
            });
        })
});






module.exports = router;
