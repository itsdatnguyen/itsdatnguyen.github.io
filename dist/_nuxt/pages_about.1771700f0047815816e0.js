/*! For license information please see LICENSES */
webpackJsonp([3],{"+OgT":function(t,e,r){"use strict";var n=r("IwyU"),o=r("6hiT"),i=r("VU/8")(n.a,o.a,!1,null,null,null);i.options.__file="components\\Banner.vue",e.a=i.exports},"2xfJ":function(t,e,r){"use strict";var n,o=r("qPzS"),i=(r.n(o),r("uf+i")),a=r("BX70"),c=r("+OgT"),s=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.headerImage=r("JoKK"),e}return s(e,t),e.prototype.head=function(){return{title:"About",meta:[{hid:"og:title",property:"og:title",content:"About"},{hid:"twitter:title",name:"twitter:title",content:"About"},{hid:"description",name:"description",content:"About website developer and game developer Dat Nguyen."},{hid:"og:description",property:"og:description",content:"About website developer and game developer Dat Nguyen."},{hid:"twitter:card",name:"twitter:card",content:"About website developer and game developer Dat Nguyen."},{hid:"twitter:description",name:"twitter:description",content:"About website developer and game developer Dat Nguyen."}]}},e=u([Object(o.Component)({components:{Parallax:i.a,Card:a.a,Banner:c.a}})],e)}(o.Vue);e.a=f},"6dKg":function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o});var n=new(r("/5sW").default),o="onResizeEvent"},"6hiT":function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner",class:this.bannerClasses},[e("div",{staticClass:"banner__banner-title"},[this._t("title")],2),e("div",{staticClass:"banner__banner-text"},[this._t("text")],2)])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},"9M//":function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"parallax"},[e("div",{staticClass:"parallax__content"},[e("div",{ref:"img",staticClass:"parallax__image",style:this.imgStyles})]),e("div",{staticClass:"parallax__fixed-content",class:this.justifyDirection},[this._t("fixed")],2),this.showDownwardIcon?e("img",{staticClass:"parallax--downward-icon",class:this.ready?"parallax--downward-icon-ready":"",attrs:{src:this.downwardIconSrc}}):this._e()])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},BX70:function(t,e,r){"use strict";var n=r("MhrU"),o=r("Net1"),i=r("VU/8")(n.a,o.a,!1,null,null,null);i.options.__file="components\\Card.vue",e.a=i.exports},GA67:function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("parallax",{attrs:{"justify-content":"center",src:this.headerImage,modifier:1.2,"show-downward-icon":!0}},[e("card",{staticClass:"elevation-large",attrs:{slot:"fixed",color:"primary",ghost:!0},slot:"fixed"},[e("h1",{attrs:{slot:"title"},slot:"title"},[this._v("About Me")])])],1),e("banner",{attrs:{color:"accent",small:!0}}),this._m(0),this._m(1)],1)};n._withStripped=!0;var o={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"text-container"},[e("h2",{staticClass:"text-emphasize"},[this._v("Intro")]),e("p",[this._v("Hi, I'm Dat Nguyen. I've been programming since I was in grade 9. As of this date: (June 18, 2018) I am 21 years old.")]),e("p",[this._v("I am currently in college for software development.")]),e("p",[this._v("I have numerous side projects, all based around various technologies like Unreal Engine 4, Angular, Vue.js, Game Maker and Ionic 2. Its a fun hobby and I can show off to people.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"text-container"},[r("h2",{staticClass:"text-emphasize"},[t._v("Projects")]),r("h4",{staticClass:"text-emphasize"},[t._v("Red's Adventure")]),r("p",[t._v("I used Game Maker for a high school computer programming culminating assignment. \nI created "),r("a",{attrs:{href:"https://github.com/itsdatnguyen/reds-adventure"}},[t._v("Red's Adventure")]),t._v(" which is a action/reflex based platforming game. \nI gave it a test drive on the classroom peers and they all thought it was impossible to beat. \nIt seemed they really liked it. I got 95% for that assignment, and a cool github project to show off.")]),r("h4",{staticClass:"text-emphasize"},[t._v("Stealth Game")]),r("p",[t._v("After Game Maker, I decided that Unreal Engine 4 would be a great place to test out 3-D game development. \nFor me, Unreal Engine 4 was a bit more better than Unity.\nSo I messed around with Unreal Engine 4 for over the course of 2 years, and created "),r("a",{attrs:{href:"https://github.com/itsdatnguyen/stealth-game"}},[t._v("Stealth Game")]),t._v(" (I know, super generic name...) as a stealth gameplay demo.\nA lot of its gameplay is borrowed from Splinter Cell: Conviction, which I based this game off of. ")]),r("h4",{staticClass:"text-emphasize"},[t._v("Utility ")]),r("p",[t._v("After taking several web development classes from college, I decided to invest in learning web development and create some websites. \nI refined my knowledge of Bootstrap and JQuery, and eventually decided to teach myself Angular 2. \nAs a result, I was able to create "),r("a",{attrs:{href:"https://itsdatnguyen.github.io/utility/"}},[t._v("Utility")]),t._v(", which is an Angular 2 SPA that focuses on providing everyday utilities.")]),r("h4",{staticClass:"text-emphasize"},[t._v("CSS Playground")]),r("p",[t._v("While in the middle of my coop at PHRI (Population Health Research Institute), I began working on my "),r("a",{attrs:{href:"http://css-playground.com"}},[t._v("CSS Playground")]),t._v(" website.\nBasically, CSS Playground is a website that makes it fun to learn CSS with playful sliders and select boxes. \nI've shown this project to a large amount of people, and I am consistently surprised by the amazing feedback I get.\nCSS Playground is developed using the Vue javascript framework.")])])}]};e.a=o},I8yv:function(t,e,r){(function(t,e){var r;!function(r){!function(n){var o="object"==typeof e?e:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),i=a(r);function a(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===o.Reflect?o.Reflect=r:i=a(o.Reflect,i),function(e){var r=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,o=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",a="function"==typeof Object.create,c={__proto__:[]}instanceof Array,s=!a&&!c,u={create:a?function(){return T(Object.create(null))}:c?function(){return T({__proto__:null})}:function(){return T({})},has:s?function(t,e){return r.call(t,e)}:function(t,e){return e in t},get:s?function(t,e){return r.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},f=Object.getPrototypeOf(Function),p="object"==typeof t&&t.env&&"true"===t.env.REFLECT_METADATA_USE_MAP_POLYFILL,l=p||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,o=r+1;o<n;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,o)},e.prototype.entries=function(){return new r(this._keys,this._values,a)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function o(t,e){return e}function a(t,e){return[t,e]}}():Map,d=p||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new l}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}():Set,h=new(p||"function"!=typeof WeakMap?function(){var t=16,e=u.create(),n=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&u.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?u.get(e,this._key):void 0},t.prototype.set=function(t,e){var r=i(t,!0);return r[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+c()}while(u.has(e,t));return e[t]=!0,t}function i(t,e){if(!r.call(t,n)){if(!e)return;Object.defineProperty(t,n,{value:u.create()})}return t[n]}function a(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function c(){var e=function(t){if("function"==typeof Uint8Array)return"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):a(new Uint8Array(t),t);return a(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var o=e[n];4!==n&&6!==n&&8!==n||(r+="-"),o<16&&(r+="0"),r+=o.toString(16).toLowerCase()}return r}}():WeakMap);function y(t,e,r){var n=h.get(t);if(w(n)){if(!r)return;n=new l,h.set(t,n)}var o=n.get(e);if(w(o)){if(!r)return;o=new l,n.set(e,o)}return o}function v(t,e,r){var n=y(e,r,!1);return!w(n)&&!!n.has(t)}function _(t,e,r){var n=y(e,r,!1);if(!w(n))return n.get(t)}function g(t,e,r,n){var o=y(r,n,!0);o.set(t,e)}function m(t,e){var r=[],n=y(t,e,!1);if(w(n))return r;for(var o=n.keys(),a=function(t){var e=A(t,i);if(!C(e))throw new TypeError;var r=e.call(t);if(!j(r))throw new TypeError;return r}(o),c=0;;){var s=M(a);if(!s)return r.length=c,r;var u=s.value;try{r[c]=u}catch(t){try{S(a)}finally{throw t}}c++}}function b(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function w(t){return void 0===t}function O(t){return null===t}function j(t){return"object"==typeof t?null!==t:"function"==typeof t}function P(t,e){switch(b(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",n=A(t,o);if(void 0!==n){var i=n.call(t,r);if(j(i))throw new TypeError;return i}return function(t,e){if("string"===e){var r=t.toString;if(C(r)){var n=r.call(t);if(!j(n))return n}var o=t.valueOf;if(C(o)){var n=o.call(t);if(!j(n))return n}}else{var o=t.valueOf;if(C(o)){var n=o.call(t);if(!j(n))return n}var i=t.toString;if(C(i)){var n=i.call(t);if(!j(n))return n}}throw new TypeError}(t,"default"===r?"number":r)}function x(t){var e=P(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function I(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function C(t){return"function"==typeof t}function k(t){return"function"==typeof t}function A(t,e){var r=t[e];if(void 0!==r&&null!==r){if(!C(r))throw new TypeError;return r}}function M(t){var e=t.next();return!e.done&&e}function S(t){var e=t.return;e&&e.call(t)}function E(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===f)return e;if(e!==f)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var o=n.constructor;return"function"!=typeof o?e:o===t?e:o}function T(t){return t.__=void 0,delete t.__,t}e("decorate",function(t,e,r,n){if(w(r)){if(!I(t))throw new TypeError;if(!k(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=t[r],o=n(e);if(!w(o)&&!O(o)){if(!k(o))throw new TypeError;e=o}}return e}(t,e)}if(!I(t))throw new TypeError;if(!j(e))throw new TypeError;if(!j(n)&&!w(n)&&!O(n))throw new TypeError;return O(n)&&(n=void 0),r=x(r),function(t,e,r,n){for(var o=t.length-1;o>=0;--o){var i=t[o],a=i(e,r,n);if(!w(a)&&!O(a)){if(!j(a))throw new TypeError;n=a}}return n}(t,e,r,n)}),e("metadata",function(t,e){return function(r,n){if(!j(r))throw new TypeError;if(!w(n)&&!function(t){switch(b(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;g(t,e,r,n)}}),e("defineMetadata",function(t,e,r,n){if(!j(r))throw new TypeError;w(n)||(n=x(n));return g(t,e,r,n)}),e("hasMetadata",function(t,e,r){if(!j(e))throw new TypeError;w(r)||(r=x(r));return function t(e,r,n){var o=v(e,r,n);if(o)return!0;var i=E(r);if(!O(i))return t(e,i,n);return!1}(t,e,r)}),e("hasOwnMetadata",function(t,e,r){if(!j(e))throw new TypeError;w(r)||(r=x(r));return v(t,e,r)}),e("getMetadata",function(t,e,r){if(!j(e))throw new TypeError;w(r)||(r=x(r));return function t(e,r,n){var o=v(e,r,n);if(o)return _(e,r,n);var i=E(r);if(!O(i))return t(e,i,n);return}(t,e,r)}),e("getOwnMetadata",function(t,e,r){if(!j(e))throw new TypeError;w(r)||(r=x(r));return _(t,e,r)}),e("getMetadataKeys",function(t,e){if(!j(t))throw new TypeError;w(e)||(e=x(e));return function t(e,r){var n=m(e,r);var o=E(e);if(null===o)return n;var i=t(o,r);if(i.length<=0)return n;if(n.length<=0)return i;var a=new d;var c=[];for(var s=0,u=n;s<u.length;s++){var f=u[s],p=a.has(f);p||(a.add(f),c.push(f))}for(var l=0,h=i;l<h.length;l++){var f=h[l],p=a.has(f);p||(a.add(f),c.push(f))}return c}(t,e)}),e("getOwnMetadataKeys",function(t,e){if(!j(t))throw new TypeError;w(e)||(e=x(e));return m(t,e)}),e("deleteMetadata",function(t,e,r){if(!j(e))throw new TypeError;w(r)||(r=x(r));var n=y(e,r,!1);if(w(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var o=h.get(e);return o.delete(r),o.size>0||(h.delete(e),!0)})}(i)}()}(r||(r={}))}).call(e,r("W2nU"),r("DuR2"))},IwyU:function(t,e,r){"use strict";var n,o=r("qPzS"),i=(r.n(o),this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})),a=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),Object.defineProperty(e.prototype,"bannerClasses",{get:function(){var t;return(t={})[this.bannerColor]=!0,t["banner--small"]=this.small,t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bannerColor",{get:function(){switch(this.color){case"primary":return"banner--primary";case"accent":return"banner--accent";default:return""}},enumerable:!0,configurable:!0}),a([Object(o.Prop)({type:String,default:"primary"})],e.prototype,"color",void 0),a([Object(o.Prop)({type:Boolean,default:!1})],e.prototype,"small",void 0),e=a([Object(o.Component)({})],e)}(o.Vue);e.a=c},JoKK:function(t,e,r){t.exports=r.p+"img/dat.7252d8e.jpg"},MhrU:function(t,e,r){"use strict";var n,o=r("qPzS"),i=(r.n(o),this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})),a=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),Object.defineProperty(e.prototype,"cardColor",{get:function(){switch(this.color){case"primary":return"card--primary";case"accent":return"card--accent";default:return""}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cardStyles",{get:function(){return{width:this.width}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cardClasses",{get:function(){var t;return(t={"card--ghost":this.ghost})[this.cardColor]=!0,t},enumerable:!0,configurable:!0}),a([Object(o.Prop)({type:String,default:"auto"})],e.prototype,"width",void 0),a([Object(o.Prop)({type:String,default:"primary"})],e.prototype,"color",void 0),a([Object(o.Prop)({type:Boolean,default:!1})],e.prototype,"ghost",void 0),e=a([Object(o.Component)({})],e)}(o.Vue);e.a=c},Net1:function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card",class:this.cardClasses,style:this.cardStyles},[e("div",{staticClass:"card__title"},[this._t("title")],2),e("div",{staticClass:"card__text"},[this._t("text")],2)])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},QMlW:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPgogICAgPHBhdGggZmlsbD0iI0VFRUVFRSIgZD0iTTIwIDEybC0xLjQxLTEuNDFMMTMgMTYuMTdWNGgtMnYxMi4xN2wtNS41OC01LjU5TDQgMTJsOCA4IDgtOHoiLz4KPC9zdmc+Cg=="},UKuM:function(t,e,r){"use strict";var n=r("6dKg");r.d(e,"a",function(){return n.a}),r.d(e,"b",function(){return n.b})},"c+8m":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=(n=r("/5sW"))&&"object"==typeof n&&"default"in n?n.default:n,i={__proto__:[]}instanceof Array;var a=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured"];function c(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(a.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){return t[r]=e},configurable:!0})})};var n=new e;e.prototype._init=r;var o={};return Object.keys(n).forEach(function(t){void 0!==n[t]&&(o[t]=n[t])}),o}(this,t)}});var n=t.__decorators__;n&&(n.forEach(function(t){return t(e)}),delete t.__decorators__);var c=Object.getPrototypeOf(t.prototype),s=c instanceof o?c.constructor:o,u=s.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach(function(n){if("prototype"!==n){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var a,c,s=Object.getOwnPropertyDescriptor(e,n);if(!i){if("cid"===n)return;var u=Object.getOwnPropertyDescriptor(r,n);if(a=s.value,c=typeof a,null!=a&&("object"===c||"function"===c)&&u&&u.value===s.value)return}0,Object.defineProperty(t,n,s)}}})}(u,t,s),u}function s(t){return"function"==typeof t?c(t):function(e){return c(e,t)}}!function(t){t.registerHooks=function(t){a.push.apply(a,t)}}(s||(s={}));var u=s;e.default=u,e.createDecorator=function(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push(function(e){return t(e,r,n)})}},e.mixins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.extend({mixins:t})}},hSk2:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("2xfJ"),o=r("GA67"),i=r("VU/8")(n.a,o.a,!1,null,null,null);i.options.__file="pages\\about.vue",e.default=i.exports},qPzS:function(t,e,r){(function(t,e,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n="default"in r?r.default:r;n.registerHooks(["beforeRouteEnter","beforeRouteLeave","asyncData","fetch","head","middleware","layout","transition","scrollToTop","validate"]);var o=/\B([A-Z])/g,i=function(t){return t.replace(o,"-$1").toLowerCase()};t.Inject=function(t){return r.createDecorator(function(e,r){void 0===e.inject&&(e.inject={}),Array.isArray(e.inject)||(e.inject[r]=t||r)})},t.Provide=function(t){return r.createDecorator(function(e,r){var n=e.provide;if("function"!=typeof n||!n.managed){var o=e.provide;(n=e.provide=function(){var t=Object.create(("function"==typeof o?o.call(this):o)||null);for(var e in n.managed)t[n.managed[e]]=this[e];return t}).managed={}}n.managed[r]=t||r})},t.Model=function(t,e){return void 0===e&&(e={}),function(n,o){Array.isArray(e)||void 0!==e.type||(e.type=Reflect.getMetadata("design:type",n,o)),r.createDecorator(function(r,n){(r.props||(r.props={}))[n]=e,r.model={prop:n,event:t||n}})(n,o)}},t.Prop=function(t){return void 0===t&&(t={}),function(e,n){Array.isArray(t)||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)),r.createDecorator(function(e,r){(e.props||(e.props={}))[r]=t})(e,n)}},t.Watch=function(t,e){void 0===e&&(e={});var n=e.deep,o=void 0!==n&&n,i=e.immediate,a=void 0!==i&&i;return r.createDecorator(function(e,r){"object"!=typeof e.watch&&(e.watch=Object.create(null)),e.watch[t]={handler:r,deep:o,immediate:a}})},t.Emit=function(t){return function(e,r,n){r=i(r);var o=n.value;n.value=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];!1!==o.apply(this,e)&&this.$emit.apply(this,[t||r].concat(e))}}},t.Off=function(t,e){return function(r,n,o){n=i(n);var a=o.value;o.value=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(!1!==a.apply(this,r))if(e){if("function"!=typeof this[e])throw new TypeError("must be a method name");this.$off(t||n,this[e])}else t?this.$off(t||n):this.$off()}}},t.On=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$on(t||n,e.methods[r])}})},t.Once=function(t){return r.createDecorator(function(e,r){var n=i(r);"function"!=typeof e.created&&(e.created=function(){});var o=e.created;e.created=function(){o(),void 0!==e.methods&&this.$once(t||n,e.methods[r])}})},t.NextTick=function(t){return function(e,r,n){var o=n.value;n.value=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(!1!==o.apply(this,e)){if("function"!=typeof this[t])throw new TypeError("must be a method name");this.$nextTick(this[t])}}}},t.Component=n,t.Vue=e,Object.defineProperty(t,"__esModule",{value:!0})})(e,r("/5sW"),r("c+8m"),r("I8yv"))},"rwo/":function(t,e,r){"use strict";var n,o=r("qPzS"),i=(r.n(o),r("UKuM")),a=this&&this.__extends||(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.parallax=0,e.ready=!1,e.downwardIconSrc=r("QMlW"),e}return a(e,t),Object.defineProperty(e.prototype,"imgStyles",{get:function(){return{"background-position":"50% "+this.parallax+"px","background-image":"url("+this.src+")"}},enumerable:!0,configurable:!0}),e.prototype.beforeMount=function(){i.a.$on(i.b,this.resize)},e.prototype.mounted=function(){this.ready=!0,this.resize()},e.prototype.beforeDestroy=function(){i.a.$off(i.b,this.resize)},e.prototype.resize=function(){var t=this.$el.getBoundingClientRect().top;this.parallax=Math.round(t/-this.modifier)},Object.defineProperty(e.prototype,"justifyDirection",{get:function(){switch(this.justifyContent){case"center":return"justify-center";case"start":return"justify-start";case"end":return"justify-end";default:return""}},enumerable:!0,configurable:!0}),c([Object(o.Prop)({type:String,default:"center"})],e.prototype,"justifyContent",void 0),c([Object(o.Prop)({type:String})],e.prototype,"src",void 0),c([Object(o.Prop)({type:Number,default:1})],e.prototype,"modifier",void 0),c([Object(o.Prop)({type:Boolean,default:!1})],e.prototype,"showDownwardIcon",void 0),e=c([Object(o.Component)({})],e)}(o.Vue);e.a=s},"uf+i":function(t,e,r){"use strict";var n=r("rwo/"),o=r("9M//"),i=r("VU/8")(n.a,o.a,!1,null,null,null);i.options.__file="components\\Parallax.vue",e.a=i.exports}});