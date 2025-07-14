import React from "react";

const ShowTodo = ({ todo, setTodo }) => {
  const realRodo = todo.filter((todo) => todo.title);
  console.log(realRodo);
  return (
    <div className="max-w-4xl mt-3">
      <p className="text-xl font-bold">All Todos</p>
      {realRodo.map((todo,index) => (
        <div key={index} className="flex gap-2 items-center">
          <input
          type="checkbox"
          className="size-4 text-blue-500"
          onChange={(e) =>
            setTodo((prevTodo) =>
              prevTodo.map((t) =>
                t.id === todo.id ? { ...t, complete: e.target.checked } : t
              )
            )
          }
          checked={todo.complete}
        />
        <p className="text-gray-500">
          {todo.complete?<strike>{todo.title}</strike>:todo.title}
        </p>
        </div>
        

      ))}
    </div>
  );
};

export default ShowTodo;
