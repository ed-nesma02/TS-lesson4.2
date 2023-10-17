"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class SecondSelling extends AbstractSelling_1.AbstractSelling {
    _quantityForDiscount;
    constructor(product, quantity, quantityForDiscount) {
        super(product, quantity);
        this._quantityForDiscount = quantityForDiscount;
    }
    set setQuantityForDiscount(quantityForDiscount) {
        this._quantityForDiscount = quantityForDiscount;
    }
    get quantityForDiscount() {
        return this._quantityForDiscount;
    }
    getPrice() {
        if (this._quantityForDiscount <= this._quantity) {
            return +(this._product.price * this._quantity * 0.9).toFixed(2);
        }
        return this._product.price * this._quantity;
    }
}
exports.SecondSelling = SecondSelling;
