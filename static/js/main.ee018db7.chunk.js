(window["webpackJsonptest-landing"]=window["webpackJsonptest-landing"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),l=(n(14),n(3)),s=n(4),c=n(5),u=n(7),m=n(6),d=n(8),h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).saveToState=function(e){n.setState(Object(l.a)({},e.target.name,[e.target.value]))},n.SendForm=function(){fetch("https://www.eurobrake.net/authors/login",{method:"post",mode:"no-cors",credentials:"include",headers:{"Content-Type":"text/plain"},body:{username:n.state.email,password:n.state.password}}).then((function(e){return console.table(e)}))},n.state={email:"",password:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:""},"Email",o.a.createElement("input",{type:"email",name:"email",id:"",onChange:this.saveToState})),o.a.createElement("label",{htmlFor:""},"Password",o.a.createElement("input",{type:"password",name:"password",id:"",onChange:this.saveToState})),o.a.createElement("label",{htmlFor:""},"Login",o.a.createElement("input",{type:"submit",value:"Login",onClick:this.SendForm})),o.a.createElement("label",{htmlFor:""},"Logout",o.a.createElement("input",{type:"submit",value:"Logout",onClick:this.LogOut})))}}]),t}(a.Component);n(15);var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),"To Log out del cookie")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ee018db7.chunk.js.map