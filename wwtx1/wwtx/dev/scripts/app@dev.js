
;(function(__context){
    var module = {
        id : "b339b78823a7d4e256e118d08f80004c" ,
        filename : "spa.min.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    (function(e){var t={id:"2c088de690d2f86994b0feec93475475",filename:"qapp.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){"use strict";function a(e,n){t[e]=n()}function f(e){return t[e]}function M(){}function _(e){var t=[],n;for(n in e){t.push(n)}return t}function P(e,t){var n=D[e===o||e!==e?e:v.call(e)]||e&&e.nodeName||"#";if(e===u){n="Undefined"}else if(n.charAt(0)==="#"){if(e==e.document&&e.document!=e){n="Window"}else if(e.nodeType===9){n="Document"}else if(e.callee){n="Arguments"}else if(isFinite(e.length)&&e.item){n="NodeList"}else{n=v.call(e).slice(8,-1)}}if(t){return t===n}return n}function H(e){return P(e,"Object")}function B(e){return P(e,"Array")}function j(e){return P(e,"String")}function F(e){return P(e,"Function")}function I(e){if(e&&e.nodeType===1){if(e instanceof Node){return i}return y.test(v.call(e))}return s}function q(e){return P(e,"Number")}function R(e){return P(e,"Object")&&Object.getPrototypeOf(e)===p}function U(e){try{return JSON.stringify(e)==="{}"}catch(t){return FLASE}}function z(e,t,n){var r;for(r in t){if(n&&(R(t[r])||B(t[r]))){if(R(t[r])&&!R(e[r])){e[r]={}}if(B(t[r])&&!B(e[r])){e[r]=[]}z(e[r],t[r],n)}else if(t[r]!==u){e[r]=t[r]}}}function W(e){var t,n=m.call(arguments,1);if(typeof e=="boolean"){t=e;e=n.shift()}n.forEach(function(n){z(e,n,t)});return e}function X(e,t){var n;for(n in e){t.call(e,n,e[n])}}function V(e){if(!e)return s;var t=e.length;if(t===t>>>0){try{return m.call(e)}catch(n){}}return s}function $(e,t){return n.setTimeout(e,t||0)}function J(e,t){var n={},r=0;for(;r<t.length;r++){n[t[r]]=e[r]}return n}function K(e,t){var n=[],r=0;for(;r<t.length;r++){n[r]=e[t[r]]}return n}function Q(){return E++}function G(){return S++}function Y(e){return e.replace(/[-_][^-_]/g,function(e){return e.charAt(1).toUpperCase()})}function Z(e){return e.replace(/([a-z\d])([A-Z])/g,"$1-$2").replace(/\_/g,"-").toLowerCase()}function et(e){var t;for(t in e){e[t]=o}}function tt(e){return e===u||e===o}function nt(e,t){e=(e===o?"":e).toString().trim();return t?encodeURIComponent(e):e}function rt(e,t){var n=[],r,i,s;for(r in e){if(tt(e[r])){n=n.concat(r)}else if(B(e[r])){for(i=0,s=e[r].length;i<s;i++){if(!F(e[r][i])){n.push(r+"="+nt(e[r][i],t))}}}else if(!F(e[r])&&e[r]!==o&&e[r]!==u){n.push(r+"="+nt(e[r],t))}}return n.join("&")}function it(e,t){return tt(e)?e:t?decodeURIComponent(e):e}function st(e,t){var n=e.trim().split("&"),r={},i=0,s=n.length;for(;i<s;i++){if(n[i]){var o=n[i].split("="),u=o[0],a=o[1];if(!(u in r)){r[u]=it(a,t)}else{r[u]=[].concat(r[u],it(a,t))}}}return r}function ot(e){var t=s,n;return function(){if(t)return n;t=i;n=e.apply(this,arguments);e=o;return n}}function ft(){var e=function(){};W(e.prototype,at);return new e}function lt(){function f(s,f,l){if(F(r)&&!n){n=i;r(u)}if(F(s)){if(e==="resolved"){s.apply(o,t)}else if(e==="pending"){a.add("resolve",s)}}if(F(f)){if(e==="rejected"){f.apply(o,t)}else if(e==="pending"){a.add("reject",f)}}if(F(l)){a.add("notify",l)}}var e="pending",t,n=s,r,u={},a=function(){var e={resolve:[],reject:[],notify:[]};return{add:function(t,n){e[t].push(n)},remove:function(t,n){var r=e[t].indexOf(n);if(r>-1){e[t].splice(r,1)}},clear:function(t){e[t].length=0},fire:function(t,n){e[t].forEach(function(e){e.apply(o,n)})},destroy:function(){e.resolve.length=0;e.reject.length=0;e.notify.length=0}}}();u.enabled=i;u.all=function(e){f(e,e);return u};u.done=function(e){f(e);return u};u.fail=function(e){f(o,e);return u};u.progress=function(e){f(o,o,e);return u};u.unProgress=function(e){a.remove("notify",e);return u};u.then=function(e,t,n){f(e,t,n);return u};u.resolve=function(){if(e==="pending"){e="resolved";t=m.call(arguments);a.fire("resolve",t)}return u};u.reject=function(){if(e==="pending"){e="rejected";t=m.call(arguments);a.fire("reject",t)}return u};u.notify=function(){a.fire("notify",m.call(arguments));return u};u.state=function(){return e};u.startWith=function(e){r=e;return u};u.destroy=function(){u.enabled=s;u.notify("destroy");e=o;t=o;n=o;r=o;u.destroy=function(){};u=o;a.destroy();a=o};return u}function ct(e,t,n){var r=new lt,i=n?e:e.slice(0),s=[],u=-1,a=function(e){a=t&&t.length?function(e){return t[e]}:function(e){return e};return a(e)},f=function(){u++;var n=i.shift();if(n&&F(n.all)){n.all(function(t){r.notify(a(u),t,e);s[u]=t;f()})}else if(n){if(F(n)){var l=n(s[u-1],s);if(l&&F(l.all)){l.all(function(t){r.notify(a(u),t,e);s[u]=t;f()})}else{r.notify(a(u),l,e);s[u]=l;f()}}else{r.notify(a(u),n,e);s[u]=n;f()}}else{if(t&&t.length){s=J(s,t)}r.resolve.call(o,s)}};return r.startWith(f)}function ht(e,t){var n=new lt,r=e.slice(0),i=[],s=0,a=function(){if(s===r.length){if(t&&t.length){i=J(i,t)}n.resolve.call(o,i)}},f=function(){r.forEach(function(e,t){if(e&&F(e.all)){i[t]=u;e.all(function(e){i[t]=e;s++;a()})}else{i[t]=e;s++}});a()};return n.startWith(f)}function pt(e){if(g.test(r.readyState)&&r.body){$(e,0)}else{xt(r,"DOMContentLoaded",function(){e()},s)}}function dt(e){var t,n,s="div";[["li","ul"],["tr","tbody"],["td","tr"],["th","tr"],["tbody","table"],["option","select"]].some(function(t){if(e.indexOf("<"+t[0])===0){s=t[1];return i}});t=r.createElement(s);t.innerHTML=e;n=V(t.children);t=r.createDocumentFragment();n.forEach(function(e){t.appendChild(e)});return{box:t,children:n}}function vt(e,t){t=[].concat(t);t.forEach(function(t){e.appendChild(t)})}function mt(e,t,n){n=n?n.toLowerCase():"beforeend";switch(n){case"beforebegin":e.parentNode.insertBefore(t,e);break;case"afterbegin":e.insertBefore(t,e.firstChild);break;case"beforeend":e.appendChild(t);break;case"afterend":if(e.nextSibling){e.parentNode.insertBefore(t,e.nextSibling)}else{e.parentNode.appendChild(t)}break}return t}function gt(e){if(e&&e.parentNode){e.parentNode.removeChild(e)}}function yt(e,t,n){var r=n===s||n===null||n===void 0;var o=T[t];if(typeof e[o]==="boolean"){e[o]=!!n;if(!n){r=i}}if(r){return e.removeAttribute(t)}var u=b.test(e)?s:t in e.cloneNode(s);if(u){e[t]=n}else{e.setAttribute(t,n)}}function bt(e,t){if(j(t)){if(arguments.length>2){yt(e,t,arguments[2])}else{return e.getAttribute(t)}}else{X(t,function(t,n){yt(e,t,n)})}}function wt(e,t){if(e&&e.style){if(j(t)){if(arguments.length>2){var r=arguments[2];if(k.test(t)){e.style[L]=t+"("+r+")"}else{t=Y(t);if(r||r===0){e.style[t]=r}else{e.style.removeProperty(t)}}}else{var i=n.getComputedStyle(e,o),s;if(i){s=i[Y(t)]}return s}}else{var u=[],a="";X(t,function(e,t){if(k.test(e)){a+=e+"("+t+") "}else{u.push(Z(e)+":"+t)}});if(a.length){u.push(Z(L)+":"+a)}e.style.cssText+=";"+u.join(";")+";"}}}function Et(e,t){if(e&&e.style){[].concat(t).forEach(function(t){e.style.removeProperty(t);e.style.removeProperty(A+t)})}}function St(e){if(!e.target){e.target=e.srcElement||document}if(e.target.nodeType==3){e.target=e.target.parentNode}if(e.pageX===o&&e.clientX!==o){var t=r.documentElement,n=r.body;e.pageX=e.clientX+(t.scrollLeft||n&&n.scrollLeft||0)-(t.clientLeft||n&&n.clientLeft||0);e.pageY=e.clientY+(t.scrollTop||n&&n.scrollTop||0)-(t.clientTop||n&&n.clientTop||0)}return e}function xt(e,t,n,r){e.addEventListener(t,n,!!r)}function Tt(e,t,n){e.removeEventListener(t,n)}function Nt(e,t,n){var i=r.createEvent("Events");i.initEvent(t,true,true);W(i,n);e.dispatchEvent(i)}function Ct(e,t){e.className=(e.className+w+t).split(/\s+/).filter(function(e,t,n){return n.lastIndexOf(e)===t}).join(w)}function kt(e,t){t=w+t.replace(/\s+/g,w)+w;e.className=e.className.split(/\s+/).filter(function(e){return t.indexOf(w+e+w)===-1}).join(w)}function Lt(e){var t=r.createElement("style");t.type="text/css";t.innerHTML=e;r.querySelector("head").appendChild(t)}function Ot(e){var t;if(h.ios&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"&&e.type!=="month"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}}function Mt(e){var t=r.activeElement;e=e||r.body;if(t&&At(e,t)&&F(t.blur)){t.blur()}}function _t(e){function t(t){var n=e.documentElement,r=e.body;return Math.max(r["scroll"+t],n["scroll"+t],r["offset"+t],n["offset"+t],n["client"+t])}return{width:t("Width"),height:t("Height")}}function Dt(e){function t(t){return e.document.documentElement["client"+t]}return{width:t("Width"),height:t("Height")}}function Pt(e){var t=P(e),n;switch(t){case"Document":n=_t(e);break;case"Window":n=Dt(e);break;default:n={width:parseInt(wt(e,"width"),10),height:parseInt(wt(e,"height"),10)}}return n}function Ht(e){var t=e.getBoundingClientRect(),r=e.ownerDocument.body,i=e.ownerDocument.documentElement,s=Math.max(n.pageYOffset||0,i.scrollTop,r.scrollTop),o=Math.max(n.pageXOffset||0,i.scrollLeft,r.scrollLeft),u=i.clientTop||r.clientTop||0,a=i.clientLeft||r.clientLeft||0;return{left:t.left+o-a,top:t.top+s-u}}function Bt(e,t){return{left:e.left-t.left,top:e.top-t.top}}function jt(e){if(!At(e.ownerDocument.body,e)){return{top:NaN,left:NaN}}return arguments.length>1?Bt(Ht(e),Ht(arguments[1])):Ht(e)}function Ft(e){var t={};if(e){if(e.dataset){W(t,e.dataset)}else{var n=e.attributes;for(var r=0,i=n.length;r<i;r++){var s=n[r].name,o=n[r].value;if(s.indexOf("data-")===0){s=Y(s.substring(5));t[s]=o}}}}return t}function It(e,t,n){if(F(e)){return e.apply(t,V(n)||[])}}function qt(e){var t=M;e=V(e);if(e){e.some(function(e){if(F(e)){t=e;return i}})}return t}function Wt(e,t,n){function f(n,u,f){function c(){var t=n,s=Ft(t);if(r[u]&&r[u][l]){return r[u][l]({evt:f,el:t,box:e,data:s},s)}else{return i}}var l=o;if(zt(t,n)){return s}else if(!At(e,n)){return s}else{while(n&&n!==e){if(n.nodeType===1){l=n.getAttribute(a);if(l&&c()===s){break}}n=n.parentNode}}}if(!t){t=[]}t=[].concat(t);var r={},u=function(e){var t=e.target,n=e.type;f(t,n,e)},a=n||"action-type";var l={};l.add=function(t,n,i,s){if(!r[n]){r[n]={};xt(e,n,u,!!s)}var o=r[n];o[t]=i};l.remove=function(t,n){if(r[n]){delete r[n][t];if(U(r[n])){delete r[n];Tt(e,n,u)}}};l.pushExcept=function(e){t.push(e)};l.removeExcept=function(e){if(!e){t=[]}else{for(var n=0,r=t.length;n<r;n+=1){if(t[n]===e){t.splice(n,1)}}}};l.clearExcept=function(){t=[]};l.fireAction=function(t,n,i,s){var u={};if(s&&s.data){u=s.data}if(r[n]&&r[n][t]){r[n][t]({evt:i,el:o,box:e,data:u,fireFrom:"fireAction"},u)}};l.fireInject=function(t,n,i){var s=t.getAttribute(a),o=Ft(t);if(s&&r[n]&&r[n][s]){r[n][s]({evt:i,el:t,box:e,data:o,fireFrom:"fireInject"},o)}};l.fireDom=function(e,t,n){f(e,t,n||{})};l.destroy=function(){for(var t in r){for(var n in r[t]){delete r[t][n]}delete r[t];Tt(e,t,u)}};return l}function $t(e,t){var n=J(Xt.exec(e)||[],Vt);n.query=n.query?st(n.query.substring(1),t):{};n.hash=n.hash?st(n.hash.substring(1),t):{};n.getQuery=function(e){return n.query[e]};n.getHash=function(e){return n.hash[e]};n.setQuery=function(e,t){if(t===u){n.query[e]=o}else{n.query[e]=t}return n};n.setHash=function(e,t){if(t===u){n.hash[e]=o}else{n.hash[e]=t}return n};n.toUrl=function(e){var t=n.protocol+"://",r=rt(n.query,e),i=rt(n.hash,e);if(n.protocol&&n.protocol.toLowerCase()==="file"){t+="/"}return t+n.hostname+(n.port||"")+n.path+(n.name||"")+(r?"?"+r:"")+(i?"#"+i:"")};return n}function Qt(e,t,n){var r;Kt.insertBefore(e,Kt.firstChild);if(n){r=$(function(){e.onload=o;gt(e);t.reject({type:"Timeout"})},n)}e.onload=function(){if(r){clearTimeout(r)}e.onload=o;e.onerror=o;t.resolve()};e.onerror=function(){if(r){clearTimeout(r)}gt(e);e.onload=o;e.onerror=o;t.reject({type:"Error"})}}function Yt(e,t,n){var r=W({},Jt,n),i=Gt[e]&&Gt[e](t,r);if(i&&(r.onComplete||r.onFail||r.onTimeout)){i.then(r.onComplete,function(e){if(e.type==="Timeout"&&F(r.onTimeout)){r.onTimeout(e)}if(e.type==="Error"&&F(r.onFail)){r.onFail(e)}})}return i}function sn(e,t){console[e].apply(console,["["+e.toUpperCase()+"]"].concat(V(t)))}function mn(e){dn.done(e)}var e={version:"0.4.7"},t=e._packages={};var n=window,r=document,i=true,s=false,o=null,u=void 0;var l={app:"spa-app",view:"spa-view",widget:"spa-widget",role:"spa-role"};var c={type:"touch",indexView:"index",animate:i,defaultAnimate:"moveEnter",autoInit:i,hashRouter:i,hashSupport:{all:i,exist:[],except:[]},customRoot:i,appRoot:o,screen:{rotate:s,largeChange:i},gesture:{open:i,ctrl:i,longTap:i,autoBlur:i},root:{top:0,right:0,bottom:0,left:0},logLevel:1};var h=function(){var e={};var t=navigator.userAgent,r=navigator.platform,u=t.match(/(Android);?[\s\/]+([\d.]+)?/),a=t.match(/(iPad).*OS\s([\d_]+)/),f=t.match(/(iPod)(.*OS\s([\d_]+))?/),l=t.match(/(iPhone\sOS)\s([\d_]+)/);e.ios=e.android=e.iphone=e.ipad=e.ipod=s;if(u){e.os="android";e.osVersion=u[2];e.android=i}if(a||l||f){e.os="ios";e.ios=i}if(l){e.osVersion=l[2].replace(/_/g,".");e.iphone=i;e.imobile=i}if(a){e.osVersion=a[2].replace(/_/g,".");e.ipad=i}if(f){e.osVersion=f[3]?f[3].replace(/_/g,"."):o;e.ipod=i;e.imobile=i}if(e.ios&&e.osVersion&&t.indexOf("Version/")>=0){if(e.osVersion.split(".")[0]==="10"){e.osVersion=t.toLowerCase().split("version/")[1].split(" ")[0]}}if(e.osVersion){e.osVersionN=parseInt(e.osVersion.match(/\d+\.?\d*/)[0])}e.pixelRatio=n.devicePixelRatio||1;e.retina=e.pixelRatio>=2;e.pc=r.indexOf("Mac")===0||r.indexOf("Win")===0||r.indexOf("linux")===0&&!e.android;return e}();var p=Object.prototype,d=Array.prototype,v=p.toString,m=d.slice,g=/complete|loaded|interactive/,y=/Element$/,b=/^\[object SVG\w*Element\]$/,w=" ",E=1,S=1e3;var x="autofocus,autoplay,async,allowTransparency,checked,controls,declare,disabled,defer,defaultChecked,defaultSelected,contentEditable,isMap,loop,multiple,noHref,noResize,noShade,open,readOnly,selected",T={};x.replace(/\w+/g,function(e){T[e.toLowerCase()]=e});var N=["Webkit","","Moz","O"],C=r.createElement("div"),k=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,L="",A="",O;N.every(function(e){if(C.style[e+"TransitionProperty"]!==u){if(e){A="-"+e.toLowerCase()+"-"}O=e.toLowerCase();return s}});C=o;L=A+"transform";var D={"[object HTMLDocument]":"Document","[object HTMLCollection]":"NodeList","[object StaticNodeList]":"NodeList","[object IXMLDOMNodeList]":"NodeList","[object DOMWindow]":"Window","[object global]":"Window","null":"Null",NaN:"NaN","undefined":"Undefined"};"Boolean,Number,String,Function,Array,Date,RegExp,Window,Document,Arguments,NodeList,Null,Undefined".replace(/\w+/ig,function(e){D["[object "+e+"]"]=e});var ut=function(e,t){var n,r=-1,i=e.length,s=1;while(++r<i&&s){n=e[r];s&=n.callback.apply(n.ctx,t)!==false}return!!s};var at={on:function(e,t,n){this._events=this._events||{};this._events[e]=this._events[e]||[];var r=this._events[e];r.push({callback:t,context:n,ctx:n||this});return this},once:function(e,t,n){var r=this;var i=ot(function(){r.off(e,i);t.apply(this,arguments)});i._callback=t;return this.on(e,i,n)},off:function(e,t,n){if(!this._events)return this;var r,i,s,o,a,f,l,c;if(!e&&!t&&!n){this._events=u;return this}o=e?[e]:_(this._events);for(a=0,f=o.length;a<f;a++){e=o[a];s=this._events[e];if(s){this._events[e]=r=[];if(t||n){for(l=0,c=s.length;l<c;l++){i=s[l];if(t&&t!==i.callback&&t!==i.callback._callback||n&&n!==i.context){r.push(i)}}}if(!r.length)delete this._events[e]}}return this},trigger:function(e){if(!this._events)return this;var t=m.call(arguments,1),n=this._events[e],r=this._events.all,i=1;if(n){i&=ut(n,t)}if(r&&i){i&=ut(r,t)}return!!i}};var At=r.compareDocumentPosition?function(e,t){return!!(e.compareDocumentPosition(t)&16)}:function(e,t){return e!==t&&(e.contains?e.contains(t):i)};var Rt=function(){function T(){v=o;m=o;g=o}function N(t,n){if(n){e.forEach(function(e){t[e]=n[e]})}return t}function C(e){return V(e).filter(function(e){return e.identifier===g})[0]}function k(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))}function L(e,t){var n=Math.atan2(t,e)/Math.PI*180;return n<0?n+360:n}function A(e,t){var n=[],r=Math.abs(e),i=Math.abs(t),s=Math.tan(l/180*Math.PI),o=r>i;if(r>0||i>0){n.push(o?e>0?"right":"left":t>0?"down":"up");if(o&&i/r>s){n.push(t>0?"down":"up")}else if(!o&&r/i>s){n.push(e>0?"right":"left")}}return n}function O(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return i}break;case"input":if(h.ipad&&h.osVersionN===6&&e.type==="file"||e.disabled){return i}break;case"label":case"iframe":case"video":return i}return/\bneedsclick\b/.test(e.className)}function M(e){switch(e.nodeName.toLowerCase()){case"textarea":return i;case"select":return!h.android;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return s}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}}function _(e){if(h.android&&e.nodeName.toLowerCase()==="select"){return"mousedown"}return"click"}function D(e,t){var u;if(r.activeElement&&r.activeElement!==e){r.activeElement.blur()}u=r.createEvent("MouseEvents");u.initMouseEvent(_(e),i,i,n,1,t.screenX,t.screenY,t.clientX,t.clientY,s,s,s,s,0,o);u.forwardedTouchEvent=i;if(x){e.dispatchEvent(u)}}function P(e){if(e.control!==u){return e.control}if(e.htmlFor){return r.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")}function H(e){var t=r.createEvent("HTMLEvents");t.initEvent(e,i,i);return t}function B(e,t,n,r,i){var s=H(e);s.offsetX=t;s.offsetY=n;s.degree=L(t,n);s.directions=A(t,n);if(i){s.duration=i;s.speedX=s.offsetX/i;s.speedY=s.offsetY/i}return N(s,r)}function j(e,t){var n=v.origin,r=t.clientX-n.clientX,i=t.clientY-n.clientY;if(v.status==="tapping"||v.status==="pressing"){if(k(r,i)>f){v.status="panning";w=s;E=o;v.startMoveTime=e.timeStamp;clearTimeout(v.handler);v.handler=o;I(B("pan",r,i,t))}}else if(v.status==="panning"){I(B("pan",r,i,t))}}function F(e,t){if(v.handler){clearTimeout(v.handler);v.handler=o}if(v.status==="panning"){var n=v.origin,r=t.clientX-n.clientX,i=t.clientY-n.clientY,s=e.timeStamp-v.startMoveTime;I(B("panend",r,i,t,s));if(s<p&&k(r,i)>d){I(B("flick",r,i,t,s))}}else{if(v.status==="tapping"){I(N(H("tap"),t))}else if(v.status==="pressing"){I(N(H("pressend"),t));if(a){I(N(H("tap"),t))}}}}function I(e){if(x&&m){m.dispatchEvent(e)}}function q(e){var r,u,a=e.changedTouches,f=e.timeStamp;if(f-b<t){e.preventDefault();return s}if(a.length>1){return i}r=a[0];if(r){m=e.target;g=r.identifier;v={origin:N({},r),timestamp:f,status:"tapping",handler:setTimeout(function(){v.status="pressing";I(N(H("press"),v.origin));clearTimeout(v.handler);v.handler=o},t)};if(!h.pc){if(h.ios){u=n.getSelection();if(u.rangeCount&&!u.isCollapsed){return i}if(g===y){e.preventDefault();return s}y=g}w=i;E=m}}return i}function R(e){var t=C(e.changedTouches);if(t&&v){j(e,t)}return i}function U(e){var r=C(e.changedTouches),u=e.timeStamp,a,f,l;if(r&&v){F(e,r);l=v.timestamp;T();if(w){if(u-b<t){S=i;return i}if(u-l>t){return i}S=s;b=u;a=E.nodeName.toLowerCase();if(a==="label"){f=P(E);if(f){Ot(f);if(h.android){return s}E=f}}else if(M(E)){if(u-l>100||h.ios&&n.top!==n&&a==="input"){E=o;return s}Ot(E);D(E,r);if(!h.ios||a!=="select"){E=o;e.preventDefault()}return s}if(!O(E)){e.preventDefault();D(E,r)}return s}}return i}function z(e){var t=C(e.changedTouches);if(t&&v){E=o;F(e,t);T()}return i}function W(e){if(!E){return i}if(e.forwardedTouchEvent){return i}if(!e.cancelable){return i}if(!O(E)||S){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=i}e.stopPropagation();e.preventDefault();return s}return i}function X(e){var t;if(w){E=o;w=s;return i}if(e.target.type==="submit"&&e.detail===0){return i}t=W(e);if(!t){E=o}return t}var e=["screenX","screenY","clientX","clientY","pageX","pageY"],t=200,a=s,f=10,l=15,p=300,d=100;var v,m,g,y,b=0,w,E,S=s,x=i;pt(function(){var e=r.body;if(!c.gesture||c.gesture.open!==false){if(!h.pc){if(h.android){xt(e,"moveover",W,i);xt(e,"mousedown",W,i);xt(e,"mouseup",W,i)}xt(e,"click",X,i)}xt(e,"touchstart",q,i);xt(e,"touchmove",R,i);xt(e,"touchend",U,i);xt(e,"touchcancel",z,i)}});return{allowLongTap:function(){a=i},on:function(){x=i},off:function(){x=s}}}();var Ut=function(){function f(e){var t=e.parentNode;if(t){wt(t,{"transform-style":"preserve-3d","backface-visibility":"hidden"})}}function l(e){var t=e.parentNode;Et(t,["transform-style","backface-visibility"])}var e=200,t=25,n="linear";var r,o,u,a;r=A+"transition-property";o=A+"transition-duration";a=A+"transition-delay";u=A+"transition-timing-function";return function(c,h,p,d,v){function x(e){if(e){if(e.target!==c){return}}Tt(c,g,x);S=i;$(function(){if(w){l(c)}Et(c,"transition");E.resolve()})}var m=arguments.length,g=O+"TransitionEnd",y={},b=[],w="";if(m<3){p=e}if(m<4){d=n}if(m<5){v=0}X(h,function(e,t){if(k.test(e)){w+=e+"("+t+") "}else{y[e]=t}b.push(Z(e))});if(w){y[L]=w;b.push(L)}if(p>0){y[r]=b.join(", ");y[o]=p/1e3+"s";y[a]=v/1e3+"s";y[u]=d}var E=new lt;var S=s;if(p>0){xt(c,g,x,s);$(function(){if(!S){x()}},p+v+t*2)}$(function(){if(w){f(c)}wt(c,y);E.notify("start")},t);if(p<=0){$(x)}return E}}();var zt=function(e,t){for(var n=0,r=e.length;n<r;n+=1){if(At(e[n],t)){return i}}return s};var Xt=/(\w+):\/\/\/?([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(\?[^#]*)?(#.*)?/i,Vt=["url","protocol","hostname","port","path","name","query","hash"];var Jt={charset:"UTF-8",timeout:30*1e3,onComplete:o,onTimeout:o,onFail:o};var Kt=r.getElementsByTagName("head")[0];var Gt={script:function(e,t){var n=new lt,i=t.charset,s=t.timeout,o=r.createElement("script");o.type="text/javascript";o.charset=i;return n.startWith(function(){n.notify("element",o);Qt(o,n,s);o.src=e})},style:function(e,t){var n=new lt,i=t.charset,s=t.timeout,o=r.createElement("link");o.type="text/css";o.charset=i;o.rel="stylesheet";return n.startWith(function(){Qt(o,n,s);o.href=e})},image:function(e,t){var n=new lt,r=new Image,i=t.timeout,s=o;r.onload=function(){r.onload=o;r.onerror=o;if(s){clearTimeout(s)}n.resolve(r)};r.onerror=function(){r.onload=o;r.onerror=o;if(s){clearTimeout(s)}n.reject({type:"Error"})};if(i){s=$(function(){r.onload=o;r.onerror=o;if(s){clearTimeout(s)}n.reject({type:"Timeout"})},i)}return n.startWith(function(){r.src=e})}};var Zt="onorientationchange"in n,en="resize",tn=ft(),nn=function(e){return e.width>e.height?"landscape":"portrait"};tn.get=function(){return nn(Pt(n))};pt(function(){var e=Pt(n);n.addEventListener(en,function(){var t=Pt(n);if(e.width!==t.width&&e.height!==t.height){e=t;tn.trigger("change",{type:en,width:t.width,height:t.height,orientation:nn(t)})}})});var rn=["info","debug","warn","error"];rn.forEach(function(e,t){sn[e]=function(){if(t>=c.logLevel){sn(e,arguments)}}});var on=$t(location.href).query.logLevel;if(on){c.logLevel=parseInt(on)}a("fetchNode",function(){function e(e){e.resolve()}return function(t){var n=t.options;return(new lt).startWith(function(r){if(n.html||F(n.fetch)){if(n.html){e(r)}else if(n.fetch.length){n.fetch.call(t,function(t){n.html=t||"";e(r)})}else{n.html=n.fetch.call(t)||"";e(r)}}else{n.html="";e(r)}})}});a("display",function(){return{show:function(e,t,n,r){var i=this;if(i.isShow){wt(i.root,W({width:"100%",height:"100%",zIndex:G()},n||t));i.trigger("refresh")}else{i.once("completed",function(){wt(i.root,W({width:"100%",height:"100%",zIndex:G()},t));i.trigger("beforeShow");if(c.animate&&n){Ut(i.root,n,r).done(function(){i.trigger("show")})}else{wt(i.root,n||{});i.trigger("show")}});i.renderTo(I(e)?e:c.appRoot)}return i},hide:function(){var e=this;if(e.isShow){e.trigger("beforeHide");e.trigger("hide")}return e}}});a("pluginM",function(){var t=e._plugins={},n=[];return{add:function(e,n,r){var i=[].concat(e);i.forEach(function(e){if(!t[e]){t[e]={options:n,adapter:r}}else{}})},exists:function(e){return!!t[e]},get:function(e){return t[e]},setOpt:function(e,n){if(t[e]){W(i,t[e].options,n)}},getGlobal:function(){return n},setGlobal:function(e){n=n.concat(e)}}});a("widgetM",function(){var t=e._widgets={};return{add:function(e,n,r){t[e]={eventName:r&&(j(r)?r:"tap"),adapter:n}},exists:function(e){return!!t[e]},isEvent:function(e){return!!t[e].eventName},get:function(e){return t[e]},show:function(e,n,r,i){if(t[e]){if(I(n)){return t[e].adapter(n,r,i)}else{return t[e].adapter(o,n,r)}}}}});a("module",function(){function r(e,n,r,i){return(new lt).startWith(function(s){t.get(e,function(e){if(s.enabled){if(e){var t=function(t){if(t==="destroy"){e.destroy();e=o;s.reject()}};e.parentModule=r;e.parentView=r.parentView;e.on("loadStart",function(){e.mergeParam(n);e.initialShow=!!i});e.on("completed",function(){s.resolve(e)});e.renderTo(r.container);e.on("destroy",function(){e=o});s.progress(t);s.all(function(){s.unProgress(t)})}else{s.resolve(o)}}})})}function u(e,t){var n=e.options.views;n.forEach(function(r,i){if(j(r)){n[i]=r={tag:r,name:r,param:{}}}if(r.name.indexOf(":")===-1&&t){r.name+=":"+t}e.addView(r.tag,r.name,r.param)})}function a(t){t.options.plugins.forEach(function(n){var r=typeof n==="string"?n:n.name,i=n.options||{};if(e.exists(r)){t.plugins[r]=e.get(r)(t,i,c)}})}function l(e){if(e&&e.options&&e.options.styles){wt(e.root,e.options.styles)}}function h(e,t){var r=this;r.options=W(i,{},n,e);r.param={};r.isReady=s;r.container=o;r.curTag=r.options.defaultTag||o;r.tagList=[];r.parentView=o;r.views={};r.plugins={};r.renderAll=r.options.renderAll;r.renderDefers=[];r.renderAllDefer=o;r.renderOneDefer=o;r.pushMessageTimer=o;u(r,t);a(r)}var e=f("pluginM"),t;var n={name:o,defaultTag:o,container:o,renderAll:s,ready:o,views:[],plugins:[],renderEvent:i};W(h.prototype,{renderTo:function(e){var t=this,n=t.options.renderEvent,s;t.container=e;if(t.renderAll){t.renderAllDefers=ct(t.renderDefers,t.tagList).done(function(){t.trigger("loaded")}).progress(function(e,r){if(r){if(n){r.trigger("beforeShow")}t.views[e].entity=r;if(n){r.trigger("show")}if(e!=t.curTag){wt(r.root,"display","none")}}})}else if(t.curTag){s=t.views[t.curTag];if(s){t.renderOneDefer=r(s.name,s.param,t,i).done(function(e){if(n){e.trigger("beforeShow")}s.entity=e;if(n){e.trigger("show")}t.trigger("loaded")})}}else{t.trigger("loaded")}if(!t.isReady){t.isReady=i;t.trigger("ready");It(t.options.ready,t)}},mergeParam:function(e){var n=this,r;W(i,n.param,e);if(n.curTag&&n.views[n.curTag]){r=n.views[n.curTag];t.get(r.name,r.param).invoke("mergeParam",n.param)}},addView:function(e,t,n){var i=this;e=e||t;if(i.renderAll&&!i.curTag){i.curTag=e}i.views[e]={name:t,param:n};i.tagList.push(e);if(i.renderAll){i.renderDefers.push(r(t,n,i,i.curTag===e))}},launch:function(e,t){var n=this,i=n.views[n.curTag],s=n.views[e],u,a;if(n.renderOneDefer){n.renderOneDefer.destroy();n.renderOneDefer=o}if(s){u=i&&i.entity;a=s.entity;if(n.curTag===e&&u){u.mergeParam(W({},n.param,t));u.trigger("refresh")}else{if(n.renderAll){a.mergeParam(W({},n.param,t));if(u){wt(u.root,"display","none")}Et(a.root,["visibility","display"]);l(a);a.notify("actived");if(u){u.notify("deactived")}n.curTag=e;n.trigger("launch",e,t)}else{if(u){u.trigger("beforeHide")}a=s.entity=o;n.renderOneDefer=r(s.name,W({},s.param,n.param,t),n).done(function(r){if(r){a=s.entity=r;a.mergeParam(W({},n.param,t));a.trigger("beforeShow");if(u){wt(u.root,"display","none")}Et(a.root,["visibility","display"]);l(a);if(u){u.trigger("hide")}a.trigger("show");if(u){u.destroy();i.entity=o}n.trigger("launch",e,t)}}).fail(function(){if(u){u.destroy();i.entity=o}})}n.curTag=e}}},getCurViewOpt:function(){return this.views[this.curTag]},getCurView:function(){var e=this,t=e.curTag,n=e.views;return t&&n[t]?n[t].entity:o},pushMessage:function(e,t){var n=this;if(n.curTag){if(n.views[n.curTag].entity){n.views[n.curTag].entity.trigger(e,t)}else{(n.renderOneDefer||n.renderAllDefer).done(function(){if(n.views[n.curTag].entity){n.views[n.curTag].entity.trigger(e,t)}})}}},destroy:function(){var e=this;X(e.views,function(e,t){if(t.entity&&t.entity.destroy){t.entity.destroy()}t.entity=o});e.tagList.length=0;e.renderDefers.forEach(function(e){e.destroy()});e.renderDefers.length=0;if(e.renderAllDefer){e.renderAllDefer.destroy()}if(e.renderOneDefer){e.renderOneDefer.destroy()}clearTimeout(e.pushMessageTimer);X(e.plugins,function(e,t){if(t&&F(t.destroy)){t.destroy()}});et(e);e.destroyed=i}},at);h.inject=function(e){t=e};return h});a("view",function(){function d(){return r.createElement(l.view)}function v(e){var t=e.options.init;X(t,function(t,n){e[t]=F(n)?n.bind(e):n})}function m(e){X(e.options.bindEvents,function(t,n){if(F(n)){e.on(t,n.bind(e))}})}function g(t,n){var r=t.options,s;r.subViews.forEach(function(e){r.modules.unshift({name:e.name+"-module",defaultTag:"index",container:e.container,ready:o,views:[{tag:"index",name:e.name,param:e.param}],plugins:[],renderEvent:e.renderEvent})});r.modules.forEach(function(r){t.hasModule=i;s=new e(r,n);s.parentView=t;t.modules[r.name]=s})}function y(e){var t=n.getGlobal();t.concat(e.options.plugins).forEach(function(t){var r=j(t)?t:t.name,s=t.options||e.options[Y(r)+"Options"]||{},o=n.get(r),u;if(o&&F(o.adapter)){u=F(s)?s:W(i,{},o.options,s);e.plugins[r]=o.adapter(e,u,c)}})}function b(e,t){var n={param:{}};X(Ft(e),function(e,r){if(!e.indexOf(t)){var i=e.substring(t.length).replace(/\w/i,function(e){return e.toLowerCase()});if(!i.indexOf("param")){n.param[i.substring(5).replace(/\w/i,function(e){return e.toLowerCase()})]=r}else{n[i]=r}}});return n}function w(e,t){t=(j(t)?e.root.querySelector(t):t)||e.root;V(t.querySelectorAll("["+l.widget+"]")).forEach(function(t){var n=bt(t,l.widget),r,i,a,f,c;if(u.exists(n)){i=u.get(n).eventName;f=u.get(n).adapter;a=function(){c=b(t,n);r=f(t,c,e);if(c.id){e.widgets[c.id]=r}};if(u.isEvent(n)){c=b(t,n);i=c.eventType||i;xt(t,i,a,s);e.on("destroy",function(){Tt(t,i,a)})}else{if(e.isReady){a()}else{e.on("ready",function(){a()})}}e.on("destroy",function(){if(r&&F(r.destroy)){r.destroy()}r=o;f=o;c=o;a=o})}})}function E(e){e.isReady=i;e.trigger("ready");It(e.options.ready,e);e.trigger("completed")}function S(e){return e.split("-")[0].split(":")[1]}function x(e){var t=this;t.options=W(i,{},p,e);t.name=t.options.name||"view-"+Q();t.container=o;t.isReady=s;t.isShow=s;t.locked=s;t.root=o;t.nodes=o;t.param={};t.parentModule=o;t.parentView=o;t.hasModule=s;t.modules={};t.plugins={};t.widgets={};t.extra=W({},t.options.extra);t.renderEventTimer=o;t.renderDeferred=new lt;t.moduleDeferreds=[];t.modulParallelDeferred=o;v(t);m(t);g(t,S(t.name));y(t);t.on("show",function(){t.isShow=i});t.on("hide",function(){t.isShow=s})}var e=f("module"),t=f("fetchNode"),n=f("pluginM"),u=f("widgetM"),a=f("display");var h=10;var p={init:{},html:o,fetch:o,classNames:[],attrs:{},styles:{},destroyDom:i,supportHash:i,ready:o,modules:[],subViews:[],plugins:[],bindEvents:{},extra:{}};W(x.prototype,at,{renderTo:function(e){var n=this;if(!n.locked){n.locked=i;n.container=e;if(!n.isReady){n.root=d();bt(n.root,"qapp-name",n.name);Ct(n.root,n.options.classNames.join(" "));bt(n.root,n.options.attrs);wt(n.root,n.options.styles);n.trigger("loadStart");t(n).done(function(){n.html=n.options.html;n.trigger("loadEnd");n.container.appendChild(n.root);n.renderHTML().done(function(){n.trigger("rendered");if(n.hasModule){X(n.modules,function(e,t){n.moduleDeferreds.push((new lt).startWith(function(e){t.once("loaded",function(){e.resolve()});t.renderTo(t.options.container&&n.root.querySelector(t.options.container)||n.root)}))});n.modulParallelDeferred=ht(n.moduleDeferreds).done(function(){n.trigger("loaded");n.locked=s;E(n)})}else{n.trigger("loaded");n.locked=s;E(n)}})})}else{n.trigger("rendered");n.container.appendChild(n.root);n.trigger("loaded");n.locked=s;n.trigger("completed")}}return n},renderHTML:function(e){var t=this,n=t.renderDeferred,r=function(e){if(t.renderEventTimer){clearTimeout(t.renderEventTimer);t.renderEventTimer=o}t.renderEventTimer=$(function(){if(t.root){n.resolve()}},h)};t.html=e||t.html;t.nodes=dt(t.html).children;if(t.nodes.length){xt(t.root,"DOMNodeInserted",r,s);vt(t.root,t.nodes);n.done(function(){Tt(t.root,"DOMNodeInserted",r);w(t)});t.renderEventTimer=$(function(){if(t.root){n.resolve()}},h)}else{if(t.root){w(t);n.resolve()}}return n},staticBuild:function(e){var t=this;if(e&&I(e)){t.trigger("loadStart");t.html=e.innerHTML||"";t.trigger("loadEnd");t.container=e.parentNode||e;t.root=e;bt(t.root,"qapp-name",t.name);Ct(t.root,t.options.classNames.join(" "));bt(t.root,t.options.attrs);wt(t.root,t.options.styles);t.nodes=V(e.children)||[];w(t);t.trigger("rendered");t.trigger("loaded");E(t);t.trigger("completed");t.trigger("beforeShow");t.trigger("show");t.trigger("actived")}return t},show:a.show,hide:a.hide,close:a.hide,mergeParam:function(e){var t=this;W(i,t.param,e);X(t.modules,function(e,n){n.mergeParam(t.param)});return t},getInnerView:function(e){var t=this,n,r;if(e){for(n in t.modules){r=t.modules[n].getCurViewOpt();if(r.entity&&r.name===e){return r.entity}}}return o},fn:function(e){var t=this;return function(){return F(t[e])?t[e].apply(this,V(arguments)):o}},frontOn:function(e,t){var n=this,r=n._events[e]=n._events[e]||[];r.unshift({callback:t,ctx:n});return n},dispatch:function(){var e=this,t=e.parentView,n=V(arguments);if(e.trigger.apply(e,n)&&t){if(t.isReady&&!t.locked){t.trigger.apply(t,n)}else{t.on("completed",function(){t.trigger.apply(t,n)})}}},notify:function(){var e=this,t=V(arguments),n;if(e.trigger.apply(e,t)&&e.hasModule){X(e.modules,function(e,r){n=r.getCurView();if(n){n.notify.apply(n,t)}})}},scanWidget:function(e){w(this,e)},showWidget:function(e,t,n){if(widgets[e]){if(I(t)){return widgets[e].adapter(t,n,this)}else{return widgets[e].adapter(o,t,n,this)}}},destroy:function(){var e=this;if(e.options.destroyDom){gt(e.root)}clearTimeout(e.renderEventTimer);if(e.renderDeferred){e.renderDeferred.destroy()}if(e.hasModule){e.moduleDeferreds.forEach(function(e){e.destroy()});e.moduleDeferreds.length=0;if(e.modulParallelDeferred){e.modulParallelDeferred.destroy()}}X(e.modules,function(e,t){t.destroy()});X(e.plugins,function(e,t){if(t&&F(t.destroy)){t.destroy()}});X(e.widgets,function(e,t){if(t&&F(t.destroy)){t.destroy()}});e.trigger("destroy");e.off();et(e);e.destroyed=i;return e}});return x});a("taskQ",function(){function u(r){e.trigger("running",i);ct(r,[],i).done(function(){n.forEach(function(e){if(e&&F(e.destroy)){e.destroy()}});n=o;e.trigger("running",s)}).progress(function(){t.trigger("ev")})}var t=ft(),n=o,r=500;var a={push:function(e){if(n){n.push(e)}else{n=[e];u(n)}},pushTask:function(e){a.push((new lt).startWith(function(t){try{e(t)}catch(n){}$(function(){if(t&&F(t.resolve)){t.resolve()}},r)}))},addListener:function(e){t.on("ev",e)}};return a});a("viewM",function(){function a(e){}function l(e){return e.split(":")[0]}function h(e,n,r){var i;if(u[e]&&u[e][n]){r(u[e][n])}else if(s[e]){i=u[e][n]=new t(W({name:e+":"+n},s[e]));i.on("destroy",function(){u[e][n]=o});r(i)}else{a(e)}}function p(e,n){var r=o;if(u[e]&&u[e][n]){r=u[e][n]}else if(s[e]){r=u[e][n]=new t(W({name:e+":"+n},s[e]));r.on("destroy",function(){u[e][n]=o})}else{a(e)}return r}function d(e){var t=e.split(":");return{name:t[0],index:t[1]||0}}function v(e,t){X(t,function(t,n){if(t.indexOf("on")===0&&F(n)&&t!="onComplete"){e.on(t.substring(2).replace(/\w/,function(e){return e.toLowerCase()}),n)}})}function m(e){return W.apply(o,[i,{}].concat(V(e).map(function(e){return j(e)?s[e]||{}:e})))}var t=f("view"),n=f("module"),r=f("taskQ");var s=e._viewOptionsMap={},u=e._viewMap={};var g={define:function(e){if(j(e)){s[e]=m(arguments);u[e]=[]}},undefine:function(e){if(j(e)){s[e]=o}},getOptions:function(e){return s[e]},create:function(){var e=new t(m(arguments)),n=e.name;if(n){var r=d(n);u[r.name][r.index]=e;e.on("destroy",function(){u[r.name][r.index]=o})}return e},structure:function(e,t){t=t||{};t.ani=j(t.ani)?{name:t.ani}:t.ani||{};var n=W(i,{},g.getOptions(e.split(":")[0])),r=t.ani.name||c.defaultAnimate;n.name=e;n.init=n.init||{};n.init.param=t.param||{};n.styles=W(n.styles||{},t.styles);n.classNames=(n.classNames||[]).concat(t.classNames);if(r){n.plugins=(n.plugins||[]).concat([{name:r,options:W({},g.getExtraOption(e,r),t.ani)}])}var s=g.create(n);s.param=W({},t.param);v(s,t);s.complete=function(e){if(F(t.onComplete)){t.onComplete.call(s,e)}};s.on("callback",s.complete);return s},build:function(e){var n=m(V(arguments).slice(1)),r;if(e&&I(e)){n.name=bt(e,"qapp-name");r=new t(n);r.staticBuild(e)}return r},show:function(e,t){var n=V(arguments);var i=g.structure(e,t);r.pushTask(function(e){i.once("show",function(){e.resolve()});i.once("hide",function(){$(function(){if(F(i.destroy)){i.destroy()}})});i.show.apply(i,n.slice(2))});return i},exists:function(e){return!!s[e]},get:function(e,t){var n={},r;if(j(e)){n=d(e)}if(F(t)){h(n.name,n.index,function(e){t(e)})}else{r={invoke:function(){var e=V(arguments),t=e.shift();h(n.name,n.index,function(n){It(n[t],n,e)});return r},pushMessage:function(e,t){var i=u[n.name]&&u[n.name][n.index];if(i){i.trigger(e,t)}return r}};return r}},getSync:function(e){var t={},n;if(j(e)){n=e.split(":");t={name:n[0],index:n[1]||0}}return p(t.name,t.index)},getExtraOption:function(e,t){var n,r=s[l(e)];if(r){n=r.extra&&r.extra[c.type]||r.extra||{};return n[t]}},getHashParams:function(e){var t=s[l(e)];return t?t.hashParams||[]:[]},getRealName:l};n.inject(g);return g});a("viewQ",function(){function p(){var e=a[0],t;if(e&&e.root){t=parseInt(wt(e.root,"z-index"))}return(t||G())-1}function d(){if(a.length){return a[a.length-1]}}function v(e){var t=a.length,n;for(n=t-1;n>-1;n--){if(a[n].name==e){return n}}return-1}function m(e){if(e.indexOf(":new")>-1){return e.replace(":new",":"+Q())}else{for(var t=0,n=a.length;t<n;t++){if(e==a[t].name.split(":")[0]){return false}}return e}}function g(e,t,n,r,i){t=t||"show";l(function(s){e.on(t.replace("_",""),function(){$(function(){s.resolve().done(i)})});if(F(n)){n()}else{e[t](r);if(t.indexOf("hide")>-1&&!r){s.resolve()}}})}function y(t){g(t,"_hide",function(){e.hide.call(t)})}function b(e){var t=e.hide,n=e.close,r=e._events.actived=e._events.actived||[];r.unshift({callback:function(){w.preView=w.curView;w.curView=e.name},ctx:e});e.once("hide",function(){var t=a.indexOf(e);if(t>-1){a.splice(t,1);$(function(){if(F(e.destroy)){e.destroy()}})}});e.hide=e._hide=function(n){if(n===i){t.call(e)}else{l(function(n){e.once("hide",function(){$(n.resolve)});t.call(e)})}};e.close=e._close=function(t){if(t===s){n.call(e)}else{l(function(t){e.once("hide",function(){$(t.resolve)});n.call(e)})}}}var e=f("display"),t=f("taskQ"),n=f("viewM"),r;var a=[],l=t.pushTask,h=n.getRealName;var w={curView:o,preView:o,add:function(e,t,r,i){l(function(s){e=m(e);var o=F(i)?i:M;if(e){if(n.exists(h(e))){w[r?"unshift":"push"](n.structure(e,t),o);s.resolve()}else{s.resolve().done(o)}}else{s.resolve().done(o)}})},push:function(e,t){b(e);e.once("show",function(){var t=d();$(function(){e.notify("actived");if(t){t.notify("deactived")}});a.push(e)});g(e,"show",o,s,function(){t(e)})},unshift:function(e,t){b(e);e.once("show",function(){a.unshift(e);if(a.length===1){$(function(){e.notify("actived")})}});e.on("beforeShow",function(){e.initialShow=s;wt(e.root,"z-index",p()-1)});g(e,"show",function(){e.show(i)},s,function(){t(e)})},pop:function(e,t,n){var r=d();if(e===u){e=1}if(r&&e>0){var f=function(i){var s=a.length,u=s-e,f;if(u>=0){for(f=u;f<s-1;f++){y(a[f])}}if(u>0&&e>0){r.once("hide",function(){var e=a[u-1];if(e){if(t&&t.data){e.notify("receiveData",t)}e.notify("actived")}})}g(r,"_hide",o,i,n)};l(function(t){if(e<a.length){f(i)}else if(e==a.length){if(h(a[0].name)!==c.indexView){w.add(c.indexView,{},i);l(function(e){f(s);e.resolve()})}else if(a.length>1){e=a.length-1;f(i)}}t.resolve()})}},remove:function(e,t,n){l(function(r){var i=v(e);if(i>-1){w.pop(a.length-i,t,n)}r.resolve()})},backTo:function(e,t,n,s){l(function(o){var u=v(e),f=a.length;if(u===-1){w.add(h(e),{param:n},i,function(e){r._reset(e);w.pop(f,t,s)})}else{f=a.length-u-1;w.pop(f,t,s)}o.resolve()})},refresh:function(e){var t=d();if(t){t.notify("receiveData",e)}},clear:function(e,t){l(function(n){w.pop(a.length,e,t);n.resolve()})},inject:function(e){r=e}};return w});a("history",function(){function _(e){if(e.length>2&&e.lastIndexOf(":0")==e.length-2){return e.substring(0,e.length-2)}return e}function D(e){e=k(e);var n=t.getOptions(e);if(!n||n.supportHash===s){return s}if(m.all&&m.except.indexOf(e)>-1){return s}if(!m.all&&m.exist.indexOf(e)===-1){return s}return i}function P(e){return e[e.length-1]}function H(e,t){C.trigger("change",{type:e,data:W(i,{},t)})}function B(){var e={},t=R();if(t.view&&t.view.indexOf("__")){if(p){E=S}else{if(t.query[S]){w=t.query[S];E=b+w}else{do{w=Q();E=b+w}while(d[E]);z(t,i)}}try{e=JSON.parse(d.getItem(E))||{}}catch(n){}if(e.basePath==A){x=V(e.history);T=e.index;if(x[T]!==t.view){x=[];T=0;d.removeItem(E)}}if(!x.length){x.push(t.view)}}}function j(){try{d.setItem(E,JSON.stringify({basePath:A,history:x,index:T}))}catch(e){}}function F(e,t){if(t){x[T]=e}else{T++;x=x.slice(0,T);x.push(e)}j()}function I(){var e=a.hash,t=e.indexOf("#"),n;e=t>-1?e.slice(t+1):"";n=e.indexOf("#");if(n>-1){e=e.slice(0,n)}return e}function q(e,t){var n=A+"#"+e+"#";O=e;if(g){l[(t?"replace":"push")+"State"]({path:n},r.title,n)}else{if(t){a.replace(n)}else{a.href=n}}}function R(e){e=e||I();var t=e.split("?"),n=_(t[0])||c.indexView,r=st(t[1]||"",i);return{view:n,query:r}}function U(){if(M){return M}M=v?function(){var e=R();e[S]=u;return e}():P(N);return M}function z(e,t){e=e||{};var n=e.view||c.indexView,r=e.query||{},s=U(),u;t=t||n==s.view;M=o;if(v){if(!p){r[S]=w}u=rt(r,i);q(n+(u?"?"+u:""),t);F(n,t)}else{var a={view:n,query:r};if(t){N[N.length-1]=a}else{N.push(a)}}}function X(e){var t=e?R(e):U(),n=t.view,r=x.indexOf(n),i;if(r===-1){F(n);H("forward",{info:t})}else{i=r-T;T=r;if(i<0){if(!D(t.view)){l.back()}else{H("back",{info:t,param:L.shift()})}}else if(i===0){H("refresh",{info:t})}else if(i===1){if(!D(t.view)){l.go(T<x.length-1?1:-1)}else{H("forward",{info:t})}}else{$(function(){a.reload()})}j()}}function J(){n.addEventListener(y,function(){if(O!==I()){O=I();M=o;X()}})}var t=f("viewM");var a=n.location,l=n.history,h=n.sessionStorage,p=!!h,d=p?n.sessionStorage:n.localStorage,v=i,m=o,g=!!l.pushState,y=g?"popstate":"hashchange",b="QAPP_HISTORY_",w=0,E="",S="_history",x=[],T=0,N=[],C=ft(),k=t.getRealName,L=[],A=function(){var e=a.href,t=e.indexOf("#");if(t>-1){e=e.slice(0,t)}return e}(),O,M;var K={basePath:A,start:function(e){var t;v=!!e;O=I();if(v){m=c.hashSupport;t=U();B();if(!D(t.view)){if(T>0){T--;M=o;l.back();j();$(function(){K.start(e)},100);return}else{t={view:c.indexView,query:{}};z(t,i)}}H("init",{info:U()});J()}else{t={view:c.indexView,query:R().query};N.push(t);H("init",{info:t})}},analyzeHash:R,setHashInfo:z,getHashInfo:U,refreshParam:function(e){var t=U();t.query=W(t.query,e);z(t,i)},back:function(t,n){var r=U().view,s={view:k(r),name:r,data:n};t=t||1;if(v){L.push(s);if(T>t-1){l.go(-t)}else{var u=c.indexView;if(T===0&&u===r){e.trigger("close");l.go(-1)}else{if(T>0){l.go(-T)}z({view:u},i);H("home",{info:U()})}}}else{var a=N.length-t;if(a<1){a=1}N=N.slice(0,a);M=o;H("back",{info:P(N),param:s})}},backTo:function(e,t,n){var r=v?x:N.map(function(e){return e.view}),o=v?T:r.length-1,u;for(u=o;u>-1;u--){if(!n&&k(r[u])===e||r[u]===e){if(u===o){H("refresh",{info:U(),param:t})}else{K.back(o-u,t)}return i}}return s},home:function(e){K.back(v?T:N.length-1,e)},exit:function(){e.trigger("close");if(v){l.go(-T-1)}else{l.back()}},onChange:function(e){C.on("change",e)},buildHash:function(e){var t=e.view,n=e.query,r=rt(n,i);return A+"#"+t+(r?"?"+r:"")+"#"}};return K});a("router",function(){function m(e){if(e){var t=e.complete,n;e.hide=function(e){w.back(1,e||n)};e.complete=function(r){n=r;It(t,e,[r])}}}function g(n){e.onChange(function(e){var n=e.data,r=n.info,u=n.param,a=e.type;switch(a){case"init":if(c.autoInit){t.add(r.view,{param:r.query},i,function(e){m(e);p.trigger(a,e)})}break;case"forward":$(function(){t.add(r.view,{param:r.query},s,function(e){m(e);p.trigger(a,e)})},100);break;case"refresh":t.refresh({view:o.getRealName(r.view),name:r.view,data:u});p.trigger(a);break;case"back":case"home":$(function(){t.backTo(r.view,u,r.query,function(){p.trigger(a)})},100);break}});e.start(n)}function y(){h.add("router","tap",function(t){var n=t.el,r=bt(n,"href"),o=bt(n,"target"),u=st(bt(n,"param")||"",i),f,l,c,h;if(!r.indexOf("#!")){if(r.indexOf("home")==2){w.home(u)}else{r=r.slice(2);c=r.match(a);if(c){w.back(c[2]||1,u)}}}else if(!r.indexOf("#")){r=r.slice(1);f=e.analyzeHash(r);if(o==="_blank"){w.open(f.view+":new",{param:W(f.query,u)})}else{h=f.view.split(":");l=h.length>0;if(h[1]=="0"){f.view=h[0]}if(w.backTo(f.view,u,l)===s){w.open(f.view,{param:W(f.query,u)})}}}})}function b(t){return function(){var n=V(arguments);if(n[1]&&n[1].skipFilter||v.reduce(function(e,t){return e&&t(n)!==s},i)){return It(e[t],e,n)}}}var e=f("history"),t=f("viewQ"),o=f("viewM");var u=s,a=/back(\((\d+)\))?/,h=Wt(r,[],l.role),p=ft(),d=[],v=[];var w=W(p,{start:function(t){if(!u){u=i;g(t);y();e.onChange(function(e){p.trigger("history",e)})}},open:function(n,r,o){var u=V(arguments);if(u[1]&&u[1].skipFilter||d.reduce(function(e,t){return e&&t(u)!==s},i)){r=r||{};var a=r.param||{};t.add(n,r,!!r.atBottom,function(t){if(t){m(t);e.setHashInfo({view:t.name,query:a});It(o,t,[t]);if(!r.atBottom){p.trigger("forward",t)}}else{It(o)}})}},back:b("back"),backTo:b("backTo"),home:b("home"),"goto":function(t,n,r,i){if(e.backTo(t,r,i)===s){w.open(t,n)}},exit:e.exit,refreshParam:e.refreshParam,addOpenFilter:function(e){if(F(e)){d=d.concat(e)}},removeOpenFilter:function(e){var t=d.indexOf(e);if(t>-1){d.splice(t,1)}},addBackFilter:function(e){if(F(e)){v=v.concat(e)}},removeBackFilter:function(e){var t=v.indexOf(e);if(t>-1){v.splice(t,1)}},getCurViewName:function(e){return t.curView&&(e?t.curView:o.getRealName(t.curView))},getPreViewName:function(e){return t.preView&&(e?t.preView:o.getRealName(t.preView))},_newSite:function(){n.open(e.basePath)},_reset:m});t.inject(w);return w});var un=f("viewM"),an=f("history"),fn=f("router"),ln=f("pluginM"),cn=f("widgetM");var hn={},pn=[],dn=new lt,vn=[];mn(function(){function u(){i=t.clientWidth;s=t.clientHeight;W(hn,{width:i,height:s,rootWidth:i-c.root.left-c.root.right,rootHeight:s-c.root.top-c.root.bottom});wt(r.body,"height",s+"px");wt(o,{height:hn.rootHeight+"px",width:hn.rootWidth+"px"})}function a(){var e=t.clientHeight;if(e>=s){if(e>s){u()}}}var t=r.documentElement,i=t.clientWidth,s=t.clientHeight,o=r.createElement(l.app);W(hn,{width:i,height:s,rootTop:c.root.top,rootLeft:c.root.left});wt(r.body,"height",s+"px");if(c.customRoot){hn.rootWidth=i-c.root.left-c.root.right;hn.rootHeight=s-c.root.top-c.root.bottom;wt(o,{top:hn.rootTop+"px",left:hn.rootLeft+"px",height:hn.rootHeight+"px",width:hn.rootWidth+"px"});vt(r.body,o)}else{hn.rootWidth=i;hn.rootHeight=s;o=r.body}e.root=c.appRoot=o;fn.start(!!c.hashRouter);if(c.screen){if(c.screen.largeChange){n.addEventListener("resize",a)}if(c.screen.rotate){tn.on("change",u)}}if(c.gesture){if(c.gesture.open){if(c.gesture.ctrl){e.on("running",function(e){Rt[e?"off":"on"]()})}if(c.gesture.longTap){e.gesture.allowLongTap()}if(c.gesture.autoBlur){var f=["INPUT","TEXTAREA"];xt(r.body,"touchstart",function(e){if(f.indexOf(e.target.tagName.toUpperCase())===-1){Mt()}})}}else{Rt.off()}}});e=W(e,ft());W(e,{config:function(e){var t=W(i,c,e),n=t.plugins,r=t.globalPlugins;if(B(r)){ln.setGlobal(r)}if(B(n)){n.forEach(function(e){if(e&&n.name){ln.setOpt(e.name,e.options)}})}else if(n){X(n,function(e,t){if(e){ln.setOpt(e,t)}})}return t},root:r.body,origin:hn,defineView:un.define,undefineView:un.undefine,createView:un.create,buildView:un.build,existsView:un.exists,getView:un.get,getViewSync:un.getSync,addPlugin:ln.add,configPlugin:ln.setOpt,setGlobalPlugins:ln.setGlobal,addWidget:cn.add,showWidget:cn.show,router:fn,open:fn.open,exit:fn.exit,view:un,show:un.show,showView:un.show,hash:{getInfo:an.getHashInfo,setInfo:an.setHashInfo,analyzeHash:an.analyzeHash,setParam:an.refreshParam,build:an.buildHash},sniff:h});var gn=e.util={};gn.ready=pt;e.ready=mn;e.addReadyDependencies=function(e){vn.push(e)};gn.query=function(e){return r.querySelector(e)};gn.queryAll=function(e){return r.querySelectorAll(e)};gn.is=P;gn.isObject=H;gn.isString=j;gn.isArray=B;gn.isFunction=F;gn.isNumber=q;gn.isElement=I;gn.isPlainObject=R;gn.isEmptyObject=U;gn.extend=W;gn.each=X;gn.makeArray=V;gn.delay=$;gn.associate=J;gn.mapping=K;gn.camelCase=Y;gn.dasherize=Z;gn.empty=et;gn.noop=M;gn.getUniqueID=Q;gn.getZIndex=G;gn.jsonToQuery=rt;gn.queryToJson=st;gn.parseURL=$t;gn.loader=Yt;gn.builder=dt;gn.appendNodes=vt;gn.insertElement=mt;gn.removeNode=gt;gn.attr=bt;gn.css=wt;gn.removeStyle=Et;gn.addClass=Ct;gn.removeClass=kt;gn.fixEvent=St;gn.addEvent=xt;gn.removeEvent=Tt;gn.dispatchEvent=Nt;gn.createStyle=Lt;gn.size=Pt;gn.position=jt;gn.contains=At;gn.focus=Ot;gn.blur=Mt;gn.animate=Ut;gn.dataSet=Ft;gn.delegatedEvent=Wt;gn.CustEvent=gn.custEvent=at;gn.Deferred=gn.deferred=lt;gn.queue=ct;gn.parallel=ht;gn.gesture=e.gesture=Rt;e.logger=gn.logger=sn;n.QApp=e;n.SPA=e;n.IApp=e;pt(function(){if(vn.length){ht(vn).done(function(){dn.resolve()})}else{dn.resolve()}});(function(){function f(e){Et(e,t)}function l(e){wt(e,n,"");Et(e,n)}function c(e){return~(e+"").indexOf("%")||~(e+"").indexOf("px")?e:e+"px"}function d(e,t,r){t.on("loadEnd",function(){bt(t.root,"qapp-ani",e);wt(t.root,n,"hidden")});t.on("beforeHide",function(){Mt(t.root)});t.on("destroy",function(){t.show=o;t.hide=o})}function b(e,t){var n=-1,r,i;for(r=0,i=e.length;r<i;r++){if(e[r].view===t){n=r;break}}return n}function w(e,t,n,r,i){var s=0;return ht(e.map(function(e,i){if(i<t){e.view.trigger("beforeHide");return Ut(e.view.root,r?p(e.translate,0,0):p(0,e.translate,0),n)}else{s+=e.distance;return Ut(e.view.root,r?p(s,0,0):p(0,s,0),n)}}))}var t="display",n="visibility";var a=function(){var e=navigator.userAgent.toLowerCase();if(h.ios||h.android&&e.indexOf("micromessenger")>-1){return 1}return 2}();var p=a==1?function(e,t,n){return{translate3d:e+"px, "+t+"px, "+n+"px"}}:function(e,t,n){return{translate:e+"px, "+t+"px",translateZ:n+"px"}};var v=10;var m={position:"right",distance:0,duration:200,zIndex:0};var g={},y=s;e.addPlugin("moveEnter",m,function(t,n,h){var E={position:"absolute",top:0,zIndex:n.zIndex||G()},S=h.type.indexOf&&h.type.indexOf("pad")===-1,x=n.position==="right"||n.position==="left",T=n.position==="right"||n.position==="bottom"?-1:1,N,C=s,k,L=s,A=s;if(n.panBack===u){n.panBack=h.type==="app"}if(S){n.distance=x?hn.rootWidth:hn.rootHeight}N=T*n.distance;if(!h.animate){n.duration=0}if(S){k=[];E.width="100%";E.height="100%"}else{if(!g[n.position]){g[n.position]=[]}k=g[n.position];E[x?"height":"width"]="100%"}if(n.panBack&&S&&(n.position==="right"||n.position==="left")){var O=function(e){if(~e.directions.indexOf(n.position)){return e.clientX-e.offsetX<v}return s};var M=function(e){if(A){wt(t.root,p(e.offsetX,0,0))}else if(!L){L=i;A=O(e)}};var _=function(e){if(A){A=s;if(Math.abs(e.offsetX)>Math.abs(n.distance)/2){t.hide()}else{Ut(t.root,p(0,0,0),n.duration/2).done()}}L=s};t.on("show",function(){xt(t.root,"pan",M);xt(t.root,"panend",_)});t.on("hide",function(){Tt(t.root,"pan",M);Tt(t.root,"panend",_)});t.on("rendered",function(){var e=r.createElement("div");e.className="touch-opacity";wt(e,{position:"absolute",zIndex:"9999",width:c(v),height:"100%",backgroundColor:"rgba(255, 255, 255, 0)"});wt(e,n.position==="right"?"left":"right","0");Ct(t.root,"shadow");t.root.appendChild(e)})}t.on("loaded",function(){if(!n.distance){n.distance=Pt(t.root)[x?"width":"height"]}if(S){if(a===3){if(n.position==="bottom"){E.top=c(hn.rootHeight)}else{E[n.position]=c(-n.distance)}}else{if(n.position==="bottom"){E.top=c(hn.rootHeight-n.distance)}else{E[n.position]=c(0)}W(E,x?p(-T*n.distance,0,0):p(0,-T*n.distance,0))}}else{if(n.position!=="bottom"){E[n.position]=c(-n.distance)}else{E.top=c(hn.rootHeight)}}wt(t.root,E)});d("moveEnter",t,n);t.show=function(r){Mt();if(!y){y=i;C=i;var o=b(k,t);if(~o){w(k,o,r===i||t.preventAnimate?0:n.duration,x).done(function(){k.splice(0,o).forEach(function(e){e.view.trigger("hide")});y=s;C=s;t.trigger("refresh")})}else{t.once("completed",function(){f(t.root);l(t.root);t.trigger("beforeShow");k.unshift({view:t,distance:S?0:N,translate:S?-N:0});$(function(){w(k,0,r===i||t.preventAnimate?0:n.duration,x,t.root).done(function(){y=s;C=s;Et(t.root,"transform");t.trigger("show")})})});t.renderTo(e.root)}}return t};t.hide=function(e){if((!y||S&&!C)&&t.isShow){y=i;var r=b(k,t);w(k,r+1,e===i||t.preventAnimate?0:n.duration,x).done(function(){k.splice(0,r+1).forEach(function(e){e.view.trigger("hide")});y=s})}return t};t.on("destroy",function(){E=o;k=o;t=o});return{setOption:function(e){n=W({},m,e)}}})})()})()}(t.exports,t,e);e.____MODULES["2c088de690d2f86994b0feec93475475"]=t.exports})(this);(function(e){var t={id:"e24642d9bb10d27b80ed20283fa2d1ef",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function f(e){return!(e===null||e===void 0)}function l(e,t){e=(e===null?"":e).toString().trim();return t?encodeURIComponent(e):e}function c(t,n){var r=[],i,s,o;for(i in t){if(i==="$nullName"){r=r.concat(t[i])}else if(e.isArray(t[i])){for(s=0,o=t[i].length;s<o;s++){if(!e.isFunction(t[i][s])){r.push(i+"="+l(t[i][s],n))}}}else if(!e.isFunction(t[i])&&f(t[i])){r.push(i+"="+l(t[i],n))}}return r.join("&")}function h(){var e=false;try{e=new XMLHttpRequest}catch(t){try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(n){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(r){e=false}}}return e}function p(e,t){try{for(var n in t){e.setRequestHeader(n,t[n])}}catch(r){}}function d(t,n){var r=h(),i,o="",u=t.method.toLocaleLowerCase();if(t.withCredentials){r.withCredentials=true}if(t.timeout){i=e.delay(function(){try{n(null,{error:true,type:"Timeout"});r.abort()}catch(e){}},t.timeout)}r.onreadystatechange=function(){if(r.readyState==4){clearTimeout(i);var e={};if(t.dataType==="xml"){e=r.responseXML}else if(t.dataType==="text"){e=r.responseText}else{try{e=r.responseText&&typeof r.responseText==="string"?JSON.parse(r.responseText):{}}catch(s){}}if(r.status===200){n(e)}else if(r.status===0){n(e,{error:true,type:"Abort"})}else{n(e,{error:true,type:"Fail"})}}};if(u==="get"){if(t.cache===false){t.data.__rnd=(new Date).getTime()}}if(t.argsType==="query"){o=c(t.data,t.isEncode)}else if(t.argsType==="json"){o=JSON.stringify(t.data);if(t.isEncode){o=encodeURIComponent(o)}}if(!t.headers["Content-Type"]){if(t.argsType==="json"){t.headers["Content-Type"]="application/json;charset="+t.charset}else{t.headers["Content-Type"]="application/x-www-form-urlencoded;charset="+t.charset}}if(!t.headers["X-Requested-With"]){t.headers["X-Requested-With"]="XMLHttpRequest"}if(t.data&&t.hasContent&&t.contentType!==false||t.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType)}if(u==="get"){var a;if(o){a=t.url+(!~t.url.indexOf("?")?"?":"&")+o}else{a=t.url}r.open("get",a,true);p(r,t.headers);r.send("")}else{r.open("post",t.url,true);p(r,t.headers);r.send(o)}return r}function v(t,n){function h(){if(f){window[o]=a}else{delete window[o]}l.remove()}var r={},i=false,s=e.parseURL(t.url),o="",a,f=false,l,c;s.query=e.extend(s.query,t.data);if(t.jsonpCallback){f=true;a=window[t.jsonpCallback]}else{t.jsonpCallback="QApp_"+ +(new Date)+u++}o=t.jsonpCallback;s.query[t.jsonp]=o;if(t.cache===false){s.query.__rnd=+(new Date)+u++}r.abort=function(){i=true;var e={error:true,type:"Abort"};t.onAbort(null,e);n.reject(e)};window[o]=function(e){if(c){clearTimeout(c)}if(i){return}n.resolve(e);t.success(e);h()};c=e.delay(function(){var e={type:"Timeout"};t.onTimeout(e);n.reject(e);h()},t.timeout);l=document.createElement("script");l.async=true;l.charset=t.charset;l.src=s.toUrl();l.onerror=function(){if(c){clearTimeout(c)}var e={type:"Error"};n.reject(e);t.error(e);h()};document.head.appendChild(l);return r}function m(t,n){var i=r[t.mockKey||""],s=null;e.delay(function(){if(i){if(e.isFunction(i)){s=i(t)}else{s=i}}var r=true;o.forEach(function(e){if(e(s,null,t,n)===false){r=false}});if(r){n.resolve(s);t.success(s,null)}},t.mockTime||1e3)}var e=QApp.util,t=e.Deferred;var n={},r={},i=[],o=[],u=0;var a={url:"",bizType:false,charset:"UTF-8",timeout:30*1e3,data:{},argsType:"query",method:"get",headers:{},isEncode:false,dataType:"json",cache:false,withCredentials:false,jsonp:"callback",jsonpCallback:"",success:e.noop,error:e.noop,onTimeout:e.noop,onAbort:e.noop};var g=QApp.ajax=e.ajax=function(r){if(e.isString(r)){r={url:r}}if(r.bizType&&n[r.bizType]){r=e.extend(true,{},n[r.bizType],r)}var s=new t,u=e.extend(true,{},a,r),f={},l=true;i.forEach(function(e){if(e(u,s)===false){l=false}});if(l){if(u.mock){f.abort=function(){s.reject({error:true,type:"Abort"});u.onAbort(null,f)};m(u,s)}else if(r.dataType==="jsonp"){f=v(u,s)}else{f=d(u,function(e,t){var n=true;o.forEach(function(r){if(r(e,t,u,s)===false){n=false}});if(n){if(t){s.reject(t);if(t.type==="Timeout"){u.onTimeout(e,f)}else if(t.type==="Abort"){u.onAbort(e,f)}else{u.error(e,f)}}else{s.resolve(e);u.success(e,f)}}})}}s.trans=f;return s};QApp.ajax.setBizOptions=function(t,r){if(e.isString(t)){n[t]=r}else{e.extend(true,n,t)}};QApp.ajax.addMock=function(t,n){if(e.isString(t)){r[t]=n}else{r=t}};QApp.ajax.addReqFilter=function(e){i=i.concat(e)};QApp.ajax.removeReqFilter=function(e){var t=i.indexOf(e);if(t>-1){i.splice(t,1)}};QApp.ajax.addRespFilter=function(e){o=o.concat(e)};QApp.ajax.removeRespFilter=function(e){var t=o.indexOf(e);if(t>-1){o.splice(t,1)}};QApp.addPlugin("ajax",{bizType:"",mock:false},function(t,n){var r=[];t.ajax=function(t){var i=g(e.extend(true,{},n,t));r.push(i);i.all(function(){r.splice(r.indexOf(i),1)});return i};t.on("destroy",function(){r.forEach(function(e){e.destroy();e.trans&&e.trans.abort()});r.length=0;r=null})})})()}(t.exports,t,e);e.____MODULES["e24642d9bb10d27b80ed20283fa2d1ef"]=t.exports})(this);(function(e){var t={id:"9d98ca07b73221c493c790bbc2226633",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function s(){if(avalon.config.debug){console.log.apply(console,arguments)}}function N(){}function C(e,t){if(typeof e==="string"){e=e.match(l)||[]}var n={},r=t!==void 0?t:1;for(var i=0,s=e.length;i<s;i++){n[e[i]]=r}return n}function k(e){function n(r,i){if(t.push(r)>e){delete n[t.shift()]}return n[r]=i}var t=[];return n}function O(e,t){e=Math.floor(e)||0;return e<0?Math.max(t+e,0):Math.min(e,t)}function D(e){if(e&&typeof e==="object"){var t=e.length,n=m.call(e);if(/(Array|List|Collection|Map|Arguments)\]$/.test(n)){return true}else if(n==="[object Object]"&&+t===t&&!(t%1)&&t>=0){return true}}return false}function F(e){for(var t in e){if(!v.call(e,t))continue;var n=e[t];if(typeof F.plugins[t]==="function"){F.plugins[t](n)}else if(typeof F[t]==="object"){avalon.mix(F[t],n)}else{F[t]=n}}return this}function X(e){return(e+"").replace(W,"\\$&")}function Z(e,t,n){if(A(t)||t&&t.nodeType){return false}if(n.indexOf(e)!==-1){return false}if(Y.indexOf(e)!==-1){return false}var r=n.$special;if(e&&e.charAt(0)==="$"&&!r[e]){return false}return true}function it(t,n,r){if(Array.isArray(t)){var i=t.concat();t.length=0;var s=lt(t);s.pushArray(i);return s}if(typeof t.nodeType==="number"){return t}if(t.$id&&t.$model&&t.$events){return t}if(!Array.isArray(t.$skipArray)){t.$skipArray=[]}t.$skipArray.$special=n||{};var u={};r=r||{};var a={};var l={};var h=[];for(var p in t){(function(n,i){r[n]=i;if(!Z(n,i,t.$skipArray)){return}var s;var p=avalon.type(i);a[n]=[];if(p==="object"&&A(i.get)&&Object.keys(i).length<=2){var d=i.set;var v=i.get;s=function(e){var t=u.$events;var i=r[n];if(arguments.length){if(f){return}if(A(d)){var s=t[n];t[n]=[];d.call(u,e);t[n]=s}}else{}e=r[n]=v.call(u);if(!st(i,e)){Nt(t[n]);ot(u,n,e,i)}return e};h.push(function(){b[e]=function(){u.$model[n]=v.call(u)};s();delete b[e]})}else if(c.test(p)){s=function(e){var t=s.child;var i=r[n];if(arguments.length){if(f){return}if(!st(i,e)){t=s.child=ft(u,n,e,p);e=r[n]=t.$model;var o=at[t.$id];o&&o();ot(u,n,e,i)}}else{mt(a[n]);return t}};var m=s.child=it(i,0,r[n]);m.$events[o]=a[n]}else{s=function(e){var t=r[n];if(arguments.length){if(!st(t,e)){r[n]=e;Nt(a[n]);ot(u,n,e,t)}}else{mt(a[n]);return t}}}l[n]=s})(p,t[p])}Y.forEach(function(e){delete t[e];delete r[e]});u=nt(u,ut(l),t);for(var d in t){if(!l[d]){u[d]=t[d]}}u.$id=L();u.$model=r;u.$events=a;for(var p in J){var v=J[p];if(!w){v=v.bind(u)}u[p]=v}if(tt){Object.defineProperty(u,"hasOwnProperty",{value:function(e){return e in u.$model},writable:false,enumerable:false,configurable:true})}else{u.hasOwnProperty=function(e){return e in u.$model}}h.forEach(function(e){e()});return u}function ot(e,t,n,r){if(e.$events){J.$fire.call(e,t,n,r)}}function ft(e,t,n,r){var i=e[t];if(r==="array"){if(!Array.isArray(n)||i===n){return i}i.clear();i.pushArray(n.concat());return i}else{var s=e.$events[t];var u=i.$events.$withProxyPool;if(u){gr(u,"with");i.$events.$withProxyPool=null}var a=it(n);a.$events[o]=s;at[a.$id]=function(e){while(e=s.shift()){(function(e){avalon.nextTick(function(){if(e.type){e.rollback&&e.rollback();M[e.type](e,e.vmodels)}})})(e)}delete at[a.$id]};return a}}function lt(e){var t=[];t.$id=L();t.$model=e;t.$events={};t.$events[o]=[];t._=it({length:e.length});t._.$watch("length",function(e,n){t.$fire("length",e,n)});for(var n in J){t[n]=J[n]}avalon.mix(t,ht);return t}function pt(e,t){if(c.test(avalon.type(e))){e=e.$id?e:it(e,0,t)}return e}function vt(t){b[e]=t;avalon.openComputedCollect=true;var r=t.evaluator;if(r){try{var i=dt.test(t.type)?t:r.apply(0,t.args);t.handler(i,t.element,t)}catch(s){delete t.evaluator;var o=t.element;if(o.nodeType===3){var u=o.parentNode;if(F.commentInterpolate){u.replaceChild(n.createComment(t.value),o)}else{o.data=I+t.value+q}}}}avalon.openComputedCollect=false;delete b[e]}function mt(t){var n=b[e];if(t&&n&&avalon.Array.ensure(t,n)&&n.element){gt(n,t)}}function gt(e,t){e.$uuid=e.$uuid||L();t.$uuid=t.$uuid||L();var n={data:e,list:t,toString:function(){return e.$uuid+" "+t.$uuid}};if(!yt[n]){yt[n]=1;yt.push(n)}}function xt(){for(var e=bt,t=bt+wt;e<t;e++){var n=yt[e];if(!n){break}var r=n.data;var i=r.element;var s=i===null?1:i.nodeType===1?typeof i.sourceIndex==="number"?i.sourceIndex===0:!E.contains(i):!avalon.contains(E,i);if(s){yt.splice(e,1);delete yt[n];avalon.Array.remove(n.list,r);Tt(r);n.data=n.list=null;e--;t--}}n=yt[e];if(n){bt=t}else{bt=0}Et=new Date}function Tt(e){e.element=null;e.rollback&&e.rollback();for(var t in e){e[t]=null}}function Nt(e){clearTimeout(St);if(new Date-Et>444){St=setTimeout(xt,1)}else{St=setTimeout(xt,444)}if(e&&e.length){var t=y.call(arguments,1);for(var n=e.length,r;r=e[--n];){var i=r.element;if(i&&i.parentNode){if(r.$repeat){r.handler.apply(r,t)}else if(r.type!=="on"){var s=r.evaluator||N;r.handler(s.apply(0,r.args||[]),i,r)}}}}}function Dt(e,t,n){var r=setTimeout(function(){var i=e.innerHTML;clearTimeout(r);if(i===n){t()}else{Dt(e,t,i)}})}function Pt(e,t){var n=e.getAttribute("avalonctrl")||t.$id;e.setAttribute("avalonctrl",n);t.$events.expr=e.tagName+'[avalonctrl="'+n+'"]'}function Bt(e,t){if(e.length)t.cb(e.length);for(var n=0,r;r=e[n++];){r.vmodels=t;M[r.type](r,t);if(r.evaluator&&r.element&&r.element.nodeType===1){r.element.removeAttribute(r.name)}}e.length=0}function Rt(e,t){return e.priority-t.priority}function Ut(e,t,n){var r=e.getAttribute("ms-skip");var i=e.getAttributeNode("ms-important");var s=e.getAttributeNode("ms-controller");if(typeof r==="string"){return}else if(n=i||s){var o=avalon.vmodels[n.value];if(!o){return}var u=t.cb;t=n===i?[o]:[o].concat(t);t.cb=u;e.removeAttribute(n.name);e.classList.remove(n.name);Pt(e,o)}Vt(e,t)}function zt(e,t){var n=e.firstChild;while(n){var r=n.nextSibling;Xt(n,n.nodeType,t);n=r}}function Wt(e,t){for(var n=0,r;r=e[n++];){Xt(r,r.nodeType,t)}}function Xt(e,t,n){if(t===1){Ut(e,n)}else if(t===3&&R.test(e.data)){tn(e,n)}else if(F.commentInterpolate&&t===8&&!R.test(e.nodeValue)){tn(e,n)}}function Vt(e,t){var n=e.hasAttributes()?avalon.slice(e.attributes):[];var r=[],i={},o;for(var u=0,a;a=n[u++];){if(a.specified){if(o=a.name.match(jt)){var f=o[1];var l=o[2]||"";var c=a.value;var h=a.name;i[h]=c;if(It[f]){l=f;f="on"}else if(qt[f]){s("ms-"+f+"已经被废弃,请使用ms-attr-*代替");if(f==="enabled"){f="disabled";c="!("+c+")"}l=f;f="attr";e.removeAttribute(h);h="ms-attr-"+l;e.setAttribute(h,c);o=[h];i[h]=c}if(typeof M[f]==="function"){var p={type:f,param:l,element:e,name:o[0],value:c,priority:f in Ft?Ft[f]:f.charCodeAt(0)*10+(Number(l)||0)};if(f==="html"||f==="text"){var d=Zt(c);avalon.mix(p,d);p.filters=p.filters.replace(Kt,function(){p.type="html";p.group=1;return""})}if(h==="ms-if-loop"){p.priority+=100}if(t.length){r.push(p);if(f==="widget"){e.msData=e.msData||i}}}}}}if(i["ms-attr-checked"]&&i["ms-duplex"]){s("warning!一个元素上不能同时定义ms-attr-checked与ms-duplex")}r.sort(Rt);var v=true;for(var u=0,p;p=r[u];u++){var f=p.type;if($t.test(f)){return Bt(r.slice(0,u+1),t)}else if(v){v=!Jt.test(f)}}Bt(r,t);if(v&&!_t[e.tagName]&&z.test(e.innerHTML+e.textContent)){zt(e,t)}}function Zt(e){if(e.indexOf("|")>0){var t=e.replace(Qt,"ᄢ㍄").indexOf("|");if(t>-1){return{filters:e.slice(t),value:e.slice(0,t),expr:true}}}return{value:e,filters:"",expr:true}}function en(e){var t=[],n,r=0,i;do{i=e.indexOf(I,r);if(i===-1){break}n=e.slice(r,i);if(n){t.push({value:n,filters:"",expr:false})}r=i+I.length;i=e.indexOf(q,r);if(i===-1){break}n=e.slice(r,i);if(n){t.push(Zt(n))}r=i+q.length}while(1);n=e.slice(r);if(n){t.push({value:n,expr:false,filters:""})}return t}function tn(e,t){var r=[];if(e.nodeType===8){var i=Zt(e.nodeValue);var s=[i]}else{s=en(e.data)}if(s.length){for(var o=0,i;i=s[o++];){var u=n.createTextNode(i.value);if(i.expr){i.type="text";i.element=u;i.filters=i.filters.replace(Kt,function(){i.type="html";i.group=1;return""});r.push(i)}S.appendChild(u)}e.parentNode.replaceChild(S,e);if(r.length)Bt(r,t)}}function nn(e){return e.replace(/([a-z\d])([A-Z]+)/g,"$1-$2").toLowerCase()}function rn(e){if(e.indexOf("-")<0&&e.indexOf("_")<0){return e}return e.replace(/[-_][^-_]/g,function(e){return e.charAt(1).toUpperCase()})}function on(e){try{if(typeof e==="object")return e;e=e==="true"?true:e==="false"?false:e==="null"?null:+e+""===e?+e:sn.test(e)?JSON.parse(e):e}catch(t){}return e}function un(e){return e.window&&e.document?e:e.nodeType===9?e.defaultView:false}function pn(e,t){if(e.offsetWidth<=0){var n=getComputedStyle(e,null);if(hn.test(n["display"])){var r={node:e};for(var i in cn){r[i]=n[i];e.style[i]=cn[i]}t.push(r)}var s=e.parentNode;if(s&&s.nodeType===1){pn(s,t)}}}function dn(e){var t=e.tagName.toLowerCase();return t==="input"&&/checkbox|radio/.test(e.type)?"checked":t}function Nn(e,t,n,r){var i=[],s=" = "+n+".";for(var o=e.length,u;u=e[--o];){if(t.hasOwnProperty(u)){i.push(u+s+u);r.vars.push(u);if(r.type==="duplex"){e.get=n+"."+u}e.splice(o,1)}}return i}function Cn(e){var t=[],n={};for(var r=0;r<e.length;r++){var i=e[r];var s=i&&typeof i.$id==="string"?i.$id:i;if(!n[s]){n[s]=t.push(i)}}return t}function Hn(e,t){t=t.replace(On,"").replace(Mn,function(){return"],|"}).replace(_n,function(e,t){return"["+mn(t)}).replace(Dn,function(){return'"],["'}).replace(Pn,function(){return'",'})+"]";return"return avalon.filters.$filter("+e+", "+t+")"}function Bn(t,n,r){var i=r.type;var o=r.filters||"";var u=n.map(function(e){return String(e.$id).replace(An,"$1")})+t+i+o;var a=Tn(t).concat(),f=[],l=[],c=[],h="";n=Cn(n);r.vars=[];for(var p=0,d=n.length;p<d;p++){if(a.length){var v="vm"+e+"_"+p;l.push(v);c.push(n[p]);f.push.apply(f,Nn(a,n[p],v,r))}}if(!f.length&&i==="duplex"){return}if(i!=="duplex"&&(t.indexOf("||")>-1||t.indexOf("&&")>-1)){r.vars.forEach(function(e){var n=new RegExp("\\b"+e+"(?:\\.\\w+|\\[\\w+\\])+","ig");t=t.replace(n,function(t){var n=t.charAt(e.length);var r=/^\s*\(/.test(RegExp.rightContext);if(n==="."||n==="["||r){var i="var"+String(Math.random()).replace(/^0\./,"");if(r){var s=t.split(".");if(s.length>2){var o=s.pop();f.push(i+" = "+s.join("."));return i+"."+o}else{return t}}f.push(i+" = "+t);return i}else{return t}})})}r.args=c;var m=kn[u];if(m){r.evaluator=m;return}var h=f.join(", ");if(h){h="var "+h}if(/\S/.test(o)){if(!/text|html/.test(r.type)){throw Error("ms-"+r.type+"不支持过滤器")}t="\nvar ret"+e+" = "+t+";\r\n";t+=Hn("ret"+e,o)}else if(i==="duplex"){var g="'use strict';\nreturn function(vvv){\n	"+h+";\n	if(!arguments.length){\n		return "+t+"\n	}\n	"+(!Ln.test(t)?a.get:t)+"= vvv;\n} ";try{m=Function.apply(N,l.concat(g));r.evaluator=kn(u,m)}catch(y){s("debug: parse error,"+y.message)}return}else if(i==="on"){if(t.indexOf("(")===-1){t+=".call(this, $event)"}else{t=t.replace("(",".call(this,")}l.push("$event");t="\nreturn "+t+";";var b=t.lastIndexOf("\nreturn");var w=t.slice(0,b);var E=t.slice(b);t=w+"\n"+E}else{t="\nreturn "+t+";"}try{m=Function.apply(N,l.concat("'use strict';\n"+h+t));r.evaluator=kn(u,m)}catch(y){s("debug: parse error,"+y.message)}finally{a=textBuffer=l=null}}function jn(e,t,n,r,i){t.cb(-1);if(Array.isArray(r)){e=r.map(function(e){return e.expr?"("+e.value+")":mn(e.value)}).join(" + ")}Bn(e,t,n);if(n.evaluator&&!i){n.handler=_[n.handlerName||n.type];vt(n)}}function Vn(e,t){var r="_"+e;if(!Vn[r]){var i=n.createElement(e);E.appendChild(i);if(w){t=getComputedStyle(i,null).display}else{t=i.currentStyle.display}E.removeChild(i);Vn[r]=t}return Vn[r]}function Kn(e){return e==null?"":e}function Qn(e,t,n,r){t.param.replace(/\w+/g,function(r){var i=avalon.duplexHooks[r];if(i&&typeof i[n]==="function"){e=i[n](e,t)}});return e}function Zn(e,t,r){var i=n.createEvent("Events");i.initEvent(t,true,true);if(r){i.detail=r}e.dispatchEvent(i)}function er(){for(var e=Yn.length-1;e>=0;e--){var t=Yn[e];if(t()===false){Yn.splice(e,1)}}if(!Yn.length){clearInterval(Gn)}}function tr(e){if(avalon.contains(E,this)){sr.call(this,e);or.call(this,e)}}function or(e){var t=arguments.length?e:this.value;if(!this.disabled&&this.oldValue!==t+""){var n=this.getAttribute("data-duplex-event")||"input";Zn(this,n)}}function ur(e,t,n,r){var i=avalon.parseHTML(e.template);var s=avalon.slice(i.childNodes);t.appendChild(i);var o=e.vmodels;var u=[n].concat(o);u.cb=o.cb;var a={nodes:s,vmodels:u};r.push(a)}function ar(e,t){var n=e.element;var r=e.endRepeat;var i=[];var s=n.nextSibling;if(s!==r){do{if(s!==r){i.push(s)}else{break}}while(s=s.nextSibling)}return i[e.group*t]||r}function fr(e,t,n){var r=t*(n||1);var i=[e],s=1;var o=S;while(s<r){e=e.nextSibling;if(e){i[s++]=e}}for(var s=0;e=i[s++];){o.appendChild(e)}return o}function lr(e){if(!isFinite(e.group)){var t=e.element.parentNode.childNodes;var n=t.length-2;var r="proxySize"in e?e.proxySize:e.proxies.length;e.group=n/r}}function pr(e){var t={$host:[],$outer:{},$index:0,$first:false,$last:false,$remove:avalon.noop};t[e]={get:function(){return this.$host[this.$index]},set:function(e){this.$host.set(this.$index,e)}};var n={$last:1,$first:1,$index:1};var r=it(t,n);var i=r.$events;i[e]=i.$first=i.$last=i.$index;r.$id=L("$proxy$each");return r}function dr(e,t){var n=t.param||"el",r;for(var i=0,s=cr.length;i<s;i++){var o=cr[i];if(o&&o.hasOwnProperty(n)){r=o;cr.splice(i,1)}}if(!r){r=pr(n)}var u=t.$repeat;var a=u.length-1;r.$index=e;r.$first=e===0;r.$last=e===a;r.$host=u;r.$outer=t.$outer;r.$remove=function(){return u.removeAt(r.$index)};return r}function vr(){var e=it({$key:"",$outer:{},$host:{},$val:{get:function(){return this.$host[this.$key]},set:function(e){this.$host[this.$key]=e}}},{$val:1});e.$id=L("$proxy$with");return e}function mr(e,t){var n=hr.pop();if(!n){n=vr()}var r=t.$repeat;n.$key=e;n.$host=r;n.$outer=t.$outer;if(r.$events){n.$events.$val=r.$events[e]}else{n.$events={}}return n}function gr(e,t){var n=t==="each"?cr:hr;avalon.each(e,function(e,t){if(t.$events){for(var r in t.$events){if(Array.isArray(t.$events[r])){t.$events[r].forEach(function(e){if(typeof e==="object")Tt(e)});t.$events[r].length=0}}t.$host=t.$outer={};if(n.unshift(t)>F.maxRepeatSize){n.pop()}}});if(t==="each")e.length=0}function Cr(){if(V){V.checkDeps()}else{Nr.forEach(function(e){e(avalon)})}Cr=N}var e=Date.now();var t=Function("return this")();var n=t.document;var r=n.head;r.insertAdjacentHTML("afterBegin",'<avalon ms-skip><style id="avalonStyle">.avalonHide{ display: none!important }</style></avalon>');var i=r.firstChild;var o="$"+e;var u=t.require;var a=t.define;var f=false;var l=/[^, ]+/g;var c=/^(?:object|array)$/;var h=/^\[object SVG\w*Element\]$/;var p=/^\[object (?:Window|DOMWindow|global)\]$/;var d=Object.prototype;var v=d.hasOwnProperty;var m=d.toString;var g=Array.prototype;var y=g.slice;var b={};var w=t.dispatchEvent;var E=n.documentElement;var S=n.createDocumentFragment();var x=n.createElement("div");var T={};"Boolean Number String Function Array Date RegExp Object Error".replace(l,function(e){T["[object "+e+"]"]=e.toLowerCase()});var L=function(e){e=e||"avalon";return(e+Math.random()+Math.random()).replace(/0\./g,"")};avalon=function(e){return new avalon.init(e)};avalon.init=function(e){this[0]=this.element=e};avalon.fn=avalon.prototype=avalon.init.prototype;avalon.type=function(e){if(e==null){return String(e)}return typeof e==="object"||typeof e==="function"?T[m.call(e)]||"object":typeof e};var A=function(e){return m.call(e)=="[object Function]"};avalon.isFunction=A;avalon.isWindow=function(e){return p.test(m.call(e))};avalon.isPlainObject=function(e){return m.call(e)==="[object Object]"&&Object.getPrototypeOf(e)===d};avalon.mix=avalon.fn.mix=function(){var e,t,n,r,i,s,o=arguments[0]||{},u=1,a=arguments.length,f=false;if(typeof o==="boolean"){f=o;o=arguments[1]||{};u++}if(typeof o!=="object"&&!A(o)){o={}}if(u===a){o=this;u--}for(;u<a;u++){if((e=arguments[u])!=null){for(t in e){n=o[t];r=e[t];if(o===r){continue}if(f&&r&&(avalon.isPlainObject(r)||(i=Array.isArray(r)))){if(i){i=false;s=n&&Array.isArray(n)?n:[]}else{s=n&&avalon.isPlainObject(n)?n:{}}o[t]=avalon.mix(f,s,r)}else if(r!==void 0){o[t]=r}}}}return o};avalon.mix({rword:l,subscribers:o,version:1.381,ui:{},log:s,slice:function(e,t,n){return y.call(e,t,n)},noop:N,error:function(e,t){throw new(t||Error)(e)},oneObject:C,range:function(e,t,n){n||(n=1);if(t==null){t=e||0;e=0}var r=-1,i=Math.max(0,Math.ceil((t-e)/n)),s=Array(i);while(++r<i){s[r]=e;e+=n}return s},eventHooks:{},bind:function(e,t,n,r){var i=avalon.eventHooks;var s=i[t];if(typeof s==="object"){t=s.type;if(s.deel){n=s.deel(e,n)}}e.addEventListener(t,n,!!r);return n},unbind:function(e,t,n,r){var i=avalon.eventHooks;var s=i[t];var o=n||N;if(typeof s==="object"){t=s.type}e.removeEventListener(t,o,!!r)},css:function(e,t,n){if(e instanceof avalon){e=e[0]}var r=/[_-]/.test(t)?rn(t):t;t=avalon.cssName(r)||r;if(n===void 0||typeof n==="boolean"){var i=an[r+":get"]||an["@:get"];if(t==="background"){t="backgroundColor"}var s=i(e,t);return n===true?parseFloat(s)||0:s}else if(n===""){e.style[t]=""}else{if(n==null||n!==n){return}if(isFinite(n)&&!avalon.cssNumber[r]){n+="px"}i=an[r+":set"]||an["@:set"];i(e,t,n)}},each:function(e,t){if(e){var n=0;if(D(e)){for(var r=e.length;n<r;n++){t(n,e[n])}}else{for(n in e){if(e.hasOwnProperty(n)){t(n,e[n])}}}}},getWidgetData:function(e,t){var n=avalon(e).data();var r={};for(var i in n){if(i.indexOf(t)===0){r[i.replace(t,"").replace(/\w/,function(e){return e.toLowerCase()})]=n[i]}}return r},parseJSON:JSON.parse,Array:{ensure:function(e,t){if(e.indexOf(t)===-1){return e.push(t)}},removeAt:function(e,t){return!!e.splice(t,1).length},remove:function(e,t){var n=e.indexOf(t);if(~n)return avalon.Array.removeAt(e,n);return false}}});var M=avalon.bindingHandlers={};var _=avalon.bindingExecutors={};avalon.nextTick=t.setImmediate?setImmediate.bind(t):function(e){setTimeout(e,0)};if(!E.contains){Node.prototype.contains=function(e){return!!(this.compareDocumentPosition(e)&16)}}avalon.contains=function(e,t){try{while(t=t.parentNode)if(t===e)return true;return false}catch(n){return false}};if(t.SVGElement){var P="http://www.w3.org/2000/svg";var H=n.createElementNS(P,"svg");H.innerHTML='<circle cx="50" cy="50" r="40" fill="red" />';if(!h.test(H.firstChild)){function B(e,t){if(e&&e.childNodes){var r=e.childNodes;for(var i=0,s;s=r[i++];){if(s.tagName){var o=n.createElementNS(P,s.tagName.toLowerCase());g.forEach.call(s.attributes,function(e){o.setAttribute(e.name,e.value)});B(s,o);t.appendChild(o)}}}}Object.defineProperties(SVGElement.prototype,{outerHTML:{enumerable:true,configurable:true,get:function(){return(new XMLSerializer).serializeToString(this)},set:function(e){var t=this.tagName.toLowerCase(),r=this.parentNode,i=avalon.parseHTML(e);if(t==="svg"){r.insertBefore(i,this)}else{var s=n.createDocumentFragment();B(i,s);r.insertBefore(s,this)}r.removeChild(this)}},innerHTML:{enumerable:true,configurable:true,get:function(){var e=this.outerHTML;var t=new RegExp("<"+this.nodeName+'\\b(?:(["\'])[^"]*?(\\1)|[^>])*>',"i");var n=new RegExp("</"+this.nodeName+">$","i");return e.replace(t,"").replace(n,"")},set:function(e){if(avalon.clearHTML){avalon.clearHTML(this);var t=avalon.parseHTML(e);B(t,this)}}}})}}var j=avalon.eventHooks;if(!("onmouseenter"in E)){avalon.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){j[e]={type:t,deel:function(t,n){return function(r){var i=r.relatedTarget;if(!i||i!==t&&!(t.compareDocumentPosition(i)&16)){delete r.type;r.type=e;return n.call(t,r)}}}}})}avalon.each({AnimationEvent:"animationend",WebKitAnimationEvent:"webkitAnimationEnd"},function(e,n){if(t[e]&&!j.animationend){j.animationend={type:n}}});if(n.onmousewheel===void 0){j.mousewheel={type:"wheel",deel:function(e,t){return function(n){n.wheelDeltaY=n.wheelDelta=n.deltaY>0?-120:120;n.wheelDeltaX=0;Object.defineProperty(n,"type",{value:"mousewheel"});t.call(e,n)}}}}var I,q,R,U,z,W=/[-.*+?^${}()|[\]\/\\]/g;var V;var $={loader:function(e){t.define=e&&V?V.define:a;t.require=e&&V?V:u},interpolate:function(e){I=e[0];q=e[1];if(I===q){throw new SyntaxError("openTag!==closeTag")}else if(e+""==="<!--,-->"){F.commentInterpolate=true}else{var t=I+"test"+q;x.innerHTML=t;if(x.innerHTML!==t&&x.innerHTML.indexOf("&lt;")>=0){throw new SyntaxError("此定界符不合法")}x.innerHTML=""}var n=X(I),r=X(q);R=new RegExp(n+"(.*?)"+r);U=new RegExp(n+"(.*?)"+r,"g");z=new RegExp(n+".*?"+r+"|\\sms-")}};F.debug=true;F.plugins=$;F.plugins["interpolate"](["{{","}}"]);F.paths={};F.shim={};F.maxRepeatSize=100;avalon.config=F;var J={$watch:function(e,t){if(typeof t==="function"){var n=this.$events[e];if(n){n.push(t)}else{this.$events[e]=[t]}}else{this.$events=this.$watch.backup}return this},$unwatch:function(e,t){var n=arguments.length;if(n===0){this.$watch.backup=this.$events;this.$events={}}else if(n===1){this.$events[e]=[]}else{var r=this.$events[e]||[];var i=r.length;while(~--i<0){if(r[i]===t){return r.splice(i,1)}}}return this},$fire:function(e){var t;if(/^(\w+)!(\S+)$/.test(e)){t=RegExp.$1;e=RegExp.$2}var r=this.$events;var i=y.call(arguments,1);var s=[e].concat(i);if(t==="all"){for(var o in avalon.vmodels){var u=avalon.vmodels[o];if(u!==this){u.$fire.apply(u,s)}}}else if(t==="up"||t==="down"){var a=r.expr?Q(r.expr):[];if(a.length===0)return;for(var o in avalon.vmodels){var u=avalon.vmodels[o];if(u!==this){if(u.$events.expr){var f=Q(u.$events.expr);if(f.length===0){continue}Array.prototype.forEach.call(f,function(e){Array.prototype.forEach.call(a,function(n){var r=t==="down"?n.contains(e):e.contains(n);if(r){e._avalon=u}})})}}}var l=n.getElementsByTagName("*");var c=[];Array.prototype.forEach.call(l,function(e){if(e._avalon){c.push(e._avalon);e._avalon="";e.removeAttribute("_avalon")}});if(t==="up"){c.reverse()}for(var o=0,h;h=c[o++];){if(h.$fire.apply(h,s)===false){break}}}else{var p=r[e]||[];var d=r.$all||[];for(var o=0,v;v=p[o++];){if(A(v))v.apply(this,i)}for(var o=0,v;v=d[o++];){if(A(v))v.apply(this,arguments)}}}};var K=/(\w+)\[(avalonctrl)="(\S+)"\]/;var Q=function(e){return n.querySelectorAll(e)};var G=avalon.vmodels={};avalon.define=function(e,t){var n=e.$id||e;if(!n){s("warning: vm必须指定$id")}if(G[n]){s("warning: "+n+" 已经存在于avalon.vmodels中")}if(typeof e==="object"){var r=it(e)}else{var i={$watch:N};t(i);r=it(i);f=true;t(r);f=false}r.$id=n;return G[n]=r};var Y=String("$id,$watch,$unwatch,$fire,$events,$model,$skipArray").match(l);var et=Object.defineProperty;var tt=true;try{et({},"_",{value:"x"});var nt=Object.defineProperties}catch(rt){tt=false}var st=Object.is||function(e,t){if(e===0&&t===0){return 1/e===1/t}else if(e!==e){return t!==t}else{return e===t}};var ut=w?function(e){var t={};for(var n in e){t[n]={get:e[n],set:e[n],enumerable:true,configurable:true}}return t}:function(e){return e};var at={};var ct=g.splice;var ht={_splice:ct,_fire:function(e,t,n){Nt(this.$events[o],e,t,n)},_add:function(e,t){var n=this.length;t=typeof t==="number"?t:n;var r=[];for(var i=0,s=e.length;i<s;i++){r[i]=pt(e[i],this.$model[t+i])}ct.apply(this,[t,0].concat(r));this._fire("add",t,r);if(!this._stopFireLength){return this._.length=this.length}},_del:function(e,t){var n=this._splice(e,t);if(n.length){this._fire("del",e,t);if(!this._stopFireLength){this._.length=this.length}}return n},push:function(){g.push.apply(this.$model,arguments);var e=this._add(arguments);this._fire("index",e>2?e-2:0);return e},size:function(){return this._.length},pushArray:function(e){return this.push.apply(this,e)},unshift:function(){g.unshift.apply(this.$model,arguments);this._add(arguments,0);this._fire("index",arguments.length);return this.$model.length},shift:function(){var e=this.$model.shift();this._del(0,1);this._fire("index",0);return e},pop:function(){var e=this.$model.pop();this._del(this.length-1,1);return e},splice:function(e,t){e=O(e,this.length);var n=ct.apply(this.$model,arguments),r=[],i;this._stopFireLength=true;if(n.length){r=this._del(e,n.length);i=true}if(arguments.length>2){this._add(y.call(arguments,2),e);i=true}this._stopFireLength=false;this._.length=this.length;if(i){this._fire("index",0)}return r},contains:function(e){return this.indexOf(e)!==-1},remove:function(e){return this.removeAt(this.indexOf(e))},removeAt:function(e){return e>=0?this.splice(e,1):[]},clear:function(){this.$model.length=this.length=this._.length=0;this._fire("clear",0);return this},removeAll:function(e){if(Array.isArray(e)){e.forEach(function(e){this.remove(e)},this)}else if(typeof e==="function"){for(var t=this.length-1;t>=0;t--){var n=this[t];if(e(n,t)){this.splice(t,1)}}}else{this.clear()}},ensure:function(e){if(!this.contains(e)){this.push(e)}return this},set:function(e,t){if(e>=0){var n=avalon.type(t);if(t&&t.$model){t=t.$model}var r=this[e];if(n==="object"){for(var i in t){if(r.hasOwnProperty(i)){r[i]=t[i]}}}else if(n==="array"){r.clear().push.apply(r,t)}else if(r!==t){this[e]=t;this.$model[e]=t;this._fire("set",e,t)}}return this}};"sort,reverse".replace(l,function(e){ht[e]=function(){var t=this.$model,n=t.slice(0),r=false;g[e].apply(t,arguments);for(var i=0,s=n.length;i<s;i++){var o=t[i],u=n[i];if(!st(o,u)){r=true;var a=n.indexOf(o,i);var f=this._splice(a,1)[0];var l=n.splice(a,1)[0];this._splice(i,0,f);n.splice(i,0,l);this._fire("move",a,i)}}n=void 0;if(r){this._fire("index",0)}return this}});var dt=/^(duplex|on)$/;var yt=[],bt=0,wt=200,Et=new Date,St;var Ct=new function(){avalon.mix(this,{option:n.createElement("select"),thead:n.createElement("table"),td:n.createElement("tr"),area:n.createElement("map"),tr:n.createElement("tbody"),col:n.createElement("colgroup"),legend:n.createElement("fieldset"),_default:n.createElement("div"),g:n.createElementNS("http://www.w3.org/2000/svg","svg")});this.optgroup=this.option;this.tbody=this.tfoot=this.colgroup=this.caption=this.thead;this.th=this.td};Ct.optgroup=Ct.option;Ct.tbody=Ct.tfoot=Ct.colgroup=Ct.caption=Ct.thead;Ct.th=Ct.td;String("circle,defs,ellipse,image,line,path,polygon,polyline,rect,symbol,text,use").replace(l,function(e){Ct[e]=Ct.g});var kt=/<([\w:]+)/;var Lt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig;var At=C(["","text/javascript","text/ecmascript","application/ecmascript","application/javascript"]);var Ot=n.createElement("script");avalon.parseHTML=function(e){if(typeof e!=="string"){e=e+""}e=e.replace(Lt,"<$1></$2>").trim();var t=(kt.exec(e)||["",""])[1].toLowerCase(),n=Ct[t]||Ct._default,r=S.cloneNode(false),i;n.innerHTML=e;var s=n.getElementsByTagName("script");if(s.length){for(var o=0,u;u=s[o++];){if(At[u.type]){var a=Ot.cloneNode(false);g.forEach.call(u.attributes,function(e){a.setAttribute(e.name,e.value)});a.text=u.text;u.parentNode.replaceChild(a,u)}}}while(i=n.firstChild){r.appendChild(i)}return r};avalon.innerHTML=function(e,t){var n=this.parseHTML(t);this.clearHTML(e).appendChild(n)};avalon.clearHTML=function(e){e.textContent="";while(e.firstChild){e.removeChild(e.firstChild)}return e};var Mt={};avalon.scanCallback=function(e,t){t=t||"$all";var n=Mt[t]||(Mt[t]=[]);n.push(e)};avalon.scan=function(e,t,n){function f(e){s+=e;a=true;setTimeout(function(){if(s<=0&&!o){o=true;while(u=r.shift()){u()}}})}e=e||E;n=n||"$all";var r=Mt[n]||[];var i=t?[].concat(t):[];var s=0;var o=false;var u;var a=false;i.cb=f;Ut(e,i);if(!a){while(u=r.shift()){u()}}};var _t=C("area,base,basefont,br,col,command,embed,hr,img,input,link,meta,param,source,track,wbr,noscript,script,style,textarea".toUpperCase());var Ht=function(e,t,n){var r=e.getAttribute(t);if(r){for(var i=0,s;s=n[i++];){if(s.hasOwnProperty(r)&&typeof s[r]==="function"){return s[r]}}}};var jt=/ms-(\w+)-?(.*)/;var Ft={"if":10,repeat:90,data:100,widget:110,each:1400,"with":1500,duplex:2e3,on:3e3};var It=C("animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit");var qt=C("value,title,alt,checked,selected,disabled,readonly,enabled");var $t=/^if|widget|repeat$/;var Jt=/^each|with|html|include$/;var Kt=/\|\s*html\s*/,Qt=/\|\|/g,Gt=/&lt;/g,Yt=/&gt;/g;"add,remove".replace(l,function(e){avalon.fn[e+"Class"]=function(t){var n=this[0];if(t&&typeof t==="string"&&n&&n.nodeType===1){t.replace(/\S+/g,function(t){n.classList[e](t)})}return this}});avalon.fn.mix({hasClass:function(e){var t=this[0]||{};return t.nodeType===1&&t.classList.contains(e)},toggleClass:function(e,t){var n,r=0;var i=e.split(/\s+/);var s=typeof t==="boolean";while(n=i[r++]){var o=s?t:!this.hasClass(n);this[o?"addClass":"removeClass"](n)}return this},attr:function(e,t){if(arguments.length===2){this[0].setAttribute(e,t);return this}else{return this[0].getAttribute(e)}},data:function(e,t){e="data-"+nn(e||"");switch(arguments.length){case 2:this.attr(e,t);return this;case 1:var n=this.attr(e);return on(n);case 0:var r={};g.forEach.call(this[0].attributes,function(t){if(t){e=t.name;if(!e.indexOf("data-")){e=rn(e.slice(5));r[e]=on(t.value)}}});return r}},removeData:function(e){e="data-"+nn(e);this[0].removeAttribute(e);return this},css:function(e,t){if(avalon.isPlainObject(e)){for(var n in e){avalon.css(this,n,e[n])}}else{var r=avalon.css(this,e,t)}return r!==void 0?r:this},position:function(){var e,t,n=this[0],r={top:0,left:0};if(!n){return}if(this.css("position")==="fixed"){t=n.getBoundingClientRect()}else{e=this.offsetParent();t=this.offset();if(e[0].tagName!=="HTML"){r=e.offset()}r.top+=avalon.css(e[0],"borderTopWidth",true);r.left+=avalon.css(e[0],"borderLeftWidth",true)}return{top:t.top-r.top-avalon.css(n,"marginTop",true),left:t.left-r.left-avalon.css(n,"marginLeft",true)}},offsetParent:function(){var e=this[0].offsetParent||E;while(e&&e.tagName!=="HTML"&&avalon.css(e,"position")==="static"){e=e.offsetParent}return avalon(e||E)},bind:function(e,t,n){if(this[0]){return avalon.bind(this[0],e,t,n)}},unbind:function(e,t,n){if(this[0]){avalon.unbind(this[0],e,t,n)}return this},val:function(e){var t=this[0];if(t&&t.nodeType===1){var n=arguments.length===0;var r=n?":get":":set";var i=vn[dn(t)+r];if(i){var s=i(t,e)}else if(n){return(t.value||"").replace(/\r/g,"")}else{t.value=e}}return n?s:this}});if(E.dataset){avalon.fn.data=function(e,t){var n=this[0].dataset;switch(arguments.length){case 2:n[e]=t;return this;case 1:t=n[e];return on(t);case 0:var r={};for(var e in n){r[e]=on(n[e])}return r}}}var sn=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/;avalon.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){avalon.fn[e]=function(n){var r=this[0]||{},i=un(r),s=e==="scrollTop";if(!arguments.length){return i?i[t]:r[e]}else{if(i){i.scrollTo(!s?n:avalon(i).scrollLeft(),s?n:avalon(i).scrollTop())}else{r[e]=n}}}});var an=avalon.cssHooks={};var fn=["","-webkit-","-moz-","-ms-"];var ln={"float":"cssFloat"};avalon.cssNumber=C("columnCount,order,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");avalon.cssName=function(e,t,n){if(ln[e]){return ln[e]}t=t||E.style;for(var r=0,i=fn.length;r<i;r++){n=rn(fn[r]+e);if(n in t){return ln[e]=n}}return null};an["@:set"]=function(e,t,n){e.style[t]=n};an["@:get"]=function(e,t){if(!e||!e.style){throw new Error("getComputedStyle要求传入一个节点 "+e)}var n,r=getComputedStyle(e,null);if(r){n=t==="filter"?r.getPropertyValue(t):r[t];if(n===""){n=e.style[t]}}return n};an["opacity:get"]=function(e){var t=an["@:get"](e,"opacity");return t===""?"1":t};"top,left".replace(l,function(e){an[e+":get"]=function(t){var n=an["@:get"](t,e);return/px$/.test(n)?n:avalon(t).position()[e]+"px"}});var cn={position:"absolute",visibility:"hidden",display:"block"};var hn=/^(none|table(?!-c[ea]).+)/;"Width,Height".replace(l,function(e){var t=e.toLowerCase(),n="client"+e,r="scroll"+e,i="offset"+e;an[t+":get"]=function(t,n,r){var s=-4;if(typeof r==="number"){s=r}n=e==="Width"?["Left","Right"]:["Top","Bottom"];var o=t[i];if(s===2){return o+avalon.css(t,"margin"+n[0],true)+avalon.css(t,"margin"+n[1],true)}if(s<0){o=o-avalon.css(t,"border"+n[0]+"Width",true)-avalon.css(t,"border"+n[1]+"Width",true)}if(s===-4){o=o-avalon.css(t,"padding"+n[0],true)-avalon.css(t,"padding"+n[1],true)}return o};an[t+"&get"]=function(e){var n=[];pn(e,n);var r=an[t+":get"](e);for(var i=0,s;s=n[i++];){e=s.node;for(var o in s){if(typeof s[o]==="string"){e.style[o]=s[o]}}}return r};avalon.fn[t]=function(s){var o=this[0];if(arguments.length===0){if(o.setTimeout){return o["inner"+e]||o.document.documentElement[n]}if(o.nodeType===9){var u=o.documentElement;return Math.max(o.body[r],u[r],o.body[i],u[i],u[n])}return an[t+"&get"](o)}else{return this.css(t,s)}};avalon.fn["inner"+e]=function(){return an[t+":get"](this[0],void 0,-2)};avalon.fn["outer"+e]=function(e){return an[t+":get"](this[0],void 0,e===true?2:0)}});avalon.fn.offset=function(){var e=this[0],t={left:0,top:0};if(!e||!e.tagName||!e.ownerDocument){return t}var n=e.ownerDocument,r=n.documentElement,i=n.defaultView;if(!r.contains(e)){return t}if(e.getBoundingClientRect!==void 0){t=e.getBoundingClientRect()}return{top:t.top+i.pageYOffset-r.clientTop,left:t.left+i.pageXOffset-r.clientLeft}};var vn={"select:get":function(e,t){var n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&!n.disabled){t=n.value;if(s){return t}o.push(t)}}return o},"select:set":function(e,t,n){t=[].concat(t);for(var r=0,i;i=e.options[r++];){if(i.selected=t.indexOf(i.value)>=0){n=true}}if(!n){e.selectedIndex=-1}}};var mn=JSON.stringify;var gn="break,case,catch,continue,debugger,default,delete,do,else,false"+",finally,for,function,if,in,instanceof,new,null,return,switch,this"+",throw,true,try,typeof,var,void,while,with"+",abstract,boolean,byte,char,class,const,double,enum,export,extends"+",final,float,goto,implements,import,int,interface,long,native"+",package,private,protected,public,short,static,super,synchronized"+",throws,transient,volatile"+",arguments,let,yield"+",undefined";var yn=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g;var bn=/[^\w$]+/g;var wn=new RegExp(["\\b"+gn.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g");var En=/\b\d[^,]*/g;var Sn=/^,+|,+$/g;var xn=k(512);var Tn=function(e){var t=","+e.trim();if(xn[t]){return xn[t]}var n=e.replace(yn,"").replace(bn,",").replace(wn,"").replace(En,"").replace(Sn,"").split(/^$|,+/);return xn(t,Cn(n))};var kn=k(128);var Ln=/\w\[.*\]|\w\.\w/;var An=/(\$proxy\$[a-z]+)\d+$/;var On=/\)\s*$/;var Mn=/\)\s*\|/g;var _n=/\|\s*([$\w]+)/g;var Dn=/"\s*\["/g;var Pn=/"\s*\(/g;avalon.parseExprProxy=jn;var Fn="autofocus,autoplay,async,allowTransparency,checked,controls,declare,disabled,defer,defaultChecked,defaultSelected"+"contentEditable,isMap,loop,multiple,noHref,noResize,noShade,open,readOnly,selected";var In={};Fn.replace(l,function(e){In[e.toLowerCase()]=e});var qn={"accept-charset":"acceptCharset","char":"ch",charoff:"chOff","class":"className","for":"htmlFor","http-equiv":"httpEquiv"};var Rn="accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan,"+"dateTime,defaultValue,frameBorder,longDesc,maxLength,marginWidth,marginHeight,"+"rowSpan,tabIndex,useMap,vSpace,valueType,vAlign";Rn.replace(l,function(e){qn[e.toLowerCase()]=e});var Un=/<noscript.*?>(?:[\s\S]+?)<\/noscript>/img;var zn=/<noscript.*?>([\s\S]+?)<\/noscript>/im;var Wn=function(){return new(t.XMLHttpRequest||ActiveXObject)("Microsoft.XMLHTTP")};var Xn=avalon.templateCache={};M.attr=function(e,t){var r=e.value.trim(),i=true;if(r.indexOf(I)>-1&&r.indexOf(q)>2){i=false;if(R.test(r)&&RegExp.rightContext===""&&RegExp.leftContext===""){i=true;r=RegExp.$1}}if(e.type==="include"){var s=e.element;e.includeRendered=Ht(s,"data-include-rendered",t);e.includeLoaded=Ht(s,"data-include-loaded",t);var o=e.includeReplaced=!!avalon(s).data("includeReplace");e.startInclude=n.createComment("ms-include");e.endInclude=n.createComment("ms-include-end");if(o){e.element=e.startInclude;s.parentNode.insertBefore(e.startInclude,s);s.parentNode.insertBefore(e.endInclude,s.nextSibling)}else{s.insertBefore(e.startInclude,s.firstChild);s.appendChild(e.endInclude)}}e.handlerName="attr";jn(r,t,e,i?0:en(e.value))};_.attr=function(e,r,i){var s=i.type,o=i.param;if(s==="css"){avalon(r).css(o,e)}else if(s==="attr"){if(In[o]){var u=In[o];if(typeof r[u]==="boolean"){return r[u]=!!e}}var a=e===false||e===null||e===void 0;if(!w&&qn[o]){o=qn[o]}if(a){return r.removeAttribute(o)}var f=h.test(r)?false:n.namespaces&&isVML(r)?true:o in r.cloneNode(false);if(f){r[o]=e}else{r.setAttribute(o,e)}}else if(s==="include"&&e){var l=i.vmodels;var c=i.includeRendered;var p=i.includeLoaded;var d=i.includeReplaced;var v=d?r.parentNode:r;l.cb(1);function m(e){if(p){e=p.apply(v,[e].concat(l))}if(c){Dt(v,function(){c.call(v)},NaN)}while(true){var t=i.startInclude.nextSibling;if(t&&t!==i.endInclude){v.removeChild(t)}else{break}}var n=avalon.parseHTML(e);var r=avalon.slice(n.childNodes);v.insertBefore(n,i.endInclude);Wt(r,l);l.cb(-1)}if(i.param==="src"){if(Xn[e]){avalon.nextTick(function(){m(Xn[e])})}else{var g=Wn();g.onreadystatechange=function(){if(g.readyState===4){var t=g.status;if(t>=200&&t<300||t===304||t===1223){m(Xn[e]=g.responseText)}}};g.open("GET",e,true);if("withCredentials"in g){g.withCredentials=true}g.setRequestHeader("X-Requested-With","XMLHttpRequest");g.send(null)}}else{var y=e&&e.nodeType===1?e:n.getElementById(e);if(y){if(y.tagName==="NOSCRIPT"&&!(y.innerHTML||y.fixIE78)){var g=Wn();g.open("GET",location,false);g.send(null);var b=n.getElementsByTagName("noscript");var S=(g.responseText||"").match(Un)||[];var x=S.length;for(var T=0;T<x;T++){var N=b[T];if(N){N.style.display="none";N.fixIE78=(S[T].match(zn)||["","&nbsp;"])[1]}}}avalon.nextTick(function(){m(y.fixIE78||y.value||y.innerText||y.innerHTML)})}}}else{if(!E.hasAttribute&&typeof e==="string"&&(s==="src"||s==="href")){e=e.replace(/&amp;/g,"&")}r[s]=e;if(t.chrome&&r.tagName==="EMBED"){var C=r.parentNode;var k=document.createComment("ms-src");C.replaceChild(k,r);C.replaceChild(r,k)}}};"title,alt,src,value,css,include,href".replace(l,function(e){M[e]=M.attr});M["class"]=function(e,t){var n=e.param,r=e.value,i;e.handlerName="class";if(!n||isFinite(n)){e.param="";var o=r.replace(U,function(e){return e.replace(/./g,"0")});var u=o.indexOf(":");if(u===-1){var a=r}else{a=r.slice(0,u);i=r.slice(u+1);Bn(i,t,e);if(!e.evaluator){s("debug: ms-class '"+(i||"").trim()+"' 不存在于VM中");return false}else{e._evaluator=e.evaluator;e._args=e.args}}var f=R.test(a);if(!f){e.immobileClass=a}jn("",t,e,f?en(a):0)}else{e.immobileClass=e.oldStyle=e.param;jn(r,t,e)}};_["class"]=function(e,t,n){var r=avalon(t),i=n.type;if(i==="class"&&n.oldStyle){r.toggleClass(n.oldStyle,!!e)}else{n.toggleClass=n._evaluator?!!n._evaluator.apply(t,n._args):true;n.newClass=n.immobileClass||e;if(n.oldClass&&n.newClass!==n.oldClass){r.removeClass(n.oldClass)}n.oldClass=n.newClass;switch(i){case"class":r.toggleClass(n.newClass,n.toggleClass);break;case"hover":case"active":if(!n.hasBindEvent){var s="mouseenter";var o="mouseleave";if(i==="active"){t.tabIndex=t.tabIndex||-1;s="mousedown";o="mouseup";var u=r.bind("mouseleave",function(){n.toggleClass&&r.removeClass(n.newClass)})}var a=r.bind(s,function(){n.toggleClass&&r.addClass(n.newClass)});var f=r.bind(o,function(){n.toggleClass&&r.removeClass(n.newClass)});n.rollback=function(){r.unbind("mouseleave",u);r.unbind(s,a);r.unbind(o,f)};n.hasBindEvent=true}break}}};"hover,active".replace(l,function(e){M[e]=M["class"]});_.data=function(e,t,n){var r="data-"+n.param;if(e&&typeof e==="object"){t[r]=e}else{t.setAttribute(r,String(e))}};_.text=function(e,t){e=e==null?"":e;if(t.nodeType===3){try{t.data=e}catch(n){}}else{t.textContent=e}};_.html=function(e,t,r){e=e==null?"":e;var i="group"in r;var s=i?t.parentNode:t;if(e.nodeType===11){var o=e}else if(e.nodeType===1||e.item){var u=e.nodeType===1?e.childNodes:e.item?e:[];o=S.cloneNode(true);while(u[0]){o.appendChild(u[0])}}else{o=avalon.parseHTML(e)}var a=n.createComment("ms-html");if(i){s.insertBefore(a,t);avalon.clearHTML(fr(t,r.group));r.element=a}else{avalon.clearHTML(s).appendChild(a)}if(i){r.group=o.childNodes.length||1}var u=avalon.slice(o.childNodes);if(u[0]){if(a.parentNode)a.parentNode.replaceChild(o,a);if(i){r.element=u[0]}}Wt(u,r.vmodels)};M["if"]=M.data=M.text=M.html=function(e,t){jn(e.value,t,e)};_["if"]=function(e,t,r){if(e){if(t.nodeType===8){t.parentNode.replaceChild(r.template,t);t=r.element=r.template}if(t.getAttribute(r.name)){t.removeAttribute(r.name);Vt(t,r.vmodels)}r.rollback=null}else{if(t.nodeType===1){var s=r.element=n.createComment("ms-if");t.parentNode.replaceChild(s,t);r.template=t;i.appendChild(t);r.rollback=function(){if(t.parentNode===i){i.removeChild(t)}}}}};avalon.parseDisplay=Vn;M.visible=function(e,t){var n=avalon(e.element);var r=n.css("display");if(r==="none"){var i=n[0].style;var s=/visibility/i.test(i.cssText);var o=n.css("visibility");i.display="";i.visibility="hidden";r=n.css("display");if(r==="none"){r=Vn(n[0].nodeName)}i.visibility=s?o:""}e.display=r;jn(e.value,t,e)};_.visible=function(e,t,n){t.style.display=e?n.display:"none"};var $n=/\(([^)]*)\)/;M.on=function(e,t){var n=e.value;var r=e.param.replace(/-\d+$/,"");if(typeof M.on[r+"Hook"]==="function"){M.on[r+"Hook"](e)}if(n.indexOf("(")>0&&n.indexOf(")")>-1){var i=(n.match($n)||["",""])[1].trim();if(i===""||i==="$event"){n=n.replace($n,"")}}jn(n,t,e)};_.on=function(e,t,n){n.type="on";e=function(e){var t=n.evaluator||N;return t.apply(this,n.args.concat(e))};var r=n.param.replace(/-\d+$/,"");if(r==="scan"){e.call(t,{type:r})}else if(typeof n.specialBind==="function"){n.specialBind(t,e)}else{var i=avalon.bind(t,r,e)}n.rollback=function(){if(typeof n.specialUnbind==="function"){n.specialUnbind()}else{avalon.unbind(t,r,i)}}};M.widget=function(e,n){var r=e.value.match(l);var i=e.element;var s=r[0];var o=r[1];if(!o||o==="$"){o=L(s)}var u=r[2]||s;n.cb(-1);var a=avalon.ui[s];if(typeof a==="function"){n=i.vmodels||n;for(var f=0,c;c=n[f++];){if(c.hasOwnProperty(u)&&typeof c[u]==="object"){var h=c[u];h=h.$model||h;break}}if(h){var p=h[s+"Id"];if(typeof p==="string"){o=p}}var d=avalon.getWidgetData(i,s);e.value=[s,o,u].join(",");e[s+"Id"]=o;e.evaluator=N;i.msData["ms-widget-id"]=o;var v=e[s+"Options"]=avalon.mix({},a.defaults,h||{},d);i.removeAttribute("ms-widget");var m=a(i,e,n)||{};if(m.$id){avalon.vmodels[o]=m;Pt(i,m);if(m.hasOwnProperty("$init")){m.$init(function(){var e=[m].concat(n);e.cb=n.cb;avalon.scan(i,e);if(typeof v.onInit==="function"){v.onInit.call(i,m,v,n)}})}if(m.hasOwnProperty("$remove")){function g(){if(!i.msRetain&&!E.contains(i)){m.$remove();try{m.widgetElement=null}catch(e){}i.msData={};delete avalon.vmodels[m.$id];return false}}if(t.chrome){i.addEventListener("DOMNodeRemovedFromDocument",function(){setTimeout(g)})}else{avalon.tick(g)}}}else{avalon.scan(i,n)}}else if(n.length){i.vmodels=n}};var Jn=M.duplex=function(e,t){var n=e.element,r;jn(e.value,t,e,0,1);e.changed=Ht(n,"data-duplex-changed",t)||N;if(e.evaluator&&e.args){var i=[];var o=C("string,number,boolean,checked");if(n.type==="radio"&&e.param===""){e.param="checked"}if(n.msData){n.msData["ms-duplex"]=e.value}e.param.replace(/\w+/g,function(t){if(/^(checkbox|radio)$/.test(n.type)&&/^(radio|checked)$/.test(t)){if(t==="radio")s("ms-duplex-radio已经更名为ms-duplex-checked");t="checked";e.isChecked=true}if(t==="bool"){t="boolean";s("ms-duplex-bool已经更名为ms-duplex-boolean")}else if(t==="text"){t="string";s("ms-duplex-text已经更名为ms-duplex-string")}if(o[t]){r=true}avalon.Array.ensure(i,t)});if(!r){i.push("string")}e.param=i.join("-");e.bound=function(t,r){if(n.addEventListener){n.addEventListener(t,r,false)}else{n.attachEvent("on"+t,r)}var i=e.rollback;e.rollback=function(){avalon.unbind(n,t,r);i&&i()}};for(var u in avalon.vmodels){var a=avalon.vmodels[u];a.$fire("avalon-ms-duplex-init",e)}var f=e.pipe||(e.pipe=Qn);f(null,e,"init");var l=n.tagName;Jn[l]&&Jn[l](n,e.evaluator.apply(null,e.args),e)}};avalon.duplexHooks={checked:{get:function(e,t){return!t.element.oldValue}},string:{get:function(e){return e},set:Kn},"boolean":{get:function(e){return e==="true"},set:Kn},number:{get:function(e){return isFinite(e)?parseFloat(e)||0:e},set:Kn}};var Gn,Yn=[];avalon.tick=function(e){if(Yn.push(e)===1){Gn=setInterval(er,60)}};var nr=N;try{var rr=document.createElement("input");var ir=rr.constructor.prototype;Object.getOwnPropertyNames(ir);var sr=Object.getOwnPropertyDescriptor(ir,"value").set;Object.defineProperty(ir,"value",{set:tr})}catch(rt){nr=avalon.tick}Jn.INPUT=function(e,n,r){function f(e){r.changed.call(this,e,r)}function c(){a=true}function h(){a=false}function p(){if(a)return;var t=e.oldValue=e.value;var i=r.pipe(t,r,"get");if(u.data("duplex-observe")!==false){n(i);f.call(e,i);if(u.data("duplex-focus")){avalon.nextTick(function(){e.focus()})}}}var i=e.type,o=r.bound,u=avalon(e),a=false;r.handler=function(){var t=r.pipe(n(),r,"set");if(t!==e.value){e.value=t}};if(r.isChecked||e.type==="radio"){p=function(){if(u.data("duplex-observe")!==false){var t=r.pipe(e.value,r,"get");n(t);f.call(e,t)}};r.handler=function(){var t=n();var i=r.isChecked?!!t:t+""===e.value;e.checked=e.oldValue=i};o("click",p)}else if(i==="checkbox"){p=function(){if(u.data("duplex-observe")!==false){var t=e.checked?"ensure":"remove";var i=n();if(!Array.isArray(i)){s("ms-duplex应用于checkbox上要对应一个数组");i=[i]}avalon.Array[t](i,r.pipe(e.value,r,"get"));f.call(e,i)}};r.handler=function(){var t=[].concat(n());e.checked=t.indexOf(r.pipe(e.value,r,"get"))>=0};o("change",p)}else{var d=e.getAttribute("data-duplex-event")||e.getAttribute("data-event")||"input";if(e.attributes["data-event"]){s("data-event指令已经废弃，请改用data-duplex-event")}d.replace(l,function(e){switch(e){case"input":o("input",p);if(!t.VBArray){o("compositionstart",c);o("compositionend",h)}break;default:o(e,p);break}})}e.oldValue=e.value;if(/text|textarea|password/.test(e.type)){nr(function(){if(E.contains(e)){or.call(e)}else if(!e.msRetain){return false}})}vt(r);f.call(e,e.value)};Jn.TEXTAREA=Jn.INPUT;Jn.SELECT=function(e,t,n){function i(){if(r.data("duplex-observe")!==false){var i=r.val();if(Array.isArray(i)){i=i.map(function(e){return n.pipe(e,n,"get")})}else{i=n.pipe(i,n,"get")}if(i+""!==e.oldValue){t(i)}n.changed.call(e,i,n)}}var r=avalon(e);n.handler=function(){var n=t();n=n&&n.$model||n;if(Array.isArray(n)){if(!e.multiple){s("ms-duplex在<select multiple=true>上要求对应一个数组")}}else{if(e.multiple){s("ms-duplex在<select multiple=false>不能对应一个数组")}}n=Array.isArray(n)?n.map(String):n+"";if(n+""!==e.oldValue){r.val(n);e.oldValue=n+""}};n.bound("change",i);Dt(e,function(){vt(n);n.changed.call(e,t(),n)},NaN)};M.repeat=function(e,t){var r=e.type;jn(e.value,t,e,0,1);e.proxies=[];var i=false;t.cb(-1);try{var s=e.$repeat=e.evaluator.apply(0,e.args||[]);var u=avalon.type(s);if(u!=="object"&&u!=="array"){i=true;avalon.log("warning:"+e.value+"对应类型不正确")}}catch(a){i=true;avalon.log("warning:"+e.value+"编译出错")}var f=e.value.split(".")||[];if(f.length>1){f.pop();var l=f[0];for(var c=0,h;h=t[c++];){if(h&&h.hasOwnProperty(l)){var p=h[l].$events||{};p[o]=p[o]||[];p[o].push(e);break}}}var d=e.element;if(i){return avalon(d).addClass("avalonHide")}avalon(d).removeClass("avalonHide");d.removeAttribute(e.name);e.sortedCallback=Ht(d,"data-with-sorted",t);e.renderedCallback=Ht(d,"data-"+r+"-rendered",t);var v=e.element=n.createComment("ms-repeat");var m=e.endRepeat=n.createComment("ms-repeat-end");S.appendChild(v);S.appendChild(m);if(r==="each"||r==="with"){e.template=d.innerHTML.trim();avalon.clearHTML(d).appendChild(S)}else{e.template=d.outerHTML.trim();d.parentNode.replaceChild(S,d);e.group=1}e.rollback=function(){var t=e.element;if(!t)return;_.repeat.call(e,"clear");var n=t.parentNode;var r=avalon.parseHTML(e.template);var i=r.firstChild;n.replaceChild(r,t);n.removeChild(e.endRepeat);i=e.element=e.type==="repeat"?i:n;e.group=i.setAttribute(e.name,e.value)};e.handler=_.repeat;e.$outer={};var g="$key",y="$val";if(Array.isArray(s)){g="$first";y="$last"}for(var c=0,b;b=t[c++];){if(b.hasOwnProperty(g)&&b.hasOwnProperty(y)){e.$outer=b;break}}var w=(s.$events||{})[o];if(w&&avalon.Array.ensure(w,e)){gt(e,w)}if(u==="object"){var E=s.$events;var x=!E?{}:E.$withProxyPool||(E.$withProxyPool={});e.handler("append",s,x)}else{e.handler("add",0,s)}};_.repeat=function(e,t,n){if(e){var r=this;var i=r.element.parentNode;var s=r.proxies;var o=S.cloneNode(false);if(e==="del"||e==="move"){var u=ar(r,t)}var a=r.group;switch(e){case"add":var f=n;var l=r.$repeat.length-1;var c=[];for(var h=0,p=f.length;h<p;h++){var d=h+t;var v=dr(d,r);s.splice(d,0,v);ur(r,o,v,c)}u=ar(r,t);i.insertBefore(o,u);for(var h=0,m;m=c[h++];){Wt(m.nodes,m.vmodels);m.nodes=m.vmodels=null}lr(r);break;case"del":var g=s.splice(t,n);var o=fr(u,a,n);avalon.clearHTML(o);gr(g,"each");break;case"index":var l=s.length-1;for(;n=s[t];t++){n.$index=t;n.$first=t===0;n.$last=t===l}break;case"clear":while(true){var y=r.element.nextSibling;if(y&&y!==r.endRepeat){i.removeChild(y)}else{break}}gr(s,"each");break;case"move":var b=s.splice(t,1)[0];if(b){s.splice(n,0,b);o=fr(u,a);u=ar(r,n);i.insertBefore(o,u)}break;case"set":var v=s[t];if(v){Nt(v.$events.$index)}break;case"append":var w=n;var E=[];var c=[];for(var x in t){if(t.hasOwnProperty(x)&&x!=="hasOwnProperty"){E.push(x)}}if(r.sortedCallback){var T=r.sortedCallback.call(i,E);if(T&&Array.isArray(T)&&T.length){E=T}}for(var h=0,x;x=E[h++];){if(x!=="hasOwnProperty"){if(!w[x]){w[x]=mr(x,r)}ur(r,o,w[x],c)}}r.proxySize=E.length;i.insertBefore(o,r.element.nextSibling);for(var h=0,m;m=c[h++];){Wt(m.nodes,m.vmodels);m.nodes=m.vmodels=null}lr(r);break}var C=r.renderedCallback||N,k=arguments;Dt(i,function(){C.apply(i,k);if(i.oldValue&&i.tagName==="SELECT"&&e==="index"){avalon(i).val(i.oldValue.split(","))}},NaN)}};"with,each".replace(l,function(e){M[e]=M.repeat});var cr=[];var hr=[];var yr=/<script[^>]*>([\S\s]*?)<\/script\s*>/gim;var br=/\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g;var wr=/<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig;var Er={a:/\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,img:/\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,form:/\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig};var Sr=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;var xr=/([^\#-~| |!])/g;var Tr=avalon.filters={uppercase:function(e){return e.toUpperCase()},lowercase:function(e){return e.toLowerCase()},truncate:function(e,t,n){t=t||30;n=n===void 0?"...":n;return e.length>t?e.slice(0,t-n.length)+n:String(e)},$filter:function(e){for(var t=1,n=arguments.length;t<n;t++){var r=arguments[t];var i=avalon.filters[r.shift()];if(typeof i==="function"){var s=[e].concat(r);e=i.apply(null,s)}}return e},camelize:rn,sanitize:function(e){return e.replace(yr,"").replace(wr,function(e,t){var n=e.toLowerCase().match(/<(\w+)\s/);if(n){var r=Er[n[1]];if(r){e=e.replace(r,function(e,t,n){var r=n.charAt(0);return t+"="+r+"javascript:void(0)"+r})}}return e.replace(br," ").replace(/\s+/g," ")})},escape:function(e){return String(e).replace(/&/g,"&amp;").replace(Sr,function(e){var t=e.charCodeAt(0);var n=e.charCodeAt(1);return"&#"+((t-55296)*1024+(n-56320)+65536)+";"}).replace(xr,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")},currency:function(e,t){t=t||"￥";return t+avalon.filters.number(e)},number:function(e,t,n,r){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var i=!isFinite(+e)?0:+e,s=!isFinite(+t)?0:Math.abs(t),o=r||",",u=n||".",a="",f=function(e,t){var n=Math.pow(10,t);return""+Math.round(e*n)/n};a=(s?f(i,s):""+Math.round(i)).split(".");if(a[0].length>3){a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,o)}if((a[1]||"").length<s){a[1]=a[1]||"";a[1]+=(new Array(s-a[1].length+1)).join("0")}return a.join(u)}};new function(){function e(e){return parseInt(e,10)}function t(e,t,n){var r="";if(e<0){r="-";e=-e}e=""+e;while(e.length<t)e="0"+e;if(n)e=e.substr(e.length-t);return r+e}function n(e,n,r,i){return function(s){var o=s["get"+e]();if(r>0||o>-r)o+=r;if(o===0&&r===-12){o=12}return t(o,n,i)}}function r(e,t){return function(n,r){var i=n["get"+e]();var s=(t?"SHORT"+e:e).toUpperCase();return r[s][i]}}function i(e){var n=-1*e.getTimezoneOffset();var r=n>=0?"+":"";r+=t(Math[n>0?"floor":"ceil"](n/60),2)+t(Math.abs(n%60),2);return r}function s(e,t){return e.getHours()<12?t.AMPMS[0]:t.AMPMS[1]}function l(t){var n;if(n=t.match(f)){var r=new Date(0),i=0,s=0,o=n[8]?r.setUTCFullYear:r.setFullYear,u=n[8]?r.setUTCHours:r.setHours;if(n[9]){i=e(n[9]+n[10]);s=e(n[9]+n[11])}o.call(r,e(n[1]),e(n[2])-1,e(n[3]));var a=e(n[4]||0)-i;var l=e(n[5]||0)-s;var c=e(n[6]||0);var h=Math.round(parseFloat("0."+(n[7]||0))*1e3);u.call(r,a,l,c,h);return r}return t}var o={yyyy:n("FullYear",4),yy:n("FullYear",2,0,true),y:n("FullYear",1),MMMM:r("Month"),MMM:r("Month",true),MM:n("Month",2,1),M:n("Month",1,1),dd:n("Date",2),d:n("Date",1),HH:n("Hours",2),H:n("Hours",1),hh:n("Hours",2,-12),h:n("Hours",1,-12),mm:n("Minutes",2),m:n("Minutes",1),ss:n("Seconds",2),s:n("Seconds",1),sss:n("Milliseconds",3),EEEE:r("Day"),EEE:r("Day",true),a:s,Z:i};var u=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,a=/^\d+$/;var f=/^(\d{4})-?(\d+)-?(\d+)(?:T(\d+)(?::?(\d+)(?::?(\d+)(?:\.(\d+))?)?)?(Z|([+-])(\d+):?(\d+))?)?$/;var c=/^(\d+)\D(\d+)\D(\d+)/;Tr.date=function(t,n){var r=Tr.date.locate,i="",s=[],f,h;n=n||"mediumDate";n=r[n]||n;if(typeof t==="string"){if(a.test(t)){t=e(t)}else{var p=t.trim();t=p.replace(c,function(e,t,n,r){var i=r.length===4?[r,t,n]:[t,n,r];return i.join("-")});t=l(t)}t=new Date(t)}if(typeof t==="number"){t=new Date(t)}if(avalon.type(t)!=="date"){return}while(n){h=u.exec(n);if(h){s=s.concat(h.slice(1));n=s.pop()}else{s.push(n);n=null}}s.forEach(function(e){f=o[e];i+=f?f(t,r):e.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return i};var h={AMPMS:{0:"上午",1:"下午"},DAY:{0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"},MONTH:{0:"1月",1:"2月",2:"3月",3:"4月",4:"5月",5:"6月",6:"7月",7:"8月",8:"9月",9:"10月",10:"11月",11:"12月"},SHORTDAY:{0:"周日",1:"周一",2:"周二",3:"周三",4:"周四",5:"周五",6:"周六"},fullDate:"y年M月d日EEEE",longDate:"y年M月d日",medium:"yyyy-M-d ah:mm:ss",mediumDate:"yyyy-M-d",mediumTime:"ah:mm:ss","short":"yy-M-d ah:mm",shortDate:"yy-M-d",shortTime:"ah:mm"};h.SHORTMONTH=h.MONTH;Tr.date.locate=h};var Nr=[];if(n.readyState==="complete"){setTimeout(Cr)}else{n.addEventListener("DOMContentLoaded",Cr);t.addEventListener("load",Cr)}avalon.ready=function(e){if(V){V("ready!",e)}else if(Cr===N){e(avalon)}else{Nr.push(e)}};avalon.config({loader:true});avalon.ready(function(){avalon.scan(n.body)})})();(function(){function o(e){return JSON.parse(JSON.stringify(e.$model))}function u(e,t){if(avalon.type(e)==="array"){t=avalon.mix(true,{},{_:t});e={_:e}}else{t=avalon.mix(true,{},t)}for(var n in e){if(typeof t[n]=="undefined"||!e.hasOwnProperty(n)||n==="hasOwnProperty")continue;switch(avalon.type(e[n])){case"object":u(e[n],t[n]);break;case"array":avalon.each(t[n],function(t,r){var i=typeof e[n][t];if(i==="object"&&e[n][t]!==null){u(e[n][t],r)}else{if(t>=e[n].size()){e[n].push(r)}else{e[n].set(t,r)}}});while(e[n].length>t[n].length){e[n].pop()}break;default:e[n]=t[n];break}}}var e=QApp.util;var t="qapp-",n=0,r="ms-controller",i="unused";var s=QApp.addWidget;avalon.ui=avalon.ui||{};QApp.addWidget=function(t,n,r){var i=r&&(e.isString(r)?r:"tap");s(t,n,r);avalon.ui["qapp-"+t]=function(r,s,o){var u,a,f,l=-1;s={args:{}};while(!o[++l].getView){}u=o[l].getView();f=e.delay(function(){e.each(r.dataset,function(e,n){if(!e.indexOf(t)){var r=e.substring(t.length).replace(/\w/i,function(e){return e.toLowerCase()});if(!r.indexOf("arg")){s.args[r.substring(3).replace(/\w/i,function(e){return e.toLowerCase()})]=n}else{s[r]=n}}});if(u){if(i){i=s.eventType||i;bindFunc=function(){a=n(r,s,u,o[0])};e.addEvent(r,i,bindFunc);u.on("destroy",function(){e.removeEvent(r,i,bindFunc)})}else{a=n(r,s,u,o[0])}if(s.id){u.widgets[s.id]=a}}});u.on("destroy",function(){if(f){clearTimeout(f)}})}};var a={};QApp.ready(function(){e.createStyle("[ms-controller] {visibility:hidden;}")});QApp.addPlugin(["avalon","engine.avalon"],{},function(s,f){var l=t+n++,c,h={},p=s.mergeParam;if(e.isFunction(f)){c=avalon.define(l,function(e){e.view_status=i;e.getView=function(){return s};f.call(s,e)})}else{e.each(f,function(t,n){if(e.isFunction(n)){h[t]=avalon.define(l+"-"+t,function(e){e.getView=function(){return s};n.call(s,e)});h[t].view_status=i}})}s.getVM=function(e){return e?h[e]:c};s.mergeParam=function(t){p.call(s,t);if(c){u(c,t)}else if(h){e.each(h,function(e,n){u(n,t)})}return s};s.on("loadStart",function(){if(e.isFunction(f)){e.attr(s.root.querySelector("["+r+"]")||s.root,r,l)}else{e.each(f,function(t,n){if(e.isFunction(n)){e.attr(me.root.querySelector("["+r+"="+t+"]"),r,l+"-"+t)}})}});s.on("rendered",function(){avalon.scan(s.root);if(s.extra.vmcache&&a[s.name]){if(c){u(c,a[s.name])}else if(h){e.each(h,function(e,t){u(t,a[s.name][e])})}s.mergeParam(s.param)}});s.on("destroy",function(){if(s.extra.vmcache){a[s.name]=o(c?c:h)}if(c){c.$unwatch();delete avalon.vmodels[c.$id]}else if(h){e.each(h,function(e,t){t.$unwatch();delete avalon.vmodels[t.$id]})}s=null;c=null;h=null;p=null});return{}})})()}(t.exports,t,e);e.____MODULES["9d98ca07b73221c493c790bbc2226633"]=t.exports})(this);(function(e){var t={id:"7c5d57f1f2a98b39b42b95fcc735e710",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function k(e){if(e.pageX==null&&e.clientX!=null){var t=document.documentElement;var n=document.body;e.pageX=e.clientX+(t.scrollLeft||n&&n.scrollLeft||0)-(t.clientLeft||n&&n.clientLeft||0);e.pageY=e.clientY+(t.scrollTop||n&&n.scrollTop||0)-(t.clientTop||n&&n.clientTop||0)}return e}function L(e){var t=y(e),n=g(e);return{left:t.left,top:t.top,right:t.left+n.width,bottom:t.top+n.height}}function A(e,t){var n=L(e);t=k(t);return t.pageX>=n.left&&t.pageX<=n.right&&t.pageY>=n.top&&t.pageY<=n.bottom}function O(e){d(e,n)}function M(e){p(e,r,"");d(e,r)}function _(e){return~(e+"").indexOf("%")||~(e+"").indexOf("px")?e:e+"px"}function H(){if(!P){P=t.createElement("div");p(P,{position:"absolute",top:0,left:0,width:_(i.width),height:_(i.height)})}return P}function j(e,t,n){t.on("loadEnd",function(){s.attr(t.root,"qapp-ani",e);s.css(t.root,r,"hidden")});t.on("beforeHide",function(){w(t.root)});t.on("destroy",function(){t.show=null;t.hide=null});t.autoHide=n.autoHide&&n.autoHide!=="false";B(t)}var e=window,t=document,n="display",r="visibility";var i=QApp.origin,s=QApp.util,o=s.extend,u=s.delay,a=s.appendNodes,f=s.addClass,l=s.addEvent,c=s.removeEvent,h=s.removeNode,p=s.css,d=s.removeStyle,v=s.contains,m=s.animate,g=s.size,y=s.position,b=s.parallel,w=s.blur,E=s.getZIndex,S=s.getUniqueID,x=s.delegatedEvent,T=s.dispatchEvent,N=s.isFunction;var C=function(){var e=QApp.sniff,t=navigator.userAgent.toLowerCase();if(e.ios||e.android&&t.indexOf("micromessenger")>-1){return 1}return 2}();var D=C==1?function(e,t,n){return{translate3d:e+"px, "+t+"px, "+n+"px"}}:function(e,t,n){return{translate:e+"px, "+t+"px",translateZ:n+"px"}};var P=null;var B=function(){function r(t){e.unshift(t)}function i(t){var n=e.indexOf(t);if(~n){e.splice(n,1)}}function o(e){e.once("show",function(){r(e)});e.once("hide",function(){i(e);e=null})}var e=[],n="";o.setNextView=function(e){n=e};s.ready(function(){t.body.addEventListener("touchstart",function(t){var n=e[0];if(n&&n.autoHide&&!(v(n.root,t.target)||A(n.root,t))&&(!n.relyElement||!v(n.relyElement,t.target))){if(n.isContainer){n.decHide()}else{n.hide()}}},false)});return o}();(function(){function l(e,t,n){p(e,o(t,{top:_(i.height-n.distance),height:_(n.distance),zIndex:n.zIndex},D(0,n.distance,0)))}var r=500;var s={autoHide:true,distance:0,duration:200,showMask:true,maskColor:"rgba(0, 0, 0, 0.4)",zIndex:0};QApp.addPlugin(["actionSheet","ui.actionSheet"],s,function(s,c,v){var y={position:"absolute",left:0,width:"100%"},b=false,S,x;if(!v.animate){c.duration=0}c.zIndex=c.zIndex||E();s.on("loaded",function(){if(!c.distance){s.root.style.height="auto";c.distance=g(s.root).height}l(s.root,y,c);f(s.root,"shadow")});s.show=function(n){if(n&&n.fromHash){n=true}w();B.setNextView(s.name);if(c.showMask){S=H();p(S,{display:"block",backgroundColor:c.maskColor,zIndex:c.zIndex});a(t.body,S)}if(!b){b=true;if(s.isShow){b=false;s.trigger("refresh")}else{x=g(e).height!==i.height?r:0;s.once("completed",function(){O(s.root);M(s.root);s.trigger("beforeShow");u(function(){m(s.root,D(0,0,0),n===true||s.preventAnimate?0:c.duration,"ease-out",x).done(function(){s.isShow=true;b=false;d(s.root,"transform");s.trigger("show")})})});s.renderTo(t.body)}}return s};s.hide=function(e){if(!b&&s.isShow){b=true;s.trigger("beforeHide");m(s.root,y,e===true||s.preventAnimate?0:c.duration/2,"ease-out").done(function(){s.isShow=false;if(S){p(S,n,"none");h(S)}b=false;s.trigger("hide")})}return s};s.refresh=function(){s.root.style.height="auto";c.distance=g(s.root).height;l(s.root,y,c)};s.on("destroy",function(){y=null;S=null;s=null});j("actionSheet",s,c);return{setOption:function(e){c=o({},c,e)}}})})();(function(){var e={autoHide:false,maskColor:"rgba(0, 0, 0, .4)",duration:200,width:0,height:0,zIndex:0};QApp.addPlugin(["ui.dialog","dialog"],e,function(e,r,s){var u=i.width,l=i.height,c=false,v;if(!s.animate){r.duration=0}r.zIndex=r.zIndex||E();e.on("loaded",function(){var t=g(e.root);if(!r.width){r.width=t.width}if(!r.height){r.height=t.height}p(e.root,o({position:"absolute",width:_(r.width),height:_(r.height),zIndex:r.zIndex,display:"none",top:_((l-r.height)/2),left:_((u-r.width)/2)},D(0,l,0)));f(e.root,"shadow")});e.show=function(n){if(n&&n.fromHash){n=true}B.setNextView(e.name);v=H();p(v,{display:"block",backgroundColor:r.maskColor,zIndex:r.zIndex});a(t.body,v);if(!c){c=true;if(e.isShow){c=false;e.trigger("refresh")}else{e.once("completed",function(){O(e.root);M(e.root);e.trigger("beforeShow");m(e.root,D(0,0,0),n===true||e.preventAnimate?0:r.duration).done(function(){e.isShow=true;c=false;d(e.root,"transform");e.trigger("show")})});e.renderTo(t.body)}}return e};e.hide=function(t){if(!c&&e.isShow){c=true;e.trigger("beforeHide");m(e.root,D(0,l,0),t===true||e.preventAnimate?0:r.duration).done(function(){e.isShow=false;if(v){p(v,n,"none");h(v)}c=false;e.trigger("hide")})}return e};e.on("destroy",function(){v=null;e=null});j("dialog",e,r);return{setOption:function(e){r=o({},r,e)}}})})();(function(){function c(e,t,n){var r=0,i=0;switch(n){case"right":r=_(s.position(e).top);i=_(s.position(e).left+s.size(e).width);break;case"left":r=_(s.position(e).top);i=_(s.position(e).left-parseInt(t.width));break;case"bottom":r=_(s.position(e).top+s.size(e).height);if(t.position==="left"){i=_(s.position(e).left)}else if(t.position==="right"){i=_(s.position(e).left+s.size(e).width-t.width)}else{i=_(s.position(e).left+s.size(e).width/2-t.width/2)}break;case"top":r=_(s.position(e).top-parseInt(t.height));if(t.position==="left"){i=_(s.position(e).left)}else if(t.position==="right"){i=_(s.position(e).left+s.size(e).width-t.width)}else{i=_(s.position(e).left+s.size(e).width/2-t.width/2)}break}return{top:r,left:i}}function d(e,t){if(t.autoDirection&&t.autoDirection!=="false"){var n=t.direction,r=y(e),s=r.left,o=r.top,u=g(e),a=u.width,f=u.height,l=i.width,c=i.height,h=t.width,p=t.height,d=s+a+h<=l,v=s-h>=0,m=o+f+p<=c,b=o-p>=0;if(n==="right"){if(!d){if(v){n="left"}else{n="bottom"}}}else if(n==="left"){if(!v){if(d){n="right"}else{n="bottom"}}}if(n==="bottom"){if(!m){n="top"}}else if(n==="top"){if(!b){n="bottom"}}return n}else{return t.direction}}var e=null,r;var a={autoHide:true,autoDirection:false,direction:"right",duration:200,width:0,height:0,position:"center",dropDown:false,bgColor:"rgba(0, 0, 0, 0.4)",group:false,item:null},f={opacity:0},l={opacity:1};QApp.ready(function(){r=x(t.body,[],"qapp-popup-group")});QApp.addPlugin(["popup","ui.popup"],a,function(i,s,v){var y=false,b=false;if(!v.animate){s.duration=0}if(s.dropDown){s.useArrow=false;s.autoDirection=false;s.direction="bottom";s.dropDuration=s.duration;s.duration=0}s.zIndex=s.zIndex||E();i.on("loaded",function(){var e=g(i.root);if(!s.width){s.width=e.width}if(!s.height){s.height=e.height}p(i.root,{display:"none",position:"absolute",width:_(s.width),height:_(s.height),zIndex:s.zIndex});p(i.root,s.dropDown?l:f)});i.show=function(n,a){i.relyElement=n;B.setNextView(i.name);if(!y){y=true;var f=d(n,s),v=c(n,s,f);if(i.isShow){O(i.root);M(i.root);p(i.root,{top:v.top,left:v.left});y=false;i.trigger("refresh")}else{i.once("completed",function(){i.trigger("beforeShow");O(i.root);M(i.root);p(i.root,{top:v.top,left:v.left});if(s.dropDown){var t=i.root.childNodes,n,r=-1;do{r++;n=t[r]}while(n.nodeType===3);p(n,o({height:_(s.height)},D(0,-s.height,0)));p(i.root,{position:"absolute",zIndex:s.zIndex,width:_(s.width),height:_(s.dropDown),backgroundColor:s.bgColor,overflow:"hidden"});if(e){h(e)}u(function(){m(n,D(0,0,0),a===true||i.preventAnimate?0:s.dropDuration,"ease-out").done(function(){i.isShow=true;y=false;i.trigger("show")})})}else{m(i.root,l,a===true||i.preventAnimate?0:s.duration).done(function(){i.isShow=true;y=false;i.trigger("show")})}});i.once("rendered",function(){if(s.group){r.add(s.group,"touchstart",function(e){if(e.el!==s.item){b=true}})}i.root.addEventListener("tap",function(e){if(i&&i.root===e.target){i.once("hide",function(){i.destroy()});i.hide();e.stopPropagation()}},true)});i.renderTo(t.body)}}return i};i.hide=function(t){i.relyElement=null;if(!y&&i.isShow){y=true;i.trigger("beforeHide");if(s.dropDown){var a=i.root.childNodes,l=t===true||i.preventAnimate?0:s.dropDuration,c,d=-1;do{d++;c=a[d]}while(c.nodeType===3);l/=2;if(s.group&&b){m(c,{opacity:0},l,"ease-in").done(function(){i.isShow=false;y=false;i.options.destroyDom=false;if(e){h(e)}e=i.root;u(function(){m(e,{opacity:0},l,"ease-in").done(function(){h(e);e=null})},100);r.remove(s.group,"touchstart");i.trigger("hide")})}else{m(c,o({opacity:0},D(0,-s.height,0)),t===true||i.preventAnimate?0:l,"ease-in").done(function(){i.isShow=false;y=false;i.trigger("hide")})}}else{m(i.root,f,t===true||i.preventAnimate?0:s.duration).done(function(){i.isShow=false;y=false;p(i.root,n,"none");i.trigger("hide")})}}return i};i.on("destroy",function(){i=null});j("popup",i,s);return{setOption:function(e){s=o({},a,e)}}})})()})()}(t.exports,t,e);e.____MODULES["7c5d57f1f2a98b39b42b95fcc735e710"]=t.exports})(this);(function(e){var t={id:"bd2141162d398feaa2ba14dc245d2bba",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){var e=QApp.util;var t={tag:"action-type",eventType:"tap"};QApp.addPlugin("delegated",t,function(t,n,r){t.on("loaded",function(){var r=t.delegatedEvent=e.delegatedEvent(t.root,[],n.tag);if(t.options.bindActions){e.each(t.options.bindActions,function(i,s){var o=i.split(":"),u=o[0],a=o[1]||n.eventType;if(typeof s==="string")s=t[s];if(e.isFunction(s)){r.add(u,a,function(e,n){return s.call(t,e,n)})}})}t.bind=function(i,s,o){if(e.isFunction(s)){o=s;s=n.eventType}if(e.isFunction(o)){r.add(i,s,function(e,n){return o.call(t,e,n)})}};t.fireAction=r.fireAction});t.on("destroy",function(){if(t.delegatedEvent&&e.isFunction(t.delegatedEvent.destroy)){t.delegatedEvent.destroy()}t.delegatedEvent=null;t.bind=null})})})()}(t.exports,t,e);e.____MODULES["bd2141162d398feaa2ba14dc245d2bba"]=t.exports})(this);(function(e){var t={id:"52550815c02f4b1ebb5e458316e9f7b4",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){var e=QApp.util;var t={tag:"node-type"};QApp.addPlugin("doms",t,function(t,n,r){t.doms={};t.find=function(r){return t.root?e.makeArray(t.root.querySelectorAll("["+n.tag+'="'+r+'"]')):[]};t.on("rendered",function(){e.makeArray(t.root.querySelectorAll("["+n.tag+"]")).forEach(function(r){var i=e.attr(r,n.tag)||"node";if(!t.doms[i]){t.doms[i]=r}else{if(e.isArray(t.doms[i])){t.doms[i].push(r)}else{t.doms[i]=[t.doms[i],r]}}})});t.on("destroy",function(){e.empty(t.doms);t.doms=null})})})()}(t.exports,t,e);e.____MODULES["52550815c02f4b1ebb5e458316e9f7b4"]=t.exports})(this);(function(e){var t={id:"3501632c175ff50fbe38cfb6a85d2296",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function n(){}function r(){return null}function s(e){var t=e in window&&window[e];return t?{size:function(){return t.length},key:function(){return t.key?function(e){return t.key(e)}:r}(),get:function(){return t.getItem?function(e){try{return JSON.parse(t.getItem(e))}catch(n){return null}}:r}(),set:function(){return t.setItem?function(e,n){try{return t.setItem(e,JSON.stringify(n))}catch(r){return void 0}}:n}(),remove:function(){return t.removeItem?function(e){return t.removeItem(e)}:n}(),clear:function(){return t.clear?function(){return t.clear()}:n}()}:i}function o(){return(new Date).getTime()}function c(){var t=o(),n,r,i,s;for(n=0,r=u.size();n<r;n++){i=u.key(n);s=u.get(i);if(s&&i!==e){if(s.expires>0&&s.createTime+s.expires<t){u.remove(i)}else{l[i]=s.data}}}}function v(){this._source={}}function m(e){if(!d[e]){d[e]=new v}return d[e]}var e="_baseInfo",t=7*24*60*60*1e3;var i={size:function(){return 0},get:r,set:n,remove:n,clear:n};var u=s("localStorage"),a=s("sessionStorage"),f=false,l={};var h=function(e,t,n){var r=arguments.length,i=null;if(r===1){if(f&&e in l){i=l[e]}else{i=a.get(e)||function(){var t=u.get(e);if(t){if(t.expires===0||t.createTime+t.expires>o()){return t.data}u.remove(e)}return null}();l[e]=i}return i}else if(r>1){if(t===void 0||t===null){delete l[e];return a.remove(e)||u.remove(e)}else{l[e]=t;n=n||0;if(n===-1){return a.set(e,t)}else{return u.set(e,{data:t,createTime:o(),expires:n})}}}};h.setCache=function(e){f=!!e};h.clear=function(){var t=u.get(e);a.clear();u.clear();u.set(e,t)};h.init=function(n){var r=u.get(e)||{},i=r.version,s=r.cTime,a=false;if(!i||i!==n){a=true;u.clear();i=n}if(!s||o()-s>t){a=true;c();s=o()}if(a){u.set(e,{version:i,cTime:s})}};QApp.util.storage=h;var p=QApp.util,d={};p.extend(v.prototype,{get:function(e){var t=this._source[e];if(p.isArray(t)){return t.slice(0)}else if(p.isObject(t)){return p.extend(true,{},t)}return t},set:function(e,t){if(p.isArray(t)){this._source[e]=t.slice(0)}else if(p.isObject(t)){this._source[e]=p.extend(true,{},t)}else{this._source[e]=t}this.trigger("change",e,t)},merge:function(e,t){if(this._source[e]!==void 0){t=p.extend(true,this._source[e],t)}this.set(e,t)},remove:function(e){this._source[e]=void 0;this.trigger("change",e)},clear:function(){for(var e in this._source){this.remove(e)}},onChange:function(e){this.on("change",e)},destroy:function(){this.off();this._source=null}},p.CustEvent);var g=QApp.dataSource={init:function(e){return m(e)},get:function(e,t){if(d[e]){return d[e].get(t)}},set:function(e,t,n){m(e).set(t,n)},merge:function(e,t,n){m(e).merge(t,n)},remove:function(e,t){m(e).remove(t)},clear:function(e){if(d[e]){d[e].clear()}},onChange:function(e,t){m(e).onChange(t)}};var y=[],b=QApp.hy?QApp.hy.config().hybridId:"global";var w=QApp.dataSource.init(b),E=QApp.util.storage;w.on("change",function(e,t){if(y.indexOf(e)>-1){E(e,t)}});w.addLocalKeys=function(e){y=y.concat(e);y.forEach(function(e){w.set(e,E(e))})};w.refresh=function(){y.forEach(function(e){w.set(e,E(e))})};if(QApp.hy){QApp.hy.on("actived",function(){w.refresh()})}QApp.util.globalContext=w})()}(t.exports,t,e);e.____MODULES["3501632c175ff50fbe38cfb6a85d2296"]=t.exports})(this);(function(e){var t={id:"06db39915d027f68bc965950f4815a67",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){var e=QApp.util,t=e.Deferred,n=0,r=30*1e3;var i={};var s={url:"",args:{},charset:"UTF-8",timeout:30*1e3,bizType:false,callbackName:"callback",onComplete:null,onTimeout:null,onFail:null};var o=QApp.jsonp=e.jsonp=function(o,u){o=e.isString(o)?{url:o}:o;o=e.extend({},s,o.bizType?i[o.bizType]:{},o);e.extend(o.args,u);var a=new t,f=o.timeout||r,l=e.parseURL(o.url),c,h;l.query=e.extend(l.query,o.args);l.query[o.callbackName]=l.query[o.callbackName]||"QApp_"+ +(new Date)+n++;l.query.__rnd=+(new Date)+n++;window[l.query[o.callbackName]]=function(t){if(h){clearTimeout(h)}a.resolve(t);e.removeNode(c)};h=e.delay(function(){a.reject({type:"Timeout"});e.removeNode(c)},f);c=document.createElement("script");c.async=true;c.charset=o.charset;c.src=l.toUrl();c.onerror=function(){if(h){clearTimeout(h)}var t={type:"Error"};a.reject(t);e.removeNode(c)};document.head.appendChild(c);return a};QApp.jsonp.setBizOptions=function(t,n){if(e.isString(t)){i[t]=n}else{e.extend(i,t)}};QApp.addPlugin("jsonp",s,function(t,n){var r=[];t.jsonp=function(t){var i=o(e.extend({},n,t));r.push(i);i.all(function(){r.splice(r.indexOf(i),1)});return i};t.on("destroy",function(){r.forEach(function(e){e.reject()});r.length=0;r=null})})})()}(t.exports,t,e);e.____MODULES["06db39915d027f68bc965950f4815a67"]=t.exports})(this);(function(e){var t={id:"2ab9cd74935222560bb8e728582f85a2",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(e,n,r){function o(e,t){this.wrapper=typeof e=="string"?n.querySelector(e):e;this.scroller=this.wrapper.children[0];this.scrollerStyle=this.scroller.style;this.options={alwaysScrollY:true,resizeScrollbars:true,mouseWheelSpeed:20,allwaysScrollY:true,snapThreshold:.334,startX:0,startY:0,scrollY:true,directionLockThreshold:5,momentum:true,bounce:true,bounceTime:600,bounceEasing:"",preventDefault:true,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:true,useTransition:true,useTransform:true};for(var r in t){this.options[r]=t[r]}this.translateZ=this.options.HWCompositing&&s.hasPerspective?" translateZ(0)":"";this.options.useTransition=s.hasTransition&&this.options.useTransition;this.options.useTransform=s.hasTransform&&this.options.useTransform;this.options.eventPassthrough=this.options.eventPassthrough===true?"vertical":this.options.eventPassthrough;this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault;this.options.scrollY=this.options.eventPassthrough=="vertical"?false:this.options.scrollY;this.options.scrollX=this.options.eventPassthrough=="horizontal"?false:this.options.scrollX;this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough;this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold;this.options.bounceEasing=typeof this.options.bounceEasing=="string"?s.ease[this.options.bounceEasing]||s.ease.circular:this.options.bounceEasing;this.options.resizePolling=this.options.resizePolling===undefined?60:this.options.resizePolling;if(this.options.tap===true){this.options.tap="tap"}if(this.options.shrinkScrollbars=="scale"){this.options.useTransition=false}this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1;if(this.options.probeType==3){this.options.useTransition=false}this.x=0;this.y=0;this.directionX=0;this.directionY=0;this._events={};this._init();this.refresh();this.scrollTo(this.options.startX,this.options.startY);this.enable()}function u(e,t,r){var i=n.createElement("div"),s=n.createElement("div");if(r===true){i.style.cssText="position:absolute;z-index:9999";s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"}s.className="iScrollIndicator";if(e=="h"){if(r===true){i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0";s.style.height="100%"}i.className="iScrollHorizontalScrollbar"}else{if(r===true){i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px";s.style.width="100%"}i.className="iScrollVerticalScrollbar"}i.style.cssText+=";overflow:hidden";if(!t){i.style.pointerEvents="none"}i.appendChild(s);return i}function a(t,r){this.wrapper=typeof r.el=="string"?n.querySelector(r.el):r.el;this.wrapperStyle=this.wrapper.style;this.indicator=this.wrapper.children[0];this.indicatorStyle=this.indicator.style;this.scroller=t;this.options={listenX:true,listenY:true,interactive:false,resize:true,defaultScrollbars:false,shrink:false,fade:false,speedRatioX:0,speedRatioY:0};for(var i in r){this.options[i]=r[i]}this.sizeRatioX=1;this.sizeRatioY=1;this.maxPosX=0;this.maxPosY=0;if(this.options.interactive){if(!this.options.disableTouch){s.addEvent(this.indicator,"touchstart",this);s.addEvent(e,"touchend",this)}if(!this.options.disablePointer){s.addEvent(this.indicator,s.prefixPointerEvent("pointerdown"),this);s.addEvent(e,s.prefixPointerEvent("pointerup"),this)}if(!this.options.disableMouse){s.addEvent(this.indicator,"mousedown",this);s.addEvent(e,"mouseup",this)}}if(this.options.fade){this.wrapperStyle[s.style.transform]=this.scroller.translateZ;this.wrapperStyle[s.style.transitionDuration]=s.isBadAndroid?"0.001s":"0ms";this.wrapperStyle.opacity="0"}}var i=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)};var s=function(){function o(e){if(s===false)return false;if(s==="")return e;return s+e.charAt(0).toUpperCase()+e.substr(1)}var t={};var i=n.createElement("div").style;var s=function(){var e=["t","webkitT","MozT","msT","OT"],t,n=0,r=e.length;for(;n<r;n++){t=e[n]+"ransform";if(t in i)return e[n].substr(0,e[n].length-1)}return false}();t.getTime=Date.now||function(){return(new Date).getTime()};t.extend=function(e,t){for(var n in t){e[n]=t[n]}};t.addEvent=function(e,t,n,r){e.addEventListener(t,n,!!r)};t.removeEvent=function(e,t,n,r){e.removeEventListener(t,n,!!r)};t.prefixPointerEvent=function(t){return e.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t};t.momentum=function(e,t,n,i,s,o){var u=e-t,a=r.abs(u)/n,f,l;o=o===undefined?6e-4:o;f=e+a*a/(2*o)*(u<0?-1:1);l=a/o;if(f<i){f=s?i-s/2.5*(a/8):i;u=r.abs(f-e);l=u/a}else if(f>0){f=s?s/2.5*(a/8):0;u=r.abs(e)+f;l=u/a}return{destination:r.round(f),duration:l}};var u=o("transform");t.extend(t,{hasTransform:u!==false,hasPerspective:o("perspective")in i,hasTouch:"ontouchstart"in e,hasPointer:e.PointerEvent||e.MSPointerEvent,hasTransition:o("transition")in i});t.isBadAndroid=/Android /.test(e.navigator.appVersion)&&!/Chrome\/\d/.test(e.navigator.appVersion);t.extend(t.style={},{transform:u,transitionTimingFunction:o("transitionTimingFunction"),transitionDuration:o("transitionDuration"),transitionDelay:o("transitionDelay"),transformOrigin:o("transformOrigin")});t.hasClass=function(e,t){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");return n.test(e.className)};t.addClass=function(e,n){if(t.hasClass(e,n)){return}var r=e.className.split(" ");r.push(n);e.className=r.join(" ")};t.removeClass=function(e,n){if(!t.hasClass(e,n)){return}var r=new RegExp("(^|\\s)"+n+"(\\s|$)","g");e.className=e.className.replace(r," ")};t.offset=function(e){var t=-e.offsetLeft,n=-e.offsetTop;while(e=e.offsetParent){t-=e.offsetLeft;n-=e.offsetTop}return{left:t,top:n}};t.preventDefaultException=function(e,t){for(var n in t){if(t[n].test(e[n])){return true}}return false};t.extend(t.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3});t.extend(t.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return r.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){var t=4;return(e=e-1)*e*((t+1)*e+t)+1}},bounce:{style:"",fn:function(e){if((e/=1)<1/2.75){return 7.5625*e*e}else if(e<2/2.75){return 7.5625*(e-=1.5/2.75)*e+.75}else if(e<2.5/2.75){return 7.5625*(e-=2.25/2.75)*e+.9375}else{return 7.5625*(e-=2.625/2.75)*e+.984375}}},elastic:{style:"",fn:function(e){var t=.22,n=.4;if(e===0){return 0}if(e==1){return 1}return n*r.pow(2,-10*e)*r.sin((e-t/4)*2*r.PI/t)+1}}});t.tap=function(e,t){var r=n.createEvent("Event");r.initEvent(t,true,true);r.pageX=e.pageX;r.pageY=e.pageY;e.target.dispatchEvent(r)};t.click=function(e){var t=e.target,r;if(!/(SELECT|INPUT|TEXTAREA)/i.test(t.tagName)){r=n.createEvent("MouseEvents");r.initMouseEvent("click",true,true,e.view,1,t.screenX,t.screenY,t.clientX,t.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);r._constructed=true;t.dispatchEvent(r)}};t.sniff=function(){var e={isAndroid:false,osVersionN:0};if(QApp&&QApp.sniff){var t=QApp.sniff;e.isAndroid=t.android;e.osVersionN=t.osVersionN}else{}return e}();return t}();o.prototype={version:"5.1.3",_init:function(){this._initEvents();if(this.options.scrollbars||this.options.indicators){this._initIndicators()}if(this.options.mouseWheel){this._initWheel()}if(this.options.snap){this._initSnap()}if(this.options.keyBindings){this._initKeys()}},destroy:function(){this._initEvents(true);this._execEvent("destroy")},_transitionEnd:function(e){if(e.target!=this.scroller||!this.isInTransition){return}this._transitionTime();if(!this.resetPosition(this.options.bounceTime)){this.isInTransition=false;this._execEvent("scrollEnd")}},_start:function(e){if(s.eventType[e.type]!=1){if(e.button!==0){return}}if(!this.enabled||this.initiated&&s.eventType[e.type]!==this.initiated){return}if(this.options.preventDefault&&!s.isBadAndroid&&!s.preventDefaultException(e.target,this.options.preventDefaultException)){e.preventDefault()}var t=e.touches?e.touches[0]:e,n;this.initiated=s.eventType[e.type];this.moved=false;this.distX=0;this.distY=0;this.directionX=0;this.directionY=0;this.directionLocked=0;this._transitionTime();this.startTime=s.getTime();if(this.options.useTransition&&this.isInTransition){this.isInTransition=false;n=this.getComputedPosition();this._translate(r.round(n.x),r.round(n.y));this._execEvent("scrollEnd")}else if(!this.options.useTransition&&this.isAnimating){this.isAnimating=false;this._execEvent("scrollEnd")}this.startX=this.x;this.startY=this.y;this.absStartX=this.x;this.absStartY=this.y;this.pointX=t.pageX;this.pointY=t.pageY;this._execEvent("beforeScrollStart")},_move:function(e){if(!this.enabled||s.eventType[e.type]!==this.initiated){return}if(this.options.preventDefault){e.preventDefault()}else if(s.sniff.isAndroid&&s.sniff.osVersionN<5){e.preventDefault()}var t=e.touches?e.touches[0]:e,n=t.pageX-this.pointX,i=t.pageY-this.pointY,o=s.getTime(),u,a,f,l;this.pointX=t.pageX;this.pointY=t.pageY;this.distX+=n;this.distY+=i;f=r.abs(this.distX);l=r.abs(this.distY);if(o-this.endTime>300&&f<10&&l<10){return}if(!this.directionLocked&&!this.options.freeScroll){if(f>l+this.options.directionLockThreshold){this.directionLocked="h"}else if(l>=f+this.options.directionLockThreshold){this.directionLocked="v"}else{this.directionLocked="n"}}if(this.directionLocked=="h"){if(this.options.eventPassthrough=="vertical"){e.preventDefault()}else if(this.options.eventPassthrough=="horizontal"){this.initiated=false;return}i=0}else if(this.directionLocked=="v"){if(this.options.eventPassthrough=="horizontal"){e.preventDefault()}else if(this.options.eventPassthrough=="vertical"){this.initiated=false;return}n=0}n=this.hasHorizontalScroll?n:0;i=this.hasVerticalScroll?i:0;u=this.x+n;a=this.y+i;if(u>0||u<this.maxScrollX){u=this.options.bounce?this.x+n/3:u>0?0:this.maxScrollX}if(a>0||a<this.maxScrollY){a=this.options.bounce?this.y+i/3:a>0?0:this.maxScrollY}this.directionX=n>0?-1:n<0?1:0;this.directionY=i>0?-1:i<0?1:0;if(!this.moved){this._execEvent("scrollStart")}this.moved=true;this._translate(u,a);if(o-this.startTime>300){this.startTime=o;this.startX=this.x;this.startY=this.y;if(this.options.probeType==1){this._execEvent("scroll")}}if(this.options.probeType>1){this._execEvent("scroll")}},_end:function(e){if(!this.enabled||s.eventType[e.type]!==this.initiated){return}if(this.options.preventDefault&&!s.preventDefaultException(e.target,this.options.preventDefaultException)){e.preventDefault()}var t=e.changedTouches?e.changedTouches[0]:e,n,i,o=s.getTime()-this.startTime,u=r.round(this.x),a=r.round(this.y),f=r.abs(u-this.startX),l=r.abs(a-this.startY),c=0,h="";this.isInTransition=0;this.initiated=0;this.endTime=s.getTime();if(this.resetPosition(this.options.bounceTime)){return}this.scrollTo(u,a);if(!this.moved){if(this.options.tap){s.tap(e,this.options.tap)}if(this.options.click){s.click(e)}this._execEvent("scrollCancel");return}if(this._events.flick&&o<200&&f<100&&l<100){this._execEvent("flick");return}if(this.options.momentum&&o<300){n=this.hasHorizontalScroll?s.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:u,duration:0};i=this.hasVerticalScroll?s.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:a,duration:0};u=n.destination;a=i.destination;c=r.max(n.duration,i.duration);this.isInTransition=1}if(this.options.snap){var p=this._nearestSnap(u,a);this.currentPage=p;c=this.options.snapSpeed||r.max(r.max(r.min(r.abs(u-p.x),1e3),r.min(r.abs(a-p.y),1e3)),300);u=p.x;a=p.y;this.directionX=0;this.directionY=0;h=this.options.bounceEasing}if(u!=this.x||a!=this.y){if(u>0||u<this.maxScrollX||a>0||a<this.maxScrollY){h=s.ease.quadratic}this.scrollTo(u,a,c,h);return}this._execEvent("scrollEnd")},_resize:function(){var e=this;clearTimeout(this.resizeTimeout);this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,n=this.y;e=e||0;if(!this.hasHorizontalScroll||this.x>0){t=0}else if(this.x<this.maxScrollX){t=this.maxScrollX}if(!this.hasVerticalScroll||this.y>0){n=0}else if(this.y<this.maxScrollY){n=this.maxScrollY}if(t==this.x&&n==this.y){return false}this.scrollTo(t,n,e,this.options.bounceEasing);return true},disable:function(){this.enabled=false},enable:function(){this.enabled=true},refresh:function(){var e=this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth;this.wrapperHeight=this.wrapper.clientHeight;this.scrollerWidth=this.scroller.offsetWidth;this.scrollerHeight=this.scroller.offsetHeight;if(this.options.alwaysScrollY){if(this.scrollerHeight<this.wrapperHeight){this.scrollerHeight=this.wrapperHeight+1}}if(this.options.allwaysScrollY){if(this.scrollerHeight<this.wrapperHeight){this.scrollerHeight=this.wrapperHeight+1}}this.maxScrollX=this.wrapperWidth-this.scrollerWidth;this.maxScrollY=this.wrapperHeight-this.scrollerHeight;this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0;this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0;if(!this.hasHorizontalScroll){this.maxScrollX=0;this.scrollerWidth=this.wrapperWidth}if(!this.hasVerticalScroll){this.maxScrollY=0;this.scrollerHeight=this.wrapperHeight}this.endTime=0;this.directionX=0;this.directionY=0;this.wrapperOffset=s.offset(this.wrapper);this._execEvent("refresh");this.resetPosition()},on:function(e,t){if(!this._events[e]){this._events[e]=[]}this._events[e].push(t)},off:function(e,t){if(!this._events[e]){return}var n=this._events[e].indexOf(t);if(n>-1){this._events[e].splice(n,1)}},_execEvent:function(e){if(!this._events[e]){return}var t=0,n=this._events[e].length;if(!n){return}for(;t<n;t++){this._events[e][t].apply(this,[].slice.call(arguments,1))}},scrollBy:function(e,t,n,r){e=this.x+e;t=this.y+t;n=n||0;this.scrollTo(e,t,n,r)},scrollTo:function(e,t,n,r){r=r||s.ease.circular;this.isInTransition=this.options.useTransition&&n>0;if(!n||this.options.useTransition&&r.style){this._transitionTimingFunction(r.style);this._transitionTime(n);this._translate(e,t)}else{this._animate(e,t,n,r.fn)}},scrollToElement:function(e,t,n,i,o){e=e.nodeType?e:this.scroller.querySelector(e);if(!e){return}var u=s.offset(e);u.left-=this.wrapperOffset.left;u.top-=this.wrapperOffset.top;if(n===true){n=r.round(e.offsetWidth/2-this.wrapper.offsetWidth/2)}if(i===true){i=r.round(e.offsetHeight/2-this.wrapper.offsetHeight/2)}u.left-=n||0;u.top-=i||0;u.left=u.left>0?0:u.left<this.maxScrollX?this.maxScrollX:u.left;u.top=u.top>0?0:u.top<this.maxScrollY?this.maxScrollY:u.top;t=t===undefined||t===null||t==="auto"?r.max(r.abs(this.x-u.left),r.abs(this.y-u.top)):t;this.scrollTo(u.left,u.top,t,o)},_transitionTime:function(e){e=e||0;this.scrollerStyle[s.style.transitionDuration]=e+"ms";if(!e&&s.isBadAndroid){this.scrollerStyle[s.style.transitionDuration]="0.001s"}if(this.indicators){for(var t=this.indicators.length;t--;){this.indicators[t].transitionTime(e)}}},_transitionTimingFunction:function(e){this.scrollerStyle[s.style.transitionTimingFunction]=e;if(this.indicators){for(var t=this.indicators.length;t--;){this.indicators[t].transitionTimingFunction(e)}}},_translate:function(e,t){if(this.options.useTransform){this.scrollerStyle[s.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ}else{e=r.round(e);t=r.round(t);this.scrollerStyle.left=e+"px";this.scrollerStyle.top=t+"px"}this.x=e;this.y=t;if(this.indicators){for(var n=this.indicators.length;n--;){this.indicators[n].updatePosition()}}},_initEvents:function(t){var n=t?s.removeEvent:s.addEvent,r=this.options.bindToWrapper?this.wrapper:e;n(e,"orientationchange",this);n(e,"resize",this);if(this.options.click){n(this.wrapper,"click",this,true)}if(!this.options.disableMouse){n(this.wrapper,"mousedown",this);n(r,"mousemove",this);n(r,"mousecancel",this);n(r,"mouseup",this)}if(s.hasPointer&&!this.options.disablePointer){n(this.wrapper,s.prefixPointerEvent("pointerdown"),this);n(r,s.prefixPointerEvent("pointermove"),this);n(r,s.prefixPointerEvent("pointercancel"),this);n(r,s.prefixPointerEvent("pointerup"),this)}if(s.hasTouch&&!this.options.disableTouch){n(this.wrapper,"touchstart",this);n(r,"touchmove",this);n(r,"touchcancel",this);n(r,"touchend",this)}n(this.scroller,"transitionend",this);n(this.scroller,"webkitTransitionEnd",this);n(this.scroller,"oTransitionEnd",this);n(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t=e.getComputedStyle(this.scroller,null),n,r;if(this.options.useTransform){t=t[s.style.transform].split(")")[0].split(", ");n=+(t[12]||t[4]);r=+(t[13]||t[5])}else{n=+t.left.replace(/[^-\d.]/g,"");r=+t.top.replace(/[^-\d.]/g,"")}return{x:n,y:r}},_initIndicators:function(){function o(e){for(var t=i.indicators.length;t--;){e.call(i.indicators[t])}}var e=this.options.interactiveScrollbars,t=typeof this.options.scrollbars!="string",n=[],r;var i=this;this.indicators=[];if(this.options.scrollbars){if(this.options.scrollY){r={el:u("v",e,this.options.scrollbars),interactive:e,defaultScrollbars:true,customStyle:t,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:false};this.wrapper.appendChild(r.el);n.push(r)}if(this.options.scrollX){r={el:u("h",e,this.options.scrollbars),interactive:e,defaultScrollbars:true,customStyle:t,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:false};this.wrapper.appendChild(r.el);n.push(r)}}if(this.options.indicators){n=n.concat(this.options.indicators)}for(var s=n.length;s--;){this.indicators.push(new a(this,n[s]))}if(this.options.fadeScrollbars){this.on("scrollEnd",function(){o(function(){this.fade()})});this.on("scrollCancel",function(){o(function(){this.fade()})});this.on("scrollStart",function(){o(function(){this.fade(1)})});this.on("beforeScrollStart",function(){o(function(){this.fade(1,true)})})}this.on("refresh",function(){o(function(){this.refresh()})});this.on("destroy",function(){o(function(){this.destroy()});delete this.indicators})},_initWheel:function(){s.addEvent(this.wrapper,"wheel",this);s.addEvent(this.wrapper,"mousewheel",this);s.addEvent(this.wrapper,"DOMMouseScroll",this);this.on("destroy",function(){s.removeEvent(this.wrapper,"wheel",this);s.removeEvent(this.wrapper,"mousewheel",this);s.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(!this.enabled){return}e.preventDefault();e.stopPropagation();var t,n,i,s,o=this;if(this.wheelTimeout===undefined){o._execEvent("scrollStart")}clearTimeout(this.wheelTimeout);this.wheelTimeout=setTimeout(function(){o._execEvent("scrollEnd");o.wheelTimeout=undefined},400);if("deltaX"in e){if(e.deltaMode===1){t=-e.deltaX*this.options.mouseWheelSpeed;n=-e.deltaY*this.options.mouseWheelSpeed}else{t=-e.deltaX;n=-e.deltaY}}else if("wheelDeltaX"in e){t=e.wheelDeltaX/120*this.options.mouseWheelSpeed;n=e.wheelDeltaY/120*this.options.mouseWheelSpeed}else if("wheelDelta"in e){t=n=e.wheelDelta/120*this.options.mouseWheelSpeed}else if("detail"in e){t=n=-e.detail/3*this.options.mouseWheelSpeed}else{return}t*=this.options.invertWheelDirection;n*=this.options.invertWheelDirection;if(!this.hasVerticalScroll){t=n;n=0}if(this.options.snap){i=this.currentPage.pageX;s=this.currentPage.pageY;if(t>0){i--}else if(t<0){i++}if(n>0){s--}else if(n<0){s++}this.goToPage(i,s);return}i=this.x+r.round(this.hasHorizontalScroll?t:0);s=this.y+r.round(this.hasVerticalScroll?n:0);if(i>0){i=0}else if(i<this.maxScrollX){i=this.maxScrollX}if(s>0){s=0}else if(s<this.maxScrollY){s=this.maxScrollY}this.scrollTo(i,s,0);if(this.options.probeType>1){this._execEvent("scroll")}},_initSnap:function(){this.currentPage={};if(typeof this.options.snap=="string"){this.options.snap=this.scroller.querySelectorAll(this.options.snap)}this.on("refresh",function(){var e=0,t,n=0,i,s,o,u=0,a,f=this.options.snapStepX||this.wrapperWidth,l=this.options.snapStepY||this.wrapperHeight,c;this.pages=[];if(!this.wrapperWidth||!this.wrapperHeight||!this.scrollerWidth||!this.scrollerHeight){return}if(this.options.snap===true){s=r.round(f/2);o=r.round(l/2);while(u>-this.scrollerWidth){this.pages[e]=[];t=0;a=0;while(a>-this.scrollerHeight){this.pages[e][t]={x:r.max(u,this.maxScrollX),y:r.max(a,this.maxScrollY),width:f,height:l,cx:u-s,cy:a-o};a-=l;t++}u-=f;e++}}else{c=this.options.snap;t=c.length;i=-1;for(;e<t;e++){if(e===0||c[e].offsetLeft<=c[e-1].offsetLeft){n=0;i++}if(!this.pages[n]){this.pages[n]=[]}u=r.max(-c[e].offsetLeft,this.maxScrollX);a=r.max(-c[e].offsetTop,this.maxScrollY);s=u-r.round(c[e].offsetWidth/2);o=a-r.round(c[e].offsetHeight/2);this.pages[n][i]={x:u,y:a,width:c[e].offsetWidth,height:c[e].offsetHeight,cx:s,cy:o};if(u>this.maxScrollX){n++}}}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0);if(this.options.snapThreshold%1===0){this.snapThresholdX=this.options.snapThreshold;this.snapThresholdY=this.options.snapThreshold}else{this.snapThresholdX=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold);this.snapThresholdY=r.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold)}});this.on("flick",function(){var e=this.options.snapSpeed||r.max(r.max(r.min(r.abs(this.x-this.startX),1e3),r.min(r.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,e)})},_nearestSnap:function(e,t){if(!this.pages.length){return{x:0,y:0,pageX:0,pageY:0}}var n=0,i=this.pages.length,s=0;if(r.abs(e-this.absStartX)<this.snapThresholdX&&r.abs(t-this.absStartY)<this.snapThresholdY){return this.currentPage}if(e>0){e=0}else if(e<this.maxScrollX){e=this.maxScrollX}if(t>0){t=0}else if(t<this.maxScrollY){t=this.maxScrollY}for(;n<i;n++){if(e>=this.pages[n][0].cx){e=this.pages[n][0].x;break}}i=this.pages[n].length;for(;s<i;s++){if(t>=this.pages[0][s].cy){t=this.pages[0][s].y;break}}if(n==this.currentPage.pageX){n+=this.directionX;if(n<0){n=0}else if(n>=this.pages.length){n=this.pages.length-1}e=this.pages[n][0].x}if(s==this.currentPage.pageY){s+=this.directionY;if(s<0){s=0}else if(s>=this.pages[0].length){s=this.pages[0].length-1}t=this.pages[0][s].y}return{x:e,y:t,pageX:n,pageY:s}},goToPage:function(e,t,n,i){i=i||this.options.bounceEasing;if(e>=this.pages.length){e=this.pages.length-1}else if(e<0){e=0}if(t>=this.pages[e].length){t=this.pages[e].length-1}else if(t<0){t=0}var s=this.pages[e][t].x,o=this.pages[e][t].y;n=n===undefined?this.options.snapSpeed||r.max(r.max(r.min(r.abs(s-this.x),1e3),r.min(r.abs(o-this.y),1e3)),300):n;this.currentPage={x:s,y:o,pageX:e,pageY:t};this.scrollTo(s,o,n,i)},next:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n++;if(n>=this.pages.length&&this.hasVerticalScroll){n=0;r++}this.goToPage(n,r,e,t)},prev:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n--;if(n<0&&this.hasVerticalScroll){n=0;r--}this.goToPage(n,r,e,t)},_initKeys:function(t){var n={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};var r;if(typeof this.options.keyBindings=="object"){for(r in this.options.keyBindings){if(typeof this.options.keyBindings[r]=="string"){this.options.keyBindings[r]=this.options.keyBindings[r].toUpperCase().charCodeAt(0)}}}else{this.options.keyBindings={}}for(r in n){this.options.keyBindings[r]=this.options.keyBindings[r]||n[r]}s.addEvent(e,"keydown",this);this.on("destroy",function(){s.removeEvent(e,"keydown",this)})},_key:function(e){if(!this.enabled){return}var t=this.options.snap,n=t?this.currentPage.pageX:this.x,i=t?this.currentPage.pageY:this.y,o=s.getTime(),u=this.keyTime||0,a=.25,f;if(this.options.useTransition&&this.isInTransition){f=this.getComputedPosition();this._translate(r.round(f.x),r.round(f.y));this.isInTransition=false}this.keyAcceleration=o-u<200?r.min(this.keyAcceleration+a,50):0;switch(e.keyCode){case this.options.keyBindings.pageUp:if(this.hasHorizontalScroll&&!this.hasVerticalScroll){n+=t?1:this.wrapperWidth}else{i+=t?1:this.wrapperHeight}break;case this.options.keyBindings.pageDown:if(this.hasHorizontalScroll&&!this.hasVerticalScroll){n-=t?1:this.wrapperWidth}else{i-=t?1:this.wrapperHeight}break;case this.options.keyBindings.end:n=t?this.pages.length-1:this.maxScrollX;i=t?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:n=0;i=0;break;case this.options.keyBindings.left:n+=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:i+=t?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:n-=t?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:i-=t?1:5+this.keyAcceleration>>0;break;default:return}if(t){this.goToPage(n,i);return}if(n>0){n=0;this.keyAcceleration=0}else if(n<this.maxScrollX){n=this.maxScrollX;this.keyAcceleration=0}if(i>0){i=0;this.keyAcceleration=0}else if(i<this.maxScrollY){i=this.maxScrollY;this.keyAcceleration=0}this.scrollTo(n,i,0);this.keyTime=o},_animate:function(e,t,n,r){function c(){var h=s.getTime(),p,d,v;if(h>=l){o.isAnimating=false;o._translate(e,t);if(!o.resetPosition(o.options.bounceTime)){o._execEvent("scrollEnd")}return}h=(h-f)/n;v=r(h);p=(e-u)*v+u;d=(t-a)*v+a;o._translate(p,d);if(o.isAnimating){i(c)}if(o.options.probeType==3){o._execEvent("scroll")}}var o=this,u=this.x,a=this.y,f=s.getTime(),l=f+n;this.isAnimating=true;c()},handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e);break;case"click":if(!e._constructed){e.preventDefault();e.stopPropagation()}break}}};a.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break}},destroy:function(){if(this.options.interactive){s.removeEvent(this.indicator,"touchstart",this);s.removeEvent(this.indicator,s.prefixPointerEvent("pointerdown"),this);s.removeEvent(this.indicator,"mousedown",this);s.removeEvent(e,"touchmove",this);s.removeEvent(e,s.prefixPointerEvent("pointermove"),this);s.removeEvent(e,"mousemove",this);s.removeEvent(e,"touchend",this);s.removeEvent(e,s.prefixPointerEvent("pointerup"),this);s.removeEvent(e,"mouseup",this)}if(this.options.defaultScrollbars){this.wrapper.parentNode.removeChild(this.wrapper)}},_start:function(t){var n=t.touches?t.touches[0]:t;t.preventDefault();t.stopPropagation();this.transitionTime();this.initiated=true;this.moved=false;this.lastPointX=n.pageX;this.lastPointY=n.pageY;this.startTime=s.getTime();if(!this.options.disableTouch){s.addEvent(e,"touchmove",this)}if(!this.options.disablePointer){s.addEvent(e,s.prefixPointerEvent("pointermove"),this)}if(!this.options.disableMouse){s.addEvent(e,"mousemove",this)}this.scroller._execEvent("beforeScrollStart")},_move:function(e){var t=e.touches?e.touches[0]:e,n,r,i,o,u=s.getTime();if(!this.moved){this.scroller._execEvent("scrollStart")}this.moved=true;n=t.pageX-this.lastPointX;this.lastPointX=t.pageX;r=t.pageY-this.lastPointY;this.lastPointY=t.pageY;i=this.x+n;o=this.y+r;this._pos(i,o);if(this.scroller.options.probeType==1&&u-this.startTime>300){this.startTime=u;this.scroller._execEvent("scroll")}else if(this.scroller.options.probeType>1){this.scroller._execEvent("scroll")}e.preventDefault();e.stopPropagation()},_end:function(t){if(!this.initiated){return}this.initiated=false;t.preventDefault();t.stopPropagation();s.removeEvent(e,"touchmove",this);s.removeEvent(e,s.prefixPointerEvent("pointermove"),this);s.removeEvent(e,"mousemove",this);if(this.scroller.options.snap){var n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y);var i=this.options.snapSpeed||r.max(r.max(r.min(r.abs(this.scroller.x-n.x),1e3),r.min(r.abs(this.scroller.y-n.y),1e3)),300);if(this.scroller.x!=n.x||this.scroller.y!=n.y){this.scroller.directionX=0;this.scroller.directionY=0;this.scroller.currentPage=n;this.scroller.scrollTo(n.x,n.y,i,this.scroller.options.bounceEasing)}}if(this.moved){this.scroller._execEvent("scrollEnd")}},transitionTime:function(e){e=e||0;this.indicatorStyle[s.style.transitionDuration]=e+"ms";if(!e&&s.isBadAndroid){this.indicatorStyle[s.style.transitionDuration]="0.001s"}},transitionTimingFunction:function(e){this.indicatorStyle[s.style.transitionTimingFunction]=e},refresh:function(){this.transitionTime();if(this.options.listenX&&!this.options.listenY){this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none"}else if(this.options.listenY&&!this.options.listenX){this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none"}else{this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none"}if(this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll){s.addClass(this.wrapper,"iScrollBothScrollbars");s.removeClass(this.wrapper,"iScrollLoneScrollbar");if(this.options.defaultScrollbars&&this.options.customStyle){if(this.options.listenX){this.wrapper.style.right="8px"}else{this.wrapper.style.bottom="8px"}}}else{s.removeClass(this.wrapper,"iScrollBothScrollbars");s.addClass(this.wrapper,"iScrollLoneScrollbar");if(this.options.defaultScrollbars&&this.options.customStyle){if(this.options.listenX){this.wrapper.style.right="2px"}else{this.wrapper.style.bottom="2px"}}}var e=this.wrapper.offsetHeight;if(this.options.listenX){this.wrapperWidth=this.wrapper.clientWidth;if(this.options.resize){this.indicatorWidth=r.max(r.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8);this.indicatorStyle.width=this.indicatorWidth+"px"}else{this.indicatorWidth=this.indicator.clientWidth}this.maxPosX=this.wrapperWidth-this.indicatorWidth;if(this.options.shrink=="clip"){this.minBoundaryX=-this.indicatorWidth+8;this.maxBoundaryX=this.wrapperWidth-8}else{this.minBoundaryX=0;this.maxBoundaryX=this.maxPosX}this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX}if(this.options.listenY){this.wrapperHeight=this.wrapper.clientHeight;if(this.options.resize){this.indicatorHeight=r.max(r.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8);this.indicatorStyle.height=this.indicatorHeight+"px"}else{this.indicatorHeight=this.indicator.clientHeight}this.maxPosY=this.wrapperHeight-this.indicatorHeight;if(this.options.shrink=="clip"){this.minBoundaryY=-this.indicatorHeight+8;this.maxBoundaryY=this.wrapperHeight-8}else{this.minBoundaryY=0;this.maxBoundaryY=this.maxPosY}this.maxPosY=this.wrapperHeight-this.indicatorHeight;this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY}this.updatePosition()},updatePosition:function(){var e=this.options.listenX&&r.round(this.sizeRatioX*this.scroller.x)||0,t=this.options.listenY&&r.round(this.sizeRatioY*this.scroller.y)||0;if(!this.options.ignoreBoundaries){if(e<this.minBoundaryX){if(this.options.shrink=="scale"){this.width=r.max(this.indicatorWidth+e,8);this.indicatorStyle.width=this.width+"px"}e=this.minBoundaryX}else if(e>this.maxBoundaryX){if(this.options.shrink=="scale"){this.width=r.max(this.indicatorWidth-(e-this.maxPosX),8);this.indicatorStyle.width=this.width+"px";e=this.maxPosX+this.indicatorWidth-this.width}else{e=this.maxBoundaryX}}else if(this.options.shrink=="scale"&&this.width!=this.indicatorWidth){this.width=this.indicatorWidth;this.indicatorStyle.width=this.width+"px"}if(t<this.minBoundaryY){if(this.options.shrink=="scale"){this.height=r.max(this.indicatorHeight+t*3,8);this.indicatorStyle.height=this.height+"px"}t=this.minBoundaryY}else if(t>this.maxBoundaryY){if(this.options.shrink=="scale"){this.height=r.max(this.indicatorHeight-(t-this.maxPosY)*3,8);this.indicatorStyle.height=this.height+"px";t=this.maxPosY+this.indicatorHeight-this.height}else{t=this.maxBoundaryY}}else if(this.options.shrink=="scale"&&this.height!=this.indicatorHeight){this.height=this.indicatorHeight;this.indicatorStyle.height=this.height+"px"}}this.x=e;this.y=t;if(this.scroller.options.useTransform){this.indicatorStyle[s.style.transform]="translate("+e+"px,"+t+"px)"+this.scroller.translateZ}else{this.indicatorStyle.left=e+"px";this.indicatorStyle.top=t+"px"}},_pos:function(e,t){if(e<0){e=0}else if(e>this.maxPosX){e=this.maxPosX}if(t<0){t=0}else if(t>this.maxPosY){t=this.maxPosY}e=this.options.listenX?r.round(e/this.sizeRatioX):this.scroller.x;t=this.options.listenY?r.round(t/this.sizeRatioY):this.scroller.y;this.scroller.scrollTo(e,t)},fade:function(e,t){if(t&&!this.visible){return}clearTimeout(this.fadeTimeout);this.fadeTimeout=null;var n=e?250:500,r=e?0:300;e=e?"1":"0";this.wrapperStyle[s.style.transitionDuration]=n+"ms";this.fadeTimeout=setTimeout(function(e){this.wrapperStyle.opacity=e;this.visible=+e}.bind(this,e),r)}};o.utils=s;if(typeof t!="undefined"&&t.exports){t.exports=o}e.IScroll=o})(window,document,Math);(function(){function o(o,u){function O(e,t){var n="translate3d("+e*c.column.width+"px, "+t*c.row.height+"px, 0)";return{transform:n,"-webkit-transform":n}}function M(t,n,r,i){var s=0,o=c.column.num-1,u=0,f=c.row.num-1,h=false,d=false,v=[],m=null;if(t>0){t=0}else if(t<a.maxScrollX){t=a.maxScrollX}s=parseInt(Math.abs(t)/c.column.width);o=s+c.column.num-1;if(l.column!==s){l.column=s;h=true}if(n>0){n=0}else if(n<a.maxScrollY+C){n=a.maxScrollY+C}u=parseInt(Math.abs(n)/c.row.height);f=u+c.row.num-1;if(l.row!==u){l.row=u;d=true}if(h||d){m=B();p.forEach(function(e){var t=false,n=e.column,r=e.row;if(n<s&&n+c.column.num<c.column.total){do{n+=c.column.num}while(n<s);if(n<c.column.total){t=true}}else if(n>o&&n-c.column.num>-1){t=true;do{n-=c.column.num}while(n>o)}if(r<u&&r+c.row.num<c.row.total){do{r+=c.row.num}while(r<u);if(r<c.row.total){t=true}}else if(r>f&&r-c.row.num>-1){t=true;do{r-=c.row.num}while(r>f)}if(t){v.push({type:"change",el:e.node,from:{column:e.column,row:e.row},to:{column:n,row:r}});c.dataFilter("remove",e.node,e.column,e.row,m);e.column=n;e.row=r;c.dataFilter("add",e.node,n,r,m)}});if(c.builderNodes){v.forEach(function(t){e.css(t.el,O(t.to.column,t.to.row))})}c.changeFilter(v,m)}}function D(e){var t=Math.abs(e),n=parseInt(t/c.column.width),r=-(t%c.column.width>c.column.width/2?n+1:n)*c.column.width;return{move:r!==e,x:r}}function P(e){var t=Math.abs(e),n=parseInt(t/c.row.height),r=-(t%c.row.height>c.row.height/2?n+1:n)*c.row.height;return{move:r!==e,y:r}}function H(){var e=D(a.x),t=P(a.y);if(e.move||t.move){if(d){d.scrollTo(e.x,0,300,IScroll.utils.ease.circular)}if(v){v.scrollTo(0,t.y,300,IScroll.utils.ease.circular)}a.scrollTo(e.x,t.y,300,IScroll.utils.ease.circular)}}function B(){return[l.column,l.row,l.column+c.column.num-1,l.row+c.row.num-1]}function j(e,t){return e>=l.column&&e<l.column+c.column.num-1&&t>=l.row&&t<l.row+c.row.num-1}function F(){var t=[],n=B();if(c.builderNodes){p.forEach(function(t){e.removeNode(t.node)})}p=[];for(k=0;k<c.column.num;k++){for(L=0;L<c.row.num;L++){if(c.builderNodes){A=e.builder(c.template).children[0];e.css(A,O(k,L));h.appendChild(A)}p.push({column:k,row:L,node:A});c.dataFilter("add",A||null,k,L,n);t.push({type:"create",el:A||null,from:{},to:{column:k,row:L}})}}c.changeFilter(t,n);f.trigger("ready")}function I(e,t,n,r){if(m){if(e<c.moreDis&&e>a.maxScrollX-c.moreDis){m=false}}else{if(e>=c.moreDis){m=true;f.trigger("more",{axis:"x",seq:"prev"})}else if(e<=a.maxScrollX-c.moreDis){m=true;f.trigger("more",{axis:"x",seq:"next"})}}if(g){if(t<c.moreDis&&t>a.maxScrollY-c.moreDis){g=false}}else{if(t>=c.moreDis){g=true;f.trigger("more",{axis:"y",seq:"prev"})}else if(t<=a.maxScrollY-c.moreDis){g=true;f.trigger("more",{axis:"y",seq:"next"})}}}var a=null,f=function(){var t=function(){};e.extend(t.prototype,e.CustEvent);return new t}(),l={column:0,row:0},c=e.extend({},s,u),h=o&&o.children[0],p=[],d=c.bindScrolls.x||null,v=c.bindScrolls.y||null,m=false,g=false,y=false,b=false,w,E,S,x,T,N,C=0,k,L,A;if(!h){throw"Dom Structure Error!"}c.scrollOpt=e.extend({},n,c.scrollOpt);if(c.scrollOpt.scrollX&&c.column){y=true;c.column.num=c.column.num||parseInt(e.size(o).width/c.column.width)+2;e.css(h,"width",Math.max(c.column.total*c.column.width,e.size(h.parentNode).width+1)+"px")}else{c.column={num:1,total:1,width:1}}if(c.scrollOpt.scrollY&&c.row){b=true;c.row.num=c.row.num||parseInt(e.size(o).height/c.row.height)+2;e.css(h,"height",Math.max(c.row.total*c.row.height,e.size(h.parentNode).height+1)+"px")}else{c.row={num:1,total:1,height:1}}a=new t(o,c.scrollOpt);if(y||b){a.on("scroll",function(){M(a.x,a.y,a.directionX,a.directionY)});a.on("scrollEnd",function(){if(d&&a.x<=0&&a.x>=a.maxScrollX){d.scrollTo(a.x,0)}if(v&&a.y<=0&&a.y>=a.maxScrollY){v.scrollTo(0,a.y)}});e.delay(F)}a.on("scroll",function(){I(a.x,a.y,a.directionX,a.directionY)});a.on("scrollEnd",function(){if(d&&a.x<=0&&a.x>=a.maxScrollX){d.scrollTo(a.x,0)}if(v&&a.y<=0&&a.y>=a.maxScrollY){v.scrollTo(0,a.y)}});if(d){a.on("scroll",function(){if(a.x<=0&&a.x>=a.maxScrollX){d.scrollTo(a.x,0)}});d.on("scroll",function(){if(d.x<=0&&d.x>=d.maxScrollX&&d.x>=a.maxScrollX){a.scrollTo(d.x,a.y);M(d.x,a.y,d.directionX,0)}})}if(v){a.on("scroll",function(){if(a.y<=0&&a.y>=a.maxScrollY){v.scrollTo(0,a.y)}});v.on("scroll",function(){if(v.y<=0&&v.y>=v.maxScrollY&&v.y>=a.maxScrollY){a.scrollTo(a.x,v.y);M(a.x,v.y,0,v.directionY)}})}if(c.topOffsetRefresh){if(c.topOffsetRefresh===true){c.topOffsetRefresh={}}e.extend(true,c.topOffsetRefresh,r);w=document.createElement("div");S="drag";e.css(w,{position:"absolute",height:c.topOffsetRefresh.distance+"px",width:"100%",top:-c.topOffsetRefresh.distance+"px"});w.innerHTML=c.topOffsetRefresh.dragContent;T=function(){if(S==="waitEnd"){S="startRefresh";w.innerHTML=c.topOffsetRefresh.loadContent;e.css(h,{marginTop:c.topOffsetRefresh.distance+"px"});a.scrollTo(a.x,a.y-c.topOffsetRefresh.distance,0);c.refresh("top")}};h.addEventListener("touchend",T,false);a.on("scroll",function(){if(S==="drag"&&a.y>c.topOffsetRefresh.distance){S="waitEnd";w.innerHTML=c.topOffsetRefresh.endContent}if(S==="waitEnd"&&a.y<=c.topOffsetRefresh.distance){S="drag";w.innerHTML=c.topOffsetRefresh.dragContent}});e.delay(function(){e.insertElement(h,w,"beforeend")},100)}if(c.bottomOffsetRefresh){if(c.bottomOffsetRefresh===true){c.bottomOffsetRefresh={}}e.extend(true,c.bottomOffsetRefresh,i);E=document.createElement("div");if(c.row.total*c.row.height<e.size(h.parentNode).height+1){x="none"}else{x="drag"}e.css(E,{position:"absolute",height:c.bottomOffsetRefresh.distance+"px",width:"100%",bottom:-c.bottomOffsetRefresh.distance+"px"});E.innerHTML="";N=function(){if(x==="waitEnd"){x="startRefresh";C=c.bottomOffsetRefresh.distance;E.innerHTML=c.bottomOffsetRefresh.loadContent;e.css(h,{height:e.size(h).height+C+"px"});e.css(E,{bottom:0});a.refresh();c.refresh("bottom")}};h.addEventListener("touchend",N,false);a.on("scroll",function(){if(x==="drag"&&a.y<a.maxScrollY-c.bottomOffsetRefresh.distance){x="waitEnd"}if(x==="waitEnd"&&a.y>=a.maxScrollY-c.bottomOffsetRefresh.distance){x="drag"}});e.delay(function(){e.insertElement(h,E,"beforeend")},100)}f.trigger("init");return e.extend(f,{scroll:a,refresh:function(){a.refresh()},scrollTo:function(){a.scrollTo.apply(a,e.makeArray(arguments))},gotoTop:function(t,n){n=parseInt(n)||300;if(t&&c.topOffsetRefresh&&S!=="startRefresh"){S="startRefresh";w.innerHTML=c.topOffsetRefresh.loadContent;e.css(h,{marginTop:c.topOffsetRefresh.distance+"px"});e.delay(function(){c.refresh("top")},n)}a.scrollTo(a.x,0,n)},setTopRefresh:function(t){if(c.topOffsetRefresh){w.innerHTML=c.topOffsetRefresh[t?"successContent":"failContent"];e.delay(function(){e.animate(h,{marginTop:"0"},50,"ease-out");e.delay(function(){S="drag";w.innerHTML=c.topOffsetRefresh.dragContent},80)},c.topOffsetRefresh.displayDelay);if(c.bottomOffsetRefresh&&t){if(c.row.total*c.row.height<e.size(h.parentNode).height+1){x="none"}else{x="drag"}E.innerHTML=""}}},setBottomRefresh:function(t,n){if(c.bottomOffsetRefresh){var r=t?"":c.bottomOffsetRefresh.failContent;x="drag";if(n){x="end";r=c.bottomOffsetRefresh.endContent}E.innerHTML=r;if(n||!t&&c.bottomOffsetRefresh.failContent){e.delay(function(){a.scrollTo(a.x,a.y+C,c.bottomOffsetRefresh.displayDelay/2)},c.bottomOffsetRefresh.displayDelay/2);e.delay(function(){e.css(h,{height:e.size(h).height-C+"px"});e.css(E,{bottom:-C+"px"});C=0;a.refresh()},c.bottomOffsetRefresh.displayDelay)}else if(!t){e.css(h,{height:e.size(h).height-C+"px"});e.css(E,{bottom:-C+"px"});C=0;a.refresh()}else{e.css(h,{height:e.size(h).height-C+"px"});e.css(E,{bottom:-C+"px"});C=0;a.refresh();e.delay(function(){a.scrollTo(a.x,a.y-c.bottomOffsetRefresh.distance*2,500)})}}},fixPosition:function(){e.delay(H)},appendNode:function(t,n,r){if(t&&h){e.css(t,O(n,r));if(!e.contains(h,t)){h.appendChild(t)}}},getShowArea:B,checkShow:function(e){return e.some(function(e){return j(e[0],e[1])})},resetNum:function(e,t){c.column.num=e;c.row.num=t;F()},resetTotal:function(t,n,r,i){c.column.total=t;c.row.total=n;if(c.scrollOpt.scrollX){e.css(h,"width",Math.max(c.column.total*c.column.width,e.size(h.parentNode).width+1)+"px")}if(c.scrollOpt.scrollY){e.css(h,"height",Math.max(c.row.total*c.row.height,e.size(h.parentNode).height+1)+"px")}if(c.bottomOffsetRefresh){if(c.row.total*c.row.height<e.size(h.parentNode).height+1){x="none"}else{x="drag"}E.innerHTML=""}e.delay(function(){a.refresh();M(a.x,a.y,r||0,i||0)})},destroy:function(){f.off();a.destroy();a=null;if(c.topOffsetRefresh){e.removeEvent(h,T)}if(c.bottomOffsetRefresh){e.removeEvent(h,N)}c=null;h=null;if(v){v.destroy()}v=null;if(d){d.destroy()}d=null;p.forEach(function(t){if(t.node){e.removeNode(t.node);t.node=null}});p.length=0;p=null}})}var e=QApp.util,t=e.iScroll=window.IScroll;var n={scrollX:false,scrollY:true,freeScroll:false,mouseWheel:false,probeType:3,preventDefault:false};var r={distance:50,displayDelay:1e3,dragContent:"drag to refresh",endContent:"stop to refresh",loadContent:"loading",successContent:"success",failContent:"failure"};var i={distance:50,displayDelay:1e3,loadContent:"loading",endContent:"end",failContent:""};var s={builderNodes:true,template:'<div class="item"></div>',moreDis:50,bindScrolls:{},scrollOpt:{},dataFilter:e.noop,changeFilter:e.noop,refresh:e.noop,topOffsetRefresh:false,bottomOffsetResfresh:false};o.iScroll=t;o.setTopRefreshOpt=function(t){e.extend(true,r,t)};o.setBottomRefreshOpt=function(t){e.extend(true,i,t)};window.NScroll=QApp.util.nScroll=o})();(function(){function s(e){return JSON.parse(JSON.stringify(e.$model))}function o(t,n){if(e.type(t)==="array"){n=e.mix(true,{},{_:n});t={_:t}}else{n=e.mix(true,{},n)}for(var r in t){if(typeof n[r]=="undefined"||!t.hasOwnProperty(r)||r==="hasOwnProperty")continue;switch(e.type(t[r])){case"object":o(t[r],n[r]);break;case"array":e.each(n[r],function(e,n){var i=typeof t[r][e];if(i==="object"&&t[r][e]!==null){o(t[r][e],n)}else{if(e>=t[r].size()){t[r].push(n)}else{t[r].set(e,n)}}});while(t[r].length>n[r].length){t[r].pop()}break;default:t[r]=n[r];break}}}function u(t,n){return((t.hasAttributes()?e.slice(t.attributes):[]).filter(function(e){return!e.name.indexOf(n)})[0]||{}).name}function a(t,n,r){var i=document.createEvent("HTMLEvents");i.initEvent(n,true,true);e.mix(i,r);t.dispatchEvent(i)}function f(e,t){r.forEach(function(n){t.on(n,function(){a(e,n.toLowerCase())})})}var e=window.avalon||QApp.avalon,t=QApp.util.nScroll;var n={showLines:10,lineHeight:0,getData:function(){}},r=["beforeScrollStart","scrollCancel","scrollStart","scroll","scrollEnd","flick","zoomStart","zoomEnd"],i=100;if(e){e.bindingHandlers.iscroll=function(r,l){var c=r.element,h=r.value.match(/[^, ]+/g),p=l[0],d=e.mix({},n,p.iscroll,c.dataset,h&&h[1]?p[h[1]]:null),v=d.id||h&&h[0]!=="$"&&h[0]||"iscroll"+setTimeout("1"),m=c.children[0],g=c.children[0]&&c.children[0].children[0],y=m&&u(m,"ms-each"),b=g&&u(g,"ms-repeat"),w,E;p.scrolls=p.scrolls||{};c.removeAttribute("ms-iscroll");if(y||b){var S,x,T,N=[],C=0;if(y){S=m.getAttribute(y);m.setAttribute(y,S+"$")}else if(b){S=g.getAttribute(b);g.setAttribute(b,S+"$")}x=S+"$";p.$watch(S,function(){var e=p[S],n=p[x],r=[],i=n.length,u;C=e.size()>=d.showLines?d.showLines:e.size();if(w){n.forEach(function(e){e.$unwatch()});for(u=0;u<C;u++){if(u>=i){if(n[u]){n.set(u,s(e[u]))}else{n.push(s(e[u]));w.appendNode(c.children[0].children[u],1,u)}n[u].$watch("$all",function(t){return function(n,r){e[t][n]=r}}(u));e[u].$watch("$all",function(e){return function(t,r){n[e][t]=r}}(u))}}for(u=C;u<i;u++){n.removeAt(C)}N=E.children;w.resetNum(1,C);w.resetTotal(1,e.size());w.scrollTo(0,0,0)}else{n.pushArray(JSON.parse(JSON.stringify(p.$model[S].slice(0,C))));E=c.children[0];N=E.children;d.lineHeight=d.lineHeight||N[0]&&N[0].offsetHeight;if(!d.lineHeight){throw"Can not know line height!"}w=p.scrolls[v]=t(c,{builderNodes:false,row:{height:d.lineHeight,num:C,total:e.size()},scrollOpt:d,topOffsetRefresh:d.topOffsetRefresh,bottomOffsetRefresh:d.bottomOffsetRefresh,refresh:function(e){if(typeof d.refresh==="function"){d.refresh.call(w,e)}else if(typeof d.refresh==="string"&&typeof p[d.refresh]==="function"){p[d.refresh].call(w,e)}else{a(c,"refresh",{type:e})}},dataFilter:function(t,r,i,u){var a=u%C;if(C){if(t==="add"){w.appendNode(N[a],i,u);o(n[a],s(e[u]));n[a].$watch("$all",function(t,n){e[u][t]=n});e[u].$watch("$all",function(e,t){n[a][e]=t})}else{e[u].$unwatch();n[a].$unwatch()}}}});w.on("more",function(t){if(t.axis==="y"&&t.seq==="next"){if(typeof d.getData==="function"){d.getData.call(w,e.length)}else if(typeof d.getData==="string"&&typeof p[d.getData]==="function"){p[d.getData].call(w,e.length)}else{a(c,"getdata",{start:e.length})}}});f(c,w.scroll)}});p[S].$watch("length",function(e){if(T){clearTimeout(T)}T=setTimeout(function(){if(w){w.resetTotal(0,p[S].size(),0,1)}},i)})}else{w=p.scrolls[v]=t(c,d);f(c,w);p.$watch("$all",function(){if(T){clearTimeout(T)}T=setTimeout(function(){if(w){w.refresh()}},i)})}p.$remove=function(){if(w){w.destroy();w=null}}}}})();(function(){var e=QApp.util,t=e.iScroll;var n=300,r="qapp-scroll",i={preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/}};QApp.addPlugin(["scroll","ui.scroll"],i,function(i,s,o){function f(){if(u){clearTimeout(u)}u=e.delay(function(){if(a){a.refresh()}},n)}var u,a;i.on("ready",function(){var n=document.createElement(r);e.appendNodes(n,i.nodes);i.root.appendChild(n);a=i.scroll=new t(i.root,s);i.root.addEventListener("DOMSubtreeModified",function(){f()},false);i.refreshScroll=f;e.delay(f)});i.on("destroy",function(){if(u){clearTimeout(u)}if(a){a.destroy()}});return{}})})();(function(){var e=QApp.util,t=e.iScroll;var n=300;var r={scrollX:false,scrollY:true,freeScroll:false,mouseWheel:false,probeType:3,preventDefault:false};QApp.addWidget("scroll",function(i,s,o){if(t){var u={},a,f=function(){if(a){clearTimeout(a)}a=e.delay(function(){if(u&&u.refresh){u.refresh()}},n)};e.css(i,"overflow","hidden");e.addEvent(i,"DOMSubtreeModified",function(){f()});e.delay(f);if(o){if(o.isShow){var l=new t(i,e.extend({},r,s));e.each(o.widgets,function(e,t){if(t===u){o.widgets[e]=l}});u=l}else{var c=o._events.show=o._events.show||[];c.unshift({callback:function(){var n=new t(i,e.extend({},r,s));e.each(o.widgets,function(e,t){if(t===u){o.widgets[e]=n}});u=n},ctx:o})}}else{var l=new t(i,e.extend({},r,s));u=l}return u}})})()}(t.exports,t,e);e.____MODULES["2ab9cd74935222560bb8e728582f85a2"]=t.exports})(this);(function(e){var t={id:"8e388858412f481def4b54146d6a335f",filename:"index.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(e,t,n){(function(){function n(){}function r(){return null}function s(e){var t=e in window&&window[e];return t?{size:function(){return t.length},key:function(){return t.key?function(e){return t.key(e)}:r}(),get:function(){return t.getItem?function(e){try{return JSON.parse(t.getItem(e))}catch(n){return null}}:r}(),set:function(){return t.setItem?function(e,n){try{return t.setItem(e,JSON.stringify(n))}catch(r){return void 0}}:n}(),remove:function(){return t.removeItem?function(e){return t.removeItem(e)}:n}(),clear:function(){return t.clear?function(){return t.clear()}:n}()}:i}function o(){return(new Date).getTime()}function c(){var t=o(),n,r,i,s;for(n=0,r=u.size();n<r;n++){i=u.key(n);s=u.get(i);if(s&&i!==e){if(s.expires>0&&s.createTime+s.expires<t){u.remove(i)}else{l[i]=s.data}}}}var e="_baseInfo",t=7*24*60*60*1e3;var i={size:function(){return 0},get:r,set:n,remove:n,clear:n};var u=s("localStorage"),a=s("sessionStorage"),f=false,l={};var h=function(e,t,n){var r=arguments.length,i=null;if(r===1){if(f&&e in l){i=l[e]}else{i=a.get(e)||function(){var t=u.get(e);if(t){if(t.expires===0||t.createTime+t.expires>o()){return t.data}u.remove(e)}return null}();l[e]=i}return i}else if(r>1){if(t===void 0||t===null){delete l[e];return a.remove(e)||u.remove(e)}else{l[e]=t;n=n||0;if(n===-1){return a.set(e,t)}else{return u.set(e,{data:t,createTime:o(),expires:n})}}}};h.setCache=function(e){f=!!e};h.clear=function(){var t=u.get(e);a.clear();u.clear();u.set(e,t)};h.init=function(n){var r=u.get(e)||{},i=r.version,s=r.cTime,a=false;if(!i||i!==n){a=true;u.clear();i=n}if(!s||o()-s>t){a=true;c();s=o()}if(a){u.set(e,{version:i,cTime:s})}};QApp.util.storage=h})()}(t.exports,t,e);e.____MODULES["8e388858412f481def4b54146d6a335f"]=t.exports})(this);(function(__context){var module={id:"da73d8a6f60c849ff1cbc63ff4884540",filename:"index.js",exports:{}};if(!__context.____MODULES){__context.____MODULES={}}var r=function(exports,module,global){var Zepto=function(){function M(e){return e==null?String(e):x[T.call(e)]||"object"}function _(e){return M(e)=="function"}function D(e){return e!=null&&e==e.window}function P(e){return e!=null&&e.nodeType==e.DOCUMENT_NODE}function H(e){return M(e)=="object"}function B(e){return H(e)&&!D(e)&&Object.getPrototypeOf(e)==Object.prototype}function j(e){return typeof e.length=="number"}function F(e){return o.call(e,function(e){return e!=null})}function I(e){return e.length>0?n.fn.concat.apply([],e):e}function q(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function R(e){return e in f?f[e]:f[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function U(e,t){return typeof t=="number"&&!l[q(e)]?t+"px":t}function z(e){var t,n;if(!a[e]){t=u.createElement(e);u.body.appendChild(t);n=getComputedStyle(t,"").getPropertyValue("display");t.parentNode.removeChild(t);n=="none"&&(n="block");a[e]=n}return a[e]}function W(e){return"children"in e?s.call(e.children):n.map(e.childNodes,function(e){if(e.nodeType==1)return e})}function X(n,r,i){for(t in r)if(i&&(B(r[t])||O(r[t]))){if(B(r[t])&&!B(n[t]))n[t]={};if(O(r[t])&&!O(n[t]))n[t]=[];X(n[t],r[t],i)}else if(r[t]!==e)n[t]=r[t]}function V(e,t){return t==null?n(e):n(e).filter(t)}function $(e,t,n,r){return _(t)?t.call(e,n,r):t}function J(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function K(t,n){var r=t.className,i=r&&r.baseVal!==e;if(n===e)return i?r.baseVal:r;i?r.baseVal=n:t.className=n}function Q(e){var t;try{return e?e=="true"||(e=="false"?false:e=="null"?null:!/^0/.test(e)&&!isNaN(t=Number(e))?t:/^[\[\{]/.test(e)?n.parseJSON(e):e):e}catch(r){return e}}function G(e,t){t(e);for(var n=0,r=e.childNodes.length;n<r;n++)G(e.childNodes[n],t)}var e,t,n,r,i=[],s=i.slice,o=i.filter,u=window.document,a={},f={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},c=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,d=/^(?:body|html)$/i,v=/([A-Z])/g,m=["val","css","html","text","data","width","height","offset"],g=["after","prepend","before","append"],y=u.createElement("table"),b=u.createElement("tr"),w={tr:u.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:b,th:b,"*":u.createElement("div")},E=/complete|loaded|interactive/,S=/^[\w-]*$/,x={},T=x.toString,N={},C,k,L=u.createElement("div"),A={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},O=Array.isArray||function(e){return e instanceof Array};N.matches=function(e,t){if(!t||!e||e.nodeType!==1)return false;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;if(s)(i=L).appendChild(e);r=~N.qsa(i,t).indexOf(e);s&&L.removeChild(e);return r};C=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})};k=function(e){return o.call(e,function(t,n){return e.indexOf(t)==n})};N.fragment=function(t,r,i){var o,a,f;if(h.test(t))o=n(u.createElement(RegExp.$1));if(!o){if(t.replace)t=t.replace(p,"<$1></$2>");if(r===e)r=c.test(t)&&RegExp.$1;if(!(r in w))r="*";f=w[r];f.innerHTML=""+t;o=n.each(s.call(f.childNodes),function(){f.removeChild(this)})}if(B(i)){a=n(o);n.each(i,function(e,t){if(m.indexOf(e)>-1)a[e](t);else a.attr(e,t)})}return o};N.Z=function(e,t){e=e||[];e.__proto__=n.fn;e.selector=t||"";return e};N.isZ=function(e){return e instanceof N.Z};N.init=function(t,r){var i;if(!t)return N.Z();else if(typeof t=="string"){t=t.trim();if(t[0]=="<"&&c.test(t))i=N.fragment(t,RegExp.$1,r),t=null;else if(r!==e)return n(r).find(t);else i=N.qsa(u,t)}else if(_(t))return n(u).ready(t);else if(N.isZ(t))return t;else{if(O(t))i=F(t);else if(H(t))i=[t],t=null;else if(c.test(t))i=N.fragment(t.trim(),RegExp.$1,r),t=null;else if(r!==e)return n(r).find(t);else i=N.qsa(u,t)}return N.Z(i,t)};n=function(e,t){return N.init(e,t)};n.extend=function(e){var t,n=s.call(arguments,1);if(typeof e=="boolean"){t=e;e=n.shift()}n.forEach(function(n){X(e,n,t)});return e};N.qsa=function(e,t){var n,r=t[0]=="#",i=!r&&t[0]==".",o=r||i?t.slice(1):t,u=S.test(o);return P(e)&&u&&r?(n=e.getElementById(o))?[n]:[]:e.nodeType!==1&&e.nodeType!==9?[]:s.call(u&&!r?i?e.getElementsByClassName(o):e.getElementsByTagName(t):e.querySelectorAll(t))};n.contains=function(e,t){return e!==t&&e.contains(t)};n.type=M;n.isFunction=_;n.isWindow=D;n.isArray=O;n.isPlainObject=B;n.isEmptyObject=function(e){var t;for(t in e)return false;return true};n.inArray=function(e,t,n){return i.indexOf.call(t,e,n)};n.camelCase=C;n.trim=function(e){return e==null?"":String.prototype.trim.call(e)};n.uuid=0;n.support={};n.expr={};n.map=function(e,t){var n,r=[],i,s;if(j(e))for(i=0;i<e.length;i++){n=t(e[i],i);if(n!=null)r.push(n)}else for(s in e){n=t(e[s],s);if(n!=null)r.push(n)}return I(r)};n.each=function(e,t){var n,r;if(j(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===false)return e}else{for(r in e)if(t.call(e[r],r,e[r])===false)return e}return e};n.grep=function(e,t){return o.call(e,t)};if(window.JSON)n.parseJSON=JSON.parse;n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){x["[object "+t+"]"]=t.toLowerCase()});n.fn={forEach:i.forEach,reduce:i.reduce,push:i.push,sort:i.sort,indexOf:i.indexOf,concat:i.concat,map:function(e){return n(n.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return n(s.apply(this,arguments))},ready:function(e){if(E.test(u.readyState)&&u.body)e(n);else u.addEventListener("DOMContentLoaded",function(){e(n)},false);return this},get:function(t){return t===e?s.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){if(this.parentNode!=null)this.parentNode.removeChild(this)})},each:function(e){i.every.call(this,function(t,n){return e.call(t,n,t)!==false});return this},filter:function(e){if(_(e))return this.not(this.not(e));return n(o.call(this,function(t){return N.matches(t,e)}))},add:function(e,t){return n(k(this.concat(n(e,t))))},is:function(e){return this.length>0&&N.matches(this[0],e)},not:function(t){var r=[];if(_(t)&&t.call!==e)this.each(function(e){if(!t.call(this,e))r.push(this)});else{var i=typeof t=="string"?this.filter(t):j(t)&&_(t.item)?s.call(t):n(t);this.forEach(function(e){if(i.indexOf(e)<0)r.push(e)})}return n(r)},has:function(e){return this.filter(function(){return H(e)?n.contains(this,e):n(this).find(e).size()})},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!H(e)?e:n(e)},last:function(){var e=this[this.length-1];return e&&!H(e)?e:n(e)},find:function(e){var t,r=this;if(!e)t=[];else if(typeof e=="object")t=n(e).filter(function(){var e=this;return i.some.call(r,function(t){return n.contains(t,e)})});else if(this.length==1)t=n(N.qsa(this[0],e));else t=this.map(function(){return N.qsa(this,e)});return t},closest:function(e,t){var r=this[0],i=false;if(typeof e=="object")i=n(e);while(r&&!(i?i.indexOf(r)>=0:N.matches(r,e)))r=r!==t&&!P(r)&&r.parentNode;return n(r)},parents:function(e){var t=[],r=this;while(r.length>0)r=n.map(r,function(e){if((e=e.parentNode)&&!P(e)&&t.indexOf(e)<0){t.push(e);return e}});return V(t,e)},parent:function(e){return V(k(this.pluck("parentNode")),e)},children:function(e){return V(this.map(function(){return W(this)}),e)},contents:function(){return this.map(function(){return s.call(this.childNodes)})},siblings:function(e){return V(this.map(function(e,t){return o.call(W(t.parentNode),function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return n.map(this,function(t){return t[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display="");if(getComputedStyle(this,"").getPropertyValue("display")=="none")this.style.display=z(this.nodeName)})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){var t=_(e);if(this[0]&&!t)var r=n(e).get(0),i=r.parentNode||this.length>1;return this.each(function(s){n(this).wrapAll(t?e.call(this,s):i?r.cloneNode(true):r)})},wrapAll:function(e){if(this[0]){n(this[0]).before(e=n(e));var t;while((t=e.children()).length)e=t.first();n(e).append(this)}return this},wrapInner:function(e){var t=_(e);return this.each(function(r){var i=n(this),s=i.contents(),o=t?e.call(this,r):e;s.length?s.wrapAll(o):i.append(o)})},unwrap:function(){this.parent().each(function(){n(this).replaceWith(n(this).children())});return this},clone:function(){return this.map(function(){return this.cloneNode(true)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var r=n(this);(t===e?r.css("display")=="none":t)?r.show():r.hide()})},prev:function(e){return n(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return n(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return 0 in arguments?this.each(function(t){var r=this.innerHTML;n(this).empty().append($(this,e,t,r))}):0 in this?this[0].innerHTML:null},text:function(e){return 0 in arguments?this.each(function(t){var n=$(this,e,t,this.textContent);this.textContent=n==null?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,r){var i;return typeof n=="string"&&!(1 in arguments)?!this.length||this[0].nodeType!==1?e:!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:this.each(function(e){if(this.nodeType!==1)return;if(H(n))for(t in n)J(this,t,n[t]);else J(this,n,$(this,r,e,this.getAttribute(n)))})},removeAttr:function(e){return this.each(function(){this.nodeType===1&&J(this,e)})},prop:function(e,t){e=A[e]||e;return 1 in arguments?this.each(function(n){this[e]=$(this,t,n,this[e])}):this[0]&&this[0][e]},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase();var i=1 in arguments?this.attr(r,n):this.attr(r);return i!==null?Q(i):e},val:function(e){return 0 in arguments?this.each(function(t){this.value=$(this,e,t,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var r=n(this),i=$(this,e,t,r.offset()),s=r.offsetParent().offset(),o={top:i.top-s.top,left:i.left-s.left};if(r.css("position")=="static")o["position"]="relative";r.css(o)});if(!this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(e,r){if(arguments.length<2){var i=this[0],s=getComputedStyle(i,"");if(!i)return;if(typeof e=="string")return i.style[C(e)]||s.getPropertyValue(e);else if(O(e)){var o={};n.each(O(e)?e:[e],function(e,t){o[t]=i.style[C(t)]||s.getPropertyValue(t)});return o}}var u="";if(M(e)=="string"){if(!r&&r!==0)this.each(function(){this.style.removeProperty(q(e))});else u=q(e)+":"+U(e,r)}else{for(t in e)if(!e[t]&&e[t]!==0)this.each(function(){this.style.removeProperty(q(t))});else u+=q(t)+":"+U(t,e[t])+";"}return this.each(function(){this.style.cssText+=";"+u})},index:function(e){return e?this.indexOf(n(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){if(!e)return false;return i.some.call(this,function(e){return this.test(K(e))},R(e))},addClass:function(e){if(!e)return this;return this.each(function(t){r=[];var i=K(this),s=$(this,e,t,i);s.split(/\s+/g).forEach(function(e){if(!n(this).hasClass(e))r.push(e)},this);r.length&&K(this,i+(i?" ":"")+r.join(" "))})},removeClass:function(t){return this.each(function(n){if(t===e)return K(this,"");r=K(this);$(this,t,n,r).split(/\s+/g).forEach(function(e){r=r.replace(R(e)," ")});K(this,r.trim())})},toggleClass:function(t,r){if(!t)return this;return this.each(function(i){var s=n(this),o=$(this,t,i,K(this));o.split(/\s+/g).forEach(function(t){(r===e?!s.hasClass(t):r)?s.addClass(t):s.removeClass(t)})})},scrollTop:function(t){if(!this.length)return;var n="scrollTop"in this[0];if(t===e)return n?this[0].scrollTop:this[0].pageYOffset;return this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})},scrollLeft:function(t){if(!this.length)return;var n="scrollLeft"in this[0];if(t===e)return n?this[0].scrollLeft:this[0].pageXOffset;return this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})},position:function(){if(!this.length)return;var e=this[0],t=this.offsetParent(),r=this.offset(),i=d.test(t[0].nodeName)?{top:0,left:0}:t.offset();r.top-=parseFloat(n(e).css("margin-top"))||0;r.left-=parseFloat(n(e).css("margin-left"))||0;i.top+=parseFloat(n(t[0]).css("border-top-width"))||0;i.left+=parseFloat(n(t[0]).css("border-left-width"))||0;return{top:r.top-i.top,left:r.left-i.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||u.body;while(e&&!d.test(e.nodeName)&&n(e).css("position")=="static")e=e.offsetParent;return e})}};n.fn.detach=n.fn.remove;["width","height"].forEach(function(t){var r=t.replace(/./,function(e){return e[0].toUpperCase()});n.fn[t]=function(i){var s,o=this[0];if(i===e)return D(o)?o["inner"+r]:P(o)?o.documentElement["scroll"+r]:(s=this.offset())&&s[t];else return this.each(function(e){o=n(this);o.css(t,$(this,i,e,o[t]()))})}});g.forEach(function(e,t){var r=t%2;n.fn[e]=function(){var e,i=n.map(arguments,function(t){e=M(t);return e=="object"||e=="array"||t==null?t:N.fragment(t)}),s,o=this.length>1;if(i.length<1)return this;return this.each(function(e,a){s=r?a:a.parentNode;a=t==0?a.nextSibling:t==1?a.firstChild:t==2?a:null;var f=u.documentElement.contains(s);i.forEach(function(e){if(o)e=e.cloneNode(true);else if(!s)return n(e).remove();s.insertBefore(e,a);if(f)G(e,function(e){if(e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&!e.src)window["eval"].call(window,e.innerHTML)})})})};n.fn[r?e+"To":"insert"+(t?"Before":"After")]=function(t){n(t)[e](this);return this}});N.Z.prototype=n.fn;N.uniq=k;N.deserializeValue=Q;n.zepto=N;return n}();window.Zepto=Zepto;window.$===undefined&&(window.$=Zepto);(function(e){function c(e){return e._zid||(e._zid=t++)}function h(e,t,n,r){t=p(t);if(t.ns)var i=d(t.ns);return(o[c(e)]||[]).filter(function(e){return e&&(!t.e||e.e==t.e)&&(!t.ns||i.test(e.ns))&&(!n||c(e.fn)===c(n))&&(!r||e.sel==r)})}function p(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function d(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function v(e,t){return e.del&&!a&&e.e in f||!!t}function m(e){return l[e]||a&&f[e]||e}function g(t,r,i,s,u,a,f){var h=c(t),d=o[h]||(o[h]=[]);r.split(/\s/).forEach(function(r){if(r=="ready")return e(document).ready(i);var o=p(r);o.fn=i;o.sel=u;if(o.e in l)i=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return o.fn.apply(this,arguments)};o.del=a;var c=a||i;o.proxy=function(e){e=x(e);if(e.isImmediatePropagationStopped())return;e.data=s;var r=c.apply(t,e._args==n?[e]:[e].concat(e._args));if(r===false)e.preventDefault(),e.stopPropagation();return r};o.i=d.length;d.push(o);if("addEventListener"in t)t.addEventListener(m(o.e),o.proxy,v(o,f))})}function y(e,t,n,r,i){var s=c(e);(t||"").split(/\s/).forEach(function(t){h(e,t,n,r).forEach(function(t){delete o[s][t.i];if("removeEventListener"in e)e.removeEventListener(m(t.e),t.proxy,v(t,i))})})}function x(t,r){if(r||!t.isDefaultPrevented){r||(r=t);e.each(S,function(e,n){var i=r[e];t[e]=function(){this[n]=b;return i&&i.apply(r,arguments)};t[n]=w});if(r.defaultPrevented!==n?r.defaultPrevented:"returnValue"in r?r.returnValue===false:r.getPreventDefault&&r.getPreventDefault())t.isDefaultPrevented=b}return t}function T(e){var t,r={originalEvent:e};for(t in e)if(!E.test(t)&&e[t]!==n)r[t]=e[t];return x(r,e)}var t=1,n,r=Array.prototype.slice,i=e.isFunction,s=function(e){return typeof e=="string"},o={},u={},a="onfocusin"in window,f={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents";e.event={add:g,remove:y};e.proxy=function(t,n){var o=2 in arguments&&r.call(arguments,2);if(i(t)){var u=function(){return t.apply(n,o?o.concat(r.call(arguments)):arguments)};u._zid=c(t);return u}else if(s(n)){if(o){o.unshift(t[n],t);return e.proxy.apply(null,o)}else{return e.proxy(t[n],t)}}else{throw new TypeError("expected function")}};e.fn.bind=function(e,t,n){return this.on(e,t,n)};e.fn.unbind=function(e,t){return this.off(e,t)};e.fn.one=function(e,t,n,r){return this.on(e,t,n,r,1)};var b=function(){return true},w=function(){return false},E=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(e,t,n){return this.on(t,e,n)};e.fn.undelegate=function(e,t,n){return this.off(t,e,n)};e.fn.live=function(t,n){e(document.body).delegate(this.selector,t,n);return this};e.fn.die=function(t,n){e(document.body).undelegate(this.selector,t,n);return this};e.fn.on=function(t,o,u,a,f){var l,c,h=this;if(t&&!s(t)){e.each(t,function(e,t){h.on(e,o,u,t,f)});return h}if(!s(o)&&!i(a)&&a!==false)a=u,u=o,o=n;if(i(u)||u===false)a=u,u=n;if(a===false)a=w;return h.each(function(n,i){if(f)l=function(e){y(i,e.type,a);return a.apply(this,arguments)};if(o)c=function(t){var n,s=e(t.target).closest(o,i).get(0);if(s&&s!==i){n=e.extend(T(t),{currentTarget:s,liveFired:i});return(l||a).apply(s,[n].concat(r.call(arguments,1)))}};g(i,t,a,u,o,c||l)})};e.fn.off=function(t,r,o){var u=this;if(t&&!s(t)){e.each(t,function(e,t){u.off(e,r,t)});return u}if(!s(r)&&!i(o)&&o!==false)o=r,r=n;if(o===false)o=w;return u.each(function(){y(this,t,o,r)})};e.fn.trigger=function(t,n){t=s(t)||e.isPlainObject(t)?e.Event(t):x(t);t._args=n;return this.each(function(){if("dispatchEvent"in this)this.dispatchEvent(t);else e(this).triggerHandler(t,n)})};e.fn.triggerHandler=function(t,n){var r,i;this.each(function(o,u){r=T(s(t)?e.Event(t):t);r._args=n;r.target=u;e.each(h(u,t.type||t),function(e,t){i=t.proxy(r);if(r.isImmediatePropagationStopped())return false})});return i};("focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select keydown keypress keyup error").split(" ").forEach(function(t){e.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}});["focus","blur"].forEach(function(t){e.fn[t]=function(e){if(e)this.bind(t,e);else this.each(function(){try{this[t]()}catch(e){}});return this}});e.Event=function(e,t){if(!s(e))t=e,e=t.type;var n=document.createEvent(u[e]||"Events"),r=true;if(t)for(var i in t)i=="bubbles"?r=!!t[i]:n[i]=t[i];n.initEvent(e,r,true);return x(n)}})(Zepto);(function($){function triggerAndReturn(e,t,n){var r=$.Event(t);$(e).trigger(r,n);return!r.isDefaultPrevented()}function triggerGlobal(e,t,n,r){if(e.global)return triggerAndReturn(t||document,n,r)}function ajaxStart(e){if(e.global&&$.active++===0)triggerGlobal(e,null,"ajaxStart")}function ajaxStop(e){if(e.global&&!--$.active)triggerGlobal(e,null,"ajaxStop")}function ajaxBeforeSend(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===false||triggerGlobal(t,n,"ajaxBeforeSend",[e,t])===false)return false;triggerGlobal(t,n,"ajaxSend",[e,t])}function ajaxSuccess(e,t,n,r){var i=n.context,s="success";n.success.call(i,e,s,t);if(r)r.resolveWith(i,[e,s,t]);triggerGlobal(n,i,"ajaxSuccess",[t,n,e]);ajaxComplete(s,t,n)}function ajaxError(e,t,n,r,i){var s=r.context;r.error.call(s,n,t,e);if(i)i.rejectWith(s,[n,t,e]);triggerGlobal(r,s,"ajaxError",[n,r,e||t]);ajaxComplete(t,n,r)}function ajaxComplete(e,t,n){var r=n.context;n.complete.call(r,t,e);triggerGlobal(n,r,"ajaxComplete",[t,n]);ajaxStop(n)}function empty(){}function mimeToDataType(e){if(e)e=e.split(";",2)[0];return e&&(e==htmlType?"html":e==jsonType?"json":scriptTypeRE.test(e)?"script":xmlTypeRE.test(e)&&"xml")||"text"}function appendQuery(e,t){if(t=="")return e;return(e+"&"+t).replace(/[&?]{1,2}/,"?")}function serializeData(e){if(e.processData&&e.data&&$.type(e.data)!="string")e.data=$.param(e.data,e.traditional);if(e.data&&(!e.type||e.type.toUpperCase()=="GET"))e.url=appendQuery(e.url,e.data),e.data=undefined}function parseArguments(e,t,n,r){if($.isFunction(t))r=n,n=t,t=undefined;if(!$.isFunction(n))r=n,n=undefined;return{url:e,data:t,success:n,dataType:r}}function serialize(e,t,n,r){var i,s=$.isArray(t),o=$.isPlainObject(t);$.each(t,function(t,u){i=$.type(u);if(r)t=n?r:r+"["+(o||i=="object"||i=="array"?t:"")+"]";if(!r&&s)e.add(u.name,u.value);else if(i=="array"||!n&&i=="object")serialize(e,u,n,t);else e.add(t,u)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0;$.ajaxJSONP=function(e,t){if(!("type"in e))return $.ajax(e);var n=e.jsonpCallback,r=($.isFunction(n)?n():n)||"jsonp"+ ++jsonpID,i=document.createElement("script"),s=window[r],o,u=function(e){$(i).triggerHandler("error",e||"abort")},a={abort:u},f;if(t)t.promise(a);$(i).on("load error",function(n,u){clearTimeout(f);$(i).off().remove();if(n.type=="error"||!o){ajaxError(null,u||"error",a,e,t)}else{ajaxSuccess(o[0],a,e,t)}window[r]=s;if(o&&$.isFunction(s))s(o[0]);s=o=undefined});if(ajaxBeforeSend(a,e)===false){u("abort");return a}window[r]=function(){o=arguments};i.src=e.url.replace(/\?(.+)=\?/,"?$1="+r);document.head.appendChild(i);if(e.timeout>0)f=setTimeout(function(){u("timeout")},e.timeout);return a};$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:true,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:false,timeout:0,processData:true,cache:true};$.ajax=function(options){var settings=$.extend({},options||{}),deferred=$.Deferred&&$.Deferred();for(key in $.ajaxSettings)if(settings[key]===undefined)settings[key]=$.ajaxSettings[key];ajaxStart(settings);if(!settings.crossDomain)settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host;if(!settings.url)settings.url=window.location.toString();serializeData(settings);if(settings.cache===false)settings.url=appendQuery(settings.url,"_="+Date.now());var dataType=settings.dataType,hasPlaceholder=/\?.+=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder){if(!hasPlaceholder)settings.url=appendQuery(settings.url,settings.jsonp?settings.jsonp+"=?":settings.jsonp===false?"":"callback=?");return $.ajaxJSONP(settings,deferred)}var mime=settings.accepts[dataType],headers={},setHeader=function(e,t){headers[e.toLowerCase()]=[e,t]},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),nativeSetHeader=xhr.setRequestHeader,abortTimeout;if(deferred)deferred.promise(xhr);if(!settings.crossDomain)setHeader("X-Requested-With","XMLHttpRequest");setHeader("Accept",mime||"*/*");if(mime=settings.mimeType||mime){if(mime.indexOf(",")>-1)mime=mime.split(",",2)[0];xhr.overrideMimeType&&xhr.overrideMimeType(mime)}if(settings.contentType||settings.contentType!==false&&settings.data&&settings.type.toUpperCase()!="GET")setHeader("Content-Type",settings.contentType||"application/x-www-form-urlencoded");if(settings.headers)for(name in settings.headers)setHeader(name,settings.headers[name]);xhr.setRequestHeader=setHeader;xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty;clearTimeout(abortTimeout);var result,error=false;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(settings.mimeType||xhr.getResponseHeader("content-type"));result=xhr.responseText;try{if(dataType=="script")(1,eval)(result);else if(dataType=="xml")result=xhr.responseXML;else if(dataType=="json")result=blankRE.test(result)?null:$.parseJSON(result)}catch(e){error=e}if(error)ajaxError(error,"parsererror",xhr,settings,deferred);else ajaxSuccess(result,xhr,settings,deferred)}else{ajaxError(xhr.statusText||null,xhr.status?"error":"abort",xhr,settings,deferred)}}};if(ajaxBeforeSend(xhr,settings)===false){xhr.abort();ajaxError(null,"abort",xhr,settings,deferred);return xhr}if(settings.xhrFields)for(name in settings.xhrFields)xhr[name]=settings.xhrFields[name];var async="async"in settings?settings.async:true;xhr.open(settings.type,settings.url,async,settings.username,settings.password);for(name in headers)nativeSetHeader.apply(xhr,headers[name]);if(settings.timeout>0)abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty;xhr.abort();ajaxError(null,"timeout",xhr,settings,deferred)},settings.timeout);xhr.send(settings.data?settings.data:null);return xhr};$.get=function(){return $.ajax(parseArguments.apply(null,arguments))};$.post=function(){var e=parseArguments.apply(null,arguments);e.type="POST";return $.ajax(e)};$.getJSON=function(){var e=parseArguments.apply(null,arguments);e.dataType="json";return $.ajax(e)};$.fn.load=function(e,t,n){if(!this.length)return this;var r=this,i=e.split(/\s/),s,o=parseArguments(e,t,n),u=o.success;if(i.length>1)o.url=i[0],s=i[1];o.success=function(e){r.html(s?$("<div>").html(e.replace(rscript,"")).find(s):e);u&&u.apply(r,arguments)};$.ajax(o);return this};var escape=encodeURIComponent;$.param=function(e,t){var n=[];n.add=function(e,t){this.push(escape(e)+"="+escape(t))};serialize(n,e,t);return n.join("&").replace(/%20/g,"+")}})(Zepto);(function(e){e.fn.serializeArray=function(){var t=[],n;e([].slice.call(this.get(0).elements)).each(function(){n=e(this);var r=n.attr("type");if(this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&r!="submit"&&r!="reset"&&r!="button"&&(r!="radio"&&r!="checkbox"||this.checked))t.push({name:n.attr("name"),value:n.val()})});return t};e.fn.serialize=function(){var e=[];this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))});return e.join("&")};e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n);if(!n.isDefaultPrevented())this.get(0).submit()}return this}})(Zepto);(function(e){if(!("__proto__"in{})){e.extend(e.zepto,{Z:function(t,n){t=t||[];e.extend(t,e.fn);t.selector=n||"";t.__Z=true;return t},isZ:function(t){return e.type(t)==="array"&&"__Z"in t}})}try{getComputedStyle(undefined)}catch(t){var n=getComputedStyle;window.getComputedStyle=function(e){try{return n(e)}catch(t){return null}}}})(Zepto);(function(e){function t(e){var t=this.os={},n=this.browser={},r=e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=!!e.match(/\(Macintosh\; Intel /),o=e.match(/(iPad).*OS\s([\d_]+)/),u=e.match(/(iPod)(.*OS\s([\d_]+))?/),a=!o&&e.match(/(iPhone\sOS)\s([\d_]+)/),f=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=e.match(/Windows Phone ([\d.]+)/),c=f&&e.match(/TouchPad/),h=e.match(/Kindle\/([\d.]+)/),p=e.match(/Silk\/([\d._]+)/),d=e.match(/(BlackBerry).*Version\/([\d.]+)/),v=e.match(/(BB10).*Version\/([\d.]+)/),m=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),g=e.match(/PlayBook/),y=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),b=e.match(/Firefox\/([\d.]+)/),w=e.match(/MSIE\s([\d.]+)/)||e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),E=!y&&e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),S=E||e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);if(n.webkit=!!r)n.version=r[1];if(i)t.android=true,t.version=i[2];if(a&&!u)t.ios=t.iphone=true,t.version=a[2].replace(/_/g,".");if(o)t.ios=t.ipad=true,t.version=o[2].replace(/_/g,".");if(u)t.ios=t.ipod=true,t.version=u[3]?u[3].replace(/_/g,"."):null;if(l)t.wp=true,t.version=l[1];if(f)t.webos=true,t.version=f[2];if(c)t.touchpad=true;if(d)t.blackberry=true,t.version=d[2];if(v)t.bb10=true,t.version=v[2];if(m)t.rimtabletos=true,t.version=m[2];if(g)n.playbook=true;if(h)t.kindle=true,t.version=h[1];if(p)n.silk=true,n.version=p[1];if(!p&&t.android&&e.match(/Kindle Fire/))n.silk=true;if(y)n.chrome=true,n.version=y[1];if(b)n.firefox=true,n.version=b[1];if(w)n.ie=true,n.version=w[1];if(S&&(s||t.ios)){n.safari=true;if(s)n.version=S[1]}if(E)n.webview=true;t.tablet=!!(o||g||i&&!e.match(/Mobile/)||b&&e.match(/Tablet/)||w&&!e.match(/Phone/)&&e.match(/Touch/));t.phone=!!(!t.tablet&&!t.ipod&&(i||a||f||d||v||y&&e.match(/Android/)||y&&e.match(/CriOS\/([\d.]+)/)||b&&e.match(/Mobile/)||w&&e.match(/Touch/)))}t.call(e,navigator.userAgent);e.__detect=t})(Zepto);(function(e){function o(s,o){var a=s[i],f=a&&t[a];if(o===undefined)return f||u(s);else{if(f){if(o in f)return f[o];var l=r(o);if(l in f)return f[l]}return n.call(e(s),o)}}function u(n,s,o){var u=n[i]||(n[i]=++e.uuid),f=t[u]||(t[u]=a(n));if(s!==undefined)f[r(s)]=o;return f}function a(t){var n={};e.each(t.attributes||s,function(t,i){if(i.name.indexOf("data-")==0)n[r(i.name.replace("data-",""))]=e.zepto.deserializeValue(i.value)});return n}var t={},n=e.fn.data,r=e.camelCase,i=e.expando="Zepto"+ +(new Date),s=[];e.fn.data=function(t,n){return n===undefined?e.isPlainObject(t)?this.each(function(n,r){e.each(t,function(e,t){u(r,e,t)})}):0 in this?o(this[0],t):undefined:this.each(function(){u(this,t,n)})};e.fn.removeData=function(n){if(typeof n=="string")n=n.split(/\s+/);return this.each(function(){var s=this[i],o=s&&t[s];if(o)e.each(n||o,function(e){delete o[n?r(this):e]})})};["remove","empty"].forEach(function(t){var n=e.fn[t];e.fn[t]=function(){var e=this.find("*");if(t==="remove")e=e.add(this);e.removeData();return n.call(this)}})})(Zepto);(function(e){function n(t){var r=[["resolve","done",e.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",e.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",e.Callbacks({memory:1})]],i="pending",s={state:function(){return i},always:function(){o.done(arguments).fail(arguments);return this},then:function(){var t=arguments;return n(function(n){e.each(r,function(r,i){var u=e.isFunction(t[r])&&t[r];o[i[1]](function(){var t=u&&u.apply(this,arguments);if(t&&e.isFunction(t.promise)){t.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{var r=this===s?n.promise():this,o=u?[t]:arguments;n[i[0]+"With"](r,o)}})});t=null}).promise()},promise:function(t){return t!=null?e.extend(t,s):s}},o={};e.each(r,function(e,t){var n=t[2],u=t[3];s[t[1]]=n.add;if(u){n.add(function(){i=u},r[e^1][2].disable,r[2][2].lock)}o[t[0]]=function(){o[t[0]+"With"](this===o?s:this,arguments);return this};o[t[0]+"With"]=n.fireWith});s.promise(o);if(t)t.call(o,o);return o}var t=Array.prototype.slice;e.when=function(r){var i=t.call(arguments),s=i.length,o=0,u=s!==1||r&&e.isFunction(r.promise)?s:0,a=u===1?r:n(),f,l,c,h=function(e,n,r){return function(i){n[e]=this;r[e]=arguments.length>1?t.call(arguments):i;if(r===f){a.notifyWith(n,r)}else if(!--u){a.resolveWith(n,r)}}};if(s>1){f=new Array(s);l=new Array(s);c=new Array(s);for(;o<s;++o){if(i[o]&&e.isFunction(i[o].promise)){i[o].promise().done(h(o,c,i)).fail(a.reject).progress(h(o,l,f))}else{--u}}}if(!u)a.resolveWith(c,i);return a.promise()};e.Deferred=n})(Zepto);(function(e){e.Callbacks=function(t){t=e.extend({},t);var n,r,i,s,o,u,a=[],f=!t.once&&[],l=function(e){n=t.memory&&e;r=true;u=s||0;s=0;o=a.length;i=true;for(;a&&u<o;++u){if(a[u].apply(e[0],e[1])===false&&t.stopOnFalse){n=false;break}}i=false;if(a){if(f)f.length&&l(f.shift());else if(n)a.length=0;else c.disable()}},c={add:function(){if(a){var r=a.length,u=function(n){e.each(n,function(e,n){if(typeof n==="function"){if(!t.unique||!c.has(n))a.push(n)}else if(n&&n.length&&typeof n!=="string")u(n)})};u(arguments);if(i)o=a.length;else if(n){s=r;l(n)}}return this},remove:function(){if(a){e.each(arguments,function(t,n){var r;while((r=e.inArray(n,a,r))>-1){a.splice(r,1);if(i){if(r<=o)--o;if(r<=u)--u}}})}return this},has:function(t){return!!(a&&(t?e.inArray(t,a)>-1:a.length))},empty:function(){o=a.length=0;return this},disable:function(){a=f=n=undefined;return this},disabled:function(){return!a},lock:function(){f=undefined;if(!n)c.disable();return this},locked:function(){return!f},fireWith:function(e,t){if(a&&(!r||f)){t=t||[];t=[e,t.slice?t.slice():t];if(i)f.push(t);else l(t)}return this},fire:function(){return c.fireWith(this,arguments)},fired:function(){return!!r}};return c}})(Zepto);(function(){var e=QApp.util;var t={eventType:"tap"};QApp.addPlugin("zepto",t,function(t,n){var r=t.options.ready;if(e.isFunction(r)){t.options.ready=function(){var e=Zepto(this.root);r.call(this,e)}}t.on("loaded",function(){if(t.options.bindActions){e.each(t.options.bindActions,function(r,i){var s=r.split(":"),o=s[0],u=s[1]||n.eventType;if(e.isFunction(i)){Zepto(t.root).delegate(o,u,function(e){return i.call(t,e)})}else{Zepto(t.root).delegate(o,u,function(n){if(e.isFunction(t[i])){return t[i].call(t,n)}})}})}})})})()}(module.exports,module,__context);__context.____MODULES["da73d8a6f60c849ff1cbc63ff4884540"]=module.exports})(this);(function(e){var t={id:"32bc943382a84ffe82079c67d041a72d",filename:"spa.js",exports:{}};if(!e.____MODULES){e.____MODULES={}}var n=function(t,n,r){e.____MODULES["2c088de690d2f86994b0feec93475475"];e.____MODULES["e24642d9bb10d27b80ed20283fa2d1ef"];e.____MODULES["9d98ca07b73221c493c790bbc2226633"];e.____MODULES["7c5d57f1f2a98b39b42b95fcc735e710"];e.____MODULES["bd2141162d398feaa2ba14dc245d2bba"];e.____MODULES["52550815c02f4b1ebb5e458316e9f7b4"];e.____MODULES["3501632c175ff50fbe38cfb6a85d2296"];e.____MODULES["06db39915d027f68bc965950f4815a67"];e.____MODULES["2ab9cd74935222560bb8e728582f85a2"];e.____MODULES["8e388858412f481def4b54146d6a335f"];e.____MODULES["da73d8a6f60c849ff1cbc63ff4884540"];QApp.config({});}(t.exports,t,e);e.____MODULES["32bc943382a84ffe82079c67d041a72d"]=t.exports})(this)

    })( module.exports , module , __context );
    __context.____MODULES[ "b339b78823a7d4e256e118d08f80004c" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "695124f7289a155034d4b8cbdf8df850" ,
        filename : "iscroll.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    /*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame	||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
	var me = {};

	var _elementStyle = document.createElement('div').style;
	var _vendor = (function () {
		var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
			transform,
			i = 0,
			l = vendors.length;

		for ( ; i < l; i++ ) {
			transform = vendors[i] + 'ransform';
			if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
		}

		return false;
	})();

	function _prefixStyle (style) {
		if ( _vendor === false ) return false;
		if ( _vendor === '' ) return style;
		return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	me.extend = function (target, obj) {
		for ( var i in obj ) {
			target[i] = obj[i];
		}
	};

	me.addEvent = function (el, type, fn, capture) {
		el.addEventListener(type, fn, !!capture);
	};

	me.removeEvent = function (el, type, fn, capture) {
		el.removeEventListener(type, fn, !!capture);
	};

	me.prefixPointerEvent = function (pointerEvent) {
		return window.MSPointerEvent ?
			'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
			pointerEvent;
	};

	me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
		var distance = current - start,
			speed = Math.abs(distance) / time,
			destination,
			duration;

		deceleration = deceleration === undefined ? 0.0006 : deceleration;

		destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
		duration = speed / deceleration;

		if ( destination < lowerMargin ) {
			destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
			distance = Math.abs(destination - current);
			duration = distance / speed;
		} else if ( destination > 0 ) {
			destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
			distance = Math.abs(current) + destination;
			duration = distance / speed;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

	var _transform = _prefixStyle('transform');

	me.extend(me, {
		hasTransform: _transform !== false,
		hasPerspective: _prefixStyle('perspective') in _elementStyle,
		hasTouch: 'ontouchstart' in window,
		hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
		hasTransition: _prefixStyle('transition') in _elementStyle
	});

	/*
	This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	- galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
	me.isBadAndroid = (function() {
		var appVersion = window.navigator.appVersion;
		// Android browser is not a chrome browser.
		if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
			var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
			if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
				return parseFloat(safariVersion[1]) < 535.19;
			} else {
				return true;
			}
		} else {
			return false;
		}
	})();

	me.extend(me.style = {}, {
		transform: _transform,
		transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
		transitionDuration: _prefixStyle('transitionDuration'),
		transitionDelay: _prefixStyle('transitionDelay'),
		transformOrigin: _prefixStyle('transformOrigin')
	});

	me.hasClass = function (e, c) {
		var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
		return re.test(e.className);
	};

	me.addClass = function (e, c) {
		if ( me.hasClass(e, c) ) {
			return;
		}

		var newclass = e.className.split(' ');
		newclass.push(c);
		e.className = newclass.join(' ');
	};

	me.removeClass = function (e, c) {
		if ( !me.hasClass(e, c) ) {
			return;
		}

		var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
		e.className = e.className.replace(re, ' ');
	};

	me.offset = function (el) {
		var left = -el.offsetLeft,
			top = -el.offsetTop;

		// jshint -W084
		while (el = el.offsetParent) {
			left -= el.offsetLeft;
			top -= el.offsetTop;
		}
		// jshint +W084

		return {
			left: left,
			top: top
		};
	};

	me.preventDefaultException = function (el, exceptions) {
		for ( var i in exceptions ) {
			if ( exceptions[i].test(el[i]) ) {
				return true;
			}
		}

		return false;
	};

	me.extend(me.eventType = {}, {
		touchstart: 1,
		touchmove: 1,
		touchend: 1,

		mousedown: 2,
		mousemove: 2,
		mouseup: 2,

		pointerdown: 3,
		pointermove: 3,
		pointerup: 3,

		MSPointerDown: 3,
		MSPointerMove: 3,
		MSPointerUp: 3
	});

	me.extend(me.ease = {}, {
		quadratic: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function (k) {
				return k * ( 2 - k );
			}
		},
		circular: {
			style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
			fn: function (k) {
				return Math.sqrt( 1 - ( --k * k ) );
			}
		},
		back: {
			style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			fn: function (k) {
				var b = 4;
				return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
			}
		},
		bounce: {
			style: '',
			fn: function (k) {
				if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
					return 7.5625 * k * k;
				} else if ( k < ( 2 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
				} else if ( k < ( 2.5 / 2.75 ) ) {
					return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
				} else {
					return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
				}
			}
		},
		elastic: {
			style: '',
			fn: function (k) {
				var f = 0.22,
					e = 0.4;

				if ( k === 0 ) { return 0; }
				if ( k == 1 ) { return 1; }

				return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
			}
		}
	});

	me.tap = function (e, eventName) {
		var ev = document.createEvent('Event');
		ev.initEvent(eventName, true, true);
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
	};

	me.click = function (e) {
		var target = e.target,
			ev;

		if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
			ev = document.createEvent('MouseEvents');
			ev.initMouseEvent('click', true, true, e.view, 1,
				target.screenX, target.screenY, target.clientX, target.clientY,
				e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
				0, null);

			ev._constructed = true;
			target.dispatchEvent(ev);
		}
	};

	return me;
})();
function IScroll (el, options) {
	this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	this.scroller = this.wrapper.children[0];
	this.scrollerStyle = this.scroller.style;		// cache style for better performance

	this.options = {

		resizeScrollbars: true,

		mouseWheelSpeed: 20,

		snapThreshold: 0.334,

// INSERT POINT: OPTIONS
		disablePointer : !utils.hasPointer,
		disableTouch : utils.hasPointer || !utils.hasTouch,
		disableMouse : utils.hasPointer || utils.hasTouch,
		startX: 0,
		startY: 0,
		scrollY: true,
		directionLockThreshold: 5,
		momentum: true,

		bounce: true,
		bounceTime: 600,
		bounceEasing: '',

		preventDefault: true,
		preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

		HWCompositing: true,
		useTransition: true,
		useTransform: true,
		bindToWrapper: typeof window.onmousedown === "undefined"
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	// Normalize options
	this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	this.options.useTransition = utils.hasTransition && this.options.useTransition;
	this.options.useTransform = utils.hasTransform && this.options.useTransform;

	this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	// If you want eventPassthrough I have to lock one of the axes
	this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	// With eventPassthrough we also need lockDirection mechanism
	this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	if ( this.options.tap === true ) {
		this.options.tap = 'tap';
	}

	if ( this.options.shrinkScrollbars == 'scale' ) {
		this.options.useTransition = false;
	}

	this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

	// Some defaults
	this.x = 0;
	this.y = 0;
	this.directionX = 0;
	this.directionY = 0;
	this._events = {};

// INSERT POINT: DEFAULTS

	this._init();
	this.refresh();

	this.scrollTo(this.options.startX, this.options.startY);
	this.enable();
}

IScroll.prototype = {
	version: '5.2.0',

	_init: function () {
		this._initEvents();

		if ( this.options.scrollbars || this.options.indicators ) {
			this._initIndicators();
		}

		if ( this.options.mouseWheel ) {
			this._initWheel();
		}

		if ( this.options.snap ) {
			this._initSnap();
		}

		if ( this.options.keyBindings ) {
			this._initKeys();
		}

// INSERT POINT: _init

	},

	destroy: function () {
		this._initEvents(true);
		clearTimeout(this.resizeTimeout);
 		this.resizeTimeout = null;
		this._execEvent('destroy');
	},

	_transitionEnd: function (e) {
		if ( e.target != this.scroller || !this.isInTransition ) {
			return;
		}

		this._transitionTime();
		if ( !this.resetPosition(this.options.bounceTime) ) {
			this.isInTransition = false;
			this._execEvent('scrollEnd');
		}
	},

	_start: function (e) {
		// React to left mouse button only
		if ( utils.eventType[e.type] != 1 ) {
		  // for button property
		  // http://unixpapa.com/js/mouse.html
		  var button;
	    if (!e.which) {
	      /* IE case */
	      button = (e.button < 2) ? 0 :
	               ((e.button == 4) ? 1 : 2);
	    } else {
	      /* All others */
	      button = e.button;
	    }
			if ( button !== 0 ) {
				return;
			}
		}

		if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
			return;
		}

		if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.touches ? e.touches[0] : e,
			pos;

		this.initiated	= utils.eventType[e.type];
		this.moved		= false;
		this.distX		= 0;
		this.distY		= 0;
		this.directionX = 0;
		this.directionY = 0;
		this.directionLocked = 0;

		this.startTime = utils.getTime();

		if ( this.options.useTransition && this.isInTransition ) {
			this._transitionTime();
			this.isInTransition = false;
			pos = this.getComputedPosition();
			this._translate(Math.round(pos.x), Math.round(pos.y));
			this._execEvent('scrollEnd');
		} else if ( !this.options.useTransition && this.isAnimating ) {
			this.isAnimating = false;
			this._execEvent('scrollEnd');
		}

		this.startX    = this.x;
		this.startY    = this.y;
		this.absStartX = this.x;
		this.absStartY = this.y;
		this.pointX    = point.pageX;
		this.pointY    = point.pageY;

		this._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
			e.preventDefault();
		}

		var point		= e.touches ? e.touches[0] : e,
			deltaX		= point.pageX - this.pointX,
			deltaY		= point.pageY - this.pointY,
			timestamp	= utils.getTime(),
			newX, newY,
			absDistX, absDistY;

		this.pointX		= point.pageX;
		this.pointY		= point.pageY;

		this.distX		+= deltaX;
		this.distY		+= deltaY;
		absDistX		= Math.abs(this.distX);
		absDistY		= Math.abs(this.distY);

		// We need to move at least 10 pixels for the scrolling to initiate
		if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
			return;
		}

		// If you are scrolling in one direction lock the other
		if ( !this.directionLocked && !this.options.freeScroll ) {
			if ( absDistX > absDistY + this.options.directionLockThreshold ) {
				this.directionLocked = 'h';		// lock horizontally
			} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
				this.directionLocked = 'v';		// lock vertically
			} else {
				this.directionLocked = 'n';		// no lock
			}
		}

		if ( this.directionLocked == 'h' ) {
			if ( this.options.eventPassthrough == 'vertical' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'horizontal' ) {
				this.initiated = false;
				return;
			}

			deltaY = 0;
		} else if ( this.directionLocked == 'v' ) {
			if ( this.options.eventPassthrough == 'horizontal' ) {
				e.preventDefault();
			} else if ( this.options.eventPassthrough == 'vertical' ) {
				this.initiated = false;
				return;
			}

			deltaX = 0;
		}

		deltaX = this.hasHorizontalScroll ? deltaX : 0;
		deltaY = this.hasVerticalScroll ? deltaY : 0;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		// Slow down if outside of the boundaries
		if ( newX > 0 || newX < this.maxScrollX ) {
			newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
		}
		if ( newY > 0 || newY < this.maxScrollY ) {
			newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
		}

		this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
		this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

		if ( !this.moved ) {
			this._execEvent('scrollStart');
		}

		this.moved = true;

		this._translate(newX, newY);

/* REPLACE START: _move */

		if ( timestamp - this.startTime > 300 ) {
			this.startTime = timestamp;
			this.startX = this.x;
			this.startY = this.y;
		}

/* REPLACE END: _move */

	},

	_end: function (e) {
		if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
			return;
		}

		if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
			e.preventDefault();
		}

		var point = e.changedTouches ? e.changedTouches[0] : e,
			momentumX,
			momentumY,
			duration = utils.getTime() - this.startTime,
			newX = Math.round(this.x),
			newY = Math.round(this.y),
			distanceX = Math.abs(newX - this.startX),
			distanceY = Math.abs(newY - this.startY),
			time = 0,
			easing = '';

		this.isInTransition = 0;
		this.initiated = 0;
		this.endTime = utils.getTime();

		// reset if we are outside of the boundaries
		if ( this.resetPosition(this.options.bounceTime) ) {
			return;
		}

		this.scrollTo(newX, newY);	// ensures that the last position is rounded

		// we scrolled less than 10 pixels
		if ( !this.moved ) {
			if ( this.options.tap ) {
				utils.tap(e, this.options.tap);
			}

			if ( this.options.click ) {
				utils.click(e);
			}

			this._execEvent('scrollCancel');
			return;
		}

		if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
			this._execEvent('flick');
			return;
		}

		// start momentum animation if needed
		if ( this.options.momentum && duration < 300 ) {
			momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
			momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
			newX = momentumX.destination;
			newY = momentumY.destination;
			time = Math.max(momentumX.duration, momentumY.duration);
			this.isInTransition = 1;
		}


		if ( this.options.snap ) {
			var snap = this._nearestSnap(newX, newY);
			this.currentPage = snap;
			time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(newX - snap.x), 1000),
						Math.min(Math.abs(newY - snap.y), 1000)
					), 300);
			newX = snap.x;
			newY = snap.y;

			this.directionX = 0;
			this.directionY = 0;
			easing = this.options.bounceEasing;
		}

// INSERT POINT: _end

		if ( newX != this.x || newY != this.y ) {
			// change easing function when scroller goes out of the boundaries
			if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
				easing = utils.ease.quadratic;
			}

			this.scrollTo(newX, newY, time, easing);
			return;
		}

		this._execEvent('scrollEnd');
	},

	_resize: function () {
		var that = this;

		clearTimeout(this.resizeTimeout);

		this.resizeTimeout = setTimeout(function () {
			that.refresh();
		}, this.options.resizePolling);
	},

	resetPosition: function (time) {
		var x = this.x,
			y = this.y;

		time = time || 0;

		if ( !this.hasHorizontalScroll || this.x > 0 ) {
			x = 0;
		} else if ( this.x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( !this.hasVerticalScroll || this.y > 0 ) {
			y = 0;
		} else if ( this.y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		if ( x == this.x && y == this.y ) {
			return false;
		}

		this.scrollTo(x, y, time, this.options.bounceEasing);

		return true;
	},

	disable: function () {
		this.enabled = false;
	},

	enable: function () {
		this.enabled = true;
	},

	refresh: function () {
		var rf = this.wrapper.offsetHeight;		// Force reflow

		this.wrapperWidth	= this.wrapper.clientWidth;
		this.wrapperHeight	= this.wrapper.clientHeight;

/* REPLACE START: refresh */

		this.scrollerWidth	= this.scroller.offsetWidth;
		this.scrollerHeight	= this.scroller.offsetHeight;

		this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
		this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

		this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
		this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

		if ( !this.hasHorizontalScroll ) {
			this.maxScrollX = 0;
			this.scrollerWidth = this.wrapperWidth;
		}

		if ( !this.hasVerticalScroll ) {
			this.maxScrollY = 0;
			this.scrollerHeight = this.wrapperHeight;
		}

		this.endTime = 0;
		this.directionX = 0;
		this.directionY = 0;

		this.wrapperOffset = utils.offset(this.wrapper);

		this._execEvent('refresh');

		this.resetPosition();

// INSERT POINT: _refresh

	},

	on: function (type, fn) {
		if ( !this._events[type] ) {
			this._events[type] = [];
		}

		this._events[type].push(fn);
	},

	off: function (type, fn) {
		if ( !this._events[type] ) {
			return;
		}

		var index = this._events[type].indexOf(fn);

		if ( index > -1 ) {
			this._events[type].splice(index, 1);
		}
	},

	_execEvent: function (type) {
		if ( !this._events[type] ) {
			return;
		}

		var i = 0,
			l = this._events[type].length;

		if ( !l ) {
			return;
		}

		for ( ; i < l; i++ ) {
			this._events[type][i].apply(this, [].slice.call(arguments, 1));
		}
	},

	scrollBy: function (x, y, time, easing) {
		x = this.x + x;
		y = this.y + y;
		time = time || 0;

		this.scrollTo(x, y, time, easing);
	},

	scrollTo: function (x, y, time, easing) {
		easing = easing || utils.ease.circular;

		this.isInTransition = this.options.useTransition && time > 0;
		var transitionType = this.options.useTransition && easing.style;
		if ( !time || transitionType ) {
				if(transitionType) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
				}
			this._translate(x, y);
		} else {
			this._animate(x, y, time, easing.fn);
		}
	},

	scrollToElement: function (el, time, offsetX, offsetY, easing) {
		el = el.nodeType ? el : this.scroller.querySelector(el);

		if ( !el ) {
			return;
		}

		var pos = utils.offset(el);

		pos.left -= this.wrapperOffset.left;
		pos.top  -= this.wrapperOffset.top;

		// if offsetX/Y are true we center the element to the screen
		if ( offsetX === true ) {
			offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
		}
		if ( offsetY === true ) {
			offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
		}

		pos.left -= offsetX || 0;
		pos.top  -= offsetY || 0;

		pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
		pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

		time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

		this.scrollTo(pos.left, pos.top, time, easing);
	},

	_transitionTime: function (time) {
		time = time || 0;

		var durationProp = utils.style.transitionDuration;
		this.scrollerStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.scrollerStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.scrollerStyle[durationProp] === '0.0001ms') {
					self.scrollerStyle[durationProp] = '0s';
				}
			});
		}


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTime(time);
			}
		}


// INSERT POINT: _transitionTime

	},

	_transitionTimingFunction: function (easing) {
		this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].transitionTimingFunction(easing);
			}
		}


// INSERT POINT: _transitionTimingFunction

	},

	_translate: function (x, y) {
		if ( this.options.useTransform ) {

/* REPLACE START: _translate */

			this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

		} else {
			x = Math.round(x);
			y = Math.round(y);
			this.scrollerStyle.left = x + 'px';
			this.scrollerStyle.top = y + 'px';
		}

		this.x = x;
		this.y = y;


	if ( this.indicators ) {
		for ( var i = this.indicators.length; i--; ) {
			this.indicators[i].updatePosition();
		}
	}


// INSERT POINT: _translate

	},

	_initEvents: function (remove) {
		var eventType = remove ? utils.removeEvent : utils.addEvent,
			target = this.options.bindToWrapper ? this.wrapper : window;

		eventType(window, 'orientationchange', this);
		eventType(window, 'resize', this);

		if ( this.options.click ) {
			eventType(this.wrapper, 'click', this, true);
		}

		if ( !this.options.disableMouse ) {
			eventType(this.wrapper, 'mousedown', this);
			eventType(target, 'mousemove', this);
			eventType(target, 'mousecancel', this);
			eventType(target, 'mouseup', this);
		}

		if ( utils.hasPointer && !this.options.disablePointer ) {
			eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
			eventType(target, utils.prefixPointerEvent('pointermove'), this);
			eventType(target, utils.prefixPointerEvent('pointercancel'), this);
			eventType(target, utils.prefixPointerEvent('pointerup'), this);
		}

		if ( utils.hasTouch && !this.options.disableTouch ) {
			eventType(this.wrapper, 'touchstart', this);
			eventType(target, 'touchmove', this);
			eventType(target, 'touchcancel', this);
			eventType(target, 'touchend', this);
		}

		eventType(this.scroller, 'transitionend', this);
		eventType(this.scroller, 'webkitTransitionEnd', this);
		eventType(this.scroller, 'oTransitionEnd', this);
		eventType(this.scroller, 'MSTransitionEnd', this);
	},

	getComputedPosition: function () {
		var matrix = window.getComputedStyle(this.scroller, null),
			x, y;

		if ( this.options.useTransform ) {
			matrix = matrix[utils.style.transform].split(')')[0].split(', ');
			x = +(matrix[12] || matrix[4]);
			y = +(matrix[13] || matrix[5]);
		} else {
			x = +matrix.left.replace(/[^-\d.]/g, '');
			y = +matrix.top.replace(/[^-\d.]/g, '');
		}

		return { x: x, y: y };
	},
	_initIndicators: function () {
		var interactive = this.options.interactiveScrollbars,
			customStyle = typeof this.options.scrollbars != 'string',
			indicators = [],
			indicator;

		var that = this;

		this.indicators = [];

		if ( this.options.scrollbars ) {
			// Vertical scrollbar
			if ( this.options.scrollY ) {
				indicator = {
					el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenX: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}

			// Horizontal scrollbar
			if ( this.options.scrollX ) {
				indicator = {
					el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
					interactive: interactive,
					defaultScrollbars: true,
					customStyle: customStyle,
					resize: this.options.resizeScrollbars,
					shrink: this.options.shrinkScrollbars,
					fade: this.options.fadeScrollbars,
					listenY: false
				};

				this.wrapper.appendChild(indicator.el);
				indicators.push(indicator);
			}
		}

		if ( this.options.indicators ) {
			// TODO: check concat compatibility
			indicators = indicators.concat(this.options.indicators);
		}

		for ( var i = indicators.length; i--; ) {
			this.indicators.push( new Indicator(this, indicators[i]) );
		}

		// TODO: check if we can use array.map (wide compatibility and performance issues)
		function _indicatorsMap (fn) {
			if (that.indicators) {
				for ( var i = that.indicators.length; i--; ) {
					fn.call(that.indicators[i]);
				}
			}
		}

		if ( this.options.fadeScrollbars ) {
			this.on('scrollEnd', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollCancel', function () {
				_indicatorsMap(function () {
					this.fade();
				});
			});

			this.on('scrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1);
				});
			});

			this.on('beforeScrollStart', function () {
				_indicatorsMap(function () {
					this.fade(1, true);
				});
			});
		}


		this.on('refresh', function () {
			_indicatorsMap(function () {
				this.refresh();
			});
		});

		this.on('destroy', function () {
			_indicatorsMap(function () {
				this.destroy();
			});

			delete this.indicators;
		});
	},

	_initWheel: function () {
		utils.addEvent(this.wrapper, 'wheel', this);
		utils.addEvent(this.wrapper, 'mousewheel', this);
		utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

		this.on('destroy', function () {
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = null;
			utils.removeEvent(this.wrapper, 'wheel', this);
			utils.removeEvent(this.wrapper, 'mousewheel', this);
			utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
		});
	},

	_wheel: function (e) {
		if ( !this.enabled ) {
			return;
		}

		e.preventDefault();

		var wheelDeltaX, wheelDeltaY,
			newX, newY,
			that = this;

		if ( this.wheelTimeout === undefined ) {
			that._execEvent('scrollStart');
		}

		// Execute the scrollEnd event after 400ms the wheel stopped scrolling
		clearTimeout(this.wheelTimeout);
		this.wheelTimeout = setTimeout(function () {
			if(!that.options.snap) {
				that._execEvent('scrollEnd');
			}
			that.wheelTimeout = undefined;
		}, 400);

		if ( 'deltaX' in e ) {
			if (e.deltaMode === 1) {
				wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
				wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
			} else {
				wheelDeltaX = -e.deltaX;
				wheelDeltaY = -e.deltaY;
			}
		} else if ( 'wheelDeltaX' in e ) {
			wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
			wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
		} else if ( 'wheelDelta' in e ) {
			wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
		} else if ( 'detail' in e ) {
			wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
		} else {
			return;
		}

		wheelDeltaX *= this.options.invertWheelDirection;
		wheelDeltaY *= this.options.invertWheelDirection;

		if ( !this.hasVerticalScroll ) {
			wheelDeltaX = wheelDeltaY;
			wheelDeltaY = 0;
		}

		if ( this.options.snap ) {
			newX = this.currentPage.pageX;
			newY = this.currentPage.pageY;

			if ( wheelDeltaX > 0 ) {
				newX--;
			} else if ( wheelDeltaX < 0 ) {
				newX++;
			}

			if ( wheelDeltaY > 0 ) {
				newY--;
			} else if ( wheelDeltaY < 0 ) {
				newY++;
			}

			this.goToPage(newX, newY);

			return;
		}

		newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
		newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

		this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
		this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

		if ( newX > 0 ) {
			newX = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
		}

		if ( newY > 0 ) {
			newY = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
		}

		this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
	},

	_initSnap: function () {
		this.currentPage = {};

		if ( typeof this.options.snap == 'string' ) {
			this.options.snap = this.scroller.querySelectorAll(this.options.snap);
		}

		this.on('refresh', function () {
			var i = 0, l,
				m = 0, n,
				cx, cy,
				x = 0, y,
				stepX = this.options.snapStepX || this.wrapperWidth,
				stepY = this.options.snapStepY || this.wrapperHeight,
				el;

			this.pages = [];

			if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
				return;
			}

			if ( this.options.snap === true ) {
				cx = Math.round( stepX / 2 );
				cy = Math.round( stepY / 2 );

				while ( x > -this.scrollerWidth ) {
					this.pages[i] = [];
					l = 0;
					y = 0;

					while ( y > -this.scrollerHeight ) {
						this.pages[i][l] = {
							x: Math.max(x, this.maxScrollX),
							y: Math.max(y, this.maxScrollY),
							width: stepX,
							height: stepY,
							cx: x - cx,
							cy: y - cy
						};

						y -= stepY;
						l++;
					}

					x -= stepX;
					i++;
				}
			} else {
				el = this.options.snap;
				l = el.length;
				n = -1;

				for ( ; i < l; i++ ) {
					if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
						m = 0;
						n++;
					}

					if ( !this.pages[m] ) {
						this.pages[m] = [];
					}

					x = Math.max(-el[i].offsetLeft, this.maxScrollX);
					y = Math.max(-el[i].offsetTop, this.maxScrollY);
					cx = x - Math.round(el[i].offsetWidth / 2);
					cy = y - Math.round(el[i].offsetHeight / 2);

					this.pages[m][n] = {
						x: x,
						y: y,
						width: el[i].offsetWidth,
						height: el[i].offsetHeight,
						cx: cx,
						cy: cy
					};

					if ( x > this.maxScrollX ) {
						m++;
					}
				}
			}

			this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

			// Update snap threshold if needed
			if ( this.options.snapThreshold % 1 === 0 ) {
				this.snapThresholdX = this.options.snapThreshold;
				this.snapThresholdY = this.options.snapThreshold;
			} else {
				this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
				this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
			}
		});

		this.on('flick', function () {
			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.x - this.startX), 1000),
						Math.min(Math.abs(this.y - this.startY), 1000)
					), 300);

			this.goToPage(
				this.currentPage.pageX + this.directionX,
				this.currentPage.pageY + this.directionY,
				time
			);
		});
	},

	_nearestSnap: function (x, y) {
		if ( !this.pages.length ) {
			return { x: 0, y: 0, pageX: 0, pageY: 0 };
		}

		var i = 0,
			l = this.pages.length,
			m = 0;

		// Check if we exceeded the snap threshold
		if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
			Math.abs(y - this.absStartY) < this.snapThresholdY ) {
			return this.currentPage;
		}

		if ( x > 0 ) {
			x = 0;
		} else if ( x < this.maxScrollX ) {
			x = this.maxScrollX;
		}

		if ( y > 0 ) {
			y = 0;
		} else if ( y < this.maxScrollY ) {
			y = this.maxScrollY;
		}

		for ( ; i < l; i++ ) {
			if ( x >= this.pages[i][0].cx ) {
				x = this.pages[i][0].x;
				break;
			}
		}

		l = this.pages[i].length;

		for ( ; m < l; m++ ) {
			if ( y >= this.pages[0][m].cy ) {
				y = this.pages[0][m].y;
				break;
			}
		}

		if ( i == this.currentPage.pageX ) {
			i += this.directionX;

			if ( i < 0 ) {
				i = 0;
			} else if ( i >= this.pages.length ) {
				i = this.pages.length - 1;
			}

			x = this.pages[i][0].x;
		}

		if ( m == this.currentPage.pageY ) {
			m += this.directionY;

			if ( m < 0 ) {
				m = 0;
			} else if ( m >= this.pages[0].length ) {
				m = this.pages[0].length - 1;
			}

			y = this.pages[0][m].y;
		}

		return {
			x: x,
			y: y,
			pageX: i,
			pageY: m
		};
	},

	goToPage: function (x, y, time, easing) {
		easing = easing || this.options.bounceEasing;

		if ( x >= this.pages.length ) {
			x = this.pages.length - 1;
		} else if ( x < 0 ) {
			x = 0;
		}

		if ( y >= this.pages[x].length ) {
			y = this.pages[x].length - 1;
		} else if ( y < 0 ) {
			y = 0;
		}

		var posX = this.pages[x][y].x,
			posY = this.pages[x][y].y;

		time = time === undefined ? this.options.snapSpeed || Math.max(
			Math.max(
				Math.min(Math.abs(posX - this.x), 1000),
				Math.min(Math.abs(posY - this.y), 1000)
			), 300) : time;

		this.currentPage = {
			x: posX,
			y: posY,
			pageX: x,
			pageY: y
		};

		this.scrollTo(posX, posY, time, easing);
	},

	next: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x++;

		if ( x >= this.pages.length && this.hasVerticalScroll ) {
			x = 0;
			y++;
		}

		this.goToPage(x, y, time, easing);
	},

	prev: function (time, easing) {
		var x = this.currentPage.pageX,
			y = this.currentPage.pageY;

		x--;

		if ( x < 0 && this.hasVerticalScroll ) {
			x = 0;
			y--;
		}

		this.goToPage(x, y, time, easing);
	},

	_initKeys: function (e) {
		// default key bindings
		var keys = {
			pageUp: 33,
			pageDown: 34,
			end: 35,
			home: 36,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
		var i;

		// if you give me characters I give you keycode
		if ( typeof this.options.keyBindings == 'object' ) {
			for ( i in this.options.keyBindings ) {
				if ( typeof this.options.keyBindings[i] == 'string' ) {
					this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
				}
			}
		} else {
			this.options.keyBindings = {};
		}

		for ( i in keys ) {
			this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
		}

		utils.addEvent(window, 'keydown', this);

		this.on('destroy', function () {
			utils.removeEvent(window, 'keydown', this);
		});
	},

	_key: function (e) {
		if ( !this.enabled ) {
			return;
		}

		var snap = this.options.snap,	// we are using this alot, better to cache it
			newX = snap ? this.currentPage.pageX : this.x,
			newY = snap ? this.currentPage.pageY : this.y,
			now = utils.getTime(),
			prevTime = this.keyTime || 0,
			acceleration = 0.250,
			pos;

		if ( this.options.useTransition && this.isInTransition ) {
			pos = this.getComputedPosition();

			this._translate(Math.round(pos.x), Math.round(pos.y));
			this.isInTransition = false;
		}

		this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

		switch ( e.keyCode ) {
			case this.options.keyBindings.pageUp:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX += snap ? 1 : this.wrapperWidth;
				} else {
					newY += snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.pageDown:
				if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
					newX -= snap ? 1 : this.wrapperWidth;
				} else {
					newY -= snap ? 1 : this.wrapperHeight;
				}
				break;
			case this.options.keyBindings.end:
				newX = snap ? this.pages.length-1 : this.maxScrollX;
				newY = snap ? this.pages[0].length-1 : this.maxScrollY;
				break;
			case this.options.keyBindings.home:
				newX = 0;
				newY = 0;
				break;
			case this.options.keyBindings.left:
				newX += snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.up:
				newY += snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.right:
				newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
				break;
			case this.options.keyBindings.down:
				newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
				break;
			default:
				return;
		}

		if ( snap ) {
			this.goToPage(newX, newY);
			return;
		}

		if ( newX > 0 ) {
			newX = 0;
			this.keyAcceleration = 0;
		} else if ( newX < this.maxScrollX ) {
			newX = this.maxScrollX;
			this.keyAcceleration = 0;
		}

		if ( newY > 0 ) {
			newY = 0;
			this.keyAcceleration = 0;
		} else if ( newY < this.maxScrollY ) {
			newY = this.maxScrollY;
			this.keyAcceleration = 0;
		}

		this.scrollTo(newX, newY, 0);

		this.keyTime = now;
	},

	_animate: function (destX, destY, duration, easingFn) {
		var that = this,
			startX = this.x,
			startY = this.y,
			startTime = utils.getTime(),
			destTime = startTime + duration;

		function step () {
			var now = utils.getTime(),
				newX, newY,
				easing;

			if ( now >= destTime ) {
				that.isAnimating = false;
				that._translate(destX, destY);

				if ( !that.resetPosition(that.options.bounceTime) ) {
					that._execEvent('scrollEnd');
				}

				return;
			}

			now = ( now - startTime ) / duration;
			easing = easingFn(now);
			newX = ( destX - startX ) * easing + startX;
			newY = ( destY - startY ) * easing + startY;
			that._translate(newX, newY);

			if ( that.isAnimating ) {
				rAF(step);
			}
		}

		this.isAnimating = true;
		step();
	},
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
			case 'orientationchange':
			case 'resize':
				this._resize();
				break;
			case 'transitionend':
			case 'webkitTransitionEnd':
			case 'oTransitionEnd':
			case 'MSTransitionEnd':
				this._transitionEnd(e);
				break;
			case 'wheel':
			case 'DOMMouseScroll':
			case 'mousewheel':
				this._wheel(e);
				break;
			case 'keydown':
				this._key(e);
				break;
			case 'click':
				if ( this.enabled && !e._constructed ) {
					e.preventDefault();
					e.stopPropagation();
				}
				break;
		}
	}
};
function createDefaultScrollbar (direction, interactive, type) {
	var scrollbar = document.createElement('div'),
		indicator = document.createElement('div');

	if ( type === true ) {
		scrollbar.style.cssText = 'position:absolute;z-index:9999';
		indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	}

	indicator.className = 'iScrollIndicator';

	if ( direction == 'h' ) {
		if ( type === true ) {
			scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
			indicator.style.height = '100%';
		}
		scrollbar.className = 'iScrollHorizontalScrollbar';
	} else {
		if ( type === true ) {
			scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
			indicator.style.width = '100%';
		}
		scrollbar.className = 'iScrollVerticalScrollbar';
	}

	scrollbar.style.cssText += ';overflow:hidden';

	if ( !interactive ) {
		scrollbar.style.pointerEvents = 'none';
	}

	scrollbar.appendChild(indicator);

	return scrollbar;
}

function Indicator (scroller, options) {
	this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	this.wrapperStyle = this.wrapper.style;
	this.indicator = this.wrapper.children[0];
	this.indicatorStyle = this.indicator.style;
	this.scroller = scroller;

	this.options = {
		listenX: true,
		listenY: true,
		interactive: false,
		resize: true,
		defaultScrollbars: false,
		shrink: false,
		fade: false,
		speedRatioX: 0,
		speedRatioY: 0
	};

	for ( var i in options ) {
		this.options[i] = options[i];
	}

	this.sizeRatioX = 1;
	this.sizeRatioY = 1;
	this.maxPosX = 0;
	this.maxPosY = 0;

	if ( this.options.interactive ) {
		if ( !this.options.disableTouch ) {
			utils.addEvent(this.indicator, 'touchstart', this);
			utils.addEvent(window, 'touchend', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(this.indicator, 'mousedown', this);
			utils.addEvent(window, 'mouseup', this);
		}
	}

	if ( this.options.fade ) {
		this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
		var durationProp = utils.style.transitionDuration;
		this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
		// remove 0.0001ms
		var self = this;
		if(utils.isBadAndroid) {
			rAF(function() {
				if(self.wrapperStyle[durationProp] === '0.0001ms') {
					self.wrapperStyle[durationProp] = '0s';
				}
			});
		}
		this.wrapperStyle.opacity = '0';
	}
}

Indicator.prototype = {
	handleEvent: function (e) {
		switch ( e.type ) {
			case 'touchstart':
			case 'pointerdown':
			case 'MSPointerDown':
			case 'mousedown':
				this._start(e);
				break;
			case 'touchmove':
			case 'pointermove':
			case 'MSPointerMove':
			case 'mousemove':
				this._move(e);
				break;
			case 'touchend':
			case 'pointerup':
			case 'MSPointerUp':
			case 'mouseup':
			case 'touchcancel':
			case 'pointercancel':
			case 'MSPointerCancel':
			case 'mousecancel':
				this._end(e);
				break;
		}
	},

	destroy: function () {
		if ( this.options.fadeScrollbars ) {
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
		}
		if ( this.options.interactive ) {
			utils.removeEvent(this.indicator, 'touchstart', this);
			utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
			utils.removeEvent(this.indicator, 'mousedown', this);

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			utils.removeEvent(window, 'touchend', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
			utils.removeEvent(window, 'mouseup', this);
		}

		if ( this.options.defaultScrollbars ) {
			this.wrapper.parentNode.removeChild(this.wrapper);
		}
	},

	_start: function (e) {
		var point = e.touches ? e.touches[0] : e;

		e.preventDefault();
		e.stopPropagation();

		this.transitionTime();

		this.initiated = true;
		this.moved = false;
		this.lastPointX	= point.pageX;
		this.lastPointY	= point.pageY;

		this.startTime	= utils.getTime();

		if ( !this.options.disableTouch ) {
			utils.addEvent(window, 'touchmove', this);
		}
		if ( !this.options.disablePointer ) {
			utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
		}
		if ( !this.options.disableMouse ) {
			utils.addEvent(window, 'mousemove', this);
		}

		this.scroller._execEvent('beforeScrollStart');
	},

	_move: function (e) {
		var point = e.touches ? e.touches[0] : e,
			deltaX, deltaY,
			newX, newY,
			timestamp = utils.getTime();

		if ( !this.moved ) {
			this.scroller._execEvent('scrollStart');
		}

		this.moved = true;

		deltaX = point.pageX - this.lastPointX;
		this.lastPointX = point.pageX;

		deltaY = point.pageY - this.lastPointY;
		this.lastPointY = point.pageY;

		newX = this.x + deltaX;
		newY = this.y + deltaY;

		this._pos(newX, newY);

// INSERT POINT: indicator._move

		e.preventDefault();
		e.stopPropagation();
	},

	_end: function (e) {
		if ( !this.initiated ) {
			return;
		}

		this.initiated = false;

		e.preventDefault();
		e.stopPropagation();

		utils.removeEvent(window, 'touchmove', this);
		utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
		utils.removeEvent(window, 'mousemove', this);

		if ( this.scroller.options.snap ) {
			var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

			var time = this.options.snapSpeed || Math.max(
					Math.max(
						Math.min(Math.abs(this.scroller.x - snap.x), 1000),
						Math.min(Math.abs(this.scroller.y - snap.y), 1000)
					), 300);

			if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
				this.scroller.directionX = 0;
				this.scroller.directionY = 0;
				this.scroller.currentPage = snap;
				this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
			}
		}

		if ( this.moved ) {
			this.scroller._execEvent('scrollEnd');
		}
	},

	transitionTime: function (time) {
		time = time || 0;
		var durationProp = utils.style.transitionDuration;
		this.indicatorStyle[durationProp] = time + 'ms';

		if ( !time && utils.isBadAndroid ) {
			this.indicatorStyle[durationProp] = '0.0001ms';
			// remove 0.0001ms
			var self = this;
			rAF(function() {
				if(self.indicatorStyle[durationProp] === '0.0001ms') {
					self.indicatorStyle[durationProp] = '0s';
				}
			});
		}
	},

	transitionTimingFunction: function (easing) {
		this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	},

	refresh: function () {
		this.transitionTime();

		if ( this.options.listenX && !this.options.listenY ) {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
		} else if ( this.options.listenY && !this.options.listenX ) {
			this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
		} else {
			this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
		}

		if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
			utils.addClass(this.wrapper, 'iScrollBothScrollbars');
			utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '8px';
				} else {
					this.wrapper.style.bottom = '8px';
				}
			}
		} else {
			utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
			utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

			if ( this.options.defaultScrollbars && this.options.customStyle ) {
				if ( this.options.listenX ) {
					this.wrapper.style.right = '2px';
				} else {
					this.wrapper.style.bottom = '2px';
				}
			}
		}

		var r = this.wrapper.offsetHeight;	// force refresh

		if ( this.options.listenX ) {
			this.wrapperWidth = this.wrapper.clientWidth;
			if ( this.options.resize ) {
				this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
				this.indicatorStyle.width = this.indicatorWidth + 'px';
			} else {
				this.indicatorWidth = this.indicator.clientWidth;
			}

			this.maxPosX = this.wrapperWidth - this.indicatorWidth;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryX = -this.indicatorWidth + 8;
				this.maxBoundaryX = this.wrapperWidth - 8;
			} else {
				this.minBoundaryX = 0;
				this.maxBoundaryX = this.maxPosX;
			}

			this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
		}

		if ( this.options.listenY ) {
			this.wrapperHeight = this.wrapper.clientHeight;
			if ( this.options.resize ) {
				this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
				this.indicatorStyle.height = this.indicatorHeight + 'px';
			} else {
				this.indicatorHeight = this.indicator.clientHeight;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;

			if ( this.options.shrink == 'clip' ) {
				this.minBoundaryY = -this.indicatorHeight + 8;
				this.maxBoundaryY = this.wrapperHeight - 8;
			} else {
				this.minBoundaryY = 0;
				this.maxBoundaryY = this.maxPosY;
			}

			this.maxPosY = this.wrapperHeight - this.indicatorHeight;
			this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
		}

		this.updatePosition();
	},

	updatePosition: function () {
		var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
			y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

		if ( !this.options.ignoreBoundaries ) {
			if ( x < this.minBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth + x, 8);
					this.indicatorStyle.width = this.width + 'px';
				}
				x = this.minBoundaryX;
			} else if ( x > this.maxBoundaryX ) {
				if ( this.options.shrink == 'scale' ) {
					this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
					this.indicatorStyle.width = this.width + 'px';
					x = this.maxPosX + this.indicatorWidth - this.width;
				} else {
					x = this.maxBoundaryX;
				}
			} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
				this.width = this.indicatorWidth;
				this.indicatorStyle.width = this.width + 'px';
			}

			if ( y < this.minBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight + y * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
				}
				y = this.minBoundaryY;
			} else if ( y > this.maxBoundaryY ) {
				if ( this.options.shrink == 'scale' ) {
					this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
					this.indicatorStyle.height = this.height + 'px';
					y = this.maxPosY + this.indicatorHeight - this.height;
				} else {
					y = this.maxBoundaryY;
				}
			} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
				this.height = this.indicatorHeight;
				this.indicatorStyle.height = this.height + 'px';
			}
		}

		this.x = x;
		this.y = y;

		if ( this.scroller.options.useTransform ) {
			this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
		} else {
			this.indicatorStyle.left = x + 'px';
			this.indicatorStyle.top = y + 'px';
		}
	},

	_pos: function (x, y) {
		if ( x < 0 ) {
			x = 0;
		} else if ( x > this.maxPosX ) {
			x = this.maxPosX;
		}

		if ( y < 0 ) {
			y = 0;
		} else if ( y > this.maxPosY ) {
			y = this.maxPosY;
		}

		x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
		y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

		this.scroller.scrollTo(x, y);
	},

	fade: function (val, hold) {
		if ( hold && !this.visible ) {
			return;
		}

		clearTimeout(this.fadeTimeout);
		this.fadeTimeout = null;

		var time = val ? 250 : 500,
			delay = val ? 0 : 300;

		val = val ? '1' : '0';

		this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

		this.fadeTimeout = setTimeout((function (val) {
			this.wrapperStyle.opacity = val;
			this.visible = +val;
		}).bind(this, val), delay);
	}
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = IScroll;
} else if ( typeof define == 'function' && define.amd ) {
        define( function () { return IScroll; } );
} else {
	window.IScroll = IScroll;
}

})(window, document, Math);


    })( module.exports , module , __context );
    __context.____MODULES[ "695124f7289a155034d4b8cbdf8df850" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "cd2bffb7f2508310dfd41bb26a34f44d" ,
        filename : "swiper-3.3.1.min.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    /**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 7, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var r;return e(this).each(function(){var e=new t(this,a);r||(r=e)}),r}}var a,t=function(e,i){function s(e){return Math.floor(e)}function n(){b.autoplayTimeoutId=setTimeout(function(){b.params.loop?(b.fixLoop(),b._slideNext(),b.emit("onAutoplay",b)):b.isEnd?i.autoplayStopOnLast?b.stopAutoplay():(b._slideTo(0),b.emit("onAutoplay",b)):(b._slideNext(),b.emit("onAutoplay",b))},b.params.autoplay)}function o(e,t){var r=a(e.target);if(!r.is(t))if("string"==typeof t)r=r.parents(t);else if(t.nodeType){var i;return r.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==r.length)return r[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){b.onResize(!0),b.emit("onObserverUpdate",b,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),b.observers.push(r)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!b.params.allowSwipeToNext&&(b.isHorizontal()&&39===a||!b.isHorizontal()&&40===a))return!1;if(!b.params.allowSwipeToPrev&&(b.isHorizontal()&&37===a||!b.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(b.container.parents(".swiper-slide").length>0&&0===b.container.parents(".swiper-slide-active").length)return;var r={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,s=window.innerHeight,n=b.container.offset();b.rtl&&(n.left=n.left-b.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+b.width,n.top],[n.left,n.top+b.height],[n.left+b.width,n.top+b.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=r.left&&p[0]<=r.left+i&&p[1]>=r.top&&p[1]<=r.top+s&&(t=!0)}if(!t)return}b.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!b.rtl||37===a&&b.rtl)&&b.slideNext(),(37===a&&!b.rtl||39===a&&b.rtl)&&b.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&b.slideNext(),38===a&&b.slidePrev())}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=b.mousewheel.event,t=0,r=b.rtl?-1:1;if("mousewheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*r}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*r:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*r}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*r:-e.deltaY;if(0!==t){if(b.params.mousewheelInvert&&(t=-t),b.params.freeMode){var i=b.getWrapperTranslate()+t*b.params.mousewheelSensitivity,s=b.isBeginning,n=b.isEnd;if(i>=b.minTranslate()&&(i=b.minTranslate()),i<=b.maxTranslate()&&(i=b.maxTranslate()),b.setWrapperTransition(0),b.setWrapperTranslate(i),b.updateProgress(),b.updateActiveIndex(),(!s&&b.isBeginning||!n&&b.isEnd)&&b.updateClasses(),b.params.freeModeSticky?(clearTimeout(b.mousewheel.timeout),b.mousewheel.timeout=setTimeout(function(){b.slideReset()},300)):b.params.lazyLoading&&b.lazy&&b.lazy.load(),0===i||i===b.maxTranslate())return}else{if((new window.Date).getTime()-b.mousewheel.lastScrollTime>60)if(0>t)if(b.isEnd&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slideNext();else if(b.isBeginning&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slidePrev();b.mousewheel.lastScrollTime=(new window.Date).getTime()}return b.params.autoplay&&b.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function u(e,t){e=a(e);var r,i,s,n=b.rtl?-1:1;r=e.attr("data-swiper-parallax")||"0",i=e.attr("data-swiper-parallax-x"),s=e.attr("data-swiper-parallax-y"),i||s?(i=i||"0",s=s||"0"):b.isHorizontal()?(i=r,s="0"):(s=r,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",s=s.indexOf("%")>=0?parseInt(s,10)*t+"%":s*t+"px",e.transform("translate3d("+i+", "+s+",0px)")}function c(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,i);var m={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},h=i&&i.virtualTranslate;i=i||{};var f={};for(var g in i)if("object"!=typeof i[g]||null===i[g]||(i[g].nodeType||i[g]===window||i[g]===document||"undefined"!=typeof r&&i[g]instanceof r||"undefined"!=typeof jQuery&&i[g]instanceof jQuery))f[g]=i[g];else{f[g]={};for(var v in i[g])f[g][v]=i[g][v]}for(var w in m)if("undefined"==typeof i[w])i[w]=m[w];else if("object"==typeof i[w])for(var y in m[w])"undefined"==typeof i[w][y]&&(i[w][y]=m[w][y]);var b=this;if(b.params=i,b.originalParams=f,b.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof r&&(a=r),("undefined"!=typeof a||(a="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r))&&(b.$=a,b.currentBreakpoint=void 0,b.getActiveBreakpoint=function(){if(!b.params.breakpoints)return!1;var e,a=!1,t=[];for(e in b.params.breakpoints)b.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var r=0;r<t.length;r++)e=t[r],e>=window.innerWidth&&!a&&(a=e);return a||"max"},b.setBreakpoint=function(){var e=b.getActiveBreakpoint();if(e&&b.currentBreakpoint!==e){var a=e in b.params.breakpoints?b.params.breakpoints[e]:b.originalParams,t=b.params.loop&&a.slidesPerView!==b.params.slidesPerView;for(var r in a)b.params[r]=a[r];b.currentBreakpoint=e,t&&b.destroyLoop&&b.reLoop(!0)}},b.params.breakpoints&&b.setBreakpoint(),b.container=a(e),0!==b.container.length)){if(b.container.length>1){var x=[];return b.container.each(function(){x.push(new t(this,i))}),x}b.container[0].swiper=b,b.container.data("swiper",b),b.classNames.push("swiper-container-"+b.params.direction),b.params.freeMode&&b.classNames.push("swiper-container-free-mode"),b.support.flexbox||(b.classNames.push("swiper-container-no-flexbox"),b.params.slidesPerColumn=1),b.params.autoHeight&&b.classNames.push("swiper-container-autoheight"),(b.params.parallax||b.params.watchSlidesVisibility)&&(b.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(b.params.effect)>=0&&(b.support.transforms3d?(b.params.watchSlidesProgress=!0,b.classNames.push("swiper-container-3d")):b.params.effect="slide"),"slide"!==b.params.effect&&b.classNames.push("swiper-container-"+b.params.effect),"cube"===b.params.effect&&(b.params.resistanceRatio=0,b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.centeredSlides=!1,b.params.spaceBetween=0,b.params.virtualTranslate=!0,b.params.setWrapperSize=!1),("fade"===b.params.effect||"flip"===b.params.effect)&&(b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.watchSlidesProgress=!0,b.params.spaceBetween=0,b.params.setWrapperSize=!1,"undefined"==typeof h&&(b.params.virtualTranslate=!0)),b.params.grabCursor&&b.support.touch&&(b.params.grabCursor=!1),b.wrapper=b.container.children("."+b.params.wrapperClass),b.params.pagination&&(b.paginationContainer=a(b.params.pagination),b.params.uniqueNavElements&&"string"==typeof b.params.pagination&&b.paginationContainer.length>1&&1===b.container.find(b.params.pagination).length&&(b.paginationContainer=b.container.find(b.params.pagination)),"bullets"===b.params.paginationType&&b.params.paginationClickable?b.paginationContainer.addClass("swiper-pagination-clickable"):b.params.paginationClickable=!1,b.paginationContainer.addClass("swiper-pagination-"+b.params.paginationType)),(b.params.nextButton||b.params.prevButton)&&(b.params.nextButton&&(b.nextButton=a(b.params.nextButton),b.params.uniqueNavElements&&"string"==typeof b.params.nextButton&&b.nextButton.length>1&&1===b.container.find(b.params.nextButton).length&&(b.nextButton=b.container.find(b.params.nextButton))),b.params.prevButton&&(b.prevButton=a(b.params.prevButton),b.params.uniqueNavElements&&"string"==typeof b.params.prevButton&&b.prevButton.length>1&&1===b.container.find(b.params.prevButton).length&&(b.prevButton=b.container.find(b.params.prevButton)))),b.isHorizontal=function(){return"horizontal"===b.params.direction},b.rtl=b.isHorizontal()&&("rtl"===b.container[0].dir.toLowerCase()||"rtl"===b.container.css("direction")),b.rtl&&b.classNames.push("swiper-container-rtl"),b.rtl&&(b.wrongRTL="-webkit-box"===b.wrapper.css("display")),b.params.slidesPerColumn>1&&b.classNames.push("swiper-container-multirow"),b.device.android&&b.classNames.push("swiper-container-android"),b.container.addClass(b.classNames.join(" ")),b.translate=0,b.progress=0,b.velocity=0,b.lockSwipeToNext=function(){b.params.allowSwipeToNext=!1},b.lockSwipeToPrev=function(){b.params.allowSwipeToPrev=!1},b.lockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!1},b.unlockSwipeToNext=function(){b.params.allowSwipeToNext=!0},b.unlockSwipeToPrev=function(){b.params.allowSwipeToPrev=!0},b.unlockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!0},b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab"),b.imagesToLoad=[],b.imagesLoaded=0,b.loadImage=function(e,a,t,r,i){function s(){i&&i()}var n;e.complete&&r?s():a?(n=new window.Image,n.onload=s,n.onerror=s,t&&(n.srcset=t),a&&(n.src=a)):s()},b.preloadImages=function(){function e(){"undefined"!=typeof b&&null!==b&&(void 0!==b.imagesLoaded&&b.imagesLoaded++,b.imagesLoaded===b.imagesToLoad.length&&(b.params.updateOnImagesReady&&b.update(),b.emit("onImagesReady",b)))}b.imagesToLoad=b.container.find("img");for(var a=0;a<b.imagesToLoad.length;a++)b.loadImage(b.imagesToLoad[a],b.imagesToLoad[a].currentSrc||b.imagesToLoad[a].getAttribute("src"),b.imagesToLoad[a].srcset||b.imagesToLoad[a].getAttribute("srcset"),!0,e)},b.autoplayTimeoutId=void 0,b.autoplaying=!1,b.autoplayPaused=!1,b.startAutoplay=function(){return"undefined"!=typeof b.autoplayTimeoutId?!1:b.params.autoplay?b.autoplaying?!1:(b.autoplaying=!0,b.emit("onAutoplayStart",b),void n()):!1},b.stopAutoplay=function(e){b.autoplayTimeoutId&&(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplaying=!1,b.autoplayTimeoutId=void 0,b.emit("onAutoplayStop",b))},b.pauseAutoplay=function(e){b.autoplayPaused||(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplayPaused=!0,0===e?(b.autoplayPaused=!1,n()):b.wrapper.transitionEnd(function(){b&&(b.autoplayPaused=!1,b.autoplaying?n():b.stopAutoplay())}))},b.minTranslate=function(){return-b.snapGrid[0]},b.maxTranslate=function(){return-b.snapGrid[b.snapGrid.length-1]},b.updateAutoHeight=function(){var e=b.slides.eq(b.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&b.wrapper.css("height",a+"px")}},b.updateContainerSize=function(){var e,a;e="undefined"!=typeof b.params.width?b.params.width:b.container[0].clientWidth,a="undefined"!=typeof b.params.height?b.params.height:b.container[0].clientHeight,0===e&&b.isHorizontal()||0===a&&!b.isHorizontal()||(e=e-parseInt(b.container.css("padding-left"),10)-parseInt(b.container.css("padding-right"),10),a=a-parseInt(b.container.css("padding-top"),10)-parseInt(b.container.css("padding-bottom"),10),b.width=e,b.height=a,b.size=b.isHorizontal()?b.width:b.height)},b.updateSlidesSize=function(){b.slides=b.wrapper.children("."+b.params.slideClass),b.snapGrid=[],b.slidesGrid=[],b.slidesSizesGrid=[];var e,a=b.params.spaceBetween,t=-b.params.slidesOffsetBefore,r=0,i=0;if("undefined"!=typeof b.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*b.size),b.virtualSize=-a,b.rtl?b.slides.css({marginLeft:"",marginTop:""}):b.slides.css({marginRight:"",marginBottom:""});var n;b.params.slidesPerColumn>1&&(n=Math.floor(b.slides.length/b.params.slidesPerColumn)===b.slides.length/b.params.slidesPerColumn?b.slides.length:Math.ceil(b.slides.length/b.params.slidesPerColumn)*b.params.slidesPerColumn,"auto"!==b.params.slidesPerView&&"row"===b.params.slidesPerColumnFill&&(n=Math.max(n,b.params.slidesPerView*b.params.slidesPerColumn)));var o,l=b.params.slidesPerColumn,p=n/l,d=p-(b.params.slidesPerColumn*p-b.slides.length);for(e=0;e<b.slides.length;e++){o=0;var u=b.slides.eq(e);if(b.params.slidesPerColumn>1){var c,m,h;"column"===b.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css({"margin-top":0!==h&&b.params.spaceBetween&&b.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===b.params.slidesPerView?(o=b.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),b.params.roundLengths&&(o=s(o))):(o=(b.size-(b.params.slidesPerView-1)*a)/b.params.slidesPerView,b.params.roundLengths&&(o=s(o)),b.isHorizontal()?b.slides[e].style.width=o+"px":b.slides[e].style.height=o+"px"),b.slides[e].swiperSlideSize=o,b.slidesSizesGrid.push(o),b.params.centeredSlides?(t=t+o/2+r/2+a,0===e&&(t=t-b.size/2-a),Math.abs(t)<.001&&(t=0),i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t)):(i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t),t=t+o+a),b.virtualSize+=o+a,r=o,i++)}b.virtualSize=Math.max(b.virtualSize,b.size)+b.params.slidesOffsetAfter;var f;if(b.rtl&&b.wrongRTL&&("slide"===b.params.effect||"coverflow"===b.params.effect)&&b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),(!b.support.flexbox||b.params.setWrapperSize)&&(b.isHorizontal()?b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}):b.wrapper.css({height:b.virtualSize+b.params.spaceBetween+"px"})),b.params.slidesPerColumn>1&&(b.virtualSize=(o+b.params.spaceBetween)*n,b.virtualSize=Math.ceil(b.virtualSize/b.params.slidesPerColumn)-b.params.spaceBetween,b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),b.params.centeredSlides)){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<b.virtualSize+b.snapGrid[0]&&f.push(b.snapGrid[e]);b.snapGrid=f}if(!b.params.centeredSlides){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<=b.virtualSize-b.size&&f.push(b.snapGrid[e]);b.snapGrid=f,Math.floor(b.virtualSize-b.size)-Math.floor(b.snapGrid[b.snapGrid.length-1])>1&&b.snapGrid.push(b.virtualSize-b.size)}0===b.snapGrid.length&&(b.snapGrid=[0]),0!==b.params.spaceBetween&&(b.isHorizontal()?b.rtl?b.slides.css({marginLeft:a+"px"}):b.slides.css({marginRight:a+"px"}):b.slides.css({marginBottom:a+"px"})),b.params.watchSlidesProgress&&b.updateSlidesOffset()}},b.updateSlidesOffset=function(){for(var e=0;e<b.slides.length;e++)b.slides[e].swiperSlideOffset=b.isHorizontal()?b.slides[e].offsetLeft:b.slides[e].offsetTop},b.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=b.translate||0),0!==b.slides.length){"undefined"==typeof b.slides[0].swiperSlideOffset&&b.updateSlidesOffset();var a=-e;b.rtl&&(a=e),b.slides.removeClass(b.params.slideVisibleClass);for(var t=0;t<b.slides.length;t++){var r=b.slides[t],i=(a-r.swiperSlideOffset)/(r.swiperSlideSize+b.params.spaceBetween);if(b.params.watchSlidesVisibility){var s=-(a-r.swiperSlideOffset),n=s+b.slidesSizesGrid[t],o=s>=0&&s<b.size||n>0&&n<=b.size||0>=s&&n>=b.size;o&&b.slides.eq(t).addClass(b.params.slideVisibleClass)}r.progress=b.rtl?-i:i}}},b.updateProgress=function(e){"undefined"==typeof e&&(e=b.translate||0);var a=b.maxTranslate()-b.minTranslate(),t=b.isBeginning,r=b.isEnd;0===a?(b.progress=0,b.isBeginning=b.isEnd=!0):(b.progress=(e-b.minTranslate())/a,b.isBeginning=b.progress<=0,b.isEnd=b.progress>=1),b.isBeginning&&!t&&b.emit("onReachBeginning",b),b.isEnd&&!r&&b.emit("onReachEnd",b),b.params.watchSlidesProgress&&b.updateSlidesProgress(e),b.emit("onProgress",b,b.progress)},b.updateActiveIndex=function(){var e,a,t,r=b.rtl?b.translate:-b.translate;for(a=0;a<b.slidesGrid.length;a++)"undefined"!=typeof b.slidesGrid[a+1]?r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]-(b.slidesGrid[a+1]-b.slidesGrid[a])/2?e=a:r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]&&(e=a+1):r>=b.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/b.params.slidesPerGroup),t>=b.snapGrid.length&&(t=b.snapGrid.length-1),e!==b.activeIndex&&(b.snapIndex=t,b.previousIndex=b.activeIndex,b.activeIndex=e,b.updateClasses())},b.updateClasses=function(){b.slides.removeClass(b.params.slideActiveClass+" "+b.params.slideNextClass+" "+b.params.slidePrevClass);var e=b.slides.eq(b.activeIndex);e.addClass(b.params.slideActiveClass);var t=e.next("."+b.params.slideClass).addClass(b.params.slideNextClass);b.params.loop&&0===t.length&&b.slides.eq(0).addClass(b.params.slideNextClass);var r=e.prev("."+b.params.slideClass).addClass(b.params.slidePrevClass);if(b.params.loop&&0===r.length&&b.slides.eq(-1).addClass(b.params.slidePrevClass),b.paginationContainer&&b.paginationContainer.length>0){var i,s=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length;if(b.params.loop?(i=Math.ceil((b.activeIndex-b.loopedSlides)/b.params.slidesPerGroup),i>b.slides.length-1-2*b.loopedSlides&&(i-=b.slides.length-2*b.loopedSlides),i>s-1&&(i-=s),0>i&&"bullets"!==b.params.paginationType&&(i=s+i)):i="undefined"!=typeof b.snapIndex?b.snapIndex:b.activeIndex||0,"bullets"===b.params.paginationType&&b.bullets&&b.bullets.length>0&&(b.bullets.removeClass(b.params.bulletActiveClass),b.paginationContainer.length>1?b.bullets.each(function(){a(this).index()===i&&a(this).addClass(b.params.bulletActiveClass)}):b.bullets.eq(i).addClass(b.params.bulletActiveClass)),"fraction"===b.params.paginationType&&(b.paginationContainer.find("."+b.params.paginationCurrentClass).text(i+1),b.paginationContainer.find("."+b.params.paginationTotalClass).text(s)),"progress"===b.params.paginationType){var n=(i+1)/s,o=n,l=1;b.isHorizontal()||(l=n,o=1),b.paginationContainer.find("."+b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+l+")").transition(b.params.speed)}"custom"===b.params.paginationType&&b.params.paginationCustomRender&&(b.paginationContainer.html(b.params.paginationCustomRender(b,i+1,s)),b.emit("onPaginationRendered",b,b.paginationContainer[0]))}b.params.loop||(b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.isBeginning?(b.prevButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.prevButton)):(b.prevButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.prevButton))),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.isEnd?(b.nextButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.nextButton)):(b.nextButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.nextButton))))},b.updatePagination=function(){if(b.params.pagination&&b.paginationContainer&&b.paginationContainer.length>0){var e="";if("bullets"===b.params.paginationType){for(var a=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length,t=0;a>t;t++)e+=b.params.paginationBulletRender?b.params.paginationBulletRender(t,b.params.bulletClass):"<"+b.params.paginationElement+' class="'+b.params.bulletClass+'"></'+b.params.paginationElement+">";b.paginationContainer.html(e),b.bullets=b.paginationContainer.find("."+b.params.bulletClass),b.params.paginationClickable&&b.params.a11y&&b.a11y&&b.a11y.initPagination()}"fraction"===b.params.paginationType&&(e=b.params.paginationFractionRender?b.params.paginationFractionRender(b,b.params.paginationCurrentClass,b.params.paginationTotalClass):'<span class="'+b.params.paginationCurrentClass+'"></span> / <span class="'+b.params.paginationTotalClass+'"></span>',b.paginationContainer.html(e)),"progress"===b.params.paginationType&&(e=b.params.paginationProgressRender?b.params.paginationProgressRender(b,b.params.paginationProgressbarClass):'<span class="'+b.params.paginationProgressbarClass+'"></span>',b.paginationContainer.html(e)),"custom"!==b.params.paginationType&&b.emit("onPaginationRendered",b,b.paginationContainer[0])}},b.update=function(e){function a(){r=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate()),b.setWrapperTranslate(r),b.updateActiveIndex(),b.updateClasses()}if(b.updateContainerSize(),b.updateSlidesSize(),b.updateProgress(),b.updatePagination(),b.updateClasses(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),e){var t,r;b.controller&&b.controller.spline&&(b.controller.spline=void 0),b.params.freeMode?(a(),b.params.autoHeight&&b.updateAutoHeight()):(t=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0),t||a())}else b.params.autoHeight&&b.updateAutoHeight()},b.onResize=function(e){b.params.breakpoints&&b.setBreakpoint();var a=b.params.allowSwipeToPrev,t=b.params.allowSwipeToNext;b.params.allowSwipeToPrev=b.params.allowSwipeToNext=!0,b.updateContainerSize(),b.updateSlidesSize(),("auto"===b.params.slidesPerView||b.params.freeMode||e)&&b.updatePagination(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),b.controller&&b.controller.spline&&(b.controller.spline=void 0);var r=!1;if(b.params.freeMode){var i=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate());b.setWrapperTranslate(i),b.updateActiveIndex(),b.updateClasses(),b.params.autoHeight&&b.updateAutoHeight()}else b.updateClasses(),r=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0);b.params.lazyLoading&&!r&&b.lazy&&b.lazy.load(),b.params.allowSwipeToPrev=a,b.params.allowSwipeToNext=t};var T=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?T=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(T=["MSPointerDown","MSPointerMove","MSPointerUp"]),b.touchEvents={start:b.support.touch||!b.params.simulateTouch?"touchstart":T[0],move:b.support.touch||!b.params.simulateTouch?"touchmove":T[1],end:b.support.touch||!b.params.simulateTouch?"touchend":T[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===b.params.touchEventsTarget?b.container:b.wrapper).addClass("swiper-wp8-"+b.params.direction),b.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===b.params.touchEventsTarget?b.container[0]:b.wrapper[0],s=b.support.touch?r:document,n=b.params.nested?!0:!1;b.browser.ie?(r[t](b.touchEvents.start,b.onTouchStart,!1),s[t](b.touchEvents.move,b.onTouchMove,n),s[t](b.touchEvents.end,b.onTouchEnd,!1)):(b.support.touch&&(r[t](b.touchEvents.start,b.onTouchStart,!1),r[t](b.touchEvents.move,b.onTouchMove,n),r[t](b.touchEvents.end,b.onTouchEnd,!1)),!i.simulateTouch||b.device.ios||b.device.android||(r[t]("mousedown",b.onTouchStart,!1),document[t]("mousemove",b.onTouchMove,n),document[t]("mouseup",b.onTouchEnd,!1))),window[t]("resize",b.onResize),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.nextButton[a]("click",b.onClickNext),b.params.a11y&&b.a11y&&b.nextButton[a]("keydown",b.a11y.onEnterKey)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.prevButton[a]("click",b.onClickPrev),b.params.a11y&&b.a11y&&b.prevButton[a]("keydown",b.a11y.onEnterKey)),b.params.pagination&&b.params.paginationClickable&&(b.paginationContainer[a]("click","."+b.params.bulletClass,b.onClickIndex),b.params.a11y&&b.a11y&&b.paginationContainer[a]("keydown","."+b.params.bulletClass,b.a11y.onEnterKey)),(b.params.preventClicks||b.params.preventClicksPropagation)&&r[t]("click",b.preventClicks,!0)},b.attachEvents=function(){b.initEvents()},b.detachEvents=function(){b.initEvents(!0)},b.allowClick=!0,b.preventClicks=function(e){b.allowClick||(b.params.preventClicks&&e.preventDefault(),b.params.preventClicksPropagation&&b.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},b.onClickNext=function(e){e.preventDefault(),(!b.isEnd||b.params.loop)&&b.slideNext()},b.onClickPrev=function(e){e.preventDefault(),(!b.isBeginning||b.params.loop)&&b.slidePrev()},b.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*b.params.slidesPerGroup;b.params.loop&&(t+=b.loopedSlides),b.slideTo(t)},b.updateClickedSlide=function(e){var t=o(e,"."+b.params.slideClass),r=!1;if(t)for(var i=0;i<b.slides.length;i++)b.slides[i]===t&&(r=!0);if(!t||!r)return b.clickedSlide=void 0,void(b.clickedIndex=void 0);if(b.clickedSlide=t,b.clickedIndex=a(t).index(),b.params.slideToClickedSlide&&void 0!==b.clickedIndex&&b.clickedIndex!==b.activeIndex){var s,n=b.clickedIndex;if(b.params.loop){if(b.animating)return;s=a(b.clickedSlide).attr("data-swiper-slide-index"),b.params.centeredSlides?n<b.loopedSlides-b.params.slidesPerView/2||n>b.slides.length-b.loopedSlides+b.params.slidesPerView/2?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n):n>b.slides.length-b.params.slidesPerView?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n)}else b.slideTo(n)}};var S,C,z,M,E,P,k,I,L,B,D="input, select, textarea, button",H=Date.now(),A=[];b.animating=!1,b.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,O;if(b.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(b.params.noSwiping&&o(e,"."+b.params.noSwipingClass))return void(b.allowClick=!0);if(!b.params.swipeHandler||o(e,b.params.swipeHandler)){var t=b.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,r=b.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(b.device.ios&&b.params.iOSEdgeSwipeDetection&&t<=b.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,O=void 0,b.touches.startX=t,b.touches.startY=r,M=Date.now(),b.allowClick=!0,b.updateContainerSize(),b.swipeDirection=void 0,b.params.threshold>0&&(I=!1),"touchstart"!==e.type){var i=!0;a(e.target).is(D)&&(i=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),i&&e.preventDefault()}b.emit("onTouchStart",b,e)}}}},b.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!G||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return b.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(b.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(b.params.onlyExternal)return b.allowClick=!1,void(S&&(b.touches.startX=b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.startY=b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,M=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return C=!0,void(b.allowClick=!1);if(z&&b.emit("onTouchMove",b,e),!(e.targetTouches&&e.targetTouches.length>1)){if(b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof E){var t=180*Math.atan2(Math.abs(b.touches.currentY-b.touches.startY),Math.abs(b.touches.currentX-b.touches.startX))/Math.PI;E=b.isHorizontal()?t>b.params.touchAngle:90-t>b.params.touchAngle}if(E&&b.emit("onTouchMoveOpposite",b,e),"undefined"==typeof O&&b.browser.ieTouch&&(b.touches.currentX!==b.touches.startX||b.touches.currentY!==b.touches.startY)&&(O=!0),S){if(E)return void(S=!1);if(O||!b.browser.ieTouch){b.allowClick=!1,b.emit("onSliderMove",b,e),e.preventDefault(),b.params.touchMoveStopPropagation&&!b.params.nested&&e.stopPropagation(),C||(i.loop&&b.fixLoop(),k=b.getWrapperTranslate(),b.setWrapperTransition(0),b.animating&&b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),b.params.autoplay&&b.autoplaying&&(b.params.autoplayDisableOnInteraction?b.stopAutoplay():b.pauseAutoplay()),B=!1,b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grabbing",b.container[0].style.cursor="-moz-grabbin",b.container[0].style.cursor="grabbing")),C=!0;var r=b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY;r*=b.params.touchRatio,b.rtl&&(r=-r),b.swipeDirection=r>0?"prev":"next",P=r+k;var s=!0;if(r>0&&P>b.minTranslate()?(s=!1,b.params.resistance&&(P=b.minTranslate()-1+Math.pow(-b.minTranslate()+k+r,b.params.resistanceRatio))):0>r&&P<b.maxTranslate()&&(s=!1,b.params.resistance&&(P=b.maxTranslate()+1-Math.pow(b.maxTranslate()-k-r,b.params.resistanceRatio))),
s&&(e.preventedByNestedSwiper=!0),!b.params.allowSwipeToNext&&"next"===b.swipeDirection&&k>P&&(P=k),!b.params.allowSwipeToPrev&&"prev"===b.swipeDirection&&P>k&&(P=k),b.params.followFinger){if(b.params.threshold>0){if(!(Math.abs(r)>b.params.threshold||I))return void(P=k);if(!I)return I=!0,b.touches.startX=b.touches.currentX,b.touches.startY=b.touches.currentY,P=k,void(b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY)}(b.params.freeMode||b.params.watchSlidesProgress)&&b.updateActiveIndex(),b.params.freeMode&&(0===A.length&&A.push({position:b.touches[b.isHorizontal()?"startX":"startY"],time:M}),A.push({position:b.touches[b.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),b.updateProgress(P),b.setWrapperTranslate(P)}}}}}},b.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),z&&b.emit("onTouchEnd",b,e),z=!1,S){b.params.grabCursor&&C&&S&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab");var t=Date.now(),r=t-M;if(b.allowClick&&(b.updateClickedSlide(e),b.emit("onTap",b,e),300>r&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){b&&(b.params.paginationHide&&b.paginationContainer.length>0&&!a(e.target).hasClass(b.params.bulletClass)&&b.paginationContainer.toggleClass(b.params.paginationHiddenClass),b.emit("onClick",b,e))},300)),300>r&&300>t-H&&(L&&clearTimeout(L),b.emit("onDoubleTap",b,e))),H=Date.now(),setTimeout(function(){b&&(b.allowClick=!0)},0),!S||!C||!b.swipeDirection||0===b.touches.diff||P===k)return void(S=C=!1);S=C=!1;var i;if(i=b.params.followFinger?b.rtl?b.translate:-b.translate:-P,b.params.freeMode){if(i<-b.minTranslate())return void b.slideTo(b.activeIndex);if(i>-b.maxTranslate())return void(b.slides.length<b.snapGrid.length?b.slideTo(b.snapGrid.length-1):b.slideTo(b.slides.length-1));if(b.params.freeModeMomentum){if(A.length>1){var s=A.pop(),n=A.pop(),o=s.position-n.position,l=s.time-n.time;b.velocity=o/l,b.velocity=b.velocity/2,Math.abs(b.velocity)<b.params.freeModeMinimumVelocity&&(b.velocity=0),(l>150||(new window.Date).getTime()-s.time>300)&&(b.velocity=0)}else b.velocity=0;A.length=0;var p=1e3*b.params.freeModeMomentumRatio,d=b.velocity*p,u=b.translate+d;b.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(b.velocity)*b.params.freeModeMomentumBounceRatio;if(u<b.maxTranslate())b.params.freeModeMomentumBounce?(u+b.maxTranslate()<-h&&(u=b.maxTranslate()-h),c=b.maxTranslate(),m=!0,B=!0):u=b.maxTranslate();else if(u>b.minTranslate())b.params.freeModeMomentumBounce?(u-b.minTranslate()>h&&(u=b.minTranslate()+h),c=b.minTranslate(),m=!0,B=!0):u=b.minTranslate();else if(b.params.freeModeSticky){var f,g=0;for(g=0;g<b.snapGrid.length;g+=1)if(b.snapGrid[g]>-u){f=g;break}u=Math.abs(b.snapGrid[f]-u)<Math.abs(b.snapGrid[f-1]-u)||"next"===b.swipeDirection?b.snapGrid[f]:b.snapGrid[f-1],b.rtl||(u=-u)}if(0!==b.velocity)p=b.rtl?Math.abs((-u-b.translate)/b.velocity):Math.abs((u-b.translate)/b.velocity);else if(b.params.freeModeSticky)return void b.slideReset();b.params.freeModeMomentumBounce&&m?(b.updateProgress(c),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating=!0,b.wrapper.transitionEnd(function(){b&&B&&(b.emit("onMomentumBounce",b),b.setWrapperTransition(b.params.speed),b.setWrapperTranslate(c),b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))})):b.velocity?(b.updateProgress(u),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))):b.updateProgress(u),b.updateActiveIndex()}return void((!b.params.freeModeMomentum||r>=b.params.longSwipesMs)&&(b.updateProgress(),b.updateActiveIndex()))}var v,w=0,y=b.slidesSizesGrid[0];for(v=0;v<b.slidesGrid.length;v+=b.params.slidesPerGroup)"undefined"!=typeof b.slidesGrid[v+b.params.slidesPerGroup]?i>=b.slidesGrid[v]&&i<b.slidesGrid[v+b.params.slidesPerGroup]&&(w=v,y=b.slidesGrid[v+b.params.slidesPerGroup]-b.slidesGrid[v]):i>=b.slidesGrid[v]&&(w=v,y=b.slidesGrid[b.slidesGrid.length-1]-b.slidesGrid[b.slidesGrid.length-2]);var x=(i-b.slidesGrid[w])/y;if(r>b.params.longSwipesMs){if(!b.params.longSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&(x>=b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w)),"prev"===b.swipeDirection&&(x>1-b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w))}else{if(!b.params.shortSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&b.slideTo(w+b.params.slidesPerGroup),"prev"===b.swipeDirection&&b.slideTo(w)}}},b._slideTo=function(e,a){return b.slideTo(e,a,!0,!0)},b.slideTo=function(e,a,t,r){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),b.snapIndex=Math.floor(e/b.params.slidesPerGroup),b.snapIndex>=b.snapGrid.length&&(b.snapIndex=b.snapGrid.length-1);var i=-b.snapGrid[b.snapIndex];b.params.autoplay&&b.autoplaying&&(r||!b.params.autoplayDisableOnInteraction?b.pauseAutoplay(a):b.stopAutoplay()),b.updateProgress(i);for(var s=0;s<b.slidesGrid.length;s++)-Math.floor(100*i)>=Math.floor(100*b.slidesGrid[s])&&(e=s);return!b.params.allowSwipeToNext&&i<b.translate&&i<b.minTranslate()?!1:!b.params.allowSwipeToPrev&&i>b.translate&&i>b.maxTranslate()&&(b.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=b.params.speed),b.previousIndex=b.activeIndex||0,b.activeIndex=e,b.rtl&&-i===b.translate||!b.rtl&&i===b.translate?(b.params.autoHeight&&b.updateAutoHeight(),b.updateClasses(),"slide"!==b.params.effect&&b.setWrapperTranslate(i),!1):(b.updateClasses(),b.onTransitionStart(t),0===a?(b.setWrapperTranslate(i),b.setWrapperTransition(0),b.onTransitionEnd(t)):(b.setWrapperTranslate(i),b.setWrapperTransition(a),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd(t)}))),!0))},b.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),b.params.autoHeight&&b.updateAutoHeight(),b.lazy&&b.lazy.onTransitionStart(),e&&(b.emit("onTransitionStart",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeStart",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextStart",b):b.emit("onSlidePrevStart",b)))},b.onTransitionEnd=function(e){b.animating=!1,b.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),b.lazy&&b.lazy.onTransitionEnd(),e&&(b.emit("onTransitionEnd",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeEnd",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextEnd",b):b.emit("onSlidePrevEnd",b))),b.params.hashnav&&b.hashnav&&b.hashnav.setHash()},b.slideNext=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)}return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)},b._slideNext=function(e){return b.slideNext(!0,e,!0)},b.slidePrev=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex-1,a,e,t)}return b.slideTo(b.activeIndex-1,a,e,t)},b._slidePrev=function(e){return b.slidePrev(!0,e,!0)},b.slideReset=function(e,a,t){return b.slideTo(b.activeIndex,a,e)},b.setWrapperTransition=function(e,a){b.wrapper.transition(e),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTransition(e),b.params.parallax&&b.parallax&&b.parallax.setTransition(e),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTransition(e),b.params.control&&b.controller&&b.controller.setTransition(e,a),b.emit("onSetTransition",b,e)},b.setWrapperTranslate=function(e,a,t){var r=0,i=0,n=0;b.isHorizontal()?r=b.rtl?-e:e:i=e,b.params.roundLengths&&(r=s(r),i=s(i)),b.params.virtualTranslate||(b.support.transforms3d?b.wrapper.transform("translate3d("+r+"px, "+i+"px, "+n+"px)"):b.wrapper.transform("translate("+r+"px, "+i+"px)")),b.translate=b.isHorizontal()?r:i;var o,l=b.maxTranslate()-b.minTranslate();o=0===l?0:(e-b.minTranslate())/l,o!==b.progress&&b.updateProgress(e),a&&b.updateActiveIndex(),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTranslate(b.translate),b.params.parallax&&b.parallax&&b.parallax.setTranslate(b.translate),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTranslate(b.translate),b.params.control&&b.controller&&b.controller.setTranslate(b.translate,t),b.emit("onSetTranslate",b,b.translate)},b.getTranslate=function(e,a){var t,r,i,s;return"undefined"==typeof a&&(a="x"),b.params.virtualTranslate?b.rtl?-b.translate:b.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(r=i.transform||i.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new window.WebKitCSSMatrix("none"===r?"":r)):(s=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=s.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?s.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(r=window.WebKitCSSMatrix?s.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),b.rtl&&r&&(r=-r),r||0)},b.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=b.isHorizontal()?"x":"y"),b.getTranslate(b.wrapper[0],e)},b.observers=[],b.initObservers=function(){if(b.params.observeParents)for(var e=b.container.parents(),a=0;a<e.length;a++)l(e[a]);l(b.container[0],{childList:!1}),l(b.wrapper[0],{attributes:!1})},b.disconnectObservers=function(){for(var e=0;e<b.observers.length;e++)b.observers[e].disconnect();b.observers=[]},b.createLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove();var e=b.wrapper.children("."+b.params.slideClass);"auto"!==b.params.slidesPerView||b.params.loopedSlides||(b.params.loopedSlides=e.length),b.loopedSlides=parseInt(b.params.loopedSlides||b.params.slidesPerView,10),b.loopedSlides=b.loopedSlides+b.params.loopAdditionalSlides,b.loopedSlides>e.length&&(b.loopedSlides=e.length);var t,r=[],i=[];for(e.each(function(t,s){var n=a(this);t<b.loopedSlides&&i.push(s),t<e.length&&t>=e.length-b.loopedSlides&&r.push(s),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)b.wrapper.append(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));for(t=r.length-1;t>=0;t--)b.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))},b.destroyLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove(),b.slides.removeAttr("data-swiper-slide-index")},b.reLoop=function(e){var a=b.activeIndex-b.loopedSlides;b.destroyLoop(),b.createLoop(),b.updateSlidesSize(),e&&b.slideTo(a+b.loopedSlides,0,!1)},b.fixLoop=function(){var e;b.activeIndex<b.loopedSlides?(e=b.slides.length-3*b.loopedSlides+b.activeIndex,e+=b.loopedSlides,b.slideTo(e,0,!1,!0)):("auto"===b.params.slidesPerView&&b.activeIndex>=2*b.loopedSlides||b.activeIndex>b.slides.length-2*b.params.slidesPerView)&&(e=-b.slides.length+b.activeIndex+b.loopedSlides,e+=b.loopedSlides,b.slideTo(e,0,!1,!0))},b.appendSlide=function(e){if(b.params.loop&&b.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&b.wrapper.append(e[a]);else b.wrapper.append(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0)},b.prependSlide=function(e){b.params.loop&&b.destroyLoop();var a=b.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&b.wrapper.prepend(e[t]);a=b.activeIndex+e.length}else b.wrapper.prepend(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.slideTo(a,0,!1)},b.removeSlide=function(e){b.params.loop&&(b.destroyLoop(),b.slides=b.wrapper.children("."+b.params.slideClass));var a,t=b.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.params.loop?b.slideTo(t+b.loopedSlides,0,!1):b.slideTo(t,0,!1)},b.removeAllSlides=function(){for(var e=[],a=0;a<b.slides.length;a++)e.push(a);b.removeSlide(e)},b.effects={fade:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var a=b.slides.eq(e),t=a[0].swiperSlideOffset,r=-t;b.params.virtualTranslate||(r-=b.translate);var i=0;b.isHorizontal()||(i=r,r=0);var s=b.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:s}).transform("translate3d("+r+"px, "+i+"px, 0px)")}},setTransition:function(e){if(b.slides.transition(e),b.params.virtualTranslate&&0!==e){var a=!1;b.slides.transitionEnd(function(){if(!a&&b){a=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)b.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var t=b.slides.eq(e),r=t[0].progress;b.params.flip.limitRotation&&(r=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,s=-180*r,n=s,o=0,l=-i,p=0;if(b.isHorizontal()?b.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(r))+b.slides.length,b.params.flip.slideShadows){var d=b.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=b.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-r,0)),u.length&&(u[0].style.opacity=Math.max(r,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.virtualTranslate&&0!==e){var t=!1;b.slides.eq(b.activeIndex).transitionEnd(function(){if(!t&&b&&a(this).hasClass(b.params.slideActiveClass)){t=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=0;r<e.length;r++)b.wrapper.trigger(e[r])}})}}},cube:{setTranslate:function(){var e,t=0;b.params.cube.shadow&&(b.isHorizontal()?(e=b.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.wrapper.append(e)),e.css({height:b.width+"px"})):(e=b.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.container.append(e))));for(var r=0;r<b.slides.length;r++){var i=b.slides.eq(r),s=90*r,n=Math.floor(s/360);b.rtl&&(s=-s,n=Math.floor(-s/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;r%4===0?(l=4*-n*b.size,d=0):(r-1)%4===0?(l=0,d=4*-n*b.size):(r-2)%4===0?(l=b.size+4*n*b.size,d=b.size):(r-3)%4===0&&(l=-b.size,d=3*b.size+4*b.size*n),b.rtl&&(l=-l),b.isHorizontal()||(p=l,l=0);var u="rotateX("+(b.isHorizontal()?0:-s)+"deg) rotateY("+(b.isHorizontal()?s:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*r+90*o,b.rtl&&(t=90*-r-90*o)),i.transform(u),b.params.cube.slideShadows){var c=b.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=b.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(b.wrapper.css({"-webkit-transform-origin":"50% 50% -"+b.size/2+"px","-moz-transform-origin":"50% 50% -"+b.size/2+"px","-ms-transform-origin":"50% 50% -"+b.size/2+"px","transform-origin":"50% 50% -"+b.size/2+"px"}),b.params.cube.shadow)if(b.isHorizontal())e.transform("translate3d(0px, "+(b.width/2+b.params.cube.shadowOffset)+"px, "+-b.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+b.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),f=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),g=b.params.cube.shadowScale,v=b.params.cube.shadowScale/f,w=b.params.cube.shadowOffset;e.transform("scale3d("+g+", 1, "+v+") translate3d(0px, "+(b.height/2+w)+"px, "+-b.height/2/v+"px) rotateX(-90deg)")}var y=b.isSafari||b.isUiWebView?-b.size/2:0;b.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(b.isHorizontal()?0:t)+"deg) rotateY("+(b.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.cube.shadow&&!b.isHorizontal()&&b.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=b.translate,t=b.isHorizontal()?-e+b.width/2:-e+b.height/2,r=b.isHorizontal()?b.params.coverflow.rotate:-b.params.coverflow.rotate,i=b.params.coverflow.depth,s=0,n=b.slides.length;n>s;s++){var o=b.slides.eq(s),l=b.slidesSizesGrid[s],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*b.params.coverflow.modifier,u=b.isHorizontal()?r*d:0,c=b.isHorizontal()?0:r*d,m=-i*Math.abs(d),h=b.isHorizontal()?0:b.params.coverflow.stretch*d,f=b.isHorizontal()?b.params.coverflow.stretch*d:0;Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var g="translate3d("+f+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(g),o[0].style.zIndex=-Math.abs(Math.round(d))+1,b.params.coverflow.slideShadows){var v=b.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=b.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(b.browser.ie){var y=b.wrapper[0].style;y.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},b.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==b.slides.length)){var r=b.slides.eq(e),i=r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!r.hasClass("swiper-lazy")||r.hasClass("swiper-lazy-loaded")||r.hasClass("swiper-lazy-loading")||(i=i.add(r[0])),0!==i.length&&i.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var i=e.attr("data-background"),s=e.attr("data-src"),n=e.attr("data-srcset");b.loadImage(e[0],s||i,n,!1,function(){if(i?(e.css("background-image",'url("'+i+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),s&&(e.attr("src",s),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),r.find(".swiper-lazy-preloader, .preloader").remove(),b.params.loop&&t){var a=r.attr("data-swiper-slide-index");if(r.hasClass(b.params.slideDuplicateClass)){var o=b.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+b.params.slideDuplicateClass+")");b.lazy.loadImageInSlide(o.index(),!1)}else{var l=b.wrapper.children("."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');b.lazy.loadImageInSlide(l.index(),!1)}}b.emit("onLazyImageReady",b,r[0],e[0])}),b.emit("onLazyImageLoad",b,r[0],e[0])})}},load:function(){var e;if(b.params.watchSlidesVisibility)b.wrapper.children("."+b.params.slideVisibleClass).each(function(){b.lazy.loadImageInSlide(a(this).index())});else if(b.params.slidesPerView>1)for(e=b.activeIndex;e<b.activeIndex+b.params.slidesPerView;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);else b.lazy.loadImageInSlide(b.activeIndex);if(b.params.lazyLoadingInPrevNext)if(b.params.slidesPerView>1||b.params.lazyLoadingInPrevNextAmount&&b.params.lazyLoadingInPrevNextAmount>1){var t=b.params.lazyLoadingInPrevNextAmount,r=b.params.slidesPerView,i=Math.min(b.activeIndex+r+Math.max(t,r),b.slides.length),s=Math.max(b.activeIndex-Math.max(r,t),0);for(e=b.activeIndex+b.params.slidesPerView;i>e;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);for(e=s;e<b.activeIndex;e++)b.slides[e]&&b.lazy.loadImageInSlide(e)}else{var n=b.wrapper.children("."+b.params.slideNextClass);n.length>0&&b.lazy.loadImageInSlide(n.index());var o=b.wrapper.children("."+b.params.slidePrevClass);o.length>0&&b.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){b.params.lazyLoading&&(b.params.lazyLoadingOnTransitionStart||!b.params.lazyLoadingOnTransitionStart&&!b.lazy.initialImageLoaded)&&b.lazy.load()},onTransitionEnd:function(){b.params.lazyLoading&&!b.params.lazyLoadingOnTransitionStart&&b.lazy.load()}},b.scrollbar={isTouched:!1,setDragPosition:function(e){var a=b.scrollbar,t=b.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,r=t-a.track.offset()[b.isHorizontal()?"left":"top"]-a.dragSize/2,i=-b.minTranslate()*a.moveDivider,s=-b.maxTranslate()*a.moveDivider;i>r?r=i:r>s&&(r=s),r=-r/a.moveDivider,b.updateProgress(r),b.setWrapperTranslate(r,!0)},dragStart:function(e){var a=b.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),b.params.scrollbarHide&&a.track.css("opacity",1),b.wrapper.transition(100),a.drag.transition(100),b.emit("onScrollbarDragStart",b)},dragMove:function(e){var a=b.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),b.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),b.emit("onScrollbarDragMove",b))},dragEnd:function(e){var a=b.scrollbar;a.isTouched&&(a.isTouched=!1,b.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),b.emit("onScrollbarDragEnd",b),b.params.scrollbarSnapOnRelease&&b.slideReset())},enableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).on(b.touchEvents.start,e.dragStart),a(t).on(b.touchEvents.move,e.dragMove),a(t).on(b.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).off(b.touchEvents.start,e.dragStart),a(t).off(b.touchEvents.move,e.dragMove),a(t).off(b.touchEvents.end,e.dragEnd)},set:function(){if(b.params.scrollbar){var e=b.scrollbar;e.track=a(b.params.scrollbar),b.params.uniqueNavElements&&"string"==typeof b.params.scrollbar&&e.track.length>1&&1===b.container.find(b.params.scrollbar).length&&(e.track=b.container.find(b.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=b.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=b.size/b.virtualSize,e.moveDivider=e.divider*(e.trackSize/b.size),e.dragSize=e.trackSize*e.divider,b.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",b.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(b.params.scrollbar){var e,a=b.scrollbar,t=(b.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*b.progress,b.rtl&&b.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),b.isHorizontal()?(b.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(b.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),b.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){b.params.scrollbar&&b.scrollbar.drag.transition(e)}},b.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,r;this.x.length;this.interpolate=function(e){return e?(r=i(this.x,e),t=r-1,(e-this.x[t])*(this.y[r]-this.y[t])/(this.x[r]-this.x[t])+this.y[t]):0};var i=function(){var e,a,t;return function(r,i){for(a=-1,e=r.length;e-a>1;)r[t=e+a>>1]<=i?a=t:e=t;return e}}()},getInterpolateFunction:function(e){b.controller.spline||(b.controller.spline=b.params.loop?new b.controller.LinearSpline(b.slidesGrid,e.slidesGrid):new b.controller.LinearSpline(b.snapGrid,e.snapGrid))},setTranslate:function(e,a){function r(a){e=a.rtl&&"horizontal"===a.params.direction?-b.translate:b.translate,"slide"===b.params.controlBy&&(b.controller.getInterpolateFunction(a),s=-b.controller.spline.interpolate(-e)),s&&"container"!==b.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(b.maxTranslate()-b.minTranslate()),s=(e-b.minTranslate())*i+a.minTranslate()),b.params.controlInverse&&(s=a.maxTranslate()-s),a.updateProgress(s),a.setWrapperTranslate(s,!1,b),a.updateActiveIndex()}var i,s,n=b.params.control;if(b.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&r(n[o]);else n instanceof t&&a!==n&&r(n)},setTransition:function(e,a){function r(a){a.setWrapperTransition(e,b),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){s&&(a.params.loop&&"slide"===b.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,s=b.params.control;if(b.isArray(s))for(i=0;i<s.length;i++)s[i]!==a&&s[i]instanceof t&&r(s[i]);else s instanceof t&&a!==s&&r(s)}},b.hashnav={init:function(){if(b.params.hashnav){b.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=b.slides.length;r>t;t++){var i=b.slides.eq(t),s=i.attr("data-hash");if(s===e&&!i.hasClass(b.params.slideDuplicateClass)){var n=i.index();b.slideTo(n,a,b.params.runCallbacksOnInit,!0)}}}},setHash:function(){b.hashnav.initialized&&b.params.hashnav&&(document.location.hash=b.slides.eq(b.activeIndex).attr("data-hash")||"")}},b.disableKeyboardControl=function(){b.params.keyboardControl=!1,a(document).off("keydown",p)},b.enableKeyboardControl=function(){b.params.keyboardControl=!0,a(document).on("keydown",p)},b.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},b.params.mousewheelControl){try{new window.WheelEvent("wheel"),b.mousewheel.event="wheel"}catch(N){(window.WheelEvent||b.container[0]&&"wheel"in b.container[0])&&(b.mousewheel.event="wheel")}!b.mousewheel.event&&window.WheelEvent,b.mousewheel.event||void 0===document.onmousewheel||(b.mousewheel.event="mousewheel"),b.mousewheel.event||(b.mousewheel.event="DOMMouseScroll")}b.disableMousewheelControl=function(){return b.mousewheel.event?(b.container.off(b.mousewheel.event,d),!0):!1},b.enableMousewheelControl=function(){return b.mousewheel.event?(b.container.on(b.mousewheel.event,d),!0):!1},b.parallax={setTranslate:function(){b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){u(this,b.progress)}),b.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);u(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=b.params.speed),b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),r=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),t.transition(r)})}},b._plugins=[];for(var R in b.plugins){var W=b.plugins[R](b,b.params[R]);W&&b._plugins.push(W)}return b.callPlugins=function(e){for(var a=0;a<b._plugins.length;a++)e in b._plugins[a]&&b._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.emitterEventListeners={},b.emit=function(e){b.params[e]&&b.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(b.emitterEventListeners[e])for(a=0;a<b.emitterEventListeners[e].length;a++)b.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);b.callPlugins&&b.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.on=function(e,a){return e=c(e),b.emitterEventListeners[e]||(b.emitterEventListeners[e]=[]),b.emitterEventListeners[e].push(a),b},b.off=function(e,a){var t;if(e=c(e),"undefined"==typeof a)return b.emitterEventListeners[e]=[],b;if(b.emitterEventListeners[e]&&0!==b.emitterEventListeners[e].length){for(t=0;t<b.emitterEventListeners[e].length;t++)b.emitterEventListeners[e][t]===a&&b.emitterEventListeners[e].splice(t,1);return b}},b.once=function(e,a){e=c(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),b.off(e,t)};return b.on(e,t),b},b.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(b.params.nextButton)?(b.onClickNext(e),b.isEnd?b.a11y.notify(b.params.lastSlideMessage):b.a11y.notify(b.params.nextSlideMessage)):a(e.target).is(b.params.prevButton)&&(b.onClickPrev(e),b.isBeginning?b.a11y.notify(b.params.firstSlideMessage):b.a11y.notify(b.params.prevSlideMessage)),a(e.target).is("."+b.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=b.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.a11y.makeFocusable(b.nextButton),b.a11y.addRole(b.nextButton,"button"),b.a11y.addLabel(b.nextButton,b.params.nextSlideMessage)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.a11y.makeFocusable(b.prevButton),b.a11y.addRole(b.prevButton,"button"),b.a11y.addLabel(b.prevButton,b.params.prevSlideMessage)),a(b.container).append(b.a11y.liveRegion)},initPagination:function(){b.params.pagination&&b.params.paginationClickable&&b.bullets&&b.bullets.length&&b.bullets.each(function(){var e=a(this);b.a11y.makeFocusable(e),b.a11y.addRole(e,"button"),b.a11y.addLabel(e,b.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){b.a11y.liveRegion&&b.a11y.liveRegion.length>0&&b.a11y.liveRegion.remove()}},b.init=function(){b.params.loop&&b.createLoop(),b.updateContainerSize(),b.updateSlidesSize(),b.updatePagination(),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.set(),b.params.scrollbarDraggable&&b.scrollbar.enableDraggable()),"slide"!==b.params.effect&&b.effects[b.params.effect]&&(b.params.loop||b.updateProgress(),b.effects[b.params.effect].setTranslate()),b.params.loop?b.slideTo(b.params.initialSlide+b.loopedSlides,0,b.params.runCallbacksOnInit):(b.slideTo(b.params.initialSlide,0,b.params.runCallbacksOnInit),0===b.params.initialSlide&&(b.parallax&&b.params.parallax&&b.parallax.setTranslate(),b.lazy&&b.params.lazyLoading&&(b.lazy.load(),b.lazy.initialImageLoaded=!0))),b.attachEvents(),b.params.observer&&b.support.observer&&b.initObservers(),b.params.preloadImages&&!b.params.lazyLoading&&b.preloadImages(),b.params.autoplay&&b.startAutoplay(),b.params.keyboardControl&&b.enableKeyboardControl&&b.enableKeyboardControl(),b.params.mousewheelControl&&b.enableMousewheelControl&&b.enableMousewheelControl(),
b.params.hashnav&&b.hashnav&&b.hashnav.init(),b.params.a11y&&b.a11y&&b.a11y.init(),b.emit("onInit",b)},b.cleanupStyles=function(){b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),b.wrapper.removeAttr("style"),b.slides&&b.slides.length&&b.slides.removeClass([b.params.slideVisibleClass,b.params.slideActiveClass,b.params.slideNextClass,b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),b.paginationContainer&&b.paginationContainer.length&&b.paginationContainer.removeClass(b.params.paginationHiddenClass),b.bullets&&b.bullets.length&&b.bullets.removeClass(b.params.bulletActiveClass),b.params.prevButton&&a(b.params.prevButton).removeClass(b.params.buttonDisabledClass),b.params.nextButton&&a(b.params.nextButton).removeClass(b.params.buttonDisabledClass),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.track&&b.scrollbar.track.length&&b.scrollbar.track.removeAttr("style"),b.scrollbar.drag&&b.scrollbar.drag.length&&b.scrollbar.drag.removeAttr("style"))},b.destroy=function(e,a){b.detachEvents(),b.stopAutoplay(),b.params.scrollbar&&b.scrollbar&&b.params.scrollbarDraggable&&b.scrollbar.disableDraggable(),b.params.loop&&b.destroyLoop(),a&&b.cleanupStyles(),b.disconnectObservers(),b.params.keyboardControl&&b.disableKeyboardControl&&b.disableKeyboardControl(),b.params.mousewheelControl&&b.disableMousewheelControl&&b.disableMousewheelControl(),b.params.a11y&&b.a11y&&b.a11y.destroy(),b.emit("onDestroy"),e!==!1&&(b=null)},b.init(),b}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||i||r,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var r=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var s,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)r.push(n.childNodes[i])}else for(s=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<s.length;i++)s[i]&&r.push(s[i])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)r.push(a[i]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"!=typeof a){for(var t=0;t<this.length;t++){var r=this[t];r.dom7ElementDataStorage||(r.dom7ElementDataStorage={}),r.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,i){function s(e){var i=e.target;if(a(i).is(t))r.call(i,e);else for(var s=a(i).parents(),n=0;n<s.length;n++)a(s[n]).is(t)&&r.call(s[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:s}),this[n].addEventListener(l[o],s,i);return this},off:function(e,a,t,r){for(var i=e.split(" "),s=0;s<i.length;s++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(i[s],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[s],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function i(n){t(n),s.off(e,a,i,r)}var s=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),s.on(e,a,i,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(i){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,s=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+s-r,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if("undefined"==typeof e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var r,i;if("string"==typeof t){var s=this[0];if(s===document)return t===document;if(s===window)return t===window;if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.mozMatchesSelector)return s.mozMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(r=a(t),i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,r=i.childNodes.length-1;r>=0;r--)this[t].insertBefore(i.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].querySelectorAll(a),s=0;s<i.length;s++)t.push(i[s]);return new e(t)},children:function(t){for(var r=[],i=0;i<this.length;i++)for(var s=this[i].childNodes,n=0;n<s.length;n++)t?1===s[n].nodeType&&a(s[n]).is(t)&&r.push(s[n]):1===s[n].nodeType&&r.push(s[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)r[r.length]=i[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),i=["jQuery","Zepto","Dom7"],s=0;s<i.length;s++)window[i[s]]&&e(window[i[s]]);var n;n="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.min.js.map


    })( module.exports , module , __context );
    __context.____MODULES[ "cd2bffb7f2508310dfd41bb26a34f44d" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "939891a3ad8cdb5e3fc688e4cec488e7" ,
        filename : "home.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["home"] = "<div class = \"home-body\">\n\t<div>\n\t\t<div class=\"swiper-container\">\n          <div class=\"swiper-wrapper\" >\n             <div class=\"swiper-slide\" ms-repeat-value = \"banners\">\n               <a href=\"#\"><img ms-src = \"value.ad_file\"  /></a>\n             </div>             \n           </div>\n           <div class=\"swiper-pagination\"></div>\n        </div>\n\t\t\n\t\t<div class = \"stores\">\n\t\t\t<div class = \"stores1\">\n\t\t\t\t<span>热门店铺</span>\n\t\t\t\t<span>更多</span>\n\t\t\t</div>\n\t\t\t<div class = \"stores2\">\n\t\t\t\t<div ms-repeat-value = \"stores\">\n\t\t\t\t\t<a href = \"#\"><img ms-src = \"value.ad_file\" /></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\n\t</div>\n</div>";
if (typeof module !== "undefined") module.exports = window.QTMPL["home"];

    })( module.exports , module , __context );
    __context.____MODULES[ "939891a3ad8cdb5e3fc688e4cec488e7" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "70f66b42e25aaae51b09567b934920a9" ,
        filename : "tools.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var Request1 = function(url1,type1){
	$.ajax({
        url:url1,
        type: type1,
        success:function(res){
        	if(res.code == 0){
//      		console.log(res.data);
				var data = res.data;
				
        	}
        	else{
        		alert("数据有误，请稍后重试！");
        	}
        },
        error:function(){
        	alert("服务器发生错误，请稍后重试！");
        }
      });
	return a;
}

module.exports=Request1;


    })( module.exports , module , __context );
    __context.____MODULES[ "70f66b42e25aaae51b09567b934920a9" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "c87ac4147d3f1e8e2d5f3485424c6ff1" ,
        filename : "home.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var tplHome =__context.____MODULES['939891a3ad8cdb5e3fc688e4cec488e7'];
var request1 =__context.____MODULES['70f66b42e25aaae51b09567b934920a9'];

SPA.defineView('home',{
  html:tplHome,
  plugins: ['delegated',{
    name:"avalon",
    options:function(vm){
    	vm.banners = [];
    	vm.stores = [];
    }
  }],
  
   init:{	
   	homeSwiper:null,
   	vm:null,
   	
   	

    getData: function(vm){
   	var that = this;
      $.ajax({
        url:"http://101.200.76.57:9090/api/v1/home/index",
        type: "get",
        success:function(res){
        	var data = res.data;
        	vm.banners = data.banners;
        	vm.stores = data.stores;
        	console.log(data.stores);
        }
      });
    }
  },

  bindEvents: {
  	"beforeShow": function(){
  		
  		
//			var data = request1("http://101.200.76.57:9090/api/v1/home/index",'get');
//			console.log(data);
			var that = this;
		  var vm = that.getVM();
		  that.getData(vm);
		  setTimeout(function(){
		  	var mySwiper = new Swiper('.swiper-container',{
			      autoplay: 1000,
			      loop:true,
	        	pagination: '.swiper-pagination'
		  	});
		  },500);
		  
		  
//		   		$('.swiper-pagination-bullet-active').css('background','white');
//		   		mySwiper.bullets[mySwiper.activeIndex].style.background='white';
  	}
  
  },
           
   bindActions: {
//     'tap.switch': function(el, data) {
//         this.modules.indexContent.launch(data.tag);
//         this.setActive(data.tag);
//     }
   }
})
    


    })( module.exports , module , __context );
    __context.____MODULES[ "c87ac4147d3f1e8e2d5f3485424c6ff1" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "cf5dd0222379b8c1e78ae0fc62b26667" ,
        filename : "classes.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["classes"] = "<div class = \"classes-body\">\n\t<div class = \"search\">\n\t\t<div>\n\t\t\t<i class = \"yo-ico\">&#xe616;</i>\n\t\t\t<input type = \"text\" placeholder = \"搜索\"/>\t\n\t\t</div>\n\t</div>\n\t<div class = \"content\">\n\t\t<aside>\n\t\t\t\n\t\t</aside>\n\t\t<section>\n\t\t\n\t\t</section>\n\t</div>\n</div>\n";
if (typeof module !== "undefined") module.exports = window.QTMPL["classes"];

    })( module.exports , module , __context );
    __context.____MODULES[ "cf5dd0222379b8c1e78ae0fc62b26667" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "90b4c17b7204fdd4909c682dd32acc7b" ,
        filename : "classes.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var tplClasses =__context.____MODULES['cf5dd0222379b8c1e78ae0fc62b26667'];

SPA.defineView('classes',{
  html:tplClasses,
//plugins: ['delegated'],

  bindEvents: {
    'beforeShow': function () {
     
    }
  },
      
       
   bindActions: {
//     'tap.switch': function(el, data) {
//         this.modules.indexContent.launch(data.tag);
//         this.setActive(data.tag);
//     }
   }
})

    

    })( module.exports , module , __context );
    __context.____MODULES[ "90b4c17b7204fdd4909c682dd32acc7b" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "87a60078dbf7a7349911e5d5987e26f4" ,
        filename : "show.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["show"] = "<div>show</div>";
if (typeof module !== "undefined") module.exports = window.QTMPL["show"];

    })( module.exports , module , __context );
    __context.____MODULES[ "87a60078dbf7a7349911e5d5987e26f4" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "e336faabe6b9cbef825a1dd1485357b9" ,
        filename : "show.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var tplShow =__context.____MODULES['87a60078dbf7a7349911e5d5987e26f4'];

SPA.defineView('show',{
  html:tplShow,
//plugins: ['delegated'],

  bindEvents: {
    'beforeShow': function () {
      
    }
  },
      
       
   bindActions: {
//     'tap.switch': function(el, data) {
//         this.modules.indexContent.launch(data.tag);
//         this.setActive(data.tag);
//     }
   }
})
    


    })( module.exports , module , __context );
    __context.____MODULES[ "e336faabe6b9cbef825a1dd1485357b9" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "eb7b6a9c1360437bfc7e868a714e6efb" ,
        filename : "shopcar.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["shopcar"] = "<div>shopcar</div>";
if (typeof module !== "undefined") module.exports = window.QTMPL["shopcar"];

    })( module.exports , module , __context );
    __context.____MODULES[ "eb7b6a9c1360437bfc7e868a714e6efb" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "d22723e17fe5c5ba7759983922eabe09" ,
        filename : "shopcar.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var tplShopcar =__context.____MODULES['eb7b6a9c1360437bfc7e868a714e6efb'];

SPA.defineView('shopcar',{
  html:tplShopcar,
//plugins: ['delegated'],

  bindEvents: {
    'beforeShow': function () {
      
    }
  },
      
       
   bindActions: {
//     'tap.switch': function(el, data) {
//         this.modules.indexContent.launch(data.tag);
//         this.setActive(data.tag);
//     }
   }
})
    


    })( module.exports , module , __context );
    __context.____MODULES[ "d22723e17fe5c5ba7759983922eabe09" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "4bcd56245c0b5adb8b5d74ca588a2559" ,
        filename : "my.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["my"] = "<div>\n\tmy\n\t<button action-type = \"go-register\">注册</button>\n</div>";
if (typeof module !== "undefined") module.exports = window.QTMPL["my"];

    })( module.exports , module , __context );
    __context.____MODULES[ "4bcd56245c0b5adb8b5d74ca588a2559" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "1097df43eb3b24bd56d4a95580137cfd" ,
        filename : "my.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var tplMy =__context.____MODULES['4bcd56245c0b5adb8b5d74ca588a2559'];

SPA.defineView('my',{
  html:tplMy,
plugins: ['delegated'],

  bindEvents: {
    'beforeShow': function () {
      
    }
  },
      
       
   bindActions: {
       'go-register': function() {
       		console.log(1);
           SPA.open('register');
       }
   }
})
    


    })( module.exports , module , __context );
    __context.____MODULES[ "1097df43eb3b24bd56d4a95580137cfd" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "1678ff931713ac0e53b94542e9f0fd6b" ,
        filename : "register.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["register"] = "<div class = \"register-body\">\n\t<header>\n\t\t<div class = \"back\" action-type = \"hide-register\">&lt;</div>\n\t\t<div class = \"h-kong\"></div>\n\t\t<div class = \"h-title\">注册</div>\n\t\t<div class = \"h-kong\"></div>\n\t</header>\n\t<div class = \"content\">\n\t\t<div class = \"num\">\n\t\t\t<input type = \"tel\" placeholder = \"输入手机号\" />\t\n\t\t\t<div>发送验证码</div>\n\t\t</div>\n\t\t<div class = \"num\">\n\t\t\t<input type = \"text\" placeholder = \"输入验证码\" />\t\n\t\t</div>\t\t\t\n\t\t<div class = \"next\">下一步</div>\n\t</div>\n</div>";
if (typeof module !== "undefined") module.exports = window.QTMPL["register"];

    })( module.exports , module , __context );
    __context.____MODULES[ "1678ff931713ac0e53b94542e9f0fd6b" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "d0c471b07a0cd1949854355970b7bfd7" ,
        filename : "register.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var tplRegister =__context.____MODULES['1678ff931713ac0e53b94542e9f0fd6b'];

SPA.defineView('register',{
  html:tplRegister,
plugins: ['delegated'],

  bindEvents: {
    'beforeShow': function () {
     
    }
  },
      
       
   bindActions: {
       'hide-register': function() {
           this.hide();
       }
   }
})

   

    })( module.exports , module , __context );
    __context.____MODULES[ "d0c471b07a0cd1949854355970b7bfd7" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "cb1c2a71328ca730b27dca5437f048f9" ,
        filename : "index.string" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    if (typeof window.QTMPL === "undefined") window.QTMPL = {};
window.QTMPL["index"] = "<div class = \"m-index\">\n\t<div class = \"m-index-body\"></div>\n\t<footer>\n\t\t<div class = \"active\" action-type = \"tap.switch\" data-tag = \"home\">\n\t\t\t<i class = \"yo-ico\">&#xe613;</i>\n\t\t\t<b>首页</b>\n\t\t</div>\n\t\t<div action-type = \"tap.switch\" data-tag = \"classes\">\n\t\t\t<i class = \"yo-ico\">&#xe61c;</i>\n\t\t\t<b>分类</b>\n\t\t</div>\n\t\t<div action-type = \"tap.switch\" data-tag = \"show\">\n\t\t\t<i class = \"yo-ico\">&#xe657;</i>\n\t\t\t<b>晒晒</b>\n\t\t</div>\n\t\t<div action-type = \"tap.switch\" data-tag = \"shopcar\">\n\t\t\t<i class = \"yo-ico\">&#xe611;</i>\n\t\t\t<b>购物车</b>\n\t\t</div>\n\t\t<div action-type = \"tap.switch\" data-tag = \"my\">\n\t\t\t<i class = \"yo-ico\">&#xe618;</i>\n\t\t\t<b>我的</b>\n\t\t</div>\n\t</footer>\n</div>\n";
if (typeof module !== "undefined") module.exports = window.QTMPL["index"];

    })( module.exports , module , __context );
    __context.____MODULES[ "cb1c2a71328ca730b27dca5437f048f9" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "6e52260f80aafd81dd6dd384db376b7f" ,
        filename : "index.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    var tplIndex =__context.____MODULES['cb1c2a71328ca730b27dca5437f048f9'];
var GetQueryString=function(name)
            {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null)
                    return  unescape(r[2]);
                return 'home';
            }
  var id = GetQueryString("id");
  //alert(id);
SPA.defineView('index',{
	html:tplIndex,
	plugins: ['delegated'],
	
	modules: [{
        name: 'indexContent',
        container: '.m-index-body',
        views: ['home', 'classes', 'show', 'shopcar', 'my'],
        defaultTag: id
    }],
    
    
    bindActions: {
        'tap.switch': function(el, data) {
            this.modules.indexContent.launch(data.tag);
			$(el.el).addClass('active').siblings().removeClass('active');
        }
    },
    bindEvents: {
        'beforeShow': function() {

        }
    }
})


    })( module.exports , module , __context );
    __context.____MODULES[ "6e52260f80aafd81dd6dd384db376b7f" ] = module.exports;
})(this);


;(function(__context){
    var module = {
        id : "c649798919b7c49c480655f98aa9c3da" ,
        filename : "app.js" ,
        exports : {}
    };
    if( !__context.____MODULES ) { __context.____MODULES = {}; }
    var r = (function( exports , module , global ){

    
__context.____MODULES['b339b78823a7d4e256e118d08f80004c'];
__context.____MODULES['695124f7289a155034d4b8cbdf8df850'];
__context.____MODULES['cd2bffb7f2508310dfd41bb26a34f44d'];

__context.____MODULES['c87ac4147d3f1e8e2d5f3485424c6ff1'];
__context.____MODULES['90b4c17b7204fdd4909c682dd32acc7b'];
__context.____MODULES['e336faabe6b9cbef825a1dd1485357b9'];
__context.____MODULES['d22723e17fe5c5ba7759983922eabe09'];
__context.____MODULES['1097df43eb3b24bd56d4a95580137cfd'];
__context.____MODULES['d0c471b07a0cd1949854355970b7bfd7'];
__context.____MODULES['6e52260f80aafd81dd6dd384db376b7f'];


    })( module.exports , module , __context );
    __context.____MODULES[ "c649798919b7c49c480655f98aa9c3da" ] = module.exports;
})(this);
