const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const courseData = require("./data/courseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Code Course Academy Server is Up & Running");
});

app.get("/api/products", (req, res) => {
    res.send(courseData);
});

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const courseById = courseData.filter((item) => item._id === id);
    res.send(courseById);
});

app.listen(port, () => {
    console.log(`Code Course Academy Server is Up & Running on Port:  ${port}`);
});