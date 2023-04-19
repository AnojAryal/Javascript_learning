let nums = [1,2,3,4,5,6,7]

let[a,b,c,d,e,f,g] = nums;

console.log(a,nums);

let x=5;
let y=6;

[x,y] = [y,x]  //swapping the value using array destructive

console.log(x,y);

let words = "my name is anoj aryal".split(" ");

[h,i,j,k,l] = words;
console.log(k,l);

[h,,,...j] = words;
console.log(j);

console.log(words);