"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(31, 23);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(15, 17, 22);
console.log(myCircle.getInfo());
let myRectangle = new Rectangle_1.Rectangle(3, 3, 7, 9);
console.log(myRectangle.getInfo());
