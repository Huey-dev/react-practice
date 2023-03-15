import React, {useState} from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])

function handleAddTodo(e){
  
}

  return (
    <>
      <TodoList todos={todos} />
    <input type="text" />
    <button onClick ={handleAddTodo} >Add Todo</button>
    <button>Clear</button>
    <div>0 Left</div>
    </>
    
  )
   
}

export default App;
