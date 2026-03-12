import React from "react";
import { FaPlus } from "react-icons/fa";
const AddItem = ({handleSubmit,newItem,setNewItem}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>

      <input
        autoFocus
        placeholder="Add items..."
        id="addItem"
        type="text"
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
      />
      <button className="addBtn" type="submit"><FaPlus/></button>
    </form>
  );
};

export default AddItem;
