const express = require('express');
const blogRouter = require('./routes/BlogRoutes');
const app = express();


app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/CRUDwithMongooDB');


module.exports =app;