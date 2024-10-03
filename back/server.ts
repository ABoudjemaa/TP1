// server.ts
import express from 'express';
import { InMemoryStorage } from './Repositories/InMemoryStorage';
import { CartController } from './Controllers/CartController';
const cors = require('cors');
const app = express();

// Enable CORS for all origins or specify your frontend's origin
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
}));


app.use(express.json());

const storage = new InMemoryStorage(); // Vous pouvez changer pour LocalStorage
const cartController = new CartController(storage);


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    app.get('/cart/total', (req, res) => cartController.getTotal(req, res));
    app.get('/cart/products', (req, res) => cartController.getProducts(req, res));
    app.post('/cart/products', (req, res) => cartController.addProduct(req, res));
});