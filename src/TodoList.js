import React from 'react'
import Todo from './Todo'
export default function TodoList({todos}) {
  return (
    // map over todos, for ach todos we return a todo component
    // we pass in the todo
    todos.map(todo =>{
        return <Todo key={todo.id} todo={todo} />
    })
  )
}
