/*jshint esversion: 6 */

let chai = require('chai');
let should = chai.should();
let calc = require('../calculator');

describe('Add Functions', () => {
    describe('empty input', () => {
        it('should return empty string', () => {
            let res = calc.sum('');
            res.should.equal('');
        });
    });

    describe('one number', () => {
        it('should return number', () => {
            let res = calc.sum('5');
            res.should.equal(5);
        });
    });

    describe('two numbers', () => {
        it('should return sum', () => {
            let res = calc.sum('5,4');
            res.should.equal(9);
        });
    });

    describe('Many numbers', () => {
        it('should return sum', () => {
            let res = calc.sum('5,4,1');
            res.should.equal(10);
        });
    });
    describe('Many rows', () => {
        it('should return sum', () => {
            let res = calc.sum('1\n2,3');
            res.should.equal(6);
        });
    });
    describe('different separator', () => {
        it('should return sum', () => {
            let res = calc.sum('//;\n1;2');
            res.should.equal(3);
        });
    });
});