import { Teacher } from "./Teacher";
import { MathTeacher } from "./MathTeacher";
import { SportTeacher } from "./SportTeacher";

let MyMathTeacher = new MathTeacher();
let MySportTeacher = new SportTeacher();

// declare an array for teacher with empty initial value
let theTeacher: Teacher[] = [];

// add the teacher to the array
theTeacher.push(MyMathTeacher);
theTeacher.push(MySportTeacher);

for (let tempTeacher of theTeacher) {
  console.log(tempTeacher.getDailyActivity());
}
