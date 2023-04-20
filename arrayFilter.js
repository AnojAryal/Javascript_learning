//array method filter map reduce

let nums = [22,33,44,55,77,88];

let result =nums.filter(n => n%2===0)
    //map will take a value and change it 
    .map(n => n*2)
    .reduce((a,b) => a+b);


console.log(result);