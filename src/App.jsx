import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import "./index.css";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(list);
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  console.log(items);
  localStorage.setItem("list", JSON.stringify(items));
};

function App() {
  const [item, setItem] = useState(getLocalStorage);

  const addItems = (itemname) => {
    const newItem = {
      id: nanoid(),
      name: itemname,
      completed: false,
    };
    const newVal = [...item, newItem];
    setItem(newVal);
    setLocalStorage(newVal);
    toast.success("item added to the list");
  };

  const editItem = (itemId) => {
    const newItems = item.map((itm) => {
      if (itm.id === itemId) {
        const newItem = { ...itm, completed: !itm.completed };
        return newItem;
      }
      return itm;
    });
    setItem(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = item.filter((itm) => itemId !== itm.id);
    setItem(newItems);
    setLocalStorage(newItems);
    toast.success("item deleted");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItems={addItems} />
      <Items items={item} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
