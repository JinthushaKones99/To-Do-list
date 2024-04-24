const express = require("express");
const mongoose = require('mongoose')

const app = express();

// connection to mongo
mongoose.connect("mongodb://localhost/TO-DO_express",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs");


//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


//server configurations
app.listen(3000, () => console.log("server started listening on port:3000 "));
