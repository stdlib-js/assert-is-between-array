// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor,r=9007199254740991;function n(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&(o=n.length,e(o)===o)&&n.length>=0&&n.length<=r;var o}function o(){var e,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,r,t,f,i){var l,u;if(arguments.length>3){if("closed"!==f&&"open"!==f)throw new TypeError(o("04X3G",["closed","open"].join('", "'),f));if("closed"!==i&&"open"!==i)throw new TypeError(o("04X3H",["closed","open"].join('", "'),i))}if(!n(e))return!1;if(0===(l=e.length))return!1;if("closed"===f||void 0===f){if("closed"===i||void 0===i){for(u=0;u<l;u++)if(e[u]<r||e[u]>t)return!1;return!0}for(u=0;u<l;u++)if(e[u]<r||e[u]>=t)return!1;return!0}if("closed"===i||void 0===i){for(u=0;u<l;u++)if(e[u]<=r||e[u]>t)return!1;return!0}for(u=0;u<l;u++)if(e[u]<=r||e[u]>=t)return!1;return!0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isBetweenArray=r();
//# sourceMappingURL=index.js.map
