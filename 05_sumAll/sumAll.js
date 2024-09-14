const sumAll = function(num1,num2) {

    let result=0;
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1>-1 && num2>-1)  {
            if(num1<num2){
            while (num1 <=num2) {
                result+=num1;
                num1++;
            }
            return result;
           } 
           else{
            while (num2 <=num1) {
                result+=num2;
                num2++;
            }
            return result;
           }
    }
    else {
        return "ERROR";  
        }
};

// Do not edit below this line
module.exports = sumAll;
