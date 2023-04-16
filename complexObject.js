//having an object inside the object is called complex object


let alien = {
    Name : 'Franzy',
    tech : 'JS',
    laptop :{
        cpu : 'i7',
        ram : 8,
        brand : 'asus'
    }
}

console.log(alien.Name);
console.log(alien.laptop);
console.log(alien.laptop.brand);
console.log(alien.laptop.brand.length);
console.log(alien.laptop.brand1?.length); //? will chech weather it is avail or not
//whenever you want to use the property that you are not sure of use ? to avoid errors

//we have a option of using delete also 
delete alien.laptop

console.log(alien);