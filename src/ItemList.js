import React from "react";
import Item from "./LineItem";

const ItemList = ({ items, handleDelete, handleChange }) => {

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );

};

export default ItemList;