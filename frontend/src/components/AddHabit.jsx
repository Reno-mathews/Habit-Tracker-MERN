import { useState} from "react";

function AddHabit( { addHabit } ) {
    const [habit, setHabit] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!habit) return;

        addHabit(habit);
        setHabit("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                placeholder="Enter a habit"
                value={habit}
                onChange={(e) => setHabit(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddHabit;