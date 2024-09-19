const fibonacci = function(num) {

    let a = 1;
    let b = 1;
    let temp;
    let arr =[1];

    if(num==0){return 0;}
    if(num<0){return "OOPS";}
    
    for(i=1;i<num;i++){
    temp = a+b; //1+0 = 1
    a = b;
    b = temp;
    arr.push(a);
    }
    
    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
