import { useState, useEffect } from 'react';
import AddHabit from './components/AddHabit';
import ViewHabits from './components/ViewHabits';

function App() {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        fetchHabits();
    }, []);

    const fetchHabits = async () => {
        const res = await fetch("http://localhost:5000/api/habits")
        const data = await res.json();
        setHabits(data);
    };

    const addHabit = async (title) => {
        const res = await fetch("http://localhost:5000/api/habits", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
        },
        body: JSON.stringify({ title })
    });

    const newHabit = await res.json();
    setHabits([...habits, newHabit]);
};

    return (
        <div style={{ padding : "20px" }}>
            <h1>Habit Tracker App</h1>
            <AddHabit addHabit={addHabit} />
            <ViewHabits habits={habits} />
        </div>
    );
}
export default App;
