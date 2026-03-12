import React from 'react'
import { FaTrash } from "react-icons/fa";
const LineItem = ({item,handleChange,handleDelete}) => {
  return (
    <div>
       <li className="list-item" key={item.id}>
                    <input 
                    type="checkbox" 
                    onChange={()=>handleChange(item.id)}
                    checked={item.checked}/>
                    <label>{item.item}</label>
                    <FaTrash 
              id="del"
              className="trash-icon"
             onClick={()=>handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />  
                  </li>
    </div>
  )
}

export default LineItem
