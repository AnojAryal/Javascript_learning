//creating the function
function greet(){
    console.log("Hello World");
}

greet();

//returning the value in function
function greet1(){
    return ("Hello World")
}

let str = greet1();
console.log(str);

//passing the value in function
function greet2(user){
    return (`Hello ${user}!!`)
}
let user = "FraNzY"
let string = greet2(user);
console.log(string);