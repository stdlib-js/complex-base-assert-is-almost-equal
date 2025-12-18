// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-assert-is-almost-equal@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-assert-is-almost-equal@v0.0.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-reim@v0.1.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-reim@v0.1.2-esm/index.mjs";function r(r,i,l){var o,d,n,a,j;return n=r.BYTES_PER_ELEMENT,a=i.BYTES_PER_ELEMENT,4===n&&4===a?(j=t,o=m(r),d=m(i)):(j=s,o=e(r),d=e(i)),j(o[0],d[0],l)&&j(o[1],d[1],l)}export{r as default};
//# sourceMappingURL=index.mjs.map
