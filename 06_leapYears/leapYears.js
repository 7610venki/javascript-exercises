const leapYears = function(lp) {
if(lp%400==0 && lp%100==0){
        return true;
    }
else if (lp%4==0){
    if(lp%100==0){
        return false;
    }
    else {return true;}
}
else {return false}
};

// Do not edit below this line
module.exports = leapYears;

//optimized logic
// Leap Year Rule:
// A year is a leap year if:
// It is divisible by 400 or
// It is divisible by 4 and not divisible by 100.

// const leapYears = function(lp) {
//     return (lp % 400 === 0) || (lp % 100 !== 0 && lp % 4 === 0);
//   };
  
