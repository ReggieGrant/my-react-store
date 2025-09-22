import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){
const[cart, setCart] = useState([]);

function addProductsToCart(prod){
    console.log("adding to cart from global context");

    let copy = [...cart];
    copy.push(prod);
    setCart(copy);

}
function clearCart(){

}

    return(
        <GlobalContext.Provider value={{
            cart: cart,
            addProductsToCart: addProductsToCart,
            clearCart: clearCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;