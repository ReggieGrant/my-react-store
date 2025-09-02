// here is the imports
import "./quantityPicker.css";
import { useState } from "react";

// here goes the logic
function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);
  // quantity = 5; this is wrong
  // setQuantity(5); this is correct
  function increase() {
    setQuantity(quantity + 1);
  }
  // please create the decrese function but it should not go below 1
  function decrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
// here goes the return 
  return (
    <div className="quantity-picker">
      <button onClick={decrease} disabled={decrease===1}>-</button>
      {/* if i want to diable the - button when quantity is 1, which logic will you use? */}
      <label>{quantity}</label>
      <button onClick={increase}>+</button>
    </div>
  )
}

// here goes the export
export default QuantityPicker;
