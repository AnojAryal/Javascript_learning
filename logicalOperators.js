let x = 7 , y = 8 , z = 9 

// when we have to comapare and compile multiple variables we use logical operators

// we use & for and , | for + (or) , ! for not in js 

let data = x < y && x < z
console.log(data);

let data1 = x < y && x > y 
console.log(data1);

let data2 = x < y || x < z 
console.log(data2);

let data3 = x < y || x > z 
console.log(data3);

let data4 = x < y && x < z 
let n = !data
console.log(n);

let data5 = x < y && x > y 
let m = !data5
console.log(data5, m);


