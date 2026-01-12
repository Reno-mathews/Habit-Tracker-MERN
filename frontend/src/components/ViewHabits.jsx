function ViewHabits({ habits }) {
    return (
        <ul>
            {habits.map((habit) => (
                <li key={habit._id}>
                    {habit.title}
                </li>
            ))}
        </ul>
    );
}

export default ViewHabits;