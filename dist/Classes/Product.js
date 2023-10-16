"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    set setName(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setPrice(price) {
        this.price = price;
    }
    get infoPrice() {
        return this.price;
    }
}
exports.Product = Product;
