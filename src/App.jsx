import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./list";

function App() {
  let [item, setItem] = useState("");
  let [items, setItems] = useState([]);

  function addItem() {
    if(item.trim()== '')return;
    setItems([...items, item]);
    setItem("");
  }
  return (
    <div className="todo-container">
      <label>
        <h2>TO-DO LIST</h2>
      </label>

      <input
        className="input1"
        type="text"
        placeholder="Enter your value"
        onChange={(x) => setItem(x.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addItem();
          }
        }}
      />
      <button onClick={addItem}>Add Item</button>
      <List uo={items} />
    </div>
  );
}

export default App;
