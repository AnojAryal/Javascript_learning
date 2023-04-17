let user = "FraNzY"  //created outside global variable

//we can use global variables inside the function

function greet2(u){   //created inside the greet2 function local variable 
    return (`Hello ${u}!!`)
}

let string = greet2(user);
console.log(string);


function add(num1,num2,num3)
{
    return num1 + num2 + num3;
}

let result = add(5,6,11);
console.log(result);