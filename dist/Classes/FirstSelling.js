"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class FirstSelling extends AbstractSelling_1.AbstractSelling {
    constructor(product, quantity) {
        super(product, quantity);
    }
    getPrice() {
        return (this._product.price - 10) * this._quantity;
    }
}
exports.FirstSelling = FirstSelling;
