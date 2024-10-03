// frontend/src/components/ProductComponent.tsx
import React, { useState } from 'react';
import { addProductToCart } from '../services/CartService';

export const ProductComponent: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addProductToCart(name, price);
        setName('');
        setPrice(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom du produit"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Prix"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
            />
            <button type="submit">Ajouter au panier</button>
        </form>
    );
};