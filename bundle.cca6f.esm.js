!function(e){function n(r){if(t[r])return t[r].exports;var _=t[r]={i:r,l:!1,exports:{}};return e[r].call(_.exports,_,_.exports,n),_.l=!0,_.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var _ in e)n.d(r,_,function(n){return e[n]}.bind(null,_));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s="mdyV")}({MV5A:function(){},QfWi:function(e,n,t){"use strict";t.r(n),function(e){function r(){return e("div",null,e("h1",null,"FBS Rankings"))}t.d(n,"default",(function(){return r}));t("MV5A")}.call(this,t("hosL").h)},hosL:function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function _(e){var n=e.parentNode;n&&n.removeChild(e)}function o(e,n,t){var r,_,o,u={};for(o in n)"key"==o?r=n[o]:"ref"==o?_=n[o]:u[o]=n[o];if(arguments.length>2&&(u.children=arguments.length>3?L.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===u[o]&&(u[o]=e.defaultProps[o]);return l(e,u,r,_,null)}function l(e,n,t,r,_){var o={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++W:_};return null==_&&null!=U.vnode&&U.vnode(o),o}function u(){return{current:null}}function i(e){return e.children}function c(e,n){this.props=e,this.context=n}function f(e,n){if(null==n)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?f(e):null}function s(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return s(e)}}function p(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!a.__r++||R!==U.debounceRendering)&&((R=U.debounceRendering)||setTimeout)(a)}function a(){for(var e;a.__r=N.length;)e=N.sort((function(e,n){return e.__v.__b-n.__v.__b})),N=[],e.some((function(e){var n,t,_,o,l,u;e.__d&&(l=(o=(n=e).__v).__e,(u=n.__P)&&(t=[],(_=r({},o)).__v=o.__v+1,x(u,o,_,n.__n,void 0!==u.ownerSVGElement,null!=o.__h?[l]:null,t,null==l?f(o):l,o.__h),C(t,o),o.__e!=l&&s(o)))}))}function d(e,n,t,r,_,o,u,c,s,p){var a,d,v,m,g,b,k,C=r&&r.__k||I,S=C.length;for(t.__k=[],a=0;a<n.length;a++)if(null!=(m=t.__k[a]=null==(m=n[a])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?l(null,m,null,null,m):Array.isArray(m)?l(i,{children:m},null,null,null):m.__b>0?l(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(v=C[a])||v&&m.key==v.key&&m.type===v.type)C[a]=void 0;else for(d=0;d<S;d++){if((v=C[d])&&m.key==v.key&&m.type===v.type){C[d]=void 0;break}v=null}x(e,m,v=v||F,_,o,u,c,s,p),g=m.__e,(d=m.ref)&&v.ref!=d&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===v.__k?m.__d=s=h(m,s,e):s=y(e,m,v,C,g,s),"function"==typeof t.type&&(t.__d=s)):s&&v.__e==s&&s.parentNode!=e&&(s=f(v))}for(t.__e=b,a=S;a--;)null!=C[a]&&A(C[a],C[a]);if(k)for(a=0;a<k.length;a++)P(k[a],k[++a],k[++a])}function h(e,n,t){for(var r,_=e.__k,o=0;_&&o<_.length;o++)(r=_[o])&&(r.__=e,n="function"==typeof r.type?h(r,n,t):y(t,r,r,_,r.__e,n));return n}function v(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,n)})):n.push(e)),n}function y(e,n,t,r,_,o){var l,u,i;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||_!=o||null==_.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(_),l=null;else{for(u=o,i=0;(u=u.nextSibling)&&i<r.length;i+=1)if(u==_)break e;e.insertBefore(_,o),l=o}return void 0!==l?l:_.nextSibling}function m(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||H.test(n)?t:t+"px"}function g(e,n,t,r,_){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||m(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||m(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?r||e.addEventListener(n,o?k:b,o):e.removeEventListener(n,o?k:b,o);else if("dangerouslySetInnerHTML"!==n){if(_)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&-1==n.indexOf("-")?e.removeAttribute(n):e.setAttribute(n,t))}}function b(e){this.l[e.type+!1](U.event?U.event(e):e)}function k(e){this.l[e.type+!0](U.event?U.event(e):e)}function x(e,n,t,_,o,l,u,f,s){var p,a,h,v,y,m,g,b,k,x,C,P,A,T,w,D=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(s=t.__h,f=n.__e=t.__e,n.__h=null,l=[f]),(p=U.__b)&&p(n);try{e:if("function"==typeof D){if(b=n.props,k=(p=D.contextType)&&_[p.__c],x=p?k?k.props.value:p.__:_,t.__c?g=(a=n.__c=t.__c).__=a.__E:("prototype"in D&&D.prototype.render?n.__c=a=new D(b,x):(n.__c=a=new c(b,x),a.constructor=D,a.render=E),k&&k.sub(a),a.props=b,a.state||(a.state={}),a.context=x,a.__n=_,h=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=D.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=r({},a.__s)),r(a.__s,D.getDerivedStateFromProps(b,a.__s))),v=a.props,y=a.state,h)null==D.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==D.getDerivedStateFromProps&&b!==v&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,x)||n.__v===t.__v){for(a.props=b,a.state=a.__s,n.__v!==t.__v&&(a.__d=!1),a.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),C=0;C<a._sb.length;C++)a.__h.push(a._sb[C]);a._sb=[],a.__h.length&&u.push(a);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,x),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(v,y,m)}))}if(a.context=x,a.props=b,a.__v=n,a.__P=e,P=U.__r,A=0,"prototype"in D&&D.prototype.render){for(a.state=a.__s,a.__d=!1,P&&P(n),p=a.render(a.props,a.state,a.context),T=0;T<a._sb.length;T++)a.__h.push(a._sb[T]);a._sb=[]}else do{a.__d=!1,P&&P(n),p=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++A<25);a.state=a.__s,null!=a.getChildContext&&(_=r(r({},_),a.getChildContext())),h||null==a.getSnapshotBeforeUpdate||(m=a.getSnapshotBeforeUpdate(v,y)),w=null!=p&&p.type===i&&null==p.key?p.props.children:p,d(e,Array.isArray(w)?w:[w],n,t,_,o,l,u,f,s),a.base=n.__e,n.__h=null,a.__h.length&&u.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=S(t.__e,n,t,_,o,l,u,s);(p=U.diffed)&&p(n)}catch(e){n.__v=null,(s||null!=l)&&(n.__e=f,n.__h=!!s,l[l.indexOf(f)]=null),U.__e(e,n,t)}}function C(e,n){U.__c&&U.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){U.__e(e,n.__v)}}))}function S(e,n,t,r,o,l,u,i){var c,s,p,a=t.props,h=n.props,v=n.type,y=0;if("svg"===v&&(o=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){e=c,l[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,i=!1}if(null===v)a===h||i&&e.data===h||(e.data=h);else{if(l=l&&L.call(e.childNodes),s=(a=t.props||F).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!i){if(null!=l)for(a={},y=0;y<e.attributes.length;y++)a[e.attributes[y].name]=e.attributes[y].value;(p||s)&&(p&&(s&&p.__html==s.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,n,t,r,_){var o;for(o in t)"children"===o||"key"===o||o in n||g(e,o,null,t[o],r);for(o in n)_&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||g(e,o,n[o],t[o],r)}(e,h,a,o,i),p)n.__k=[];else if(y=n.props.children,d(e,Array.isArray(y)?y:[y],n,t,r,o&&"foreignObject"!==v,l,u,l?l[0]:t.__k&&f(t,0),i),null!=l)for(y=l.length;y--;)null!=l[y]&&_(l[y]);i||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y||"option"===v&&y!==a.value)&&g(e,"value",y,a.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&g(e,"checked",y,a.checked,!1))}return e}function P(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){U.__e(e,t)}}function A(e,n,t){var r,o;if(U.unmount&&U.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){U.__e(e,n)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&A(r[o],n,t||"function"!=typeof e.type);t||null==e.__e||_(e.__e),e.__=e.__e=e.__d=void 0}function E(e,n,t){return this.constructor(e,t)}function T(e,n,t){var r,_,l;U.__&&U.__(e,n),_=(r="function"==typeof t)?null:t&&t.__k||n.__k,l=[],x(n,e=(!r&&t||n).__k=o(i,null,[e]),_||F,F,void 0!==n.ownerSVGElement,!r&&t?[t]:_?null:n.firstChild?L.call(n.childNodes):null,l,!r&&t?t:_?_.__e:n.firstChild,r),C(l,e)}function w(e,n){T(e,n,w)}function D(e,n,t){var _,o,u,i=r({},e.props);for(u in n)"key"==u?_=n[u]:"ref"==u?o=n[u]:i[u]=n[u];return arguments.length>2&&(i.children=arguments.length>3?L.call(arguments,2):t),l(e.type,i,_||e.key,o||e.ref,null)}function M(e,n){var t={__c:n="__cC"+j++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,r;return this.getChildContext||(t=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(p)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"Component",(function(){return c})),t.d(n,"Fragment",(function(){return i})),t.d(n,"cloneElement",(function(){return D})),t.d(n,"createContext",(function(){return M})),t.d(n,"createElement",(function(){return o})),t.d(n,"createRef",(function(){return u})),t.d(n,"h",(function(){return o})),t.d(n,"hydrate",(function(){return w})),t.d(n,"isValidElement",(function(){return O})),t.d(n,"options",(function(){return U})),t.d(n,"render",(function(){return T})),t.d(n,"toChildArray",(function(){return v}));var L,U,W,O,N,R,j,F={},I=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L=I.slice,U={__e:function(e,n,t,r){for(var _,o,l;n=n.__;)if((_=n.__c)&&!_.__)try{if((o=_.constructor)&&null!=o.getDerivedStateFromError&&(_.setState(o.getDerivedStateFromError(e)),l=_.__d),null!=_.componentDidCatch&&(_.componentDidCatch(e,r||{}),l=_.__d),l)return _.__E=_}catch(n){e=n}throw e}},W=0,O=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},t),this.props)),e&&r(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},c.prototype.render=i,N=[],a.__r=0,j=0},mdyV:function(e,n,t){"use strict";t.r(n);var r=t("hosL");const{h:_,render:o,hydrate:l}=r,u=e=>e&&e.default?e.default:e,i=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(i(t.p)+"sw-esm.js"),"function"==typeof u(t("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,n=()=>{let n=u(t("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const f={preRenderData:r},s=r.url?i(r.url):"";(l&&s===i(location.pathname)?l:o)(_(n,{CLI_DATA:f}),document.body,e)};0,n()}}});
//# sourceMappingURL=bundle.cca6f.esm.js.map