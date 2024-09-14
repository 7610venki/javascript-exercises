const reverseString = function(text) {
let initial = text;
let reverese="";
for(let i=initial.length-1; i>=0;i--){
reverese+=initial[i];
}
return reverese;
};

// Do not edit below this line
module.exports = reverseString;
