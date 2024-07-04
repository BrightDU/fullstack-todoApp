// src/firestoreService.js
// src/firebaseConfig.js
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Collection name: 'todos'
const todoCollection = collection(db, "todos");

const addTodo = async (todo) => {
  // Adding a document with fields 'title' and 'completed'
  await addDoc(todoCollection, {
    title: todo.title,
    completed: todo.completed
  });
};

const getTodos = async () => {
  // Fetching all documents from 'todos' collection
  const snapshot = await getDocs(todoCollection);
  const todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return todos;
};

const updateTodo = async (id, updatedTodo) => {
  // Updating document in 'todos' collection
  const todoDoc = doc(db, "todos", id);
  await updateDoc(todoDoc, updatedTodo);
};

const deleteTodo = async (id) => {
  // Deleting document from 'todos' collection
  const todoDoc = doc(db, "todos", id);
  await deleteDoc(todoDoc);
};

export { addTodo, getTodos, updateTodo, deleteTodo };
