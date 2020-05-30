(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{343:function(t,e,o){"use strict";var n=o(90),r=o(354),l={name:"SubmitEnquiry",mixins:[n.a],components:{SubmitEnquiryForm:r.a},data:function(){return{showDialog:!1}},methods:{toggleDialog:function(){this.$vuetify.breakpoint.mdAndUp?this.showDialog=!this.showDialog:this.navigateTo("/contact")},getFlag_showDialog:function(t){this.showDialog=t}}},c=o(36),d=o(44),v=o.n(d),f=o(161),h=o(383),m=o(73),w=o(140),y=o(384),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{name:"submitEnquiry"}},[o("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-fab-transition",[o("v-btn",t._g({attrs:{name:"enquiry-button",color:"red",dark:"",fixed:"",bottom:"",right:"",fab:"",visible:"","data-aos":"zoom-in"},on:{click:function(e){return t.toggleDialog()}}},n),[o("v-icon",{attrs:{large:""}},[t._v("mdi-comment-question-outline")])],1)],1)]}}],null,!1,1815554307)},[t._v(" "),o("span",[t._v("Need to ask something?")])]),t._v(" "),t.showDialog?o("v-dialog",{attrs:{"max-width":"500px",transition:"none"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[o("SubmitEnquiryForm",{attrs:{isDialog:"true"},on:{showDialog:t.getFlag_showDialog}})],1):t._e()],1)}),[],!1,null,"0f1475d5",null);e.a=component.exports;v()(component,{VBtn:f.a,VDialog:h.a,VFabTransition:m.c,VIcon:w.a,VTooltip:y.a})},385:function(t,e,o){var content=o(542);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("7d836007",content,!0,{sourceMap:!1})},492:function(t){t.exports=JSON.parse('[{"heading":"Who are we?","text":["Gaurav Deshpande, the owner and Founder of Travelfreak Vacations has travelled to over 25 countries and explored them on his own. Also, a Wildlife and Travel Photographer, he has mastered the destinations that will help you to see some exotic offbeat locations that are just known to the locals. He has always believed that exploring and enjoying any place best depends on your likes, speed and time.","This belief gave birth to Travelfreak Vacations - customized holidays that allow you to see and pay only for what you want, and backpacker tours that make you feel like a local.","Gaurav is a software engineer as well as an IATA consultant in Travel & Tourism (Canada), so you get the best crafted itinerary with right mix of travel & technology. He has received affiliations as a destination expert from more than 10 countries, which makes us “Travelfreak Vacations” stand out from the rest. He has contributed to many everlasting memories in the lives of his customers and friends alike by crafting and arranging unique & exiting travel itineraries to best meet their interests and budget. We look forward to having you next!"]},{"heading":"Our mission","text":"To add offbeat, unique and extraordinary destinations for all passionate travelers! To make travel possible for everyone by introducing the world to them!"},{"heading":"Our goal","text":"To give people maximum feel of their chosen destination. To give them the opportunity to make the most of their holiday time. To make people happy and help them explore the unexplored is our utmost goal."}]')},493:function(t){t.exports=JSON.parse('[{"ques":"Which destinations do you offer?","ans":"We have a network across 7 continents. You name a destination of your choice and we will do everything for you."},{"ques":"What size groups do you customize for?","ans":"From solo person to 15 travellers."},{"ques":"In how much advance time do we need to get the tour customized?","ans":"It\'s always better to plan ahead of time, but thanks to our network, your customized package can be done up to 2 days before departure."},{"ques":"Do you provide escorted tours?","ans":"Yes, we do provide escorted tours."}]')},541:function(t,e,o){"use strict";var n=o(385);o.n(n).a},542:function(t,e,o){(e=o(11)(!1)).push([t.i,".rounded-card[data-v-e20d8b18]{border-radius:50px}.v-expansion-panels[data-v-e20d8b18]{z-index:0}",""]),t.exports=e},580:function(t,e,o){"use strict";o.r(e);var n=o(492),r=o(493),l=o(353),c=o(343),d={name:"About",head:{title:"About Us",link:[{rel:"canonical",href:"https://www.travelfreakvacations.com/about"}],meta:[{name:"description",content:"IATA consultant in Travel & TourismIATA consultant in Travel & Tourism. Gaurav has travelled to over 25 countries and explored them on his own. We have a network across 7 continents."},{property:"og:title",content:"About Us - Travelfreak Vacations"},{property:"og:site_name",content:"Travelfreak Vacations"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.travelfreakvacations.com/about"},{property:"og:image",content:"https://www.travelfreakvacations.com/images/tfv-logo.png"},{property:"og:description",content:"IATA consultant in Travel & TourismIATA consultant in Travel & Tourism. Gaurav has travelled to over 25 countries and explored them on his own. We have a network across 7 continents."}]},components:{CoverImage:l.a,SubmitEnquiry:c.a},data:function(){return{tabModel:null,tabs:n,faqs:r}},computed:{faqsHalfLength:function(){return this.faqs.length/2},faqsHalfStartIndex:function(){return this.faqs.length-this.faqs.length/2}}},v=(o(541),o(36)),f=o(44),h=o.n(f),m=o(146),w=o(121),y=o(338),x=o(571),_=o(572),k=o(573),T=o(574),V=o(339),C=o(140),I=o(119),A=o(386),D=o(141),S=o(84),E=o(40),F=o(69),H=o(575),j=o(576),W=o(585),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{name:"about"}},[n("CoverImage",{attrs:{page:"About",backgroundImage:"cover/backgnd_2.jpg",title:"About Us"}}),t._v(" "),n("v-container",[n("v-layout",{staticClass:"ma-2",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:"",md4:"","data-aos":"fade-right"}},[n("v-img",{staticStyle:{"border-radius":"30px"},attrs:{src:o(395),height:(t.$vuetify.breakpoint.mdAndUp,460),alt:"Gaurav Deshpande"}})],1),t._v(" "),n("v-flex",{staticClass:"pl-4 pb-0",attrs:{sm12:"",md8:"","data-aos":"fade-left"}},[n("v-tabs",{attrs:{grow:"",centered:"","show-arrows":""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[t._l(t.tabs,(function(e,i){return n("v-tab",{key:i,attrs:{href:"#tab-"+i}},[t._v(t._s(e.heading))])})),t._v(" "),t._l(t.tabs,(function(e,i){return n("v-tab-item",{key:i,attrs:{value:"tab-"+i}},[n("v-card",{attrs:{flat:"",tile:""}},["Array"==e.text.constructor.name?n("v-card-text",t._l(e.text,(function(text,i){return n("p",{key:i,staticClass:"text-justify"},[t._v(t._s(text))])})),0):n("v-card-text",{staticClass:"text-justify"},[t._v(t._s(e.text))]),t._v(" "),0==i?n("v-card-text",{staticClass:"pb-0"},[n("v-list",{staticClass:"ml-n4 mt-n10",attrs:{flat:"",tile:""}},[n("v-list-item",[n("v-list-item-icon",[n("v-img",{attrs:{src:o(210),alt:"Travelfreak Vacations","max-width":"40"}})],1),t._v(" "),n("v-list-item-content",{staticClass:"ml-n4"},[n("a",{attrs:{href:"mailto:info@travelfreakvacations.com"}},[t._v("info@travelfreakvacations.com")]),t._v("\n                      +91 9004052169\n                    ")])],1)],1)],1):t._e()],1)],1)}))],2)],1)],1)],1),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{name:"faqs"}}),t._v(" "),n("v-container",{staticClass:"light-blue lighten-5 pa-4",attrs:{fluid:""}},[n("p",{staticClass:"display-0 text--disabled"},[t._v("FAQs")]),t._v(" "),n("h2",[n("strong",[t._v("Frequently")]),t._v(" "),n("font",{staticClass:"font-weight-light"},[t._v("  Asked Questions")])],1),t._v(" "),n("v-layout",{staticClass:"ma-2 mp-2",attrs:{row:"",wrap:"","justify-space-around":""}},[n("v-flex",{attrs:{sm10:"",md5:""}},[n("v-expansion-panels",{attrs:{tile:"",multiple:"",focusable:""}},t._l(t.faqsHalfLength,(function(i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",{staticClass:"display-0 font-weight-bold",scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"warning"}},[t._v("mdi-arrow-down-drop-circle-outline")])]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(t.faqs[i-1].ques)+"\n              ")]),t._v(" "),n("v-expansion-panel-content",{staticClass:"mt-2"},[t._v(t._s(t.faqs[i-1].ans))])],1)})),1)],1),t._v(" "),n("v-flex",{attrs:{sm10:"",md5:""}},[n("v-expansion-panels",{attrs:{tile:"",multiple:"",focusable:""}},t._l(t.faqsHalfStartIndex,(function(i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",{staticClass:"display-0 font-weight-bold",scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-icon",{attrs:{color:"warning"}},[t._v("mdi-arrow-down-drop-circle-outline")])]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(t.faqs[t.faqsHalfStartIndex+i-1].ques)+"\n              ")]),t._v(" "),n("v-expansion-panel-content",{staticClass:"mt-2"},[t._v(t._s(t.faqs[t.faqsHalfStartIndex+i-1].ans))])],1)})),1)],1)],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("SubmitEnquiry")],1)],1)}),[],!1,null,"e20d8b18",null);e.default=component.exports;h()(component,{VCard:m.a,VCardText:w.c,VContainer:y.a,VExpansionPanel:x.a,VExpansionPanelContent:_.a,VExpansionPanelHeader:k.a,VExpansionPanels:T.a,VFlex:V.a,VIcon:C.a,VImg:I.a,VLayout:A.a,VList:D.a,VListItem:S.a,VListItemContent:E.a,VListItemIcon:F.a,VTab:H.a,VTabItem:j.a,VTabs:W.a})}}]);