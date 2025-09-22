import { createContext } from "react";


const GlobalContext = createContext(
    {cart: [],
    addProductsToCart: () => {},
    clearCart: () => {} 
    }
);
export default GlobalContext;