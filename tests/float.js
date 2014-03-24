var assert = require('assert'),
		f = require('../src/float');

describe('float', function () {

	it('round', function() {
		assert.equal(f.round(0.1234), 0.12);
		assert.equal(f.round(0.005), 0.01);
		assert.equal(f.round(0.1234, 2), 0.12);
		assert.equal(f.round(0.005, 2), 0.01);
		assert.equal(f.round(1.009999, 4), 1.01);
		assert.equal(f.round(1.00499, 2), 1);
		assert.equal(f.round(1.005, 2), 1.01);
		assert.equal(f.round(1.105, 2), 1.11);
		assert.equal(f.round(28973, 2), 28973);
	});

	it('floor', function() {
		assert.equal(f.floor(0.1234, 2), 0.12);
		assert.equal(f.floor(0.005, 2), 0);
		assert.equal(f.floor(1.009999, 4), 1.0099);
		assert.equal(f.floor(1.00499, 2), 1);
		assert.equal(f.floor(1.005, 2), 1);
		assert.equal(f.floor(28973, 2), 28973);
	});

	it('ceil', function() {
		assert.equal(f.ceil(0.1234, 2), 0.13);
		assert.equal(f.ceil(0.005, 2), 0.01);
		assert.equal(f.ceil(1.009999, 4), 1.01);
		assert.equal(f.ceil(1.00499, 2), 1.01);
		assert.equal(f.ceil(1.005, 2), 1.01);
		assert.equal(f.ceil(28973, 2), 28973);
	});

	it('equals', function() {
		assert.equal(f.equals(0.12, 0.13), false);
		assert.equal(f.equals(0.005, 0.01, { precision: 2 }), true);
		assert.equal(f.equals(0.005, 0.01, { precision: 3 }), false);
		assert.equal(f.equals(1.009999, 1.01), true);
		assert.equal(f.equals(1.00499, 1), true);
		assert.equal(f.equals(1.005, 1.01), true);
		assert.equal(f.equals(28973, 2), false);
	});

	it('lessThan', function() {
		assert.equal(f.lessThan(0.12, 0.13), true);
		assert.equal(f.lessThan(0.005, 0.01, { precision: 2 }), false);
		assert.equal(f.lessThan(0.005, 0.01, { precision: 3 }), true);
		assert.equal(f.lessThan(1.009999, 4), true);
		assert.equal(f.lessThan(1.00499, 2), true);
		assert.equal(f.lessThan(1.00499, 1.01), true);
		assert.equal(f.lessThan(28973, 2), false);
	});

	it('lessThanOrEquals', function() {
		assert.equal(f.lessThanOrEquals(0.12, 0.13), true);
		assert.equal(f.lessThanOrEquals(0.005, 0.01, { precision: 2 }), true);
		assert.equal(f.lessThanOrEquals(0.005, 0.01, { precision: 3 }), true);
		assert.equal(f.lessThanOrEquals(1.009999, 4), true);
		assert.equal(f.lessThanOrEquals(1.00499, 2), true);
		assert.equal(f.lessThanOrEquals(1.00499, 1.01), true);
		assert.equal(f.lessThanOrEquals(28973, 2), false);
	});

	it('greaterThan', function() {
		assert.equal(f.greaterThan(0.13, 0.12), true);
		assert.equal(f.greaterThan(0.01, 0.005, { precision: 2 }), false);
		assert.equal(f.greaterThan(0.01, 0.005, { precision: 3 }), true);
		assert.equal(f.greaterThan(4, 1.009999), true);
		assert.equal(f.greaterThan(2, 1.00499), true);
		assert.equal(f.greaterThan(1.01, 1.00499), true);
		assert.equal(f.greaterThan(2, 28973), false);
	});

	it('greaterThanOrEquals', function() {
		assert.equal(f.greaterThanOrEquals(0.13, 0.12), true);
		assert.equal(f.greaterThanOrEquals(0.01, 0.005, { precision: 2 }), true);
		assert.equal(f.greaterThanOrEquals(0.01, 0.005, { precision: 3 }), true);
		assert.equal(f.greaterThanOrEquals(4, 1.009999), true);
		assert.equal(f.greaterThanOrEquals(2, 1.00499), true);
		assert.equal(f.greaterThanOrEquals(1.01, 1.00499), true);
		assert.equal(f.greaterThanOrEquals(2, 28973), false);
	});

	it('add', function() {
		assert.equal(f.add(0.05, 0.06), 0.11);
		assert.equal(f.add(-0.05, 0.06), 0.01);
		assert.equal(f.add(2.05, 2.56), 4.61);
		assert.equal(f.add(28973, 21353), 50326);
		assert.equal(f.add(0, -0.06), -0.06);
	});

	it('subtract', function() {
		assert.equal(f.subtract(0.05, -0.06), 0.11);
		assert.equal(f.subtract(0.05, 0.06), -0.01);
		assert.equal(f.subtract(2.05, 2.56), -0.51);
		assert.equal(f.subtract(28973, 21353), 7620);
		assert.equal(f.subtract(0, -0.06), 0.06);
	});

	it('multiply', function() {
		assert.equal(f.multiply(0.05, -0.06), 0);
		assert.equal(f.multiply(-0.50, 0.06), -0.03);
		assert.equal(f.multiply(0.50, 0.06), 0.03);
		assert.equal(f.multiply(2.05, 2.56), 5.25);
		assert.equal(f.multiply(28973, 21353), 618660469);
		assert.equal(f.multiply(0.05, 0.06, { precision: 6 }), 0.003);
		assert.equal(f.multiply(0, 21353), 0);
		assert.equal(f.multiply(1, 21353), 21353);
	});

	it('divide', function() {
		assert.equal(f.divide(0.01, 2), 0.01);
		assert.equal(f.divide(0.50, 5), 0.1);
		assert.equal(f.divide(2.05, 2.56), 0.8);
		assert.equal(f.divide(28973, 21353), 1.36);
		assert.equal(f.divide(1.45345, 1.89458, { precision: 7 }), 0.7671621);
		assert.equal(f.divide(0, 21353), 0);
		assert.equal(f.divide(1, 21353), 0);
	});

	it('avg', function() {
		assert.equal(f.avg(0.06, -0.05), 0.01);
		assert.equal(f.avg(0.06, -0.05, { precision: 3 }), 0.005);
		assert.equal(f.avg(0.50, 5), 2.75);
		assert.equal(f.avg(2.05, 2.56, 2.98, { precision: 1 }), 2.5);
		assert.equal(f.avg(28973, 21354, { precision: 0 }), 25164);
		assert.equal(f.avg(0, 0, 1, { precision: 3 }), 0.333);
	});

});
