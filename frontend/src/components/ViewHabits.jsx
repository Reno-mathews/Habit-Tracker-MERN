function ViewHabits({ habits, deleteHabit, markHabitDone }) {
    if(habits.length === 0) {
        return (
            <p className="text-gray-500 text-center mt-6">
                No habits yet. Add one above.
            </p>
        );
    }
    return (
        <div className="space-y-3">
            {habits.map((habit) => (
                <div
                key={habit._id}
                className="bg-white border-gray-200 rounded-xl p-4 shadow-sm flex items-center justify-between"
                >
                    <div>
                    <p className="text-gray-800 font-medium">{habit.title}</p>
                    <p className="text-sm text-gray-500">- 🔥 Streak: {habit.streak}</p>
                    </div>

                    <div className="flex items-center gap-2">
                    <button 
                        onClick={() => markHabitDone(habit._id)}
                        className="px-3 py-1.5 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition"
                    >
                     Done ✅
                    </button>


                    <button
                        onClick={() => deleteHabit(habit._id)}
                        className="px-3 py-1.5 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                    >
                     Delete ❌
                    </button>
                </div>
                </div>
            ))}
        </div>
    );
}

export default ViewHabits;