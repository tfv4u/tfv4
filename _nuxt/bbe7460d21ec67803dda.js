(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{334:function(t,e,n){var content=n(349);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("25aece0b",content,!0,{sourceMap:!1})},335:function(t,e,n){var map={"./backgnd_1.jpg":336,"./backgnd_2.jpg":337,"./backgnd_3.jpg":338,"./backgnd_4.jpg":339,"./backgnd_5.jpg":340,"./backgnd_6.jpg":341,"./orig/backgnd_1.jpg":342,"./orig/backgnd_2.jpg":343,"./orig/backgnd_3.jpg":344,"./orig/backgnd_4.jpg":345,"./orig/backgnd_5.jpg":346,"./orig/backgnd_6.jpg":347};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=335},336:function(t,e,n){t.exports=n.p+"img/a2374be.jpg"},337:function(t,e,n){t.exports=n.p+"img/daf7e73.jpg"},338:function(t,e,n){t.exports=n.p+"img/5f5abea.jpg"},339:function(t,e,n){t.exports=n.p+"img/4f42708.jpg"},340:function(t,e,n){t.exports=n.p+"img/d91ee65.jpg"},341:function(t,e,n){t.exports=n.p+"img/5a91797.jpg"},342:function(t,e,n){t.exports=n.p+"img/a2374be.jpg"},343:function(t,e,n){t.exports=n.p+"img/daf7e73.jpg"},344:function(t,e,n){t.exports=n.p+"img/5f5abea.jpg"},345:function(t,e,n){t.exports=n.p+"img/4f42708.jpg"},346:function(t,e,n){t.exports=n.p+"img/d91ee65.jpg"},347:function(t,e,n){t.exports=n.p+"img/5a91797.jpg"},348:function(t,e,n){"use strict";var o=n(334);n.n(o).a},349:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-parallax__image[data-v-5b3c6020]{transform:none!important;width:100%!important}",""]),t.exports=e},350:function(t,e,n){"use strict";var o={name:"CoverImage",props:["backgroundImage","page","title","title2","subTitle"],data:function(){return{scrollOpacity:1}},methods:{onScroll:function(){var t=1-(window.top.scrollY||document.documentElement.scrollTop||window.pageYOffset)/600;t=(t=t>1?1:t)<0?0:t,this.scrollOpacity=t},navigateTo:function(path){this.$router.push(path)}}},r=(n(348),n(36)),l=n(44),c=n.n(l),d=n(152),f=n(327),v=n(328),m=n(143),h=n(358),_=n(331),x=n(150),y=n.n(x),w=n(90),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-parallax",{attrs:{src:n(335)("./"+t.backgroundImage),height:"550",alt:"Travelfreak Vacations"}},[o("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{"fill-height":""}},[o("v-row",[o("v-col",[o("transition",{attrs:{appear:"",name:"slide-fade"}},[o("v-overlay",{class:null!=t.page?"align-items-center justify-content-center":"justify-start",style:"position:relative; opacity:"+t.scrollOpacity+";",attrs:{color:"rgba(f, f, f, 1)"}},[null!=t.page?o("p",{staticStyle:{"word-spacing":"20px"}},[o("v-btn",{attrs:{text:""},on:{click:function(e){return t.navigateTo("/")}}},[t._v("HOME")]),t._v("\n              > "+t._s(t.page.toUpperCase())+"\n            ")],1):t._e(),t._v(" "),o("h1",[o("strong",[t._v(t._s(t.title))]),t._v(" "),o("p",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(t.title2))])]),t._v(" "),o("h3",[t._v(t._s(t.subTitle))]),t._v(" "),o("br"),t._v(" "),o("br")])],1)],1)],1)],1)],1)}),[],!1,null,"5b3c6020",null);e.a=component.exports;c()(component,{VBtn:d.a,VCol:f.a,VContainer:v.a,VOverlay:m.a,VParallax:h.a,VRow:_.a}),y()(component,{Scroll:w.b})},359:function(t,e,n){var content=n(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("e64fa77e",content,!0,{sourceMap:!1})},394:function(t,e,n){t.exports=n.p+"img/44435e0.png"},395:function(t,e,n){"use strict";var o=n(359);n.n(o).a},396:function(t,e,n){(e=n(11)(!1)).push([t.i,".rounded-card[data-v-62e5a27f]{border-radius:50px}.v-expansion-panels[data-v-62e5a27f]{z-index:0}",""]),t.exports=e},511:function(t,e,n){"use strict";n.r(e);var o={name:"About",head:{title:"About Us",link:[{rel:"canonical",href:"https://www.travelfreakvacations.com/about"}],meta:[{name:"description",content:"IATA consultant in Travel & TourismIATA consultant in Travel & Tourism. Gaurav has travelled to over 25 countries and explored them on his own. We have a network across 7 continents."},{property:"og:title",content:"About Us - Travelfreak Vacations"},{property:"og:site_name",content:"Travelfreak Vacations"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.travelfreakvacations.com/about"},{property:"og:image",content:"https://www.travelfreakvacations.com/images/tfv-logo.png"},{property:"og:description",content:"IATA consultant in Travel & TourismIATA consultant in Travel & Tourism. Gaurav has travelled to over 25 countries and explored them on his own. We have a network across 7 continents."}]},components:{CoverImage:n(350).a},data:function(){return{tabModel:null,tabs:[{heading:"Who are we?",text:["Gaurav Deshpande, the owner and Founder of Travelfreak Vacations has travelled to \t\t\t\t\t\t\tover 25 countries and explored them on his own. Also, a Wildlife and Travel Photographer, he has mastered the destinations that will help you to see some exotic offbeat locations that are just known to the locals. He has always               believed that exploring and enjoying any place best depends on your likes, speed and time.","This belief gave birth to Travelfreak Vacations - customized holidays that allow you to see and               pay only for what you want, and backpacker tours that make you feel like a local.","Gaurav is a software engineer as well as an IATA consultant in Travel & Tourism (Canada),               so you get the best crafted itinerary with right mix of travel & technology. He has received affiliations               as a destination expert from more than 10 countries, which makes us “Travelfreak Vacations” stand out from the rest.               He has contributed to many everlasting memories in the lives of his customers and friends alike by               crafting and arranging unique & exiting travel itineraries to best meet their interests and               budget. We look forward to having you next!"]},{heading:"Our mission",text:"To add offbeat, unique and extraordinary destinations for all passionate travelers! To make travel possible for everyone by introducing the world to them!"},{heading:"Our goal",text:"To give people maximum feel of their chosen destination. To give them the opportunity to make the most of their holiday time. To make people happy and help them explore the unexplored is our utmost goal."}],faqs:[{ques:"Which destinations do you offer?",ans:"We have a network across 7 continents. You name a destination of your choice and we will do everything for you."},{ques:"What size groups do you customize for?",ans:"From solo person to 15 travellers."},{ques:"In how much advance time do we need to get the tour customized?",ans:"It's always better to plan ahead of time, but thanks to our network, your customized package can be done up to 2 days before departure."},{ques:"Do you provide escorted tours?",ans:"Yes, we do provide escorted tours."}]}},computed:{faqsHalfLength:function(){return this.faqs.length/2},faqsHalfStartIndex:function(){return this.faqs.length-this.faqs.length/2}}},r=(n(395),n(36)),l=n(44),c=n.n(l),d=n(144),f=n(121),v=n(328),m=n(499),h=n(500),_=n(501),x=n(502),y=n(329),w=n(123),k=n(119),T=n(357),j=n(140),V=n(85),C=n(40),I=n(69),A=n(503),O=n(504),S=n(513),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{name:"about"}},[o("CoverImage",{attrs:{page:"About",backgroundImage:"backgnd_2.jpg",title:"About Us"}}),t._v(" "),o("v-container",[o("v-layout",{staticClass:"ma-2",attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{sm12:"",md6:"","data-aos":"fade-right"}},[o("v-img",{attrs:{src:n(394),alt:"Gaurav Deshpande"}})],1),t._v(" "),o("v-flex",{staticClass:"pl-4",attrs:{sm12:"",md6:"","data-aos":"fade-left"}},[o("v-tabs",{attrs:{grow:"",centered:""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[t._l(t.tabs,(function(e,i){return o("v-tab",{key:i,attrs:{href:"#tab-"+i}},[t._v(t._s(e.heading))])})),t._v(" "),t._l(t.tabs,(function(e,i){return o("v-tab-item",{key:i,attrs:{value:"tab-"+i}},[o("v-card",{attrs:{flat:"",tile:""}},["Array"==e.text.constructor.name?o("v-card-text",t._l(e.text,(function(text,i){return o("p",{key:i,staticClass:"text-justify"},[t._v(t._s(text))])})),0):o("v-card-text",{staticClass:"text-justify"},[t._v(t._s(e.text))]),t._v(" "),0==i?o("v-card-text",[o("v-list",{staticClass:"ml-n4 mt-n10",attrs:{flat:"",tile:""}},[o("v-list-item",[o("v-list-item-icon",[o("v-img",{attrs:{src:n(201),alt:"Travelfreak Vacations","max-width":"40"}})],1),t._v(" "),o("v-list-item-content",{staticClass:"ml-n4"},[o("a",{attrs:{href:"mailto:info@travelfreakvacations.com"}},[t._v("info@travelfreakvacations.com")]),t._v("\n                      +91 9004052169\n                    ")])],1)],1)],1):t._e()],1)],1)}))],2)],1)],1)],1),t._v(" "),o("br"),t._v(" "),o("a",{attrs:{name:"faqs"}}),t._v(" "),o("v-container",{staticClass:"light-blue lighten-5 pa-4",attrs:{fluid:""}},[o("p",{staticClass:"display-0 text--disabled"},[t._v("FAQs")]),t._v(" "),o("h2",[o("strong",[t._v("Frequently")]),t._v(" "),o("font",{staticClass:"font-weight-light"},[t._v("  Asked Questions")])],1),t._v(" "),o("v-layout",{staticClass:"ma-2 mp-2",attrs:{row:"",wrap:"","justify-space-around":""}},[o("v-flex",{attrs:{sm10:"",md5:""}},[o("v-expansion-panels",{attrs:{tile:"",multiple:"",focusable:""}},t._l(t.faqsHalfLength,(function(i){return o("v-expansion-panel",{key:i},[o("v-expansion-panel-header",{staticClass:"display-0 font-weight-bold",scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{attrs:{color:"warning"}},[t._v("mdi-arrow-down-drop-circle-outline")])]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(t.faqs[i-1].ques)+"\n              ")]),t._v(" "),o("v-expansion-panel-content",{staticClass:"mt-2"},[t._v(t._s(t.faqs[i-1].ans))])],1)})),1)],1),t._v(" "),o("v-flex",{attrs:{sm10:"",md5:""}},[o("v-expansion-panels",{attrs:{tile:"",multiple:"",focusable:""}},t._l(t.faqsHalfStartIndex,(function(i){return o("v-expansion-panel",{key:i},[o("v-expansion-panel-header",{staticClass:"display-0 font-weight-bold",scopedSlots:t._u([{key:"actions",fn:function(){return[o("v-icon",{attrs:{color:"warning"}},[t._v("mdi-arrow-down-drop-circle-outline")])]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(t.faqs[t.faqsHalfStartIndex+i-1].ques)+"\n              ")]),t._v(" "),o("v-expansion-panel-content",{staticClass:"mt-2"},[t._v(t._s(t.faqs[t.faqsHalfStartIndex+i-1].ans))])],1)})),1)],1)],1),t._v(" "),o("br")],1)],1)}),[],!1,null,"62e5a27f",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:f.b,VContainer:v.a,VExpansionPanel:m.a,VExpansionPanelContent:h.a,VExpansionPanelHeader:_.a,VExpansionPanels:x.a,VFlex:y.a,VIcon:w.a,VImg:k.a,VLayout:T.a,VList:j.a,VListItem:V.a,VListItemContent:C.a,VListItemIcon:I.a,VTab:A.a,VTabItem:O.a,VTabs:S.a})}}]);