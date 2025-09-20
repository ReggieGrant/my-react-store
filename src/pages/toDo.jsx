import "./toDo.css";

import React, { useState } from "react";
import "./toDo.css";

function ToDo() {
  const [input, setInput] = useState("");
  const [allItems, setAllItems] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const save = () => {
    if (input.trim() === "") return;
    setAllItems([
      ...allItems,
      { id: Date.now(), text: input }
    ]);
    setInput("");
  };

  const deleteItem = (id) => {
    setAllItems(allItems.filter(item => item.id !== id));
  };

  return (
    <div className="todo">
      <h1>Shopping List</h1>

      <div>
        <label className="form-label">Item:</label>
        <input
          onBlur={handleInput}
          value={input}
          onChange={e => setInput(e.target.value)}
          name="text"
          type="text"
          className="form-control"
        />
      </div>
      <div className="controls">
        <button onClick={save} className="btn btn-primary">Add Item</button>
        <ul className="list">
          {allItems.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => deleteItem(item.id)} className="btn btn-danger btn-sm">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;




