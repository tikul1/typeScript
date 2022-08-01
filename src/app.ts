console.log("hello");
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

let tupleArray: [number, string, boolean] = [1, "hello", false]

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
