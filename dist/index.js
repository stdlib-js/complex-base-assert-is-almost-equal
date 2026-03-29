"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=o(function(c,l){
var m=require('@stdlib/number-float64-base-assert-is-almost-equal/dist'),f=require('@stdlib/number-float32-base-assert-is-almost-equal/dist'),v=require('@stdlib/complex-float64-reim/dist'),q=require('@stdlib/complex-float32-reim/dist');function p(e,r,t){var a,i,E,u,s;return E=e.BYTES_PER_ELEMENT,u=r.BYTES_PER_ELEMENT,E===4&&u===4?(s=f,a=q(e),i=q(r)):(s=m,a=v(e),i=v(r)),s(a[0],i[0],t)&&s(a[1],i[1],t)}l.exports=p
});var T=n();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
