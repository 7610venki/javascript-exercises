const removeFromArray = function(inputArray, ...args) {

    let receivedArray  = inputArray;

    for (let index = 0; index < args.length; index++) {
        let num = receivedArray.indexOf(args[index]);

    while (receivedArray.includes(args[index])) {
        receivedArray.splice(num,1);
        }   
    }
    return receivedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
