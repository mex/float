# Float
Travis build status:
[![Build Status](https://travis-ci.org/mex/float.png)](https://travis-ci.org/mex/float)

GitHub repository: [github.com/mex/float](http://github.com/mex/float)

NPM package: [npmjs.org/package/float](http://npmjs.org/package/float)

## Install
Install through [NPM](http://npmjs.org/package/float): `npm install float`

Install through Bower: `bower install float`

## Usage
```
var f = require('float');

var a = 2.15;
var b = 3.46;
var c = 5.61;
var ab = f.round(a + b);
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
* `floor(number, precision)`
   * Floors the number to the given number of decimals.
   * Parameters:
      * number (float)
      * precision (integer): Number of decimals
   * Return:
      * float
* `ceil(number, precision)`
   * Ceils the number to the given number of decimals.
   * Parameters:
      * number (float)
      * precision (integer): Number of decimals
   * Return:
      * float
* `equals(a, b[, d])`
   * Compares the arguments and return whether they are equal.
   * Parameters:
      * a (float)
      * b (float)
      * d (integer): Number of decimals
   * Return:
      * boolean
* `lessThan(a, b[, d])`
   * Compares the arguments and return whether a is less than b.
   * Parameters:
      * a (float)
      * b (float)
      * d (integer): Number of decimals
   * Return:
      * boolean
* `lessThanOrEquals(a, b[, d])`
   * Compares the arguments and return whether a is less than or equal to b.
   * Parameters:
      * a (float)
      * b (float)
      * d (integer): Number of decimals
   * Return:
      * boolean
* `greaterThan(a, b[, d])`
   * Compares the arguments and return whether a is greater than b.
   * Parameters:
      * a (float)
      * b (float)
      * d (integer): Number of decimals
   * Return:
      * boolean
* `greaterThanOrEquals(a, b[, d])`
   * Compares the arguments and return whether a is greater than or equal to b.
   * Parameters:
      * a (float)
      * b (float)
      * d (integer): Number of decimals
   * Return:
      * boolean
