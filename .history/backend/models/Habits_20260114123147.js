const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    streak: {
        type: Number,
        required: true,
        default: 0,
    },
    bestStreak: {
        type: Number,
        default: 0,
    },
    lastCompleted: {
        type: Date,
        default: null,
    },
    completedDates: {
        type: Date,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Habit", habitSchema);