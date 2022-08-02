console.log("hello");

//type assertion
let x = <number> 1;
let y= 3 as number;

//normal variables 
const data1: string = "Tikul Parmar";
console.log(data1);
const data2: number = 1;
console.log(data2)
const data3: boolean = true;
console.log(data3);
let a: any = 2;
console.log(a); 

// array

let numberArray: number[] = [1,2,3,4]
let stringArray: string[] = ["a", "b" , "c" ]


//tuple array
let tupleArray: [number, string, boolean] = [1, "hello", false, ]

let anyArray: any[] = [1,"s",1,2,3,4,231,false, "hey"]

let twoValue: number | string = 2;

 enum xyz {
    a=1,
    b,
    c,
    d,
    e
}
console.log(xyz);

//objects

type user = {
    name: string,
    age: number,
    attendance: boolean
};
const user1:user = {
    name: "hardik",
    age: 29,
    attendance: true,
} 
console.log(user1);

//type assertion
let custId : any = 1;
let cId =custId as number

//function
function addNum(a:number, b:number) : number {
    console.log(a+b);
    return a+b;
}
addNum(10,20)



//function some will be converted to normal function. and it will accept string or array.

function some (name: string|string[]) {
    if( typeof name === "string")
    {
        console.log(name);
        
    }
    else{
        var i;
        for(i=0;i<name.length;i++){
            console.log(name[i]);
            
        }
    }
}
some("abcedfghi")
some(["z","y","x","w"])


//union type and array

let arr:number[]|string[];
let i:number;
arr=[1,2,3,4];
arr=["a", "b", "c"]

//function using void

function addNum2(a:number | string) : void {
    console.log(a);
    
}
addNum2("hdash")

//interfaces

interface userInterface  {
    readonly id: number,         //readonly so it cant be changed. e.g: used for unique id
    name: string,
    age? : number                   // ? is used for optional value
    sayHello : () => string 
}

const user2: userInterface = {
    id: 1,
    name: "hardik",
    age:29 ,                                 //here age is optionals.
    sayHello: ():string => {return "hello"}
}

console.log(user2);
console.log(user2.sayHello());


//interface with union types

interface diffOptions {
    option1:string;
    option2: string[]|string|(() => string);
}
// let newOption:diffOptions = {option1: "tikulllll", option2: "parmarrr"}
// let newOption:diffOptions = {option1: "tikulllll", option2: ["parmarrr","a","b","c"]}
let newOption:diffOptions = {option1: "tikulllll", option2: () => { return "~~~~~~~~~~~~~~~~"}}


//interfacess

interface student {
    [rollNo: number]: string,
    name: string,

}

let hardik:student =  {
    [1] : "rollNum",
    name: "hardik"
}



//class 

class product {
    pName: string;
    constructor(pName: string) {
        this.pName = pName
    }
    func():void {
        console.log("product: " +this.pName);
        
    }
}
let productObj = new product("mobile");
console.log("product name: " +productObj.pName);
productObj.func()

