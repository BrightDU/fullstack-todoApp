// src/components/TodoList.js
import TodoItem from "./todoItem";

const TodoList = ({ todos, fetchTodos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
