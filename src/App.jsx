import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppTodo from "./to-do-list/apptodo.jsx";

const App=()=> {
  const router = createBrowserRouter([
    { path: "/", element: <>Homepage</> },
    { path: "/apptodo", element: <AppTodo /> },
  ]);

  return (
    <div className='mt-20 px-5'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


