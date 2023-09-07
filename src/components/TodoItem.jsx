import React, { useState } from 'react'

function TodoItem({ todo }) {
  const [done, setDone] = useState(false)
  return (
    <div
      onClick={() => {
        setDone(!done)
      }}
      className={done ? 'todo_done' : 'todo_item'}>
      <h2>{todo.todo}</h2>
    </div>
  )
}

export default TodoItem
