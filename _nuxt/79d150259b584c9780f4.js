(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{340:function(t,e,n){var content=n(356);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("25aece0b",content,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";(function(t){n(19),n(20),n(4);var r=n(74),o=n.n(r);e.a={name:"SubmitEnquiry",data:function(){return{showDialog:!1,isFormValid:!1,enquiry:{firstName:"",lastName:"",email:"",phone:"",enquiry:"I would like to know more about your ______________ tours. Could you please call me?"},formResponseCode:-1,formSubmitInProgress:!1,numberOfEnquiriesSubmitted:0}},computed:{isProd:function(){return"production"==t.env.ENV_NAME},getMaxEnquiries:function(){return 5}},methods:{generateRandomText:function(t){return(1e32*Math.random()).toString(36).substr(2,t)},generateRandomNumber:function(t){return Math.random().toString().substr(2,t)},randomAutofill:function(){this.enquiry.firstName=this.generateRandomText(8),this.enquiry.lastName=this.generateRandomText(12),this.enquiry.email=this.generateRandomText(6)+"@example.com",this.enquiry.phone=this.generateRandomNumber(10),this.enquiry.enquiry="I would like to know more about your "+this.generateRandomText(16)+" tours. Could you please call me?"},submitForm:function(){var t=this;this.formSubmitInProgress=!0,o.a.post(this.$nuxt.$axios.defaults.baseURL+"/api/enquiries/",this.enquiry).then((function(e){t.formResponseCode=e.data.success,t.formSubmitInProgress=!1,t.numberOfEnquiriesSubmitted++})).catch((function(e){t.formResponseCode=0,t.formSubmitInProgress=!1,console.log("Error in invoking API"+e)}))},resetForm:function(){var t=this;setTimeout((function(){t.formResponseCode=-1}),500)}}}}).call(this,n(152))},342:function(t,e,n){var map={"./backgnd_1.jpg":343,"./backgnd_2.jpg":344,"./backgnd_3.jpg":345,"./backgnd_4.jpg":346,"./backgnd_5.jpg":347,"./backgnd_6.jpg":348,"./orig/backgnd_1.jpg":349,"./orig/backgnd_2.jpg":350,"./orig/backgnd_3.jpg":351,"./orig/backgnd_4.jpg":352,"./orig/backgnd_5.jpg":353,"./orig/backgnd_6.jpg":354};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=342},343:function(t,e,n){t.exports=n.p+"img/a2374be.jpg"},344:function(t,e,n){t.exports=n.p+"img/daf7e73.jpg"},345:function(t,e,n){t.exports=n.p+"img/5f5abea.jpg"},346:function(t,e,n){t.exports=n.p+"img/4f42708.jpg"},347:function(t,e,n){t.exports=n.p+"img/d91ee65.jpg"},348:function(t,e,n){t.exports=n.p+"img/5a91797.jpg"},349:function(t,e,n){t.exports=n.p+"img/a2374be.jpg"},350:function(t,e,n){t.exports=n.p+"img/daf7e73.jpg"},351:function(t,e,n){t.exports=n.p+"img/5f5abea.jpg"},352:function(t,e,n){t.exports=n.p+"img/4f42708.jpg"},353:function(t,e,n){t.exports=n.p+"img/d91ee65.jpg"},354:function(t,e,n){t.exports=n.p+"img/5a91797.jpg"},355:function(t,e,n){"use strict";var r=n(340);n.n(r).a},356:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-parallax__image[data-v-5b3c6020]{transform:none!important;width:100%!important}",""]),t.exports=e},357:function(t,e,n){"use strict";var r={name:"CoverImage",props:["backgroundImage","page","title","title2","subTitle"],data:function(){return{scrollOpacity:1}},methods:{onScroll:function(){var t=1-(window.top.scrollY||document.documentElement.scrollTop||window.pageYOffset)/600;t=(t=t>1?1:t)<0?0:t,this.scrollOpacity=t},navigateTo:function(path){this.$router.push(path)}}},o=(n(355),n(36)),c=n(44),l=n.n(c),d=n(156),v=n(334),m=n(335),f=n(143),_=n(546),h=n(338),w=n(154),y=n.n(w),x=n(90),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-parallax",{attrs:{src:n(342)("./"+t.backgroundImage),height:"550",alt:"Travelfreak Vacations"}},[r("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{"fill-height":""}},[r("v-row",[r("v-col",[r("transition",{attrs:{appear:"",name:"slide-fade"}},[r("v-overlay",{class:null!=t.page?"align-items-center justify-content-center":"justify-start",style:"position:relative; opacity:"+t.scrollOpacity+";",attrs:{color:"rgba(f, f, f, 1)"}},[null!=t.page?r("p",{staticStyle:{"word-spacing":"20px"}},[r("v-btn",{attrs:{text:""},on:{click:function(e){return t.navigateTo("/")}}},[t._v("HOME")]),t._v("\n              > "+t._s(t.page.toUpperCase())+"\n            ")],1):t._e(),t._v(" "),r("h1",[r("strong",[t._v(t._s(t.title))]),t._v(" "),r("p",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(t.title2))])]),t._v(" "),r("h3",[t._v(t._s(t.subTitle))]),t._v(" "),r("br"),t._v(" "),r("br")])],1)],1)],1)],1)],1)}),[],!1,null,"5b3c6020",null);e.a=component.exports;l()(component,{VBtn:d.a,VCol:v.a,VContainer:m.a,VOverlay:f.a,VParallax:_.a,VRow:h.a}),y()(component,{Scroll:x.b})},358:function(t,e,n){"use strict";var r=n(341).a,o=n(36),c=n(44),l=n.n(c),d=n(156),v=n(144),m=n(120),f=n(335),_=n(544),h=n(73),w=n(336),y=n(529),x=n(139),k=n(143),C=n(138),V=n(338),j=n(333),T=n(527),S=n(530),E=n(32),O=n(151),R=n(547),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._e()}),[],!1,null,"2c2e7f57",null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VContainer:f.a,VDialog:_.a,VFabTransition:h.b,VFlex:w.a,VForm:y.a,VIcon:x.a,VOverlay:k.a,VProgressCircular:C.a,VRow:V.a,VSpacer:j.a,VTextField:T.a,VTextarea:S.a,VToolbar:E.a,VToolbarTitle:O.a,VTooltip:R.a})},540:function(t,e,n){"use strict";n.r(e);var r=n(357),o=n(358),c={name:"Contact",head:{title:"Contact",link:[{rel:"canonical",href:"https://www.travelfreakvacations.com/contact"}],meta:[{name:"description",content:"We have a network across 7 continents. Connect with us, and we will take care of all your travel needs."},{property:"og:title",content:"Contact - Travelfreak Vacations"},{property:"og:site_name",content:"Travelfreak Vacations"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.travelfreakvacations.com/contact"},{property:"og:image",content:"https://www.travelfreakvacations.com/images/tfv-logo.png"},{property:"og:description",content:"We have a network across 7 continents. Connect with us, and we will take care of all your travel needs."}]},components:{CoverImage:r.a,SubmitEnquiry:o.a}},l=n(36),d=n(44),v=n.n(d),m=n(144),f=n(120),_=n(335),h=n(336),w=n(535),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{name:"contact"}},[n("CoverImage",{attrs:{page:"Contact",backgroundImage:"backgnd_4.jpg",title:"Contact Us"}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("v-container",{attrs:{"data-aos":"fade-down","data-aos-duration":"200"}},[n("h2",[n("strong",[t._v("Contact Us")])]),t._v(" "),n("v-layout",{staticClass:"ma-2 mp-2",attrs:{row:"",wrap:"","justify-space-around":""}},[n("v-flex",{attrs:{sm10:"",md3:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-subtitle",{staticClass:"mb-1 font-weight-bold"},[t._v("Address")]),t._v(" "),n("v-card-text",{staticClass:"display-0 text--secondary"},[t._v('\n            Plot no. 27, "Ranjan", Navsahydri society,\n            '),n("br"),t._v("Karvenagar,\n            "),n("br"),t._v("Near Tol Hospital,\n            "),n("br"),t._v("Pune - 411052\n          ")])],1)],1),t._v(" "),n("v-flex",{attrs:{sm10:"",md3:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-subtitle",{staticClass:"mb-1 font-weight-bold"},[t._v("Phone")]),t._v(" "),n("v-card-text",{staticClass:"display-0 text--secondary"},[n("a",{attrs:{href:"tel://+91-9004052169"}},[t._v("+91 9004052169")]),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{href:"tel://+91-9011002430"}},[t._v("+91 9011002430")])])],1)],1),t._v(" "),n("v-flex",{attrs:{sm10:"",md3:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-subtitle",{staticClass:"mb-1 font-weight-bold"},[t._v("Email")]),t._v(" "),n("v-card-text",{staticClass:"display-0 text--secondary"},[n("a",{attrs:{href:"mailto:info@travelfreakvacations.com"}},[t._v("info@travelfreakvacations.com")])])],1)],1),t._v(" "),n("v-flex",{attrs:{sm10:"",md3:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-subtitle",{staticClass:"mb-1 font-weight-bold"},[t._v("Website")]),t._v(" "),n("v-card-text",{staticClass:"display-0 text--secondary"},[n("a",{attrs:{href:"https://www.travelfreakvacations.com"}},[t._v("www.travelfreakvacations.com")])])],1)],1)],1)],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("SubmitEnquiry")],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:m.a,VCardSubtitle:f.b,VCardText:f.c,VContainer:_.a,VFlex:h.a,VLayout:w.a})}}]);