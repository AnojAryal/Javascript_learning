// Monday -- 7 am
// Tues-Thurs --4am 
// Friday --8am
// sat-sun  --9am

let day = "Sunday"

switch(day){
    case 'Monday':
        console.log("7 am")
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("4 am")
        break;
    case 'Friday':
        console.log("8 am")
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("9 am")       
}

console.log("today is ", day)