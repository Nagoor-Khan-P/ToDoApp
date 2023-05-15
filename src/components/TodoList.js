import React from 'react'

function TodoList(props) {
  return (
    <div>
        <li className="list-item">
        <input type="checkbox" class="custom-checkbox" id="myCheckbox" />
        {props.item} 
        <span class="cancel-icon"><i class="fa-solid fa-rectangle-xmark fa-xl" onClick={e=>{
            props.deleteItem(props.index)
        }}></i></span>
        </li>
    </div>
  )
}

export default TodoList