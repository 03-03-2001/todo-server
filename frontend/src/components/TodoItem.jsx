

function TodoItem({ todo, onDelete, onUpdate, onStatusChange }) {
  return (
    <div className="todo-item">
      <div>
        <h3>{todo.title}</h3>
        <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
      </div>

      <div className="todo-buttons">
        <button onClick={() => onUpdate(todo._id)}>Edit</button>

        <button onClick={() => onDelete(todo._id)}>Delete</button>

        <button
          onClick={() =>
            onStatusChange(todo._id, !todo.completed)
          }
        >
          {todo.completed ? "Mark Pending" : "Mark Complete"}
        </button>
      </div>
    </div>
  );
}

export default TodoItem;