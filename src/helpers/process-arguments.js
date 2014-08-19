var o = require('./object');

module.exports = function(args) {
  var precision;
  if (!isFinite(o.last(args))) {
    precision = Array.prototype.pop.call(args).precision;
  }
  return {
    args: args,
    count: o.size(args),
    precision: precision
  };
};
