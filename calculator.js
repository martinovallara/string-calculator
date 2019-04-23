/*jshint esversion: 6 */

function sum(input) {
    //console.log('input: ' + input);
    let separator = ',';
    const patternDelimiter = /[\/]{2}(.*)\n/;
    if (patternDelimiter.test(input)) {
        separator = input.match(patternDelimiter)[1];
        //console.log('separator: ' + separator);
        input = input.replace('//' + separator + '\n', '');
    }
    return Adder(input, separator);

    function Adder(input, separator) {
        //console.log('Adder("' + input + '", "' + separator + '")');
        input = input.replace('\n', separator);
        if (input == '') return input;
        const numbers = input.split(separator);
        if (numbers.some(negative)) {
            throw new TypeError('negative numbers not allowed: ' + numbers.filter(negative));
        }
        result = numbers
            .map(Number)
            .reduce(add);
        return result;
    }


    function add(acc, curr) {
        return acc + curr;
    }

    function notBigNumber(n) {
        return n > 1000;
    }

    function negative(n) {
        return n < 0;
    }
}

module.exports = {
    sum: sum
};