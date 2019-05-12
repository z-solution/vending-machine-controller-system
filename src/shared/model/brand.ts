export class Brand {
    name: string;
    quantity: number;
    price: number;
    image: string;

    constructor(name, quantity, price, image) {
        const s = this;
        s.name = name;
        s.quantity = quantity;
        s.price = price;
        s.image = image;
    }
}