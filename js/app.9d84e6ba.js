(function(e){function t(t){for(var r,a,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/testing-questionnaire-viewer-live/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("pf-landing-page",{attrs:{token:e.token,type:e.type,urlformviewer:e.urlFormViewer}})],1)},i=[],a=(n("386d"),n("b53e")),u={name:"app",data:function(){return{token:"",type:"",urlformviewer:""}},components:{PfLandingPage:a["PfLandingPage"]},created:function(){var e=location.search,t=new URLSearchParams(e);this.urlFormViewer="https://jeysong.github.io/static-primafacieapp-com-viewver-live/",this.token=t.get("token"),this.type=t.get("type")}},c=u,l=n("2877"),p=Object(l["a"])(c,o,i,!1,null,null,null),s=p.exports,f=n("7bb1"),d=n("b6d0");r["a"].directive("mask",d["a"]),r["a"].use(f["a"],{classes:!0,classNames:{invalid:"is-invalid"}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.9d84e6ba.js.map