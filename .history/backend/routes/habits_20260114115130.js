const express = require("express");
const Habits = require("../models/Habits");

const router = express.Router();

// GET all habits
router.get("/", async (req, res) => {
    try {
        const habits = await Habits.find();
        res.json(habits);
    } catch(err) {
        res.status(500).json( { message: "Error fetching habits "});
    }
});

// POST a new habit
router.post("/", async (req,res) => {
    try {
        const newHabit = new Habits({
            title: req.body.title,
        });

        const savedHabit = await newHabit.save();
        res.json(savedHabit);
    } catch(err) {
        res.status(500).json({ message: "Error creating habit"});
    }
});

// DELETE a habit
router.delete("/:id", async (req, res) => {
    try {
        const deletedHabit = await Habits.findByIdAndDelete(req.params.id);
        res.json(deletedHabit);
    } catch (err) {
        res.status(500).json({ message: "Error deleting habit "});
    }
});

// MARK habit as done
router.patch("/:id/done", async (req,res) => {
    try {
        const habit = await Habits.findById(req.params.id);
        if (!habit) return res.status(404).json({ message: "Habit not found "});

        const today = new Date();
        const last = habit.lastCompleted;

        if (last) {
            const diffTime = today - last;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 0) {
                return res.json(habit);
            } else if (diffDays === 1) {
                habit.streak += 1;
            } else {
                habit.streak = 1;
            }
        } else {
            habit.streak = 1;
        }

    // Best streak logic

    if (habit.streak > habit.bestStreak) {
        habit.bestStreak = habit.streak;
    }
    
    habit.lastCompleted = today;
    const updatedHabit = await habit.save();

    res.json(updatedHabit);

}   catch(err) {
    res.status(500).json({ message: "Error updating habit" });
}
});
module.exports = router;