(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{327:function(t,e,c){var content=c(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(55).default)("430d483c",content,!0,{sourceMap:!1})},359:function(t,e,c){"use strict";c(327)},360:function(t,e,c){var n=c(54)(!1);n.push([t.i,'.about-area[data-v-362e6bf0]{background:#f8f9fa}.section-title-two[data-v-362e6bf0]{position:relative;margin-bottom:20px}.section-title-two h2[data-v-362e6bf0]{color:#000;background:#f8f9fa;display:inline-block;position:relative;z-index:1;padding:0 20px}.section-title-two[data-v-362e6bf0]:after{background-color:#00a650;content:"";left:0;top:50%;position:absolute;height:1px;width:100%}',""]),t.exports=n},412:function(t,e,c){"use strict";c.r(e);var n=c(22),r=(c(68),c(14),{name:"ResearchAndPublication",data:function(){return{type:"research",fetchResearchPublication:[]}},methods:{researchPublication:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("public-diu-trc-website/research-publication/".concat(t.type));case 2:n=e.sent,t.fetchResearchPublication=null!==(c=n.slice(0,4))&&void 0!==c?c:null;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.researchPublication()}}),o=(c(359),c(47)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.fetchResearchPublication.length>0?c("section",{staticClass:"about-area py-5"},[t._m(0),t._v(" "),c("div",{staticClass:"row"},t._l(t.fetchResearchPublication,(function(t,e){return c("div",{key:e,staticClass:"col-lg-3 col-md-3 col-sm-6"},[c("div",{staticClass:"card"},[c("a",{attrs:{href:t.file_path,target:"blank"}},[c("img",{staticClass:"card-img-top",attrs:{height:"350",src:t.cover_file,alt:t.title}})])])])})),0),t._v(" "),c("Atom-see-more-button",{attrs:{link:"research-and-publications/research"}})],1):t._e()}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"section-title-two text-center"},[c("h2",{staticClass:"text-uppercase"},[t._v("Research And Publications")])])}],!1,null,"362e6bf0",null);e.default=component.exports}}]);