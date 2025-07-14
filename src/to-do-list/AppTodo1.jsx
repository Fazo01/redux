import React, { useState } from 'react'


const AppTodo1 = ({todo,setTodo}) => {
  const [inputText, setInputText] = useState("")
  const handleAddTodo=()=>{
    if(inputText.trim().length>0){
      setTodo((prevTodo)=>[
        ...prevTodo,
        {id:todo.length,title:inputText, complete:false}
      ])
      setInputText("")
    }else{
      alert("Empty todos are not acceptable")
    }
  }

  return (
    <div className='flex gap-2 max-w-4xl mt-3'>
      <input
        type="text"
        className="p-2 border border-gray-400 focus:border-black transition ease-linear duration-75 rounded w-full outline-none"
        value={inputText}
        placeholder="Add a todo"
        onChange={(e)=>setInputText(e.target.value)}
      />
      <button
        className="rounded px-3 py-1 bg-black border text-white cursor-pointer"
      onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  )
}

export default AppTodo1
