let age=8
if(age>18){
    console.log("you are an adult")
    
}else if(age<18 && age>12){
    console.log("you are tenager")
    
}else{
    console.log("you are child")
}



let day="monday"
switch(day){
    case "monday":
        console.log("today is monday")
        break;
    case "tuesday":
        console.log("today is tuesday")
        break;
    case "wedensday":
        console.log("today is wedensday")
        break;
    case "thursday":
        console.log("today is thurday")
        break;
    case "friday":
        console.log("today is friday")
        break;
    case "saturday":
        console.log("today is saturday")
        break;
    case "sunday":
        console.log("today is sunday")
        break;
        

    default:
        console.log("this is not a day of week")
        break;
        


}

day==="tuesday" ? console.log("it is truely tuesday") :  console.log("it is not tuesday") 



let weather="suny"
switch(weather){
    case "rainy":
        console.log("you need to carry a jacket")
        break;
    case "cloudy":
        console.log("you need to carry a coat")
        break;
    case "suny":
        console.log("you need only a shirt")
        break;
    

    

    default:
        console.log("you need to carry nothing with you")
        break;
        


}


