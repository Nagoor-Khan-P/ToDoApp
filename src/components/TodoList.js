import React from 'react'

function TodoList(props) {
  return (
    <div>
        <li className="list-item">
        {props.item} 
        <span class="cancel-icon"><i class="fa-sharp fa-solid fa-xmark" onClick={e=>{
            props.deleteItem(props.index)
        }}></i></span>
        </li>
    </div>
  )
}

export default TodoList