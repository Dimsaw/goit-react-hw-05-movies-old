"use strict";(self.webpackChunkgoit_react_hw_05_movies_old=self.webpackChunkgoit_react_hw_05_movies_old||[]).push([[595],{3595:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(8214),a=e(5861),c=e(885),u=e(2791),s=e(9380),i=e(6871),o=e(184);function p(){var t=(0,i.UO)().movieId,n=(0,u.useState)({}),e=(0,c.Z)(n,2),p=e[0],f=e[1],h=(0,u.useState)(!1),l=(0,c.Z)(h,2),v=l[0],d=l[1];return(0,u.useEffect)((function(){function n(){return(n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,n.next=4,(0,s.tx)(t);case 4:e=n.sent,f(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,d(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,o.jsxs)("section",{children:[v&&(0,o.jsx)("h3",{children:"Loading reviews...."}),p.length>0?(0,o.jsx)("ul",{children:p.map((function(t){var n=t.author,e=t.content;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h4",{children:["Author: ",n]}),(0,o.jsx)("p",{children:e})]},n)}))}):(0,o.jsx)("p",{children:" No Reviews found "})]})}},9380:function(t,n,e){e.d(n,{Hg:function(){return i},TP:function(){return h},V0:function(){return p},tx:function(){return x},zv:function(){return v}});var r=e(8214),a=e(5861),c=e(4569),u=e.n(c),s="01fc814c0e3e52f0814fb7a89299a296";function i(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=595.d0f68be5.chunk.js.map