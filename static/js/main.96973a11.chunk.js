(this["webpackJsonpinfo-covid"]=this["webpackJsonpinfo-covid"]||[]).push([[0],{18:function(e,a,t){e.exports=t(46)},23:function(e,a,t){},24:function(e,a,t){},27:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r);t(23),t(24);var o=function(){return l.a.createElement("header",{className:"header-bg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"logo-covid"},l.a.createElement("span",null,"Info Covid"))))},s=t(2),m=t.n(s),i=t(14),u=t(17),E=t(15),v=t.n(E),d=(t(27),t(16)),p=t.n(d).a.create({baseURL:"https://covid19-brazil-api.now.sh/api/report/v1"});function f(){var e=Object(n.useState)({}),a=Object(u.a)(e,2),t=a[0],r=a[1];function c(){return(c=Object(i.a)(m.a.mark((function e(a){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/brazil/uf/"+a);case 3:if(t=e.sent,!((n=t.data)<0)){e.next=7;break}throw new Error("N\xe3o h\xe1 dados!");case 7:r(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.erro("Deu erro!");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){p.get("/brazil/uf/df").then((function(e){Array(e.data).length,r(e.data)}))}),[]),l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"search"},l.a.createElement("form",null,l.a.createElement("select",{name:"uf",defaultValue:"",id:"ufCovid",onChange:function(e){return function(e){return c.apply(this,arguments)}(e.target.value)}},l.a.createElement("option",{value:"",disabled:!0},"Selecione o seu estado"),l.a.createElement("option",{value:"AC"},"AC"),l.a.createElement("option",{value:"AL"},"AL"),l.a.createElement("option",{value:"AM"},"AM"),l.a.createElement("option",{value:"AP"},"AP"),l.a.createElement("option",{value:"BA"},"BA"),l.a.createElement("option",{value:"CE"},"CE"),l.a.createElement("option",{value:"DF"},"DF"),l.a.createElement("option",{value:"ES"},"ES"),l.a.createElement("option",{value:"GO"},"GO"),l.a.createElement("option",{value:"MA"},"MA"),l.a.createElement("option",{value:"MG"},"MG"),l.a.createElement("option",{value:"MS"},"MS"),l.a.createElement("option",{value:"MT"},"MT"),l.a.createElement("option",{value:"PA"},"PA"),l.a.createElement("option",{value:"PB"},"PB"),l.a.createElement("option",{value:"PE"},"PE"),l.a.createElement("option",{value:"PI"},"PI"),l.a.createElement("option",{value:"PR"},"PR"),l.a.createElement("option",{value:"RJ"},"RJ"),l.a.createElement("option",{value:"RN"},"RN"),l.a.createElement("option",{value:"RS"},"RS"),l.a.createElement("option",{value:"RO"},"RO"),l.a.createElement("option",{value:"RR"},"RR"),l.a.createElement("option",{value:"SC"},"SC"),l.a.createElement("option",{value:"SE"},"SE"),l.a.createElement("option",{value:"SP"},"SP"),l.a.createElement("option",{value:"TO"},"TO")))),l.a.createElement("div",{className:"cards"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"number-cases"},l.a.createElement("span",{className:"card-text"},t.cases)),l.a.createElement("div",{className:"cases-content"},l.a.createElement("h5",{className:"card-title"},"Casos"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"number-cases"},l.a.createElement("span",{className:"card-text"},t.suspects)),l.a.createElement("div",{className:"cases-content"},l.a.createElement("h5",{className:"card-title"},"Suspeitos"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"number-cases"},l.a.createElement("span",{className:"card-text"},t.deaths)),l.a.createElement("div",{className:"cases-content"},l.a.createElement("h5",{className:"card-title"},"Mortes")))),l.a.createElement("div",{className:"info-locale-date"},l.a.createElement("div",{className:"info-locale"},l.a.createElement("span",null,"Estado: "+t.state)),l.a.createElement("div",{className:"info-date"},l.a.createElement("span",null,"Atualiza\xe7\xe3o: "+v()(t.datetime).format("DD/MM/YYYY H:m"))))))}var N=t(3);t(45);var h=function(){return l.a.createElement("footer",{className:"footer-bg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"direitos"},l.a.createElement("p",null,"\xa9 Todos os direitos reservados")),l.a.createElement("div",{className:"redes"},l.a.createElement("span",null,l.a.createElement("a",{rel:"noopener noreferrer",href:"//github.com/huriellopes",target:"_blank"},l.a.createElement(N.a,{size:20,color:"#000000"}))),l.a.createElement("span",null,l.a.createElement("a",{rel:"noopener noreferrer",href:"//www.linkedin.com/in/huriellopes",target:"_blank"},l.a.createElement(N.b,{size:24}))))))};var b=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(f,null),l.a.createElement(h,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.96973a11.chunk.js.map