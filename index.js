var _ = require('underscore');

function round(v, d) {
	var multiplier = Math.pow(10, (d == undefined ? 2 : d));
	return Math.round(v * multiplier) / multiplier;
}

function equals(a, b) {
	var p = processArgs(arguments);
	return round(a, p.precision) == round(b, p.precision);
}

function lessThan(a, b) {
	var p = processArgs(arguments);
	return round(a, p.precision) < round(b, p.precision);
}

function lessThanOrEquals(a, b) {
	var p = processArgs(arguments);
	return round(a, p.precision) <= round(b, p.precision);
}

function greaterThan(a, b) {
	var p = processArgs(arguments);
	return round(a, p.precision) > round(b, p.precision);
}

function greaterThanOrEquals(a, b) {
	var p = processArgs(arguments);
	return round(a, p.precision) >= round(b, p.precision);
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function mkRounderFunction(method) {
	return function () {
		var p = processArgs(arguments);
		var result = _.inject(p.args, method);
		return round(result, p.precision);
	}
}

function avg() {
	var p = processArgs(arguments);
	var sum = round(_.inject(p.args, add), p.precision);
	var result = divide(sum, p.count);
	return round(result, p.precision);
}

function processArgs(args) {
	var precision;
	if (!isFinite(_.last(args))) {
		precision = Array.prototype.pop.call(args).precision;
	}
	return {
		args: args,
		count:_.size(args),
		precision: precision
	};
}

module.exports = {
	round: round,
	equals: equals,
	lessThan: lessThan,
	lessThanOrEquals: lessThanOrEquals,
	greaterThan: greaterThan,
	greaterThanOrEquals: greaterThanOrEquals,
	add: mkRounderFunction(add),
	subtract: mkRounderFunction(subtract),
	multiply: mkRounderFunction(multiply),
	divide: mkRounderFunction(divide),
	avg: avg
};