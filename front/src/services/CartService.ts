// frontend/src/services/CartService.ts
export async function addProductToCart(name: string, price: number) {
    await fetch('http://localhost:3000/cart/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price }),
    });
}

export async function getCartProducts() {
    const response = await fetch('http://localhost:3000/cart/products');
    const data = await response.json();
    return data.products;
}

export async function getCartTotal() {
    const response = await fetch('http://localhost:3000/cart/total');
    const data = await response.json();
    return data.total;
}