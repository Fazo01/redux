import React from 'react'

const AppTodo1 = () => {
  return (
    <div>
      <input
        type="text"
        className="p-2 border border-gray-400 focus:border-black transition ease-linear duration-75 rounded w-full outline-none"
        placeholder="Add a todo"
        
      />
      <button
        className="rounded px-3 py-1 bg-black border text-white cursor-pointer"
      
      >
        Add
      </button>
    </div>
  )
}

export default AppTodo1
