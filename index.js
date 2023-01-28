const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");


const PORT = 8080;
const app = express();

const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, async () => {
    console.log(`RPG companion working on port ${PORT}`);
});
