import Products from "../componets/products.jsx";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../dataService/data";

function Catalog() {
  const [productsGlobal, setProductsGlobal] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    console.log("Component loaded");
    loadCatalog();
  }, []);

  function filter(category) {
    console.log(category);
    setActiveCategory(category);
    
    let filteredProducts = [];
    for (let i = 0; i < productsGlobal.length; i++) {
      let temp = productsGlobal[i];
      if (temp.category === category) {
        filteredProducts.push(temp);
      }
    }
    setProductsToDisplay(filteredProducts);
    console.log(filteredProducts);
  }

  function clearFilter(){
    setActiveCategory('all');
    setProductsToDisplay(productsGlobal);
  }

  async function loadCatalog() {
    try {
      setLoading(true);
      // Get the products from the service
      let service = new DataService();
      let products = service.getProducts();
      console.log(products);
      setProductsGlobal(products);
      
      let categoriesLocal = ["smart tv", "computers", "smartphones", "utils"];
      setCategories(categoriesLocal);
      setProductsToDisplay(products);
      setLoading(false);
    } catch (error) {
      console.error('Error loading catalog:', error);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="catalog">
        <div className="catalog-loading"></div>
      </div>
    );
  }

  return (
    <div className="catalog">
      <h2>Product Catalog</h2>
      
      <div className="catalog-count">
        <h3>Discover {productsGlobal.length} amazing products</h3>
      </div>

      {/* Filter Buttons */}
      <div className="catalog-filters">
        <button 
          onClick={clearFilter} 
          className={`btn btn-warning m-1 ${activeCategory === 'all' ? 'active' : ''}`}
        >
          All Products
        </button>
        
        {categories.map((catTemp) => (
          <button
            onClick={() => filter(catTemp)}
            key={catTemp}
            className={`btn btn-info m-1 ${activeCategory === catTemp ? 'active' : ''}`}
          >
            {catTemp}
          </button>
        ))}
      </div>

      {/* Products Display */}
      {productsToDisplay.length === 0 && !loading ? (
        <div className="catalog-empty">
          <h3>No products found</h3>
          <p>Try selecting a different category or clear the filters.</p>
        </div>
      ) : (
        <div className="catalog-products">
          {productsToDisplay.map((temporal) => (
            <Products dataProps={temporal} key={temporal.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Catalog;
