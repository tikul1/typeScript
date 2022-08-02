"use strict";
console.log("hello");
//type assertion
let x = 1;
let y = 3;
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
//tuple array
let tupleArray = [1, "hello", false,];
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
//function some will be converted to normal function. and it will accept string or array.
function some(name) {
    if (typeof name === "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
some("abcedfghi");
some(["z", "y", "x", "w"]);
//union type and array
let arr;
let i;
arr = [1, 2, 3, 4];
arr = ["a", "b", "c"];
//function using void
function addNum2(a) {
    console.log(a);
}
addNum2("hdash");
const user2 = {
    id: 1,
    name: "hardik",
    age: 29,
    sayHello: () => { return "hello"; }
};
console.log(user2);
console.log(user2.sayHello());
// let newOption:diffOptions = {option1: "tikulllll", option2: "parmarrr"}
// let newOption:diffOptions = {option1: "tikulllll", option2: ["parmarrr","a","b","c"]}
let newOption = { option1: "tikulllll", option2: () => { return "~~~~~~~~~~~~~~~~"; } };
let hardik = {
    [1]: "rollNum",
    name: "hardik"
};
//class 
class product {
    constructor(pName) {
        this.pName = pName;
    }
    func() {
        console.log("product: " + this.pName);
    }
}
let productObj = new product("mobile");
console.log("product name: " + productObj.pName);
productObj.func();
