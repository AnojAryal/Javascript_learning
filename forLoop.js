//to print same statement for 10 times

//initalize , condition , increment/decrement

//but in for loop we initalize , condition , increment/decrement in same line



for(let i=1;i<=10;i++) 
{
    console.log("Hi"+ "-----" + i);
}

//but there is no compulsion we should write everything in 1 line


let a = 1;

for(;a<=5;)
{
    console.log("hello");
    a++
}

//lets try nested loop 

for(let k=1;k<=3;k++) 
{
    console.log(k);

    for(let l=1;l<=5;l++)
        console.log("Hi")
}