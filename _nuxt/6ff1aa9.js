(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{326:function(t,e,n){var content=n(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("a6475ec4",content,!0,{sourceMap:!1})},357:function(t,e,n){"use strict";n(326)},358:function(t,e,n){var r=n(54)(!1);r.push([t.i,'.section-title-two[data-v-0c8a0d1a]{position:relative;margin-bottom:20px}.section-title-two h2[data-v-0c8a0d1a]{color:#000;background:#fff;display:inline-block;position:relative;z-index:1;padding:0 20px}.section-title-two[data-v-0c8a0d1a]:after{background-color:#00a650;content:"";left:0;top:50%;position:absolute;height:1px;width:100%}',""]),t.exports=r},411:function(t,e,n){"use strict";n.r(e);var r=n(22),c=(n(68),{name:"Partner",data:function(){return{fetchpartners:[]}},methods:{partnersData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("public-diu-trc-website/partner");case 2:n=e.sent,t.fetchpartners=null!=n?n:null;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.partnersData()}}),o=(n(357),n(47)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.fetchpartners&&t.fetchpartners.length>0?n("section",{staticClass:"news-area py-5"},[n("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),n("client-only",[t.fetchpartners.length>0?n("carousel",{attrs:{autoplay:!0,nav:!1,responsive:{0:{items:1,nav:!1},576:{items:1,nav:!1},768:{items:2,nav:!1},992:{items:3,nav:!1},1200:{items:6,nav:!1}}}},t._l(t.fetchpartners,(function(t,e){return n("div",{key:e,staticClass:"col"},[n("div",{staticClass:"partner-item"},[n("a",{attrs:{href:t.url,target:"blank"}},[n("img",{attrs:{src:t.image_path,alt:t.title}})])])])})),0):t._e()],1)],1)]):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title-two text-center"},[n("h2",{staticClass:"text-uppercase"},[t._v("Our Network and Partners ")])])}],!1,null,"0c8a0d1a",null);e.default=component.exports}}]);