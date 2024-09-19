const palindromes = function (text) {

    let original = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/\s+(?=\S)/g, '');
    let reversed =  Array.from(original);
        reversed =  reversed.reverse().join(''); 
        if (original.toLowerCase()===reversed.toLowerCase()) {
            return true;
        }
        else {return false}
};

// Do not edit below this line
module.exports = palindromes;
