import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../redux/action';

const ShowTodoRedux = () => {
  const todos = useSelector((state) => state.todos); 
  const dispatch = useDispatch();

  // Filter out todos with missing or empty titles
    const filteredTodos = todos.filter((todo) => todo.title);


  const handleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(updateTodo(updatedTodos));
  };

  return (
    <div className="max-w-4xl mt-3">
      <p className="text-xl font-bold mb-3">All Todos</p>
      {filteredTodos.length === 0 ? (
        <p className="text-gray-500 italic">No todos available.</p>
      ) : (
        <ul>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border p-2 my-2 rounded border-gray-200 bg-gray-100"
            >
              {todo.completed ? (
                <strike className="text-gray-500">{todo.title}</strike>
              ) : (
                <span>{todo.title}</span>
              )}
              <button
                className="px-3 py-0.5 bg-green-200 rounded border border-green-400 text-green-600 cursor-pointer hover:bg-green-300 transition ease-linear duration-75"
                onClick={() => handleCompleted(todo.id)}
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowTodoRedux;
