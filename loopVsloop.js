//we use for loop if everything is defined 

for(let i=1;i<=100;i++)
{
    if(i%2===0)
        console.log(i);
    
}

//we use while loop whwn we know the condition but dont know ending point

let num = 123456;
let reversed = 0;

while (num > 0) {
  reversed = (reversed * 10) + (num % 10);
  num = parseInt(num / 10);
}

console.log(reversed);
