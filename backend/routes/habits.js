const express = require("express");
const Habits = require("../models/Habits");

const router = express.Router();

// GET all todos
router.get("/", async (req, res) => {
    try {
        const habits = await Habits.find()
    }
})