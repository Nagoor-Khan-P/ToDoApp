import React, { useState } from 'react'
import "./App.css"
import TodoInputs from './components/TodoInputs'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([]);

  let addTask = (inputText) => {
    if(inputText!='')
      setTodoList([...todoList, inputText]);
  }

  const deleteListItem= (key) =>{
    let newTodoList = [...todoList];
    newTodoList.splice(key,1);
    setTodoList([...newTodoList]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">ToDo List</h1>
        <hr/>
        {todoList.map((listItem, i)=>{
          return(<TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>)
        })}
        <TodoInputs addTask={addTask}/>
      </div>
    </div>
  )
}

export default App