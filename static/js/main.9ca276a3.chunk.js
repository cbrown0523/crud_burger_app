(this["webpackJsonpburg-app"]=this["webpackJsonpburg-app"]||[]).push([[0],{24:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(8),r=c.n(n),o=c(19),a=c.n(o),i=(c(24),c(13)),u=c(11),s=c(16);c(18);s.a.initializeApp({apiKey:"AIzaSyDfbRKo6-WB6Oih8JVpbO-g0xn0k_iUcfw",authDomain:"burger-app-d29f0.firebaseapp.com",projectId:"burger-app-d29f0",storageBucket:"burger-app-d29f0.appspot.com",messagingSenderId:"570826552007",appId:"1:570826552007:web:76e4dc02070d5cbab3c4e2"});var l=s.a,b=(c(28),c(5));var d=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],r=t[1],o=Object(n.useState)([]),a=Object(u.a)(o,2),s=a[0],d=a[1],j=Object(n.useState)(null),f=Object(u.a)(j,2),p=f[0],h=f[1],g=Object(n.useState)(),O=Object(u.a)(g,2),m=O[0],x=O[1];Object(n.useEffect)((function(){B()}),[]),Object(n.useEffect)((function(){null!==p&&v()}),[m]);var v=function(){var e=p;l.firestore().collection("burger").doc(e).update({isCompleted:m}),h(null),x(null)},B=function(e){return d([]),l.firestore().collection("burger").get().then((function(e){e.forEach((function(e){var t=e.data();-1===s.indexOf(t.id)?d((function(e){return[].concat(Object(i.a)(e),[t])})):console.log("this is a duplicate"),console.log("here are all of the todos",s)}))})).catch((function(e){return console.log(e)}))};return Object(b.jsxs)("div",{className:"burger",children:[Object(b.jsx)("h1",{children:"Tasty Burger"}),Object(b.jsx)("hr",{}),Object(b.jsx)("h2",{className:"burgerMade",children:"Burgers Made"}),Object(b.jsx)("input",{type:"text",id:"makeBurger",onChange:function(e){!function(e){r(e.target.value)}(e)},placeholder:"Make a Burger"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"button",className:"add-btn",onClick:function(){if(""!==c){var e={id:l.firestore().collection("burger").doc().id},t={id:e.id,value:c,isCompleted:!1};l.firestore().collection("burger").doc(e.id).set({value:c,isCompleted:!1,id:e.id}).then((function(){d([].concat(Object(i.a)(s),[t])),console.log("this is a new one"),B()}))}},children:"Add New Burger"}),Object(b.jsx)("hr",{}),Object(b.jsx)("h2",{className:"burgerEat",children:"Eat a Burger"}),Object(b.jsx)("hr",{}),s!==[]?Object(b.jsx)("ul",{children:s.map((function(e){return Object(b.jsxs)("li",{className:"listItem",children:[e.value,Object(b.jsx)("button",{type:"button",className:"remove-btn",onClick:function(t){return function(e,t){e.preventDefault(),l.firestore().collection("burger").doc(t).delete().then((function(){console.log("Document successfully deleted!",t)})).catch((function(e){console.error(t,"Error removing document: ",e)})).then((function(e){return d(Object(i.a)(s.filter((function(e){return e.id!==t}))))})),console.log(t,"here is an id",t)}(t,e.id)},children:"Eat the Burger"})]})}))}):null]})};var j=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("span",{className:"title",children:"Burger App"})," ",Object(b.jsx)("br",{}),Object(b.jsx)(d,{})]})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9ca276a3.chunk.js.map