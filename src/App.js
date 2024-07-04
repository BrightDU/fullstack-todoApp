// import React from 'react';
// import './styles/App.css';
// import Pickin from './components/pickin';
// //import ResetButton  from './components/resetButton';



// function Parent() {
  
//     return (
//       <div className="App">
//         <h1>Smart Button App</h1>
//         {/* <SmartButton /> */}

//         <Pickin firstname="Bright" lastname="Uto" age="10"/>
//         <Pickin firstname="John" lastname="Uto" age="20"/>
//         <Pickin firstname="ADA" lastname="BISI" age="50"/>

//       </div>
//     );
  
//   };

  

// export default Parent;
// src/App.js
import { useState, useEffect } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import { getTodos } from "./firestoreService";
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
};

export default App;
