import React, { useState } from 'react'
import "./App.css"
import TodoInputs from './components/TodoInputs'

function App() {
  const [todoList, setTodoList] = useState([]);

  let addTask = (inputText) => {
    setTodoList([...todoList, inputText]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInputs addTask={addTask}/>
      </div>
    </div>
  )
}

export default App