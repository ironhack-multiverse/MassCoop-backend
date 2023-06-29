const { Schema, model } = require("mongoose");

const reviewSchema = new Schema (
{
    comment: String, //should be a big empty box
    rating: Number,
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);


const Review = model("Review", reviewSchema);

module.exports = Review;
