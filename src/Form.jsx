import React, { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItems }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("please provide value");
      return;
    }
    addItems(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn">add item</button>
      </div>
    </form>
  );
}

export default Form;
