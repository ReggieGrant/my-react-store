import { useState } from "react";
import "./productForm.css";

function ProductForm() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    category: "",
    image: "",
  });
  function handleInput(e) {
    let text = e.target.value;
    let name = e.target.name;
    console.log(name, text);

    //* 3 steps
    //- create a copy
    //- modify the copy
    //- set the copy back

    let copy = { ...product };
    if (name === "title") {
      copy.title = text;
    } else if (name === "price") {
      copy.price = text * 1; // parse it to a number
    } else if (name === "category") {
      copy.category = text;
    } else {
      copy.image = text;
    }
    setProduct(copy);
  }

  function save() {
    console.log("Saving...", product);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }
  return (
    <div className="product-form">
      <h3>Products</h3>

      <div>
        <label className="form-label">Title</label>
        <input onBlur={handleInput} type="text" className="form-control" />
      </div>
      <div>
        <label className="form-label">Price</label>
        <input onBlur={handleInput} type="text" className="form-control" />
      </div>
      <div>
        <label className="form-label">Category</label>
        <input onBlur={handleInput} type="text" className="form-control" />
      </div>
      <div>
        <label className="form-label">Image</label>
        <input onBlur={handleInput} type="text" className="form-control" />
      </div>
      <div className="controls">
        <button onClick={save} className="btn btn-primary">Save</button>
        <ul className="list">
          {allProducts.map((prod) => (
            <li>
              {prod.title} - ${prod.price} - {prod.category} - {prod.image}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductForm;
