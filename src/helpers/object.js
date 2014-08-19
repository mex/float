module.exports = {
  size: function(obj) {
    return Object.keys(obj).length;
  },
  values: function (obj) {
    var vals = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        vals.push(obj[key]);
      }
    }
    return vals;
  },
  last: function(obj) {
    return obj[Object.keys(obj)[Object.keys(obj).length - 1]];
  }
};
