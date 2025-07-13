import React, { useState } from 'react'
import AppTodo1 from './AppTodo1'

const apptodo = () => {
  const [todo, setTodo] = useState([
    {id:0,title:null, complete:false}
  ])
  return (
    <section className='max-w-6xl mx-auto p-4'>
      <h1 className='text-4xl font-semibold mb-2'>Todo list with React state</h1>
      <p className='text-gray-500'>This todolist app will help you manage your daily task</p>
      <AppTodo1/>
    </section>
    
  )
}

export default apptodo
