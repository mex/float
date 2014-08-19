var decimalAdjust = require('./helpers/decimal-adjust'),
    o = require('./helpers/object'),
    processArgs = require('./helpers/process-arguments');

var round = function(v, d) {
  d = d === undefined ? -2 : -Math.abs(d);
  return decimalAdjust('round', v, d);
};

var add = function(a, b) {
  return a + b;
};

var subtract = function(a, b) {
  return a - b;
};

var multiply = function(a, b) {
  return a * b;
};

var divide = function(a, b) {
  return a / b;
};

module.exports = {
  round: round,
  floor: function(v, d) {
    d = d === undefined ? -2 : -Math.abs(d);
    return decimalAdjust('floor', v, d);
  },
  ceil: function(v, d) {
    d = d === undefined ? -2 : -Math.abs(d);
    return decimalAdjust('ceil', v, d);
  },
  equals: function(a, b) {
    var p = processArgs(arguments);
    return round(a, p.precision) == round(b, p.precision);
  },
  lessThan: function(a, b) {
    var p = processArgs(arguments);
    return round(a, p.precision) < round(b, p.precision);
  },
  lessThanOrEquals: function(a, b) {
    var p = processArgs(arguments);
    return round(a, p.precision) <= round(b, p.precision);
  },
  greaterThan: function(a, b) {
    var p = processArgs(arguments);
    return round(a, p.precision) > round(b, p.precision);
  },
  greaterThanOrEquals: function(a, b) {
    var p = processArgs(arguments);
    return round(a, p.precision) >= round(b, p.precision);
  },
  add: function() {
    var p = processArgs(arguments),
        args = o.values(p.args),
        first = args.shift();
    return round(args.reduce(add, first), p.precision);
  },
  subtract: function() {
    var p = processArgs(arguments),
        args = o.values(p.args),
        first = args.shift();
    return round(args.reduce(subtract, first), p.precision);
  },
  multiply: function() {
    var p = processArgs(arguments),
        args = o.values(p.args),
        first = args.shift();
    return round(args.reduce(multiply, first), p.precision);
  },
  divide: function() {
    var p = processArgs(arguments),
        args = o.values(p.args),
        first = args.shift();
    return round(args.reduce(divide, first), p.precision);
  },
  avg: function() {
    var p = processArgs(arguments),
        args = o.values(p.args),
        sum = round(args.reduce(add, 0), p.precision);
    return round(divide(sum, p.count), p.precision);
  }
};