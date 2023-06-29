const { Schema, model } = require("mongoose");

const gameSchema = newSchema (
{
    title: String,
    typeOfMultiplayer: String, //coop, versus...
    maxPlayers: Number,
    host: String, //to be online or offline(=local)
    counterOfLikes: Number
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);


const Game = model("Game", gameSchema);

module.exports = User;
