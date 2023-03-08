import React from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const ProductItem = ({ product }) => {
    const { addToCart } = useContext(ProductContext);
    return (
        <div className="product" key={product.id}>
        <img src={`/public/images/${product.image}`} alt={product.name} />
        <div className="product-details">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
        </div>
    );
    }