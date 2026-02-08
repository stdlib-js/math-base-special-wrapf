// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-truncf@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";var r=e(0),n=e(1);function a(a,i,m){var d;return a=e(a),i=e(i),m=e(m),s(a)||s(i)||s(m)||m<=i?NaN:(0===a&&(a=r),0===i&&(i=r),0===m&&(m=r),i<=a&&a<m?a:(d=e(m-i),a<i&&(a=e(a+e(d*e(t(e(e(i-a)/d))+n)))),e(i+e(e(a-i)%d))))}export{a as default};
//# sourceMappingURL=index.mjs.map
