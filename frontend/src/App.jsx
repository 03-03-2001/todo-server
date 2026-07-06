import { useEffect, useState } from "react";
import "./App.css";

import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  updateTodoStatus,
  searchTodos
} from "./services/todoService";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTodo = async () => {
    if (!title.trim()) return;

    try {
      await createTodo({ title });
      setTitle("");
      await fetchTodos();
    } catch (error) {
      console.log("Data:", JSON.stringify(error.response?.data, null, 2));
      console.error(error.response?.data || error);
    }
  };

  const handleUpdateTodo = async (id) => {
    const newTitle = prompt("Enter new title");

    if (!newTitle) return;

    try {
      await updateTodo(id, { title: newTitle });
      await fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      await fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="todo-form">
        <input
          type="text"
          placeholder="Enter Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div className="todo-list">
        {todos.length === 0 ? (
          <p>No todos available.</p>
        ) : (
          todos.map((todo) => (
            <div className="todo-item" key={todo._id}>
              <span>{todo.title}</span>

              <div className="todo-buttons">
                <button onClick={() => handleUpdateTodo(todo._id)}>
                  Edit
                </button>

                <button onClick={() => handleDeleteTodo(todo._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;