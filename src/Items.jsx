import React from "react";
import SingleItem from "./SingleItem";
import { nanoid } from "nanoid";

function Items({ items, removeItem, editItem }) {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={nanoid()}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
}

export default Items;
