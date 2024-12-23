"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MathTeacher_1 = require("./MathTeacher");
const SportTeacher_1 = require("./SportTeacher");
let MyMathTeacher = new MathTeacher_1.MathTeacher();
let MySportTeacher = new SportTeacher_1.SportTeacher();
// declare an array for teacher with empty initial value
let theTeacher = [];
// add the teacher to the array
theTeacher.push(MyMathTeacher);
theTeacher.push(MySportTeacher);
for (let tempTeacher of theTeacher) {
    console.log(tempTeacher.getDailyActivity());
}
