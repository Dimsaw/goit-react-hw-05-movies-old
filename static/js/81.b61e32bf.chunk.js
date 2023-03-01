"use strict";(self.webpackChunkgoit_react_hw_05_movies_old=self.webpackChunkgoit_react_hw_05_movies_old||[]).push([[81],{81:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(8214),a=n(5861),u=n(885),s=n(2791),c=n(9380),i=n(501),o=n(6871),p=n(6066),f=n(1558),l="Movies_form__4ow+Z",m="Movies_input__KrUqs",v="Movies_btn__TlfBQ",h="Movies_list__hqYjd",d="Movies_item__Ba4aJ",_="Movies_link__MzAfU",x="Movies_img__8sw1H",y=n(184);function g(){var t=(0,s.useState)([]),e=(0,u.Z)(t,2),n=e[0],g=e[1],b=(0,s.useState)(!1),Z=(0,u.Z)(b,2),w=Z[0],k=Z[1],j=(0,o.TH)(),M=(0,i.lr)(),N=(0,u.Z)(M,2),q=N[0],C=N[1],S=q.get("query"),T=(0,s.useState)(null!==S&&void 0!==S?S:""),U=(0,u.Z)(T,2),A=U[0],H=U[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(S){t.next=2;break}return t.abrupt("return",console.log("form is empty"));case 2:return t.prev=2,k(!0),t.next=6,(0,c.V0)(S);case 6:if(!((e=t.sent).results.length>0)){t.next=11;break}return t.abrupt("return",g(e.results));case 11:return t.abrupt("return",p.Am.error("We did not find any movies for you!"));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0);case 17:return t.prev=17,k(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])})));return function(){return t.apply(this,arguments)}}();t()}),[S,C]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("form",{action:"",onSubmit:function(t){if(t.preventDefault(),C({query:A.toLowerCase().trim()}),""===S)return p.Am.warning("The form is empty")},className:l,children:[(0,y.jsx)("input",{onChange:function(t){H(t.currentTarget.value)},type:"text",autoComplete:"off",autoFocus:!0,name:"query",value:A,className:m}),(0,y.jsx)("button",{className:v,type:"submit",children:"Search"})]}),w&&(0,y.jsx)("h3",{children:"Loading films...."}),(0,y.jsx)("ul",{className:h,children:n.map((function(t){var e=t.id,n=t.title,r=t.poster_path,a=t.name,u=t.original_title;return(0,y.jsx)("li",{className:d,children:(0,y.jsxs)(i.rU,{to:"".concat(e),state:{from:j},children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:x,src:r?"https://image.tmdb.org/t/p/w500".concat(r):f,alt:null!==a&&void 0!==a?a:u})}),(0,y.jsxs)("p",{className:_,children:[" ",n]})]})},e)}))})]})}},9380:function(t,e,n){n.d(e,{Hg:function(){return i},TP:function(){return l},V0:function(){return p},tx:function(){return d},zv:function(){return v}});var r=n(8214),a=n(5861),u=n(4569),s=n.n(u),c="01fc814c0e3e52f0814fb7a89299a296";function i(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("trending/movie/day?api_key=".concat(c));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("movie/".concat(e,"/credits?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3"},1558:function(t,e,n){t.exports=n.p+"static/media/no-image.ae12979f6099185ebba0.jpeg"}}]);
//# sourceMappingURL=81.b61e32bf.chunk.js.map