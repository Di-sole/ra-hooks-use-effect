(this["webpackJsonpuse-effect"]=this["webpackJsonpuse-effect"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(4),a=n.n(i),r=(n(9),n(2)),o=(n(10),n(0));var u=function(e){var t=e.users,n=e.handleClick;return Object(o.jsx)("ul",{className:"user-list",children:t.map((function(e){return Object(o.jsx)("li",{className:"user-list-elem",onClick:function(){return n(e.id)},children:e.name},e.id)}))})};var l=function(e){var t=e.info,n=Object(c.useState)(null),s=Object(r.a)(n,2),i=s[0],a=s[1],u=Object(c.useState)(!1),l=Object(r.a)(u,2),j=l[0],f=l[1];return Object(c.useEffect)((function(){f(!0);try{fetch("".concat("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data","/").concat(t.id,".json")).then((function(e){return e.json()})).then((function(e){return a(e)}))}catch(e){console.log(e)}finally{f(!1)}}),[t.id]),Object(o.jsxs)(o.Fragment,{children:[j&&Object(o.jsx)("div",{children:"Loading..."}),i&&Object(o.jsxs)("div",{className:"user-details",children:[Object(o.jsx)("img",{src:i.avatar,alt:i.name}),Object(o.jsx)("p",{className:"user-info user-name",children:i.name}),Object(o.jsxs)("p",{className:"user-info",children:["City: ",i.details.city]}),Object(o.jsxs)("p",{className:"user-info",children:["Company: ",i.details.company]}),Object(o.jsxs)("p",{className:"user-info",children:["Position: ",i.details.position]})]})]})};var j=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(null),a=Object(r.a)(i,2),j=a[0],f=a[1],d=Object(c.useState)(!1),h=Object(r.a)(d,2),b=h[0],O=h[1];return Object(c.useEffect)((function(){O(!0),fetch("".concat("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data","/users.json")).then((function(e){return e.json()})).then((function(e){return s(e)})).finally((function(){return O(!1)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[b?Object(o.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(o.jsx)(u,{users:n,handleClick:function(e){var t=n.find((function(t){return t.id===e}));f(t)}}),j?Object(o.jsx)(l,{info:j}):null]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.cf2870c0.chunk.js.map