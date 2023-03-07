import React from "react";
import { CartItems } from "./CartItems";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/cart">Cart <CartItems /></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
