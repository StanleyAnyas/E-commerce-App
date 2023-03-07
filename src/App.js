import './App.css';
import React from 'react';
import { ProductProvider } from './components/ProductContext';
import { CartItem } from './components/CartItem';
import { CartItems } from './components/CartItems';
import { Cart } from './components/Cart';
import { ProductItem } from './components/ProductItem';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <ProductProvider>
       <ProductItem />
        <ProductList />
        <Cart />
        <CartItems />
        <CartItem />
      </ProductProvider>
    </div>
  );
}

export default App;
