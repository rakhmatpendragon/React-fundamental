import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 10);
let myCircle = new Circle(10, 10, 20);
let myRectangle = new Rectangle(10, 10, 20, 30);

// declare array of Shape with empty initial value
let theShape: Shape[] = [];

theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectangle);

for (let tempShape of theShape) {
  console.log(tempShape.getInfo());
}
