export const ADD_TODO='ADD_TODO';
export const UPDATE_TODO='UPDATE_TODO';

export const addTodo=(id=0,title="",complete=false)=>({
  type:ADD_TODO,
  payload:{
    id,
    title,
    complete,
  }
})
export const updateTodo=(todo)=>({
  type:UPDATE_TODO,
  // payload:todo.
})