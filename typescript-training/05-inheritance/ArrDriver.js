"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 10);
let myCircle = new Circle_1.Circle(10, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(10, 10, 20, 30);
// declare array of Shape with empty initial value
let theShape = [];
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectangle);
for (let tempShape of theShape) {
    console.log(tempShape.getInfo());
}
