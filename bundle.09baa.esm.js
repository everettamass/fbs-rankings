!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(n){return e[n]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s="mdyV")}({E6X8:function(e){e.exports=JSON.parse('{"weeks":[{"index":12,"rankings":["uga","osu","mich","tcu","tenn","lsu","usc","bama","clem","utah"]},{"index":13,"rankings":["uga","osu","mich","tcu","lsu","usc","bama","clem","ore","tenn"]}]}')},EHQy:function(e,n){"use strict";n.a={home:"home__UoRM-",weeks:"weeks__Zpqba",week:"week__XBhEE",team:"team__2oXS9"}},KdXF:function(e,n,t){"use strict";(function(e){function r(n){const t=n.rankings;return e("div",{className:_.a.week},e("div",null,`Week ${n.index}`),t.map((n=>function(n){const t=l[n];return e("div",{key:n,className:_.a.team},null==t?void 0:t.name)}(n))))}function o(){const n=u.weeks;return console.log("RANKINGS",u),console.log("TEAMS",l),e("div",{className:_.a.home},e("h1",null,"FBS Rankings"),e("div",{className:_.a.weeks},n.map((e=>r(e)))))}t.d(n,"a",(function(){return o}));var _=t("EHQy"),l=t("QXRP"),u=t("E6X8")}).call(this,t("hosL").h)},MV5A:function(){},QXRP:function(e){e.exports=JSON.parse('{"uga":{"name":"Georgia"},"mich":{"name":"Michigan"},"tcu":{"name":"TCU"},"lsu":{"name":"LSU"},"usc":{"name":"USC"},"bama":{"name":"Alabama"},"clem":{"name":"Clemson"},"ore":{"name":"Oregon"},"tenn":{"name":"Tennessee"},"osu":{"name":"Ohio State"},"utah":{"name":"Utah"}}')},QfWi:function(e,n,t){"use strict";t.r(n),function(e){function r(){return e(o.a,null)}t.d(n,"default",(function(){return r}));t("MV5A");var o=t("KdXF")}.call(this,t("hosL").h)},hosL:function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function o(e){var n=e.parentNode;n&&n.removeChild(e)}function _(e,n,t){var r,o,_,u={};for(_ in n)"key"==_?r=n[_]:"ref"==_?o=n[_]:u[_]=n[_];if(arguments.length>2&&(u.children=arguments.length>3?N.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===u[_]&&(u[_]=e.defaultProps[_]);return l(e,u,r,o,null)}function l(e,n,t,r,o){var _={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++O:o};return null==o&&null!=L.vnode&&L.vnode(_),_}function u(){return{current:null}}function i(e){return e.children}function c(e,n){this.props=e,this.context=n}function s(e,n){if(null==n)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?s(e):null}function a(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return a(e)}}function f(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!d.__r++||R!==L.debounceRendering)&&((R=L.debounceRendering)||setTimeout)(d)}function d(){for(var e;d.__r=W.length;)e=W.sort((function(e,n){return e.__v.__b-n.__v.__b})),W=[],e.some((function(e){var n,t,o,_,l,u;e.__d&&(l=(_=(n=e).__v).__e,(u=n.__P)&&(t=[],(o=r({},_)).__v=_.__v+1,x(u,_,o,n.__n,void 0!==u.ownerSVGElement,null!=_.__h?[l]:null,t,null==l?s(_):l,_.__h),S(t,_),_.__e!=l&&a(_)))}))}function p(e,n,t,r,o,_,u,c,a,f){var d,p,m,y,g,b,k,S=r&&r.__k||H,C=S.length;for(t.__k=[],d=0;d<n.length;d++)if(null!=(y=t.__k[d]=null==(y=n[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?l(null,y,null,null,y):Array.isArray(y)?l(i,{children:y},null,null,null):y.__b>0?l(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(m=S[d])||m&&y.key==m.key&&y.type===m.type)S[d]=void 0;else for(p=0;p<C;p++){if((m=S[p])&&y.key==m.key&&y.type===m.type){S[p]=void 0;break}m=null}x(e,y,m=m||j,o,_,u,c,a,f),g=y.__e,(p=y.ref)&&m.ref!=p&&(k||(k=[]),m.ref&&k.push(m.ref,null,y),k.push(p,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&y.__k===m.__k?y.__d=a=h(y,a,e):a=v(e,y,m,S,g,a),"function"==typeof t.type&&(t.__d=a)):a&&m.__e==a&&a.parentNode!=e&&(a=s(m))}for(t.__e=b,d=C;d--;)null!=S[d]&&E(S[d],S[d]);if(k)for(d=0;d<k.length;d++)w(k[d],k[++d],k[++d])}function h(e,n,t){for(var r,o=e.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=e,n="function"==typeof r.type?h(r,n,t):v(t,r,r,o,r.__e,n));return n}function m(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){m(e,n)})):n.push(e)),n}function v(e,n,t,r,o,_){var l,u,i;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||o!=_||null==o.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(o),l=null;else{for(u=_,i=0;(u=u.nextSibling)&&i<r.length;i+=1)if(u==o)break e;e.insertBefore(o,_),l=_}return void 0!==l?l:o.nextSibling}function y(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||I.test(n)?t:t+"px"}function g(e,n,t,r,o){var _;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||y(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||y(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+_]=t,t?r||e.addEventListener(n,_?k:b,_):e.removeEventListener(n,_?k:b,_);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&-1==n.indexOf("-")?e.removeAttribute(n):e.setAttribute(n,t))}}function b(e){this.l[e.type+!1](L.event?L.event(e):e)}function k(e){this.l[e.type+!0](L.event?L.event(e):e)}function x(e,n,t,o,_,l,u,s,a){var f,d,h,m,v,y,g,b,k,x,S,w,E,A,T,U=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(a=t.__h,s=n.__e=t.__e,n.__h=null,l=[s]),(f=L.__b)&&f(n);try{e:if("function"==typeof U){if(b=n.props,k=(f=U.contextType)&&o[f.__c],x=f?k?k.props.value:f.__:o,t.__c?g=(d=n.__c=t.__c).__=d.__E:("prototype"in U&&U.prototype.render?n.__c=d=new U(b,x):(n.__c=d=new c(b,x),d.constructor=U,d.render=P),k&&k.sub(d),d.props=b,d.state||(d.state={}),d.context=x,d.__n=o,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=U.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,U.getDerivedStateFromProps(b,d.__s))),m=d.props,v=d.state,h)null==U.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==U.getDerivedStateFromProps&&b!==m&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,x),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,x)||n.__v===t.__v){for(d.props=b,d.state=d.__s,n.__v!==t.__v&&(d.__d=!1),d.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S]);d._sb=[],d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,x),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(m,v,y)}))}if(d.context=x,d.props=b,d.__v=n,d.__P=e,w=L.__r,E=0,"prototype"in U&&U.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(n),f=d.render(d.props,d.state,d.context),A=0;A<d._sb.length;A++)d.__h.push(d._sb[A]);d._sb=[]}else do{d.__d=!1,w&&w(n),f=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++E<25);d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(y=d.getSnapshotBeforeUpdate(m,v)),T=null!=f&&f.type===i&&null==f.key?f.props.children:f,p(e,Array.isArray(T)?T:[T],n,t,o,_,l,u,s,a),d.base=n.__e,n.__h=null,d.__h.length&&u.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=C(t.__e,n,t,o,_,l,u,a);(f=L.diffed)&&f(n)}catch(e){n.__v=null,(a||null!=l)&&(n.__e=s,n.__h=!!a,l[l.indexOf(s)]=null),L.__e(e,n,t)}}function S(e,n){L.__c&&L.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){L.__e(e,n.__v)}}))}function C(e,n,t,r,_,l,u,i){var c,a,f,d=t.props,h=n.props,m=n.type,v=0;if("svg"===m&&(_=!0),null!=l)for(;v<l.length;v++)if((c=l[v])&&"setAttribute"in c==!!m&&(m?c.localName===m:3===c.nodeType)){e=c,l[v]=null;break}if(null==e){if(null===m)return document.createTextNode(h);e=_?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),l=null,i=!1}if(null===m)d===h||i&&e.data===h||(e.data=h);else{if(l=l&&N.call(e.childNodes),a=(d=t.props||j).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!i){if(null!=l)for(d={},v=0;v<e.attributes.length;v++)d[e.attributes[v].name]=e.attributes[v].value;(f||a)&&(f&&(a&&f.__html==a.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,r,o){var _;for(_ in t)"children"===_||"key"===_||_ in n||g(e,_,null,t[_],r);for(_ in n)o&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||t[_]===n[_]||g(e,_,n[_],t[_],r)}(e,h,d,_,i),f)n.__k=[];else if(v=n.props.children,p(e,Array.isArray(v)?v:[v],n,t,r,_&&"foreignObject"!==m,l,u,l?l[0]:t.__k&&s(t,0),i),null!=l)for(v=l.length;v--;)null!=l[v]&&o(l[v]);i||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===m&&!v||"option"===m&&v!==d.value)&&g(e,"value",v,d.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&g(e,"checked",v,d.checked,!1))}return e}function w(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){L.__e(e,t)}}function E(e,n,t){var r,_;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,n)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&E(r[_],n,t||"function"!=typeof e.type);t||null==e.__e||o(e.__e),e.__=e.__e=e.__d=void 0}function P(e,n,t){return this.constructor(e,t)}function A(e,n,t){var r,o,l;L.__&&L.__(e,n),o=(r="function"==typeof t)?null:t&&t.__k||n.__k,l=[],x(n,e=(!r&&t||n).__k=_(i,null,[e]),o||j,j,void 0!==n.ownerSVGElement,!r&&t?[t]:o?null:n.firstChild?N.call(n.childNodes):null,l,!r&&t?t:o?o.__e:n.firstChild,r),S(l,e)}function T(e,n){A(e,n,T)}function U(e,n,t){var o,_,u,i=r({},e.props);for(u in n)"key"==u?o=n[u]:"ref"==u?_=n[u]:i[u]=n[u];return arguments.length>2&&(i.children=arguments.length>3?N.call(arguments,2):t),l(e.type,i,o||e.key,_||e.ref,null)}function M(e,n){var t={__c:n="__cC"+F++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,r;return this.getChildContext||(t=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(f)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"Component",(function(){return c})),t.d(n,"Fragment",(function(){return i})),t.d(n,"cloneElement",(function(){return U})),t.d(n,"createContext",(function(){return M})),t.d(n,"createElement",(function(){return _})),t.d(n,"createRef",(function(){return u})),t.d(n,"h",(function(){return _})),t.d(n,"hydrate",(function(){return T})),t.d(n,"isValidElement",(function(){return D})),t.d(n,"options",(function(){return L})),t.d(n,"render",(function(){return A})),t.d(n,"toChildArray",(function(){return m}));var N,L,O,D,W,R,F,j={},H=[],I=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;N=H.slice,L={__e:function(e,n,t,r){for(var o,_,l;n=n.__;)if((o=n.__c)&&!o.__)try{if((_=o.constructor)&&null!=_.getDerivedStateFromError&&(o.setState(_.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),l=o.__d),l)return o.__E=o}catch(n){e=n}throw e}},O=0,D=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},t),this.props)),e&&r(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=i,W=[],d.__r=0,F=0},mdyV:function(e,n,t){"use strict";t.r(n);var r=t("hosL");const{h:o,render:_,hydrate:l}=r,u=e=>e&&e.default?e.default:e,i=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(i(t.p)+"sw-esm.js"),"function"==typeof u(t("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,n=()=>{let n=u(t("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const s={preRenderData:r},a=r.url?i(r.url):"";(l&&a===i(location.pathname)?l:_)(o(n,{CLI_DATA:s}),document.body,e)};0,n()}}});
//# sourceMappingURL=bundle.09baa.esm.js.map