import React, { useContext } from "react";
import OrderCard from "../components/OrderCard";
import { shoppingCartContext } from "../context";
import { subtotalPrice, totalPrice } from "../utils";

function Cart () {
    const context = useContext(shoppingCartContext)

    const handleDelete = (id) => {
        context.setCount(context.count - 1) //SOLUCION BAJAR CONTEO
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <div className="titleComponent">
            <h1>Cart</h1>
            <div>
                {
                    context.cartProducts.map(product => (

                            <div key={product.id}>
                                <OrderCard
                                    id={product.id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    gender={product.gender}
                                    handleDelete={handleDelete}
                                />
                            </div>
                    ))
                }
                <div class="card2 checkout">
                <label class="title2">Checkout</label>
                <div class="details">
                    <span>Your cart subtotal:</span>
                    <span>{subtotalPrice(context.cartProducts).toFixed(2)}$</span>
                    <span>Shipping fees:</span>
                    <span>4.99$</span>
                </div>
                <div class="checkout--footer">
                    <label class="price"><sup>$</sup>{totalPrice(context.cartProducts).toFixed(2)}</label>
                    <button class="checkout-btn">Checkout</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
