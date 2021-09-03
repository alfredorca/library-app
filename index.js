const express = require("express");
const mongoose = require("mongoose");

//setup the app variable to the express method
const app = express();

//mongodb connection
mongoose
.connect("mongodb://localhost/library")
.then(() => console.log("Database Connected..."))
.catch(err => console.log('There was an error connecting...'));

//middlewares
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

//routes 
app.use('/users', require('./routes/user'))
app.use('/books', require('./routes/book'))
app.use('/rentals', require ('./routes/rental'));

//port & listen method
const port = 6900;
app.listen(port, () => {
 console.log("Server running...")
})