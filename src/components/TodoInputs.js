import React, { useState } from 'react'

function TodoInputs(props) {
  const [inputText, setInputText] = useState('');
  return ( 
    <div className="input-container">
      <input type="text" className="input-box-todo" placeholder='Add task here...' value={inputText} onChange={e=>{setInputText(e.target.value)}}/>
      <button className="add-btn" onClick={()=> {
        props.addTask(inputText)
        setInputText("")
      }}>Add</button>
    </div>
  )
}

export default TodoInputs