const add = function(a,b) {
  let add = a+b
	return Number(add);
};

const subtract = function(a,b) {
  let sub = a-b;
	return Number(sub);
};

const sum = function(arr) {
  let sum = 0;
  for (const element of arr) {
      sum+= element
  }
	return Number(sum);
};

const multiply = function(arr) {
  let mult=1;
  for (const element of arr) {
    mult*=  Number(element)
}
return mult;
};

const power = function(a,b) {
  let exp = a**b;
	return Number(exp);
};

const factorial = function(a) {
// a*a-1*a-2*a-3
if(a>1){
let res=a;
for (let i = 1; i <a; i++) {
     res*=(a-i);
}
return Number(res);
}
else if(a==0 || a==1) {
  return 1;
}

}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
