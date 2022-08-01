"use strict";
console.log("hello");
//normal variables 
const data1 = "Tikul Parmar";
console.log(data1);
const data2 = 1;
console.log(data2);
const data3 = true;
console.log(data3);
let a = 2;
console.log(a);
// array
let numberArray = [1, 2, 3, 4];
let stringArray = ["a", "b", "c"];
let tupleArray = [1, "hello", false];
let anyArray = [1, "s", 1, 2, 3, 4, 231, false, "hey"];
let twoValue = 2;
var xyz;
(function (xyz) {
    xyz[xyz["a"] = 1] = "a";
    xyz[xyz["b"] = 2] = "b";
    xyz[xyz["c"] = 3] = "c";
    xyz[xyz["d"] = 4] = "d";
    xyz[xyz["e"] = 5] = "e";
})(xyz || (xyz = {}));
console.log(xyz);
const user1 = {
    name: "hardik",
    age: 29,
    attendance: true,
};
console.log(user1);
//type assertion
let custId = 1;
let cId = custId;
//function
function addNum(a, b) {
    console.log(a + b);
    return a + b;
}
addNum(10, 20);
