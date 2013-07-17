# Float
Travis build status:  
[![Build Status](https://travis-ci.org/mstorgaard/float.png)](https://travis-ci.org/mstorgaard/float)

GitHub repository: [github.com/mstorgaard/float](http://github.com/mstorgaard/float)  
NPM package: [npmjs.org/package/float](http://npmjs.org/package/float)

## Install
Install through [NPM](http://npmjs.org/package/float): `npm install float`

## Usage
```
var f = require('float');

var a = 2.15;
var b = 3.46;
var c = 5.61;
var ab = f.add(a, b);
if (f.equals(ab, c) {
  console.log('They are equal!');
} else {
  console.log('Someone clearly failed at some point...');
}
```

## Documentation
* `round(number, precision)`
   * Rounds the number to the given number of decimals.
   * Parameters:
      * number (float)
      * precision (integer): Number of decimals
   * Return:
      * float
* `equals(a, b[, options])`
   * Compares the arguments and return whether they are equal.
   * Parameters:
      * a (float)
      * b (float)
      * options (object): See details under [Options](#options)
   * Return:
      * boolean
* `lessThan(a, b[, options])`
   * Compares the arguments and return whether a is less than b.
   * Parameters:
      * a (float)
      * b (float)
      * options (object): See details under [Options](#options)
   * Return:
      * boolean
* `lessThanOrEquals(a, b[, options])`
   * Compares the arguments and return whether a is less than or equal to b.
   * Parameters:
      * a (float)
      * b (float)
      * options (object): See details under [Options](#options)
   * Return:
      * boolean
* `greaterThan(a, b[, options])`
   * Compares the arguments and return whether a is greater than b.
   * Parameters:
      * a (float)
      * b (float)
      * options (object): See details under [Options](#options)
   * Return:
      * boolean
* `greaterThanOrEquals(a, b[, options])`
   * Compares the arguments and return whether a is greater than or equal to b.
   * Parameters:
      * a (float)
      * b (float)
      * options (object): See details under [Options](#options)
   * Return:
      * boolean
* `add(a, b, ...[, options])`
   * Adds the arguments given.
   * Parameters:
      * a (float)
      * b (float)
      * ... (floats)
      * options (object): See details under [Options](#options)
   * Return:
      * float
* `subtract(a, b, ...[, options])`
   * Subtracts the arguments given.
   * Parameters:
      * a (float)
      * b (float)
      * ... (floats)
      * options (object): See details under [Options](#options)
   * Return:
      * float
* `multiply(a, b, ...[, options])`
   * Multiplies the arguments given.
   * Parameters:
      * a (float)
      * b (float)
      * ... (floats)
      * options (object): See details under [Options](#options)
   * Return:
      * float
* `divide(a, b, ...[, options])`
   * Divides the arguments given.
   * Parameters:
      * a (float)
      * b (float)
      * ... (floats)
      * options (object): See details under [Options](#options)
   * Return:
      * float
* `avg(a, b, ...[, options])`
   * Averages the arguments given.
   * Parameters:
      * a (float)
      * b (float)
      * ... (floats)
      * options (object): See details under [Options](#options)
   * Return:
      * float

### Options
* `precision` (number of decimals)

Example: `divide(1, 3, { precision: 3})` = 0.333
