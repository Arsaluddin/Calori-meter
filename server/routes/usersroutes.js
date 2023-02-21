const router = require("express").Router();
const User = require("../model/usermodel.js");


router.route("/").get((req,res) => {
      User.find()
          .then((user) => res.json(user))
          .catch((err) => res.status(400).json("Error"));
});


router.route("/users").post((req,res) => {
    let username = req.body.username;

    let adduser = new User({
         username
    })

    adduser.save()
           .then(() => res.json("user added"))
           .catch((err) => res.status(400).json("Error"));
});

module.exports = router;


