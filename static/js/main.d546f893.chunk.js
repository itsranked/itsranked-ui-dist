(this["webpackJsonpitsranked-ui"]=this["webpackJsonpitsranked-ui"]||[]).push([[0],{19:function(e,t,n){},22:function(e){e.exports=JSON.parse('[{"name":"filters.global","shortName":"ALL","regex":""},{"name":"filters.south_america","shortName":"SA","regex":"^185.50"},{"name":"filters.united_kingdom","shortName":"UK","regex":"^145.239"},{"name":"filters.germany","shortName":"DE","regex":"^176.9|^213.239|^46.4|^78.46"},{"name":"filters.north_america","shortName":"NA","regex":"^147.135|^149.56|^206.191|^63.251|^66.165|^158.69|^63.251|^66.165"},{"name":"filters.asia","shortName":"ASIA","regex":"^209.58|^31.204|^43.249"}]')},34:function(e,t,n){},41:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c,s=n(1),a=n.n(s),i=n(24),r=n.n(i),o=(n(33),n(34),n(28)),j=n(3),l=n(9);function d(e){return e>1024?c.DESKTOP:e>=768&&e<=1024?c.TABLET:e>=320&&e<=480?c.SMARTPHONE_PORTRAIT:e>=481&&e<=767?c.SMARTPHONE_LANDSCAPE:c.TOO_SMALL}!function(e){e[e.TOO_SMALL=0]="TOO_SMALL",e[e.SMARTPHONE_PORTRAIT=1]="SMARTPHONE_PORTRAIT",e[e.SMARTPHONE_LANDSCAPE=2]="SMARTPHONE_LANDSCAPE",e[e.TABLET=4]="TABLET",e[e.DESKTOP=8]="DESKTOP",e[e.HIGH_RES_DESKTOP=16]="HIGH_RES_DESKTOP"}(c||(c={}));var u=function(){var e=Object(s.useState)(d(window.innerWidth)),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){function e(){c(d(window.innerWidth))}return window.addEventListener("orientationchange",e),window.addEventListener("resize",e),function(){window.removeEventListener("orientationchange",e),window.removeEventListener("resize",e)}}),[]),n},h={_:function(){return""},isLoaded:!1},b=a.a.createContext(h);function O(){return Object(s.useContext)(b)}var m=n(12),x=n(8),v=n(11),f=n.n(v),p=n(7),g=(n(41),n(0));var N=Object(j.f)((function(e){var t=O()._,n=["en","pt"],c={en:{name:"English",value:"US"},pt:{name:"Portugu\xeas",value:"BR"}},a=n.includes(e.match.params.language)?e.match.params.language:(navigator.language||navigator.userLanguage).split("-")[0],i=Object(s.useState)(!1),r=Object(l.a)(i,2),o=r[0],j=r[1],d=Object(s.useCallback)((function(){j(!0)}),[]);return Object(g.jsxs)("div",{id:"language",onClick:d,children:[Object(g.jsx)("span",{className:"language",children:t("header.provider.language")}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"flag",children:Object(g.jsx)(p.a,{countryCode:c[a].value,svg:!0})}),Object(g.jsx)("span",{className:"caret",children:Object(g.jsx)(x.a,{icon:m.a})}),o&&Object(g.jsx)("div",{className:"popover box-shadow",children:Object(g.jsx)("ul",{children:n.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsxs)("a",{href:"/".concat(e),children:[Object(g.jsxs)("span",{className:"language-name",children:[c[e].name," "]}),Object(g.jsx)(p.a,{countryCode:c[e].value,svg:!0})]})},e)}))})})]})]})}));n(45);function y(){var e=O()._;return Object(g.jsx)("div",{id:"header",children:Object(g.jsxs)("div",{id:"header-container",children:[Object(g.jsx)("div",{id:"logo",children:"itsranked.net"}),Object(g.jsx)("div",{id:"description",dangerouslySetInnerHTML:{__html:e("navbar.period.selected-period.top100of")}}),Object(g.jsx)(N,{})]})})}var A=a.a.memo(y),S=n(22);n(46);var w=a.a.memo(Object(j.f)((function(e){var t=e.match.params,n=t.filter,c=t.region,a=t.language,i=O()._,r=n&&["monthly","weekly","daily","hourly"].includes(n)?n:"monthly",o=c&&["ALL","SA","UK","DE","NA","ASIA"].includes(c)?c:"ALL",j=S.find((function(e){return e.shortName===o})),d=["en","pt"].includes(a)?a:(navigator.language||navigator.userLanguage).split("-")[0],u=Object(s.useState)(!1),h=Object(l.a)(u,2),b=h[0],v=h[1],f=Object(s.useCallback)((function(){v(!0)}),[]);return Object(g.jsxs)("nav",{id:"navbar",children:[Object(g.jsxs)("nav",{id:"nav",children:[Object(g.jsx)("a",{className:"nav-item ".concat("monthly"===r?"nav-selected":""),href:"/".concat(d,"/").concat(null===j||void 0===j?void 0:j.shortName,"/monthly"),children:i("nav.menu.monthly")}),Object(g.jsx)("a",{className:"nav-item ".concat("weekly"===r?"nav-selected":""),href:"/".concat(d,"/").concat(null===j||void 0===j?void 0:j.shortName,"/weekly"),children:i("nav.menu.weekly")}),Object(g.jsx)("a",{className:"nav-item ".concat("daily"===r?"nav-selected":""),href:"/".concat(d,"/").concat(null===j||void 0===j?void 0:j.shortName,"/daily"),children:i("nav.menu.daily")}),Object(g.jsx)("a",{className:"nav-item ".concat("hourly"===r?"nav-selected":""),href:"/".concat(d,"/").concat(null===j||void 0===j?void 0:j.shortName,"/hourly"),children:i("nav.menu.hourly")})]}),Object(g.jsxs)("div",{id:"region",onClick:f,children:[Object(g.jsx)("span",{className:"region",children:i(j?j.name:"filters.global")}),Object(g.jsx)("span",{className:"caret",children:Object(g.jsx)(x.a,{icon:m.a})}),b&&Object(g.jsx)("div",{className:"popover box-shadow",children:Object(g.jsx)("ul",{children:S.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"/".concat(d,"/").concat(e.shortName,"/").concat(r),children:Object(g.jsxs)("span",{className:"language-name",children:[i(e.name)," "]})})},e.shortName)}))})})]})]})})));var E=function(e){var t=e.server;return t.startsWith("185.50")?Object(g.jsx)(p.a,{countryCode:"BR",svg:!0}):t.startsWith("209.58")?Object(g.jsx)(p.a,{countryCode:"PL",svg:!0}):t.startsWith("31.204")?Object(g.jsx)(p.a,{countryCode:"JP",svg:!0}):t.startsWith("43.249")?Object(g.jsx)(p.a,{countryCode:"HK",svg:!0}):t.startsWith("145.239")?Object(g.jsx)(p.a,{countryCode:"GB",svg:!0}):t.startsWith("176.9")||t.startsWith("213.239")||t.startsWith("78.46")||t.startsWith("46.4")?Object(g.jsx)(p.a,{countryCode:"DE",svg:!0}):t.startsWith("149.56")?Object(g.jsx)(p.a,{countryCode:"CA",svg:!0}):t.startsWith("139.99")?Object(g.jsx)(p.a,{countryCode:"AU",svg:!0}):Object(g.jsx)(p.a,{countryCode:"US",svg:!0})},_=n(26);n(47);function L(){var e=O()._,t=new Date;return t.setSeconds(t.getUTCSeconds()-1),Object(g.jsxs)("div",{id:"statusbar",children:[Object(g.jsxs)("span",{className:"last-sync-time",children:[e("statusbar.last-sync-time.last-sync"),": ",Object(g.jsx)(f.a,{interval:1e3,date:t,durationFromNow:!0})," ",e("statusbar.last-sync-time.ago")]}),Object(g.jsxs)("form",{action:"https://www.paypal.com/donate",method:"post",target:"_blank",children:[Object(g.jsx)("input",{type:"hidden",name:"hosted_button_id",value:"HCU44UYM8BA3A"}),Object(g.jsx)("input",{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}),Object(g.jsx)("img",{alt:"",src:"https://www.paypal.com/en_BR/i/scr/pixel.gif",width:"1",height:"1"})]}),Object(g.jsx)("div",{id:"links",children:Object(g.jsxs)("a",{id:"twitter",rel:"noreferrer",target:"_blank",href:"https://twitter.com/itsrankedn",children:[Object(g.jsx)(x.a,{icon:_.a})," @itsrankedN"]})})]})}var T=a.a.memo(L),P=a.a.createContext([]);function C(){return Object(s.useContext)(P)}n(19),n(48);function R(){var e=C(),t=O()._;return Object(g.jsxs)("div",{id:"container",children:[Object(g.jsx)(A,{}),Object(g.jsx)(w,{}),Object(g.jsx)(T,{}),Object(g.jsx)("div",{id:"content",children:Object(g.jsx)("ul",{children:e.map((function(e){return Object(g.jsxs)("li",{children:[e.position<4?Object(g.jsx)("div",{className:"medal position-".concat(e.position),children:Object(g.jsx)(x.a,{icon:m.b})}):Object(g.jsxs)("div",{className:"position",children:["#",e.position]}),Object(g.jsxs)("div",{className:"info first-column",children:[Object(g.jsx)("span",{className:"username",children:e.userName}),Object(g.jsxs)("span",{className:"server",children:[Object(g.jsx)("span",{className:"address",children:e.server}),Object(g.jsx)(E,{server:e.server})]})]}),Object(g.jsxs)("div",{className:"info second-column",children:[Object(g.jsx)("span",{children:t("content.info.score")}),Object(g.jsx)("span",{children:e.score})]}),Object(g.jsxs)("div",{className:"info third-column",children:[Object(g.jsx)("span",{children:Object(g.jsx)(f.a,{format:t("content.info.day-format"),children:e.timestamp})}),Object(g.jsx)("span",{children:Object(g.jsx)(f.a,{format:t("content.info.time-format"),children:e.timestamp})})]})]},e.position)}))})})]})}var k=a.a.memo(R);n(49);function D(){var e=C(),t=O()._;return Object(g.jsxs)("div",{id:"container",children:[Object(g.jsx)(A,{}),Object(g.jsx)(w,{}),Object(g.jsx)(T,{}),Object(g.jsx)("div",{id:"content",children:Object(g.jsx)("ul",{children:e.map((function(e){return Object(g.jsxs)("li",{children:[e.position<4?Object(g.jsx)("div",{className:"medal position-".concat(e.position),children:Object(g.jsx)(x.a,{icon:m.b})}):Object(g.jsxs)("div",{className:"position",children:["#",e.position]}),Object(g.jsxs)("div",{className:"info first-column",children:[Object(g.jsx)("span",{className:"username",children:e.userName}),Object(g.jsxs)("span",{className:"server",children:[Object(g.jsx)("span",{className:"address",children:e.server}),Object(g.jsx)(E,{server:e.server})]})]}),Object(g.jsxs)("div",{className:"info second-column",children:[Object(g.jsx)("span",{children:t("content.info.score")}),Object(g.jsx)("span",{children:e.score})]}),Object(g.jsxs)("div",{className:"info third-column",children:[Object(g.jsx)("span",{children:Object(g.jsx)(f.a,{format:t("content.info.day-format"),children:e.timestamp})}),Object(g.jsx)("span",{children:Object(g.jsx)(f.a,{format:t("content.info.time-format"),children:e.timestamp})})]})]},e.position)}))})})]})}var M=a.a.memo(D);n(50);function H(){var e=C(),t=O()._;return Object(g.jsxs)("div",{id:"container",children:[Object(g.jsx)(A,{}),Object(g.jsx)(w,{}),Object(g.jsx)("div",{id:"content",children:Object(g.jsx)("ul",{children:e.map((function(e){return Object(g.jsxs)("li",{children:[e.position<4?Object(g.jsx)("div",{className:"medal position-".concat(e.position),children:Object(g.jsx)(x.a,{icon:m.b})}):Object(g.jsxs)("div",{className:"position",children:["#",e.position]}),Object(g.jsxs)("div",{className:"info first-column",children:[Object(g.jsx)("span",{className:"username",children:e.userName}),Object(g.jsxs)("span",{className:"server",children:[Object(g.jsx)("span",{className:"address",children:e.server}),Object(g.jsx)(E,{server:e.server})]})]}),Object(g.jsxs)("div",{className:"info second-column",children:[Object(g.jsx)("span",{children:t("content.info.score")}),Object(g.jsx)("span",{children:e.score})]}),Object(g.jsxs)("div",{className:"info third-column",children:[Object(g.jsx)("span",{children:Object(g.jsx)(f.a,{format:t("content.info.day-format"),children:e.timestamp})}),Object(g.jsx)("span",{children:Object(g.jsx)(f.a,{format:t("content.info.time-format"),children:e.timestamp})})]})]},e.position)}))})}),Object(g.jsx)(T,{})]})}var W=a.a.memo(H),I=n(27),B=n.n(I);n(51);var K=function(){var e=u(),t=O()._,n=e&(c.SMARTPHONE_PORTRAIT|c.SMARTPHONE_LANDSCAPE),a=e&c.TABLET,i=e&c.DESKTOP,r=Object(s.useState)(!1),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(s.useEffect)((function(){new B.a("Roboto",{weight:500}).load().then((function(){d(!0)}))}),[]),j?Object(g.jsxs)(g.Fragment,{children:[!!n&&Object(g.jsx)(k,{}),!!a&&Object(g.jsx)(M,{}),!!i&&Object(g.jsx)(W,{})]}):Object(g.jsx)("div",{id:"loading",children:Object(g.jsxs)("div",{className:"box-shadow",children:[t("loading"),"..."]})})},U=n(14),J=n.n(U);n(52);function G(e){var t=e.children,n=e.language,c=void 0===n?(navigator.language||navigator.userLanguage).split("-")[0]:n,a=Object(s.useState)(h),i=Object(l.a)(a,2),r=i[0],o=i[1];switch(c){case"pt":J.a.locale("pt");break;default:J.a.locale("en")}return Object(s.useEffect)((function(){fetch("/i18n/".concat(c,".json")).then((function(e){return e.json()})).then((function(e){o((function(){return{_:function(t){return e[t]},isLoaded:!0}}))}))}),[c]),Object(g.jsx)(b.Provider,{value:r,children:r.isLoaded&&t})}var z=a.a.memo(G);function F(e){var t=e.children,n=e.region,c=e.filter,a=Object(s.useState)([]),i=Object(l.a)(a,2),r=i[0],o=i[1];return Object(s.useEffect)((function(){var e=c&&["monthly","weekly","daily","hourly"].includes(c)?c:"monthly",t=n&&["ALL","SA","UK","DE","NA","ASIA"].includes(n)?n:"ALL",s="/top100-".concat(e,"-").concat(t,".json?").concat(Math.random());fetch(s).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[c,n]),Object(g.jsx)(P.Provider,{value:r,children:t})}var Y=a.a.memo(F);var q=function(){return Object(g.jsx)(o.a,{children:Object(g.jsx)(j.c,{children:Object(g.jsx)(j.a,{path:"/:language?/:region?/:filter?",render:function(e){var t=e.match;return Object(g.jsx)(z,{language:t.params.language,children:Object(g.jsx)(Y,{region:t.params.region,filter:t.params.filter,children:Object(g.jsx)(K,{})})})}})})})};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(q,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d546f893.chunk.js.map