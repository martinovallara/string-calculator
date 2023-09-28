/*jshint esversion: 6 */
const { SeparatorParser } = require("./SeparatorParser");
let add = require("./add");

const parseNumbers = ({parsedInput, separator}) => parsedInput.replace('\n', separator).split(separator);

const sum = (input) => {
    const separatorParser = new SeparatorParser(input)

    const parseResult = separatorParser.parse()
    const numbers = parseNumbers(parseResult);

    return add(numbers);
}

module.exports = { sum }; 