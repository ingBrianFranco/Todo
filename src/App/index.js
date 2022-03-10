//import './App.css';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AppUI } from "./AppUI";
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'Otro más', completed: false }
// ];



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
