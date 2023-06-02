import { createContext, useState } from "react";

export const shoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    //Conteo de productos agregados al carrito
    const [count, setCount] = useState(0)

    //Add to cart
    const [cartProducts, setCartProducts] = useState([])

    return (
        <shoppingCartContext.Provider value={
            {
                count,
                setCount,
                cartProducts,
                setCartProducts
            }

        }>
            {children}
        </shoppingCartContext.Provider>
    )
 }
