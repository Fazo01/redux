import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppTodo from "./to-do-list/apptodo.jsx";
import TodolistRedux from './todo-w-redux/TodolistRedux.jsx';
const App=()=> {
  const router = createBrowserRouter([
    { path: "/", element: <>Homepage</> },
    { path: "/apptodo", element: <AppTodo /> },
    { path: "todo-w-redux", element: <TodolistRedux/>  },
  ]);

  return (
    <div className='mt-20 px-5'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


