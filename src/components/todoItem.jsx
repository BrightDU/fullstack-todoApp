// src/components/TodoItem.js
import { updateTodo, deleteTodo } from "../firestoreService";

const TodoItem = ({ todo, fetchTodos }) => {
  const handleToggle = async () => {
    await updateTodo(todo.id, { completed: !todo.completed });
    fetchTodos();
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    fetchTodos();
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={handleToggle}
      >
        {todo.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
