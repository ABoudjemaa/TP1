import { Product } from '../Entities/Product';
import { Storable } from '../Interfaces/Storable';

export class GetCartProducts {
    constructor(private storage: Storable) {}

    execute(): Product[] {
        return this.storage.getProducts();
    }
}