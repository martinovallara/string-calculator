
isNegative = (n) => n < 0;
is_empty = (numbers) => numbers.length === 1 && numbers[0] === '';

add = (numbers) => {
    if (is_empty(numbers)) {
        return numbers[0];
    }

    if (numbers.some(isNegative)) {
        throw new TypeError('negative numbers not allowed: ' + numbers.filter(isNegative));
    }

    return numbers.map(Number).reduce((acc, curr) => acc + curr);

};

module.exports = add;