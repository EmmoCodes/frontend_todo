import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo.jsx'
import './TodoList.scss'
import TodoItem from './TodoItem.jsx'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9898/api/todo')
      .then(response => response.json())
      .then(data => setTodos(data))
  }, [refresh])

  return (
    <section className="todo_frame">
      <AddTodo reload={setRefresh} />
      {todos.map(todo => (
        <TodoItem key={crypto.randomUUID()} todo={todo} />
      ))}
    </section>
  )
}

export default TodoList
