import "./products.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../state/globalContext";

function Products(props) {
  const[totalPrice, setTotalPrice] = useState(1);

  const context = useContext(GlobalContext);

  useEffect(function () {
    console.log("hello im a product");
  }, []);

  function onQuantityChange(newQuantity){
    console.log("the new quantity is: "+newQuantity);
    setTotalPrice(newQuantity);
  }

  function addToCart(){
    console.log("adding to cart");
    let prod = {...props.dataProps, quantity: totalPrice };
    context.addProductsToCart(prod);
    //- create a copy of the product
    //- add the quantity property to it
    //- send it to the global context
    
  }

  return (
    <div className="products">
      <h2>{props.dataProps.title}</h2>
      <img src={"./images/"+props.dataProps.image}></img>
      <label>{props.dataProps.price}</label>
      <label>Total: {(props.dataProps.price * totalPrice).toFixed(2)}</label>
      {/* calculate the total price according to the quantity picker (round to 2 decimals) */}
      {/* create a new variable that you can add the products */}
      
      <QuantityPicker onChange={onQuantityChange} />
      <button onClick={addToCart} className="btn btn-add">Add to Cart</button>
    </div>
  );
}
export default Products;
