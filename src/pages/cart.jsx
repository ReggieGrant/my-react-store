import { useContext } from "react";
import GlobalContext from "../state/globalContext";
import "./cart.css";

function Cart() {
  const context = useContext(GlobalContext);
  return (
    <div className="cart">
      <h1>Cart Page</h1>

      <div className="parent">
        <ul className="list">
          {context.cart.map((prod) => (
            <>
              <li>
                <image src={"./images/"+ prod.image}></image>
                <h4>{prod.title}</h4> 
              </li>
              <li>
                <label>Quantity: {prod.quantity}</label>
              </li>
              <li>
                <label>Price: ${prod.price}</label>
              </li>
              <li>
                <label>Total: ${(prod.price * prod.quantity).toFixed(2)}</label>
              </li>
              <button className="btn btn-remove">Remove</button>
            </>
          ))}
        </ul>

        <div className="side-menu">
          <h3>Order Summary</h3>
          <h2>$9,999.99</h2>
          <button className="btn btn-pay">Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
