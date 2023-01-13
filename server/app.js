//zstJ4YH7YaAjDyZ1 -- 
//157.34.102.209/32
//mongodb+srv://Arsaluddin:<password>@cluster0.7v7xnqc.mongodb.net/?retryWrites=true&w=majority

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//Routes
const calori = require('./routes/caloriroutes.js');
const users = require('./routes/usersroutes.js');

require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());
app.use("/calori",calori);
app.use("/users",users);
mongoose.set('strictQuery', false);



const connection = "mongodb+srv://Arsaluddin:zstJ4YH7YaAjDyZ1@cluster0.7v7xnqc.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connection,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>
     app.listen(port, () =>
        console.log("server is running")
     )
   )
.catch((error) => console.error("error"));

// //Routes
// const calori = require('./routes/caloriroutes');
// const users = require('./routes/usersroutes');

// app.use("/calori",calori);
// app.use("/users",users);




