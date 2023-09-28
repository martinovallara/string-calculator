/*jshint esversion: 6 */

let chai = require('chai');
var expect = chai.expect;
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
    describe('negative numbers not allowed ', () => {
        it('throw exception', () => {
            sut = function() {calc.sum('//;\n1;-2');};
            expect(sut).to.throw('negative numbers not allowed: -2');
        });
    });
    /**
     *    describe('ignore big numbers', () => {
        it('return sum without bib number', () => {
            let res = calc.sum('1001,2');
            res.should.equal(2);
        });
    });
     */
 
});