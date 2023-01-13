const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userschema = new schema({
    usename:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 2,
    },
},{
    timestamps:true,
})

const user = mongoose.model("user",userschema);

module.exports = user;