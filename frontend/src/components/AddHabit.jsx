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
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input
                type = "text"
                placeholder="Enter a habit"
                value={habit}
                onChange={(e) => setHabit(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Add
                </button>
        </form>
    );
}

export default AddHabit;