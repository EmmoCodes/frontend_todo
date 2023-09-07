import React, { useState } from 'react'
import './TodoList.scss'

function AddTodo(props) {
  const [todoItem, setTodoItem] = useState([])

  const addTodo = () => {
    fetch('http://localhost:9898/api/todo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id: crypto.randomUUID(), todo: todoItem, done: props.doneState }),
    }).then(response => props.reload(prev => !prev))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" name="todo" onChange={e => setTodoItem(e.target.value)} />
      <button type="button" name="add-todo" onClick={addTodo}>
        Add
      </button>
    </div>
  )
}

export default AddTodo
