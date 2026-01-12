const express = require("express");
const mongoose = require("mongoose");
const cors= require("cors");
const habitRoutes = require("./routes/habits");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/habits", habitRoutes);

// Test route
app