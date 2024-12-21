import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(31, 23);
console.log(myShape.getInfo());

let myCircle = new Circle(15, 17, 22);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(3, 3, 7, 9);
console.log(myRectangle.getInfo());
