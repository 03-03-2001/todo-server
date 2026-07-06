import TodoItem from "./TodoItem";


function TodoList({
  todos,
  onDelete,
  onUpdate,
  onStatusChange,
}) {
  if (todos.length === 0) {
    return <p>No todos found.</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

export default TodoList;