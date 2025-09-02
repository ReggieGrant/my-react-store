import "./products.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Products(props) {
  useEffect(function () {
    console.log("hello im a product");
  }, []);

  return (
    <div className="products">
      <h2>{props.dataProps.title}</h2>
      <img src={"./images/"+props.dataProps.image}></img>
      <QuantityPicker />
    </div>
  );
}
export default Products;
