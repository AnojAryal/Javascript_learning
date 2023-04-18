function Alien(name,tech){
    this.name = name;
    this.tech = tech;

    this.work = function (){
        console.log("solving bugs from 12 hrs")
    }
}

let alien1 = new Alien("Anoj","JS")
let alien2 = new Alien("Ram","Python")

alien1.tech = "Java"

console.log(alien1);

alien1.work()
//we can create a constructor function and also add a method to it 