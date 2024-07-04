// src/components/TodoForm.js
import { useState } from "react";
import { addTodo } from "../firestoreService";

const TodoForm = ({ fetchTodos }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      await addTodo({ title, completed: false });
      setTitle("");
      fetchTodos();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
