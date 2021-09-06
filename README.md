<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isBetweenArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is an array-like object where every element is between two values.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-between-array
```

</section>

<section class="usage">

## Usage

```javascript
var isBetweenArray = require( '@stdlib/assert-is-between-array' );
```

#### isBetweenArray( value, a, b\[, left, right] )

Tests if a `value` is an array-like `object` where every element is between two values `a` (left comparison value) and `b` (right comparison value).

```javascript
var arr = [ 3, 4, 5 ];

var bool = isBetweenArray( arr, 3, 5 );
// returns true

bool = isBetweenArray( arr, 4, 5 );
// returns false

bool = isBetweenArray( arr, 3, 4 );
// returns false
```

By default, the function assumes that `a` and `b` are inclusive.

```javascript
var arr = [ 3, 4, 5 ];

var bool = isBetweenArray( arr, 3, 5 );
// returns true

bool = isBetweenArray( arr, 3, 5, 'closed', 'closed' );
// returns true
```

To make `a` and/or `b` exclusive, set the respective arguments to `'open'`.

```javascript
var arr = [ 3, 4, 5 ];

var bool = isBetweenArray( arr, 3, 5, 'open', 'closed' );
// returns false

bool = isBetweenArray( arr, 3, 5, 'closed', 'open' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `a` and `b` are inclusive, the element-wise comparison is equivalent to

    ```text
    a <= v_i <= b
    ```

-   If `a` is exclusive and `b` is inclusive, the element-wise comparison is equivalent to

    ```text
    a < v_i <= b
    ```

-   If `a` is inclusive and `b` is exclusive, the element-wise comparison is equivalent to

    ```text
    a <= v_i < b
    ```

-   If `a` and `b` are exclusive, the element-wise comparison is equivalent to

    ```text
    a < v_i < b
    ```

-   If provided an empty array-like `object`, the function returns `false`.

    ```javascript
    var bool = isBetweenArray( [], 0.0, 1.0 );
    // returns false
    ```

-   If provided non-numeric values, element-wise comparisons are performed according to lexicographic order.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var Float64Array = require( '@stdlib/array-float64' );
var isBetweenArray = require( '@stdlib/assert-is-between-array' );

var x;
var i;

x = new Float64Array( 100 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = randu();
}
console.log( isBetweenArray( x, 0.01, 0.99 ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/assert/is-between`][@stdlib/assert/is-between]: test if a value is between two values.

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-between-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-between-array

[test-image]: https://github.com/stdlib-js/assert-is-between-array/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-between-array/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-between-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-between-array?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-between-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-between-array/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-between-array/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-between]: https://github.com/stdlib-js/assert-is-between

<!-- </related-links> -->

</section>

<!-- /.links -->
