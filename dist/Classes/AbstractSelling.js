"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    product;
    quantity;
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    set setProduct(product) {
        this.product = product;
    }
    get getProduct() {
        return this.product;
    }
    set setQuantity(quantity) {
        this.quantity = quantity;
    }
    get getQuantity() {
        return this.quantity;
    }
}
exports.AbstractSelling = AbstractSelling;
