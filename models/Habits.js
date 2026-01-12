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
    lastCompleted: {
        type: Date,
        default: null,
    },
    createdAt: {
        type: Date,
        Default: Date.now
    }
})