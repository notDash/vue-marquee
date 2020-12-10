!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueMarquee",[],t):"object"==typeof exports?exports.VueMarquee=t():e.VueMarquee=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={name:"VueMarquee",props:{list:{type:Array,default:function(){return[]}},color:{type:String,default:"#fff"},fontSize:{type:String,default:"28px"},backgroundColor:{type:String,default:"rgba(0, 0, 0, 0.5)"},icon:{type:Boolean,default:!0},custom:{type:Boolean}},data:function(){return{startTimestamp:0,currIndex:0}},computed:{innerStyle:function(){var e={color:this.color,backgroundColor:this.backgroundColor,fontSize:this.fontSize};return this.custom?{}:e}},mounted:function(){this.initScroll()},methods:{initScroll:function(){this.startTimestamp=0,this.addScrollItem()},addScrollItem:function(){var e=this.$refs.marqueeContainer,t=this.list?this.list.length:0;if(e){this.currIndex>=t&&(this.currIndex=0);for(var n=this.list&&this.list[this.currIndex],r=0;e.childNodes.length<2&&r<2;){var i=document.createElement("div");i.setAttribute("class","marquee-item"),i.innerHTML=this.list&&this.list[r],e.appendChild(i),r++}2===e.childNodes.length&&(e.childNodes[0].innerHTML=n,e.appendChild(e.childNodes[0]),e.scrollTop=0),requestAnimationFrame(this.handleScroll)}},handleScroll:function(e){var t=this;0===this.startTimestamp&&(this.startTimestamp=e);var n=e-this.startTimestamp,r=this.$refs.marqueeContainer;r&&(r.scrollTop+=1),n<2e3?requestAnimationFrame(this.handleScroll):setTimeout(function(){t.currIndex+=1,t.initScroll()},1e3)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i={install:function(e,t){e.component(r.a.name,r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r.a),t.default=i},function(e,t,n){"use strict";function r(e){n(3)}var i=n(0),o=n(9),s=n(8),a=r,u=s(i.a,o.a,!1,a,"data-v-58b19153",null);t.a=u.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("3cd4733e",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".my-marquee[data-v-58b19153]{padding:0 20px;border-radius:20px;display:inline-flex;align-items:center;width:300px}.my-marquee>img[data-v-58b19153]{width:30px;height:24px;margin-right:10px}.my-marquee-container[data-v-58b19153]{height:60px;line-height:60px;display:inline-block;overflow:hidden}",""])},function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(h)return m;r.parentNode.removeChild(r)}if(y){var o=p++;r=f||(f=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),v.ssrId&&e.setAttribute(g,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),d={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,m=function(){},v=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){h=n,v=i||{};var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=d[s.id];a.refs--,n.push(a)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],u=o[2],c=o[3],d={id:e+":"+i,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},function(e,t){e.exports=function(e,t,n,r,i,o){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=d):r&&(d=r),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:a,options:c}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"my-marquee",style:e.innerStyle},[!e.custom&&e.icon?r("img",{attrs:{src:n(10),alt:""}}):e._e(),e._v(" "),r("div",{ref:"marqueeContainer",staticClass:"my-marquee-container"})])},i=[],o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){e.exports=n.p+"sound.png?88c75f7f7a07a6c910eb4277eaca18c3"}])});
//# sourceMappingURL=vue-marquee.js.map