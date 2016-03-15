2π
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [2π][pi].


## Installation

``` bash
$ npm install const-two-pi
```


## Usage

``` javascript
var TWO_PI = require( 'const-two-pi' );
```

#### TWO_PI

The mathematical constant [pi][pi] times `2`.

``` javascript
TWO_PI === 6.283185307179586;
```


## Examples

``` javascript
var TWO_PI = require( 'const-two-pi' );

console.log( TWO_PI );
// returns 6.283185307179586
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/const-two-pi.svg
[npm-url]: https://npmjs.org/package/const-two-pi

[build-image]: http://img.shields.io/travis/const-io/two-pi/master.svg
[build-url]: https://travis-ci.org/const-io/two-pi

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/two-pi/master.svg
[coverage-url]: https://codecov.io/github/const-io/two-pi?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/two-pi.svg
[dependencies-url]: https://david-dm.org/const-io/two-pi

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/two-pi.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/two-pi

[github-issues-image]: http://img.shields.io/github/issues/const-io/two-pi.svg
[github-issues-url]: https://github.com/const-io/two-pi/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[pi]: https://en.wikipedia.org/wiki/Pi
