//object literal

let alien = {}

console.log(alien);
console.log(typeof(alien));

let input ='Name'

let Franzy = {
    Name : 'Anoj',
    tech : 'JS',
    'work exp': 4,
}

console.log(Franzy);
console.log(Franzy.Name);
console.log(Franzy['tech']);
console.log(Franzy['work exp']); //yo cant use . operater to fetch this kind of value 

//when we are evaluating the expression of user to fetch the value we should use "[]"
console.log(Franzy[input]);