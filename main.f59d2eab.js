parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector("body"),e=function(e,t,c){var i=document.createElement("div");i.classList.add("notification",c),i.dataset.qa="notification",i.innerHTML="\n    <p>".concat(e," promise was ").concat(t,"</p>\n  "),n.append(i)},t=function(){e("First","resolved","success")},c=function(){e("First","rejected","warning")},i=function(){e("Second","resolved","success")},o=function(){e("Third","resolved","success")},s=new Promise(function(e,t){n.addEventListener("click",function(){e()}),setTimeout(function(){return t(c)},3e3)});s.then(t).catch(c);var r=new Promise(function(e){n.addEventListener("click",function(){e()}),n.addEventListener("contextmenu",function(){e()})});r.then(i);var u=new Promise(function(e){var t=-1,c=-1;n.addEventListener("mousedown",function(n){var i=0===n.button,o=2===n.button;i&&(t=1),o&&(c=1),1===t&&1===c&&e()})});u.then(o);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f59d2eab.js.map