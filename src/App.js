import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar } from './components';

// rafce
const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchcart = async () => {
        setCart(await commmerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const response = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <div>
            <Navbar />
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default App;

