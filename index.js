// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor;function n(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&(o=n.length,e(o)===o)&&n.length>=0&&n.length<=9007199254740991;var o}function o(){var e,n=arguments,o=n[0],r="https://stdlib.io/e/"+o+"?";for(e=1;e<n.length;e++)r+="&arg[]="+encodeURIComponent(n[e]);return r}return function(e,r,t,i,f){var u,l;if(arguments.length>3){if("closed"!==i&&"open"!==i)throw new TypeError(o('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if("closed"!==f&&"open"!==f)throw new TypeError(o('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),f))}if(!n(e))return!1;if(0===(u=e.length))return!1;if("closed"===i||void 0===i){if("closed"===f||void 0===f){for(l=0;l<u;l++)if(e[l]<r||e[l]>t)return!1;return!0}for(l=0;l<u;l++)if(e[l]<r||e[l]>=t)return!1;return!0}if("closed"===f||void 0===f){for(l=0;l<u;l++)if(e[l]<=r||e[l]>t)return!1;return!0}for(l=0;l<u;l++)if(e[l]<=r||e[l]>=t)return!1;return!0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).isBetweenArray=n();
//# sourceMappingURL=index.js.map
