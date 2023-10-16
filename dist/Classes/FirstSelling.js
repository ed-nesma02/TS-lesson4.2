"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class FirstSelling extends AbstractSelling_1.AbstractSelling {
    constructor(product, quantity) {
        super(product, quantity);
    }
    getPrice() {
        return (this.product.infoPrice - 10) * this.quantity;
    }
    compare(product) {
        if (product.getPrice() > this.getPrice())
            return 1;
        if (product.getPrice() === this.getPrice())
            return 0;
        return -1;
    }
}
exports.FirstSelling = FirstSelling;
