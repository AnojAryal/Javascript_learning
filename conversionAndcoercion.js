let num = 10
console.log(num, typeof num);

let n = String(10)
console.log(n , typeof n );

let x 
console.log(x , typeof x );

x = 8
console.log(x , typeof x );

x = x + ""
console.log(x , typeof x );

x = x-3 
console.log(x , typeof x );

//coercion refers to the automatic conversion of one data type to another.

x =! x
console.log(x , typeof x );
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
//except of this others are true in case of boolean 
console.log(Boolean(7));

console.log(Boolean("FraNzY"));  //since its not the part of false value its true

let y = "123 Anoj"
console.log(y);

let z = Number("123 Anoj")
console.log(z);

let c = parseInt("123.22 Anoj")
console.log(c);

let d = parseInt("bc 123 Anoj")
console.log(d);

let e = parseFloat("123.22 Anoj")
console.log(e);
