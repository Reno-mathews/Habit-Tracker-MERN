const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const habitRoutes = require("./routes/habits");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/habits", habitRoutes);

// Test route
app.get("/", (req,res) => {
    res.send("API is running");
});

const PORT = process.env.PORT || 5000;

//MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server on running on port ${PORT}`);
        });

    })
    .catch((err) => {
        console.log(err);
    });