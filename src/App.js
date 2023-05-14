import React from 'react'
import "./App.css"
import TodoInputs from './components/TodoInputs'

function App() {
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInputs />
      </div>
    </div>
  )
}

export default App