/*jshint esversion: 6 */

function sum(input) {

    let separator = ',';
    if (input.includes('//') && input.includes('\n')) {
        separator = input.split('//')[1].split('\n')[0];
        input = input.replace('//' + separator + '\n', '');
    }
    return Adder(input, separator);

    function Adder(input, separator) {
        input = input.replace('\n', separator);
        if (input == '') return input;
        result = input.split(separator)
            .map(Number)
            .reduce(add);
        return result;
    }


    function add(acc, curr) {
        return acc + curr;
    }
}

module.exports = {
    sum: sum
}