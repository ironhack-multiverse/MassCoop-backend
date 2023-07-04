const mongoose = require('mongoose');
const Game = require('../models/Game.model');
const games = require('./data')
require('dotenv').config()


const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/masscoop-backend'

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    return Game.deleteMany({}); //WARNING: this will delete all games in your DB !!
  })
  .then( (response) => {
    console.log(response);
   const gamesArr=  games.map((game)=>{
return ({...game, reviews: [], rating: null})
    })
    console.log("messing up", gamesArr[0])
    return Game.insertMany(gamesArr);
  })
  .then(gamesFromDB => {
    console.log(`Created ${gamesFromDB.length} games`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });
