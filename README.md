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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isBetweenArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an array-like object where every element is between two values.



<section class="usage">

## Usage

```javascript
import isBetweenArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-between-array@deno/mod.js';
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
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import isBetweenArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-between-array@deno/mod.js';

// Create an array of random numbers:
var x = filledarrayBy( 100, 'float64', randu );

// Check whether every element resides within the interval [0.01, 0.99]:
var bool = isBetweenArray( x, 0.01, 0.99 );
console.log( bool );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-between`][@stdlib/assert/is-between]</span><span class="delimiter">: </span><span class="description">test if a value is between two values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-between-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-between-array

[test-image]: https://github.com/stdlib-js/assert-is-between-array/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/assert-is-between-array/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-between-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-between-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-between-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-between-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-between-array/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-between-array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-between-array/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-between-array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-between-array/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-between-array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-between-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-between-array/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-between]: https://github.com/stdlib-js/assert-is-between/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
