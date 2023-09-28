/*jshint esversion: 6 */
let add = require("./add");

const parseNumbers = (input, separator) => input.replace('\n', separator).split(separator);

const sum = (input) => {
    const patternDelimiter = /\/{2}(.*)\n/;

    let separator = ',';
    let parsedInput = input;

    if (patternDelimiter.test(input)) {
        separator = input.match(patternDelimiter)[1];
        parsedInput = input.replace(`//${separator}\n`, '');
    }

    const numbers = parseNumbers(parsedInput, separator);
    return add(numbers);
}

module.exports = { sum }; 