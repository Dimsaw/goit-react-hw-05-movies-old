"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[684],{9684:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(8214),a=n(5861),s=n(885),u=n(2791),c=n(9380),i=n(501),o=n(6871),p=n(1558),f="Movies_form__4ow+Z",l="Movies_input__KrUqs",m="Movies_btn__TlfBQ",v="Movies_list__hqYjd",h="Movies_item__Ba4aJ",d="Movies_link__MzAfU",_="Movies_img__8sw1H",x=n(184),y=function(t){var e=t.items,n=(0,o.TH)();return(0,x.jsx)("ul",{className:v,children:e.map((function(t){var e=t.id,r=t.title,a=t.poster_path,s=t.name,u=t.original_title;return(0,x.jsx)("li",{className:h,children:(0,x.jsxs)(i.rU,{to:"".concat(e),state:{from:n},children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{className:_,src:a?"https://image.tmdb.org/t/p/w500".concat(a):p,alt:null!==s&&void 0!==s?s:u})}),(0,x.jsxs)("p",{className:d,children:[" ",r]})]})},e)}))})},g=n(6066);function b(){var t=(0,u.useState)([]),e=(0,s.Z)(t,2),n=e[0],o=e[1],p=(0,u.useState)(!1),v=(0,s.Z)(p,2),h=v[0],d=v[1],_=(0,i.lr)(),b=(0,s.Z)(_,2),Z=b[0],w=b[1],k=Z.get("query"),j=(0,u.useState)(null!==k&&void 0!==k?k:""),M=(0,s.Z)(j,2),N=M[0],q=M[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(k){t.next=2;break}return t.abrupt("return",console.log("form is empty"));case 2:return t.prev=2,d(!0),t.next=6,(0,c.V0)(k);case 6:if(!((e=t.sent).results.length>0)){t.next=11;break}return t.abrupt("return",o(e.results));case 11:return t.abrupt("return",g.Am.error("We did not find any movies for you!"));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0);case 17:return t.prev=17,d(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])})));return function(){return t.apply(this,arguments)}}();t()}),[k]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("form",{action:"",onSubmit:function(t){if(t.preventDefault(),w({query:N.toLowerCase().trim()}),""===k)return g.Am.warning("The form is empty")},className:f,children:[(0,x.jsx)("input",{onChange:function(t){q(t.currentTarget.value)},type:"text",autoComplete:"off",autoFocus:!0,name:"query",value:N,className:l}),(0,x.jsx)("button",{className:m,type:"submit",children:"Search"})]}),h&&(0,x.jsx)("h3",{children:"Loading films...."}),(0,x.jsx)(y,{items:n})]})}},9380:function(t,e,n){n.d(e,{Hg:function(){return i},TP:function(){return l},V0:function(){return p},tx:function(){return d},zv:function(){return v}});var r=n(8214),a=n(5861),s=n(4569),u=n.n(s),c="01fc814c0e3e52f0814fb7a89299a296";function i(){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("trending/movie/day?api_key=".concat(c));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"/credits?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3"},1558:function(t,e,n){t.exports=n.p+"static/media/no-image.ae12979f6099185ebba0.jpeg"}}]);
//# sourceMappingURL=684.986ddf31.chunk.js.map