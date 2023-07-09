## Hello and welcome to Mass-Coop. 

Hey there ! 
Have you ever struggled to find nice multi-player games ?
First you would have to go on google, make a "quick" search on  "games I can play with friends on playstation with a coop campaign". Let's say you manage to find one after browing half an hour... 
Now comes the time to go on a platform to download it, but you first need to check how many players can play. Is there a offline mode ? Or just an online ? Coop or versus ? So much just to find a game. 

# But now you have Mass-Coop !  

A smart multiplayer-games only library that let you browse according your preferences, which game you could play with your friends. Find easily what you are always on the hunt for !

This repository contains the frontend code for the Mass Coop application. It is built using React. 

A repository with the front-end code can be found here : [https://github.com/ironhack-multiverse/MassCoop-frontend]. Please refer to the frontend readme for instructions on running the app.

## Instructions to run this server on your computer

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd masscoop-backend`.
3. Install the dependencies by running: `npm install`.
4. Set up any required environment variables. 
5. Start the server with the following command:`npm run dev` for development mode.
6. The backend server should now be running on your local machine (`http://localhost:5005`)

## Endpoints documentation

- Here are the endpoints implemented by the API:

1- Games Routes 

  - `GET /api/games `  -  Retrieves all of the games
  - `GET /api/games/:gameId `  -  Get details of a specific game by id
  - `POST /api/games`  -  Creates a new game
  - `PUT /api/games/:gameId` - Update a game
  - `DELETE /api/games/:gameId` - Deletes a specific game

2 - Review routes   

  - `POST /api/reviews`  -  Creates a new review
  - `PUT /api/reviews/:reviewId` - Update a review
  - `DELETE /api/reviews/:reviewId` - Deletes a specific review

3- User routes 

- `GET /api/my-profile/:userId` - Display user

4- Authorisation routes 

  - `POST /auth/signup`  -  Creates a new user in the database
  - `POST /auth/login` - Log a user 
  - `GET /auth/verify` - Verify if the user is authenticated


## Demo

- Link to the deployed version of the project on Netlify: [https://mass-coop.netlify.app/]
- You can also test the API by using the endpoints mentioned above.

Now, you have fun allright ?

