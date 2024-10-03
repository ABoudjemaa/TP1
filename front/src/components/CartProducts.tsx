import React, { useState, useEffect } from 'react';
import { getCartProducts } from '../services/CartService';

export const CartProducts: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getCartProducts()
            setProducts(products);
        }
        fetchProducts();
    }, []);

    return (
        <div>
            <h3> Produits du panier: </h3>
            {
                products && products.map(product=> (
                    <li key={product.name}>{product.name} : {product.price}</li>
                ))
            }

        </div>
    )
}