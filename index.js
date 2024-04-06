// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let newarray=[...drivers];
const returnFirstTwoDrivers = function (){
  
    let firstTwo = newarray.slice(0,2);
    return firstTwo;
}
const returnLastTwoDrivers = function(){
    let lastTwo =  newarray.slice(2,4);
    return lastTwo;
}

const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(x){
    return function(fare){
        return fare * x   }
}

const fareDoubler = function(fare){
     return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
        return createFareMultiplier(3)(fare);
} 

function selectDifferentDrivers(array,fn){
    if (fn === returnFirstTwoDrivers){
        return returnFirstTwoDrivers();
    }
    else if ( fn === returnLastTwoDrivers){
        return returnLastTwoDrivers();
    }
}