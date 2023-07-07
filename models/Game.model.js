const { Schema, model } = require("mongoose");

const gameSchema = new Schema (
{ 
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    game: {
        name: String,
        cover:{
            url: String
        },
        summary: String
    },
   campaigncoop: Boolean,
   offlinecoop: Boolean,
   onlinecoop: Boolean,
   onlinemax: Number,
   offlinemax: Number,
   reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
},
{
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);



const Game = model("Game", gameSchema);

module.exports = Game;
