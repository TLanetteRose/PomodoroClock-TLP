(this["webpackJsonppomodoroclock-tlp"]=this["webpackJsonppomodoroclock-tlp"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/michigan_frog.785ffdf3.wav"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),r=a.n(s),o=(a(10),a(1)),l=function(e){return c.a.createElement("div",{className:"session-container"},c.a.createElement("h2",{id:"session-label"},"Session Length"),c.a.createElement("div",{className:"session-btn"},c.a.createElement("button",{id:"session-increment",className:"session-ctrl-btn",onClick:e.incrementSessionLength},c.a.createElement("i",{className:"fa fa-plus-square fa-1x"})),c.a.createElement("h3",{id:"session-length"},e.sessionLengthSeconds),c.a.createElement("button",{id:"session-decrement",className:"session-ctrl-btn",onClick:e.decrementSessionLength},c.a.createElement("i",{className:"fa fa-minus-square fa-1x"}))))},i=function(e){return c.a.createElement("div",{className:"break-container"},c.a.createElement("h2",{id:"break-label"},"Break Length"),c.a.createElement("div",{className:"break-btn"},c.a.createElement("button",{id:"break-increment",className:"break-ctrl-btn",onClick:e.incrementBreakLength},c.a.createElement("i",{className:"fa fa-plus-square"})),c.a.createElement("h3",{id:"break-length"},e.breakLengthSeconds),c.a.createElement("button",{id:"break-decrement",className:"break-ctrl-btn",onClick:e.decrementBreakLength},c.a.createElement("i",{className:"fa fa-minus-square"}))))},m=(a(11),a(4)),u=a.n(m),d=function(){var e=Object(n.useRef)(),t=new AudioContext,a=Object(n.useState)(5),s=Object(o.a)(a,2),r=s[0],m=s[1],d=Object(n.useState)(25),f=Object(o.a)(d,2),b=f[0],E=f[1],h=Object(n.useState)("Session"),p=Object(o.a)(h,2),k=p[0],N=p[1],g=Object(n.useState)(1500),v=Object(o.a)(g,2),S=v[0],L=v[1],j=Object(n.useState)(!1),C=Object(o.a)(j,2),O=C[0],w=C[1],B=Math.floor(S/60),x=S%60;Object(n.useEffect)((function(){var t=null;return O&&S>0?t=setInterval((function(){L(S-1)}),1e3):O&&0===S?(t=setInterval((function(){L(S-1)}),1e3),e.current.play(),"Session"===k?(N("Break"),L(60*r)):"Break"===k&&(N("Session"),L(60*b))):clearInterval(t),function(){return clearInterval(t)}}),[O,S,k,r,b,e]);return c.a.createElement("div",{className:"app-container"},c.a.createElement("div",{className:"header-container"},c.a.createElement("h1",{className:"app-title"},"Rebel-Cow Pomodoro Clock")),c.a.createElement("div",{className:"timer-container"},c.a.createElement("h2",{id:"timer-label"},k),c.a.createElement("h3",{id:"time-left"},B<10?("0"+B).slice(-2):B,":",x<10?("0"+x).slice(-2):x),c.a.createElement("div",{className:"timer-btn"},c.a.createElement("button",{id:"start_stop",className:"start-stop-btn",onClick:O?function(){w(!1)}:function(){t.resume(),w(!0)}},c.a.createElement("p",{className:"start-stop-title"},"Start/Stop"),c.a.createElement("i",{className:"fa fa-play fa-2x"}),c.a.createElement("i",{className:"fa fa-pause fa-2x"})),c.a.createElement("button",{id:"reset",className:"reset-btn",onClick:function(){E(25),m(5),L(1500),N("Session"),w(!1),e.current.pause(),e.current.currentTime=0}},c.a.createElement("p",{className:"reset-title"},"Reset"),c.a.createElement("i",{className:"fa fa-refresh fa-2x"})))),c.a.createElement("div",{className:"settings-container"},c.a.createElement(i,{breakLengthSeconds:r,incrementBreakLength:function(){!O&&r<60&&m(r+1)},decrementBreakLength:function(){!O&&r>1&&m(r-1)}}),c.a.createElement(l,{sessionLengthSeconds:b,incrementSessionLength:function(){!O&&b<60&&(E(b+1),L(60*(b+1)))},decrementSessionLength:function(){!O&&b>1&&(E(b-1),L(60*(b-1)))}})),c.a.createElement("div",{className:"sound-container"},c.a.createElement("audio",{id:"beep",ref:e,src:u.a,type:"audio"})),c.a.createElement("div",{className:"footer-container"},c.a.createElement("div",null,c.a.createElement("p",{className:"footer"}," React Pomodoro Clock App created by \xa0"," ",c.a.createElement("a",{href:"https://github.com/TLanetteRose"}," ",c.a.createElement("span",null," T.Lanette Pollard "))," \xa0FreeCodeCamp Front End Libraries Project "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.52e818e3.chunk.js.map