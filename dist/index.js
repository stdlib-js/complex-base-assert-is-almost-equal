"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=o(function(c,l){
var m=require('@stdlib/number-float64-base-assert-is-almost-equal/dist'),f=require('@stdlib/number-float32-base-assert-is-almost-equal/dist'),v=require('@stdlib/complex-float64-reim/dist'),q=require('@stdlib/complex-float32-reim/dist');function p(e,r,a){var i,s,E,u,t;return E=e.BYTES_PER_ELEMENT,u=r.BYTES_PER_ELEMENT,E===4&&u===4?(t=f,i=q(e),s=q(r)):(t=m,i=v(e),s=v(r)),t(i[0],s[0],a)&&t(i[1],s[1],a)}l.exports=p
});var T=n();module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
