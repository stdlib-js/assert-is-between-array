"use strict";var d=function(e,o){return function(){try{return o||e((o={exports:{}}).exports,o),o.exports}catch(i){throw (o=0, i)}};};var l=d(function(w,u){
var a=require('@stdlib/assert-is-collection/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function c(e,o,i,s,n){var t,r;if(arguments.length>3){if(s!=="closed"&&s!=="open")throw new TypeError(f('04X3G',["closed","open"].join('", "'),s));if(n!=="closed"&&n!=="open")throw new TypeError(f('04X3H',["closed","open"].join('", "'),n))}if(!a(e)||(t=e.length,t===0))return!1;if(s==="closed"||s===void 0){if(n==="closed"||n===void 0){for(r=0;r<t;r++)if(e[r]<o||e[r]>i)return!1;return!0}for(r=0;r<t;r++)if(e[r]<o||e[r]>=i)return!1;return!0}if(n==="closed"||n===void 0){for(r=0;r<t;r++)if(e[r]<=o||e[r]>i)return!1;return!0}for(r=0;r<t;r++)if(e[r]<=o||e[r]>=i)return!1;return!0}u.exports=c
});var m=l();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
