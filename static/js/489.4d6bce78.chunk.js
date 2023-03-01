"use strict";(self.webpackChunkgoit_react_hw_05_movies_old=self.webpackChunkgoit_react_hw_05_movies_old||[]).push([[489],{4489:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(8214),a=n(5861),s=n(885),i=n(2791),c=n(9380),o=n(1558),u=n(501),l=n(6871),p="MoviesDetails_list__uTHrT",d="MoviesDetails_foto__1ZOq5",f="MoviesDetails_image__q5z+X",h="MoviesDetails_link__yacK6",v=n(184);function x(){var e,t,n=(0,l.UO)().movieId,x=(0,i.useState)({}),m=(0,s.Z)(x,2),_=m[0],j=m[1],g=(0,i.useState)(!1),w=(0,s.Z)(g,2),Z=w[0],y=w[1],k=(0,i.useState)([]),b=(0,s.Z)(k,2),U=b[0],N=b[1],S=(0,l.TH)(),T=null!==(e=null===S||void 0===S||null===(t=S.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,i.useEffect)((function(){function e(){return(e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,(0,c.TP)(n);case 4:t=e.sent,j(t),N(t.genres),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var D=_.original_title,M=_.vote_average,q=_.overview,C=_.poster_path;return(0,v.jsxs)(v.Fragment,{children:[Z&&(0,v.jsx)("h3",{children:"Loading films...."}),(0,v.jsx)(u.rU,{to:T,children:"Go back"}),_&&(0,v.jsxs)("section",{children:[(0,v.jsx)("div",{className:d,children:(0,v.jsx)("img",{className:f,src:C?"https://image.tmdb.org/t/p/w500".concat(C):o,alt:D})}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h2",{children:[" ",D]}),(0,v.jsxs)("p",{children:[" User Score: ",10*M,"%"]}),_&&(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("ul",{children:U.map((function(e){return(0,v.jsx)("li",{children:e.name},e.id)}))})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsxs)("p",{children:[" ",q]})]})]})]}),(0,v.jsxs)("section",{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)(u.rU,{to:"cast",movieid:n,state:{from:T},className:h,children:"Cast"}),(0,v.jsx)(u.rU,{to:"reviews",movieid:n,state:{from:T},className:h,children:"Reviews"})]})]}),(0,v.jsx)(i.Suspense,{fallback:null,children:(0,v.jsx)(l.j3,{})})]})}},9380:function(e,t,n){n.d(t,{Hg:function(){return o},TP:function(){return d},V0:function(){return l},tx:function(){return x},zv:function(){return h}});var r=n(8214),a=n(5861),s=n(4569),i=n.n(s),c="01fc814c0e3e52f0814fb7a89299a296";function o(){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("search/movie?api_key=".concat(c,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("movie/".concat(t,"/credits?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3"},1558:function(e,t,n){e.exports=n.p+"static/media/no-image.ae12979f6099185ebba0.jpeg"}}]);
//# sourceMappingURL=489.4d6bce78.chunk.js.map