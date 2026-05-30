"use strict";var d=function(e,o){return function(){return o||e((o={exports:{}}).exports,o),o.exports}};var l=d(function(w,u){
var a=require('@stdlib/assert-is-collection/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function c(e,o,s,t,n){var i,r;if(arguments.length>3){if(t!=="closed"&&t!=="open")throw new TypeError(f('04X3G',["closed","open"].join('", "'),t));if(n!=="closed"&&n!=="open")throw new TypeError(f('04X3H',["closed","open"].join('", "'),n))}if(!a(e)||(i=e.length,i===0))return!1;if(t==="closed"||t===void 0){if(n==="closed"||n===void 0){for(r=0;r<i;r++)if(e[r]<o||e[r]>s)return!1;return!0}for(r=0;r<i;r++)if(e[r]<o||e[r]>=s)return!1;return!0}if(n==="closed"||n===void 0){for(r=0;r<i;r++)if(e[r]<=o||e[r]>s)return!1;return!0}for(r=0;r<i;r++)if(e[r]<=o||e[r]>=s)return!1;return!0}u.exports=c
});var m=l();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
