/**
 * Credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 */
 var decimalAdjust = function(type, value, exp) {
  value = value || 0;
  exp = exp === undefined ? -2 : -Math.abs(exp);
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
};

var round = function(v, d) {
  return decimalAdjust('round', v, d);
};

module.exports = {
  round: round,
  floor: function(v, d) {
    return decimalAdjust('floor', v, d);
  },
  ceil: function(v, d) {
    return decimalAdjust('ceil', v, d);
  },
  equals: function(a, b, d) {
    return round(a, d) === round(b, d);
  },
  lessThan: function(a, b, d) {
    return round(a, d) < round(b, d);
  },
  lessThanOrEquals: function(a, b, d) {
    return round(a, d) <= round(b, d);
  },
  greaterThan: function(a, b, d) {
    return round(a, d) > round(b, d);
  },
  greaterThanOrEquals: function(a, b, d) {
    return round(a, d) >= round(b, d);
  }
};
