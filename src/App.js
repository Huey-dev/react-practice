import React, {useState, useRef, useEffect}  from 'react';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const localStorageKey = 'todoApp.todos'

function App() {
  // every single todo in the todo state and the function we call to update those todos
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  

  useEffect(()=> {
    // LocalStorage converts to arrays, we use json.parse
    //  to convert to object. an array of objects
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    if (setTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }, [todos])

function handleAddTodo(e){
  const name = todoNameRef.current.value
  if (name === '') return
  setTodos(prevTodos => {
    return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
  })
  todoNameRef.current.value = null
}

  return (
    // all of our jsx(html for our app compopnent) in our index all the html or each one of our todos is going to go into a todo list component
    <>
    {/* our todolist */}
    {/* set all the todos to a state to rerender with every change (useState hook) */}
    <TodoList todos={todos} />
    <input ref={todoNameRef} type="text" />
    <button onClick ={handleAddTodo} >Add Todo</button>
    <button>Clear</button>
    <div>0 Left</div>
    </>
    
  )
   
}

export default App;
