import React from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const CartItem = ({ product }) => {
    const { formatPrice, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(ProductContext);
    
    return (
        <div className="cart-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="cart-item-details">
                <p className="cart-item-name">{product.name}</p>
                <p className="cart-item-price">{formatPrice(product.price)}</p>
                <p className="cart-item-quantity">
                <button onClick={() => decreaseQuantity(product)}>-</button>
                {product.quantity}
                <button onClick={() => increaseQuantity(product)}>+</button>
                </p>
                <p className="cart-item-total">
                {formatPrice(product.price * product.quantity)}
                </p>
                <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
        </div>
    );
}