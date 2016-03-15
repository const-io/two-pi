'use strict';

// MODULES //

var tape = require( 'tape' );
var TWO_PI = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof TWO_PI, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 6.283185307179586', function test( t ) {
	t.equal( TWO_PI, 6.283185307179586, 'equals 6.283185307179586' );
	t.end();
});
