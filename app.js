const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();

//Middleware
app.use(express.json());
app.use("/books", router); // localhost:5000/books


mongoose.connect("mongodb+srv://admin:bcYQ8KSUniE13w7g@cluster0.re1qrwt.mongodb.net/bookStore?retryWrites=true&w=majority"
).then(() => console.log('Connected to the DATABASE'))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));

//mongodb+srv://admin:<password>@cluster0.re1qrwt.mongodb.net/?retryWrites=true&w=majority
// bcYQ8KSUniE13w7g