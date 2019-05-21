(function(){
var opts={"version":1,"apiEndpoint":"https://api.trello.com","authEndpoint":"https://trello.com","intentEndpoint":"https://trello.com"};
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(e){return"function"==typeof e},a={};!function(e,t,n){for(var c,i,u=t,s=n.key,l=n.token,f=n.apiEndpoint,d=n.authEndpoint,p=n.intentEndpoint,v=n.version,h="".concat(f,"/").concat(v,"/"),y=e.location,m=function(e){var t={response_type:"token",key:s};return"".concat(d,"/").concat(v,"/authorize?").concat(u.param(u.extend(t,e)))},g={version:function(){return v},key:function(){return s},setKey:function(e){s=e},token:function(){return l},setToken:function(e){l=e},rest:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=function(){var e=r(arguments.length<=0?void 0:arguments[0],4),t=e[0],n=e[1],a=e[2],c=e[3];return o(n)&&(c=a,a=n,n={}),[t=t.replace(new RegExp("^/*"),""),n,a,c]}(n),i=r(c,4),f=i[0],d=i[1],p=i[2],v=i[3],y={url:"".concat(h).concat(f),type:e,data:{},dataType:"json",success:p,error:v};return s&&(y.data.key=s),l&&(y.data.token=l),null!=d&&u.extend(y.data,d),u.ajax(y)},authorized:function(){return null!=l},deauthorize:function(){i("token",l=null)},authorize:function(t){var n=u.extend(!0,{type:"redirect",persist:!0,interactive:!0,scope:{read:!0,write:!1,account:!1},expiration:"30days"},t),r=/[&#]?token=([0-9a-f]{64})/,s=function(){n.persist&&null!=l&&i("token",l)};if(n.persist&&null==l&&(l=c("token")),null==l){var f=r.exec(y.hash);f&&(l=f[1])}if(this.authorized())return s(),y.hash=y.hash.replace(r,""),void(o(n.success)&&n.success());if(n.interactive){var p=Object.keys(n.scope||{}).reduce(function(e,t){return n.scope[t]&&e.push(t),e},[]).join(",");switch(n.type){case"popup":!function(){var t,r;r=function(e){if(e)return s(),void(o(n.success)&&n.success());o(n.error)&&n.error()},a[t="authorized"]||(a[t]=[]),a[t].push(r);var c=e.screenX+(e.innerWidth-550)/2,i=e.screenY+(e.innerHeight-725)/2,u=new RegExp("^[a-z]+://[^/]*").exec(y),f=u&&u[0],v=e.open(m({return_url:f,callback_method:"postMessage",scope:p,expiration:n.expiration,name:n.name}),"trello","width=".concat(550,",height=").concat(725,",left=").concat(c,",top=").concat(i));o(e.addEventListener)&&e.addEventListener("message",function t(n){n.origin===d&&n.source===v&&(null!=n.source&&n.source.close(),l=null!=n.data&&/[0-9a-f]{64}/.test(n.data)?n.data:null,o(e.removeEventListener)&&e.removeEventListener("message",t,!1),function(e,t){if(a[e]){var n=a[e];delete a[e];var r=!0,o=!1,c=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done);r=!0)(0,i.value)(t)}catch(e){o=!0,c=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw c}}}}("authorized",g.authorized()))},!1)}();break;default:e.location=m({redirect_uri:y.href,callback_method:"fragment",scope:p,expiration:n.expiration,name:n.name})}}else o(n.error)&&n.error()},addCard:function(t,n){var r={mode:"popup",source:s||e.location.host},a=function(n){o(e.addEventListener)&&e.addEventListener("message",function t(r){e.removeEventListener("message",t);try{var o=JSON.parse(r.data);if(o.success)return void n(null,o.card);n(new Error(o.error))}catch(e){}},!1);var a=e.screenX+(e.outerWidth-500)/2,c=e.screenY+(e.outerHeight-600)/2;return e.open("".concat(p,"/add-card?").concat(u.param(u.extend(r,t))),"trello","width=".concat(500,",height=").concat(600,",left=").concat(a,",top=").concat(c))};if(null==n)return e.Promise?new Promise(function(e,t){return a(function(n,r){n?t(n):e(r)})}):void a(function(){});a(n)}},b=function(){var e=k[x];g[e.toLowerCase()]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.rest.apply(this,[e].concat(n))}},x=0,k=["GET","PUT","POST","DELETE"];x<k.length;x++)b();g.del=g.delete;for(var w=function(){var e=_[E];g[e]={get:function(t,n,r,o){return g.get("".concat(e,"/").concat(t),n,r,o)}}},E=0,_=["actions","cards","checklists","boards","lists","members","organizations","lists"];E<_.length;E++)w();e.Trello=g;var j=e.localStorage;null!=j?(c=function(e){return j["trello_"+e]},i=function(e,t){if(null!==t)try{j["trello_"+e]=t}catch(e){}else delete j["trello_"+e]}):(c=function(){},i=function(){})}(window,jQuery,opts)}]);})()