"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    _product;
    _quantity;
    constructor(product, quantity) {
        this._product = product;
        this._quantity = quantity;
    }
    set product(product) {
        this._product = product;
    }
    get product() {
        return this._product;
    }
    set quantity(quantity) {
        this._quantity = quantity;
    }
    get quantity() {
        return this._quantity;
    }
    compare(product) {
        if (product.getPrice() > this.getPrice())
            return 1;
        if (product.getPrice() === this.getPrice())
            return 0;
        return -1;
    }
}
exports.AbstractSelling = AbstractSelling;
