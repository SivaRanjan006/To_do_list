import React from "react";
import ItemList from "./ItemList";

const Content2 = ({ items, handleDelete, handleChange }) => {

  return (
    <main className="contentContainer">
      <ItemList
        items={items}
        handleDelete={handleDelete}
        handleChange={handleChange}
      />
    </main>
  );

};

export default Content2;