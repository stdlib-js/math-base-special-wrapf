"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=q(function(d,c){
var s=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-special-truncf/dist'),t=require('@stdlib/number-float64-base-to-float32/dist'),a=t(0),p=t(1);function N(e,r,f){var u;return e=t(e),r=t(r),f=t(f),s(e)||s(r)||s(f)||f<=r?NaN:(e===0&&(e=a),r===0&&(r=a),f===0&&(f=a),r<=e&&e<f?e:(u=t(f-r),e<r&&(e=t(e+t(u*t(o(t(t(r-e)/u))+p)))),t(r+t(t(e-r)%u))))}c.exports=N
});var E=i();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
