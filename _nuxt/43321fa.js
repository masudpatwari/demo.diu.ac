(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{398:function(t,e,n){"use strict";n.r(e);var r=n(22),c=(n(68),{name:"government",data:function(){return{type:"government",fetchData:[]}},methods:{fetchNationalData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("public-diu-trc-website/national/".concat(t.type));case 2:n=e.sent,t.fetchData=null!=n?n:null;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchNationalData()}}),o=n(47),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Molecules-banner",{attrs:{title:"our networks",child:"national",subChild:"government"}}),t._v(" "),n("div",{staticClass:"container box my-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("Molecules-lists",{attrs:{type:"national",data:t.fetchData}})],1)])])],1)}),[],!1,null,"758607dc",null);e.default=component.exports}}]);