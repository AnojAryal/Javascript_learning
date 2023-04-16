//expression ---- evaluates and then assign to particular variable

//js treats function as an object 

let add = function(num1 , num2)  //function is assigned to a variable called add
{
    return num1 + num2 ;
}

let result = add(5,6); //now we can treat add as a function

console.log(result);