import React from 'react'
import Todo from './Todo'
export default function TodoList({TodoList}) {
  return (
    // map over todos, for each todos we return a todo component
    // we pass in the todo
    TodoList.map(todo =>{
        return <Todo key={todo.id} todo={todo} />
    })
  )
}
