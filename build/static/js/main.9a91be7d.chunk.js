(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,n,e){t.exports=e(38)},38:function(t,n,e){"use strict";e.r(n);var a=e(0),o=e.n(a),r=e(11),i=e.n(r),c=e(12),u=e(3),l=function(t){var n=t.note,e=t.toggleImportance,a=n.important?"make not important":"make important";return o.a.createElement("li",null,n.content," ",o.a.createElement("button",{onClick:e},a))},m=e(2),f=e.n(m),p=function(){return f.a.get("/api/notes").then(function(t){return t.data})},d=function(t){return f.a.post("/api/notes",t).then(function(t){return t.data})},s=function(t){return f.a.put("".concat("/api/notes","/").concat(t.id),t).then(function(t){return t.data})},b=function(){var t=Object(a.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],i=Object(a.useState)(""),m=Object(u.a)(i,2),f=m[0],b=m[1],v=Object(a.useState)(!0),E=Object(u.a)(v,2),h=E[0],k=E[1];Object(a.useEffect)(function(){p().then(function(t){r(t)})},[]);var g=h?e:e.filter(function(t){return t.important});return o.a.createElement("div",null,o.a.createElement("h1",null,"Muistiinpanot"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return k(!h)}},"n\xe4yt\xe4 ",h?"vain t\xe4rke\xe4t":"kaikki")),o.a.createElement("ul",null,g.map(function(t){return o.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){var n=e.find(function(n){return n.id===t}),a=Object(c.a)({},n,{important:!n.important});s(a).then(function(n){r(e.map(function(e){return e.id!==t?e:n}))}).catch(function(a){alert("muistiinpano '".concat(n.content,"' on jo valitettavasti poistettu palvelimelta")),r(e.filter(function(n){return n.id!==t}))})}(t.id)}})})),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={content:f,date:(new Date).toISOString(),important:Math.random()>.5};d(n).then(function(t){r(e.concat(t)),b("")})}},o.a.createElement("input",{value:f,onChange:function(t){b(t.target.value)}}),o.a.createElement("button",{type:"submit"},"tallenna")))};i.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.9a91be7d.chunk.js.map