const getTheTitles = function(books) {

let arr=[];

    for (const book of books) {
        console.log(book);
        arr.push(book.title);
    }
console.log(arr);
return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
