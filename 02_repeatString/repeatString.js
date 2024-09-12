const repeatString = function(nameToBeRepeated,NoOfTimes) {
let result="";
if(NoOfTimes>=0){
for(let i=0;i<NoOfTimes;i++){
result+=nameToBeRepeated;
}   
return result;
}
else{return "ERROR"}
}

// Do not edit below this line
module.exports = repeatString;
