"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _name;
    _price;
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price;
    }
}
exports.Product = Product;
