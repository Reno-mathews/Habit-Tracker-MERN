import { useState, useEffect } from 'react';
import AddHabit from './components/AddHabit';
import ViewHabits from './components/ViewHabits';

function App() {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        fetchHabits();
    }, []);

    const fetchHabits = async () => {
        const res = await fetch("http://habit-tracker-mern-bhnc.onrender.com/api/habits")
        const data = await res.json();
        setHabits(data);
    };

    const addHabit = async (title) => {
        const res = await fetch("http://habit-tracker-mern-bhnc.onrender.com/api/habits", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
        },
        body: JSON.stringify({ title })
    });

    const newHabit = await res.json();
    setHabits([...habits, newHabit]);
};  

    const deleteHabit = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/habits/${id}`, {
                method: "DELETE",
            });

            setHabits(habits.filter((habit) => habit._id !== id));
        } catch (error) {
            console.error("Error deleting habit:", error);
        }
    };

    const markHabitDone = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/habits/${id}/done`, {
                method: "PATCH",
            });

            const updatedHabit = await res.json();

            setHabits(
                habits.map((habit) =>
                habit._id === id ? updatedHabit : habit
            )
            );
        } catch(error) {
            console.error("Error marking habit done:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
            <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                Habit Tracker App
            </h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <AddHabit addHabit={addHabit} />
            </div>

            <div className="space-y-3">
            <ViewHabits 
                habits={habits}
                deleteHabit={deleteHabit} 
                markHabitDone={markHabitDone} 
            />
            </div>
        </div>
    </div>
    );
}
export default App;
