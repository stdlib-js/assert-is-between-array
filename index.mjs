// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function o(o,t,n,i,s){var f,d;if(arguments.length>3){if("closed"!==i&&"open"!==i)throw new TypeError(e("04X3G,Ir",["closed","open"].join('", "'),i));if("closed"!==s&&"open"!==s)throw new TypeError(e("04X3H,Is",["closed","open"].join('", "'),s))}if(!r(o))return!1;if(0===(f=o.length))return!1;if("closed"===i||void 0===i){if("closed"===s||void 0===s){for(d=0;d<f;d++)if(o[d]<t||o[d]>n)return!1;return!0}for(d=0;d<f;d++)if(o[d]<t||o[d]>=n)return!1;return!0}if("closed"===s||void 0===s){for(d=0;d<f;d++)if(o[d]<=t||o[d]>n)return!1;return!0}for(d=0;d<f;d++)if(o[d]<=t||o[d]>=n)return!1;return!0}export{o as default};
//# sourceMappingURL=index.mjs.map
