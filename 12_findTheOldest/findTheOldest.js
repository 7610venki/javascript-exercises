const findTheOldest = function(persons) {
    
const currentYear = new Date().getFullYear();

let arr = persons.map((person)=> {
    if(person.yearOfDeath==undefined){
        person.yearOfDeath =currentYear;
    }
    if(person.yearOfBirth==undefined){
        person.yearOfBirth =currentYear;
    }
    let age = person.yearOfDeath-person.yearOfBirth;
    return { name: person.name, age: age };
})
console.log("Refined array with age calculation "+arr);
//
let newArray=[];
for (const ar of arr) {
    newArray.push(ar.age);
}
console.log("Age only array data is " + newArray);
//
newArray.sort((a,b)=>a-b);
let getAge = newArray[newArray.length-1];
console.log("Highest Age is "+getAge)
//
for (const newAr of arr) {
    if(newAr.age==getAge){
        console.log(typeof newAr.name)
        return newAr;
        
    }
}

};

// Do not edit below this line
module.exports = findTheOldest;
