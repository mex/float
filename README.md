# Float

## Usage
* `round(number, precision)`
  * Rounds the number to the given number of decimals.
  * Parameters:
    * number (float)
    * precision (integer): Number of decimals
* `add(a, b, ...[, options])`
  * Adds the arguments given.
  * Parameters:
    * a (float)
    * b (float)
    * ... (floats)
    * options (object): See details under [Options](#options)
* `subtract(a, b, ...[, options])`
  * Subtracts the arguments given.
  * Parameters:
    * a (float)
    * b (float)
    * ... (floats)
    * options (object): See details under [Options](#options)
* `multiply(a, b, ...[, options])`
  * Multiplies the arguments given.
  * Parameters:
    * a (float)
    * b (float)
    * ... (floats)
    * options (object): See details under [Options](#options)
* `divide(a, b, ...[, options])`
  * Divides the arguments given.
  * Parameters:
    * a (float)
    * b (float)
    * ... (floats)
    * options (object): See details under [Options](#options)
* `avg(a, b, ...[, options])`
  * Averages the arguments given.
  * Parameters:
    * a (float)
    * b (float)
    * ... (floats)
    * options (object): See details under [Options](#options)

### Options
* `precision` (number of decimals)

Example: `divide(1, 3, { precision: 3})` = 0.333
