import { ADD_TODO, UPDATE_TODO } from "./action"

const initialstate={
  todos:[{
    id:0,
    title:null,
    completed:false
  }]
}
export const todoReducer=(state=initialstate,action)=>{
  switch(action.type){
    case ADD_TODO:
      return{
        ...state,
        todos:[...state.todos,action.payload]
      }
    case UPDATE_TODO:
      return{
        ...state,
        todos:action.payload
      }
      default:
        return state;
  }
}