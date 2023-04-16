

let alien = {
    Name : 'Franzy',
    tech : 'JS',
    laptop :{
        cpu : 'i7',
        ram : 8,
        brand : 'asus'
    }
}

console.log(alien);


//key is not the part of the object

for(let key in alien.laptop){
    console.log(key, alien.laptop[key]);
}