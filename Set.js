let nums = new Set()

nums.add(3)
nums.add(5)
nums.add(9)
nums.add('shyam')
nums.add(5)
nums.add('hari')


nums.forEach(value =>{
    console.log(value);
})

console.log(nums);

console.log(nums.has(5));
console.log(nums.has('shyam'));
console.log(nums.has(7));