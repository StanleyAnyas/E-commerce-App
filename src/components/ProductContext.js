import React from "react";
import { createContext } from "react";
import { useReducer } from "react";

const initialState = {
    products: [],
    cart: [],
    cartItems: 0,
    filter: null,
    sort: null,
    dispatch: null,
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(price);
    };

    const calculateTotal = (items) => {
        return items.reduce((total, item) => {
            return (total += item.price * item.quantity);
        }, 0);
    };

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    };

    const removeFromCart = (product) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
    };

    const increaseQuantity = (product) => {
        dispatch({ type: "INCREASE_QUANTITY", payload: product });
    };

    const decreaseQuantity = (product) => {
        dispatch({ type: "DECREASE_QUANTITY", payload: product });
    };

    const calculateAverageRating = (reviews) => {
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((total, review) => {
            return (total += review.rating);
        }, 0);
        return sum / reviews.length;
    };
    return (
        <ProductContext.Provider value={{ ...state, dispatch, formatPrice,
            calculateTotal, addToCart, removeFromCart, increaseQuantity,
            decreaseQuantity, calculateAverageRating
        }}>
            {children}
        </ProductContext.Provider>
    );
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
                cartItems: state.cartItems + 1,
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload.id
                ),
                cartItems: state.cartItems - 1,
            };
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: [],
                cartItems: 0,
            };
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            };
        case "SET_SORT":
            return {
                ...state,
                sort: action.payload,
            };
        default:
            return state;
    }
};
