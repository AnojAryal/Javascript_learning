let greet =(user) =>    //arrow unction
{
    console.log("hello " +user + "!!");
    return 1; 
}

console.log(greet('FraNzY'));



//no need to mention {} when arrow function has only one line
let add = (num1,num2,num3) => num1 + num2 + num3; 
//no need retuen to just condition
let sum = add

let result = sum(5,6,11);
console.log(result);