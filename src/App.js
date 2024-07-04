import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from "./todo";

function App() {
  const[todo,onTodo] = useState("")
  const[list,onList] = useState([])
  const onChangeInput = (event) =>{
      onTodo(event.target.value)
  }
  console.log(todo)
  const onSubmitTodo = (e)=>{
      e.preventDefault()
      const todoDetails = {
        id : uuidv4(),
        todo : todo
      }
  const listDetails = [...list,todoDetails]
      onList(listDetails)
  }
  const onDel = (id)=>{
     onList(list.filter(each => each.id !== id))
  }

  console.log(list)
  return (
 
    <div >
      <h1>jai sriram</h1>
      <form onSubmit={onSubmitTodo}>
      <input onChange={onChangeInput} value={todo}/>
      <button>submit</button>
      </form>
      {list.map(eachMap => (
        <Todo key ={eachMap.id} details = {eachMap}onDel= {onDel}/>
      ))}
      
    </div>
  );
}

export default App;
