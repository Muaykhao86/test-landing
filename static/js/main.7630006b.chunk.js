(window["webpackJsonptest-landing"]=window["webpackJsonptest-landing"]||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),s=n.n(r),i=(n(16),n(1)),l=n.n(i),c=n(4),u=n(5),m=n(6),d=n(7),p=n(9),h=n(8),g=n(10),w=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).saveToState=function(e){n.setState(Object(u.a)({},e.target.name,[e.target.value]))},n.SendForm=Object(c.a)(l.a.mark((function e(){var t,a,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:n.state.email,password:n.state.password},e.next=3,fetch("https://prelude.eurobrake.net/login",{method:"post",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:o=e.sent,r=JSON.stringyfy(o),console.log({string:r}),console.log({json:o});case 10:case"end":return e.stop()}}),e)}))),n.state={email:"",password:""},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:""},"Email",o.a.createElement("input",{type:"email",name:"email",id:"",onChange:this.saveToState})),o.a.createElement("label",{htmlFor:""},"Password",o.a.createElement("input",{type:"password",name:"password",id:"",onChange:this.saveToState})),o.a.createElement("label",{htmlFor:""},"Login",o.a.createElement("input",{type:"submit",value:"Login",onClick:this.SendForm})),o.a.createElement("label",{htmlFor:""},"Logout",o.a.createElement("input",{type:"submit",value:"Logout",onClick:this.LogOut})))}}]),t}(a.Component);n(18);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.7630006b.chunk.js.map