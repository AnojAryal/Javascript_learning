let map = new Map();

map.set("Navin","Java");
map.set("Anoj","JS");
map.set("Sujta","HTML");


console.log(map.get("Sujta"));

for(let[k,v] of map){
    console.log(k,":",v)
}