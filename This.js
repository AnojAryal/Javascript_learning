// function getFast(laptop,laptop1)
// {
//     if(laptop.cpu > laptop1.cpu)
//         {
//     console.log(laptop.cpu)
//         }
//     else
//         {
//     console.log(laptop1.cpu)
//         }
// }

let laptop1 ={
    cpu : "i9",
    ram : 8,
    brand : "dell",


    getConfig: function(){
        console.log(this.cpu); //this represents the current object
    }

}

let laptop = {
    cpu : "i7",
    ram : 8,
    brand : "dell",

    compare : function(other){
        if(this.cpu > other.cpu)
            console.log(this.cpu)
        else
            console.log(other.cpu)
    },

    getConfig: function(){
        console.log(this.cpu); //this represents the current object
    }
}
laptop.compare(laptop1);
// getFast(laptop,laptop1);