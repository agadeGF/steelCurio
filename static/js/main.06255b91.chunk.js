(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},23:function(e,t,n){e.exports=n(43)},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(18),c=n.n(i),l=(n(28),n(12)),r=n(6),s=n(4),u=n(10),d=n.n(u),m=function(){var e=Object(a.useState)("No result"),t=Object(s.a)(e,2),n=t[0],i=t[1];return o.a.createElement("div",null,o.a.createElement(d.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){e&&i(e)},style:{maxWidth:"600px",margin:"20px auto"}}),o.a.createElement("p",null,n))},f=n(15),p=[],v=function(e,t){switch(t.type){case"add":return e.find((function(e){return e.id===t.id}))?e:(e.push({id:t.id,name:t.id}),Object(f.a)(e));case"editName":var n=e.find((function(e){return e.id===t.id}));return n&&(n.name=t.name),Object(f.a)(e);default:return e}},h=function(){return Object(a.useReducer)(v,p)},g=(n(35),function(e){var t=e.devices,n=h(),a=Object(s.a)(n,2),i=(a[0],a[1]),c=function(e){i({type:"editName",id:e.target.id,name:e.target.value})},l=function(e){e.target.value===e.target.id&&(e.target.value="")},r=function(e){e.target.value.length||(e.target.value=e.target.id)};return o.a.createElement("div",{className:"device-list"},t.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("label",{className:"device-list__label"},"Device name: "),o.a.createElement("input",{id:e.id,className:"device-list__name",type:"text",defaultValue:e.name,onChange:c,onClick:l,onBlur:r}))})))}),b=(n(36),function(){var e=h(),t=Object(s.a)(e,1)[0],n=Object(a.useState)(null),i=Object(s.a)(n,2),c=i[0],l=i[1],r=Object(a.useState)("http://www.angelfire.com/dc/html-webmaster/mailto.htm"),u=Object(s.a)(r,2),d=u[0],m=(u[1],"mailto:".concat(c,"?subject=").concat("New GiM devices has been commissioned for you","&body=").concat("Hi, click this link to claim your newly commissioned devices:"," ").concat(d));return o.a.createElement("div",{className:"submit-devices"},o.a.createElement("div",null,o.a.createElement("button",{className:"App__install-button",disabled:!t.length},"Add devices to me")),o.a.createElement("br",null),o.a.createElement("div",null,"Or add devices to another person:"),o.a.createElement("div",{className:"submit-devices__email"},o.a.createElement("label",{className:"device-list__label"},"Email: "),o.a.createElement("input",{className:"device-list__name",type:"email",onChange:function(e){return l(e.target.value)},disabled:!t.length})),o.a.createElement("div",null,o.a.createElement("button",{className:"App__install-button",onClick:function(){window.location.href=m},disabled:!t.length||!c},"Send")))}),E=(n(37),function(){var e=h(),t=Object(s.a)(e,2),n=t[0],a=t[1];return o.a.createElement("div",{className:"commissioning"},o.a.createElement(d.a,{delay:300,onError:function(e){console.error(e)},onScan:function(e){e&&a({type:"add",id:e})},style:{maxWidth:"600px",margin:"20px auto"}}),o.a.createElement(g,{devices:n}),o.a.createElement(b,null))}),w=function(){return o.a.createElement(r.d,null,o.a.createElement(r.b,{path:"/jodusNodus",component:m}),o.a.createElement(r.b,{path:"/commissioning",component:E}),o.a.createElement(r.b,{path:"*"},o.a.createElement(r.a,{to:"/commissioning"})))},y=null,N=!1,j=function(){y&&(y.prompt(),y.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),y=null,N=!1})))},k=n(22),_=n.n(k);n(41);var A=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:_.a,className:"App-logo",alt:"logo"})),o.a.createElement("section",null,o.a.createElement(l.a,null,o.a.createElement(w,null))),o.a.createElement("footer",null,N?o.a.createElement("button",{onClick:j,className:"App__install-button"},"Install me"):null))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/steelCurio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/steelCurio","/service-worker.js");O?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}(),window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),y=e,N=!0}))}},[[23,1,2]]]);
//# sourceMappingURL=main.06255b91.chunk.js.map