import Products from "../componets/products.jsx";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../dataService/data";

function Catalog(){
    const[productsGlobal, setProductsGlobal] = useState([]);

    useEffect(function(){
                console.log("Componet loaded");
                loadCatalog();
            },[]);
            

            function loadCatalog(){
                // get the products from the service
                let service = new DataService();
                let products =  service.getProducts();
                console.log(products);
                setProductsGlobal(products);
                // using this logic do the same but into the products componet (just the use Effect)
            }
            <Products />

    return(
        <div className="catalog">
            <h2>Catalog Page</h2>
            <h3>Hello we have {productsGlobal.length} new products</h3>
            {productsGlobal.map(temporal => <Products dataProps={temporal} key={temporal.id}/>)}
            

        </div>
    )
};
export default Catalog;