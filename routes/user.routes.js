const router = require("express").Router();
const mongoose = require("mongoose");
const User = require('../models/User.model');


//display
router.get('/my-profile/:userId', (req, res, next) => {
    
    const currentUserId = req.params.userId; 

    if (!mongoose.Types.ObjectId.isValid(currentUserId)) {
        res.status(400).json({ message: 'Specified ID is not valid' });
        return;
    }
    User.findById(currentUserId)
        //.populate('review') ///this is referencing review in our game model
        .then(user => res.json(user))
        .catch(err => {
            console.log("error getting details of a user", err);
            res.status(500).json({
                message: "error getting details of a user",
                error: err
            });
        })
});
module.exports = router;
