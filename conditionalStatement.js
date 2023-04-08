// if esle 

let num1 = 3;
let num2 = 5;

if(num1 > num2)
    console.log(num1 ,"is greater");
else
    console.log(num2 , "is greater" );

console.log("Bye....");


//by default each block will only have one statement 


//for multiple statements we have to define by --{} 

let num3 = 5;
let num4 = 8;

if(num3 > num4)
    console.log(num3 ,"is greater");
else{
    console.log(num4 , "is greater" );
    console.log("wow! num4 is greater");
}

console.log("Bye have fun....");


//for multiple conditions 


let num5 = 5;
let num6 = 8;
let num7 = 10;

if(num5 > num6 && num5 > num7)
    console.log(num5 ,"is greater");

else if(num6 > num5 && num6 > num7)
    console.log(num6, "is greater" );

else
    console.log(num7 , "is greater")
   
console.log("Bye have fun....");
