const router = require("express").Router();
const calorie = require("../model/calorimodel.js");



router.route("/").get((req,res) => {
    calorie.find()
            .then((meal) => res.json(meal))
            .catch((err) => res.status(400).json("Error"));
});


router.route("/add").post((req,res) => {
    let username = req.body.username;
    let description = req.body.description;
    let calories = Number(req.body.calories);
    let date = Date.parse(req.body.date);

    let addcalorie = new calorie({
        username,
        description,
        calories,
        date,
    })

    addcalorie.save()
            .then(() => res.json("calories added sucessfully"))
            .catch((err) => res.status(400).json("error"));
});


router.route("/:id").delete((req,res) => {
       calorie.findByIdAndDelete(req.params.id)
               .then(() => res.json("Sucessfully deleted"))
               .catch((err) => res.status(400).json("error"));
});


router.route("/:id").get((req,res) => {
    calorie.findById(req.params.id)
           .then((meals) => res.json(meals))
           .catch((err) => res.status(400).json("error"));
});


router.route("/update/:id").post((req,res) => {
    calorie.findById(req.params.id)
            .then((calorie) => {
                calorie.username = req.body.username;
                calorie.Calories = Number(req.body.calories);
                calorie.description = req.body.description;
                calorie.Date = Date.parse(req.body.date);
                calorie.save()
                       .then(() => res.json())
                       .catch((err) => res.status(400).json("error"));
            })
            .catch((err) => res.status(400).json("Err: " + err));
});


module.exports = router;