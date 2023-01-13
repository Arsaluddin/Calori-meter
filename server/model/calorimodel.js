const mongoose = require("mongoose");

const schema = mongoose.Schema;

const calorischema = new schema({
    username : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    Calories: {
        type : Number,
        required : true
    },
    Date : {
        type : Date,
        required : true
    },
},{
    timestamps:true
})

const calori = mongoose.model("calorijournal",calorischema);

module.exports = calori;