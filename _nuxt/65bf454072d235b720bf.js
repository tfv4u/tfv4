(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(353).concat([function(e,o,n){"use strict";n(41),n(55);var d={name:"CoverImage",props:["backgroundImage","page","title","title2","subTitle"],data:function(){return{scrollOpacity:1}},methods:{getBreadcrumbsToCurrentPage:function(){var e=[{href:"/",text:"home",disabled:!1}],path="/";return this.$route.path.split("/").filter((function(e){return""!=e})).forEach((function(o){path+=o+"/",e.push({href:path,text:o.replace(/_/g," "),disabled:!1})})),e[e.length-1].disabled=!0,e},onScroll:function(){var e=1-(window.top.scrollY||document.documentElement.scrollTop||window.pageYOffset)/600;e=(e=e>1?1:e)<0?0:e,this.scrollOpacity=e},navigateTo:function(path){this.$router.push(path)}}},t=(n(508),n(36)),c=n(44),r=n.n(c),l=n(587),m=n(512),_=n(337),f=n(338),j=n(145),x=n(586),v=n(341),y=n(190),h=n.n(y),C=n(112),component=Object(t.a)(d,(function(){var e=this,o=e.$createElement,d=e._self._c||o;return d("v-parallax",{attrs:{src:n(494)("./"+e.backgroundImage),height:"550",alt:"Travelfreak Vacations"}},[d("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}],attrs:{"fill-height":""}},[d("v-row",[d("v-col",[d("transition",{attrs:{appear:"",name:"slide-fade"}},[d("v-overlay",{class:null!=e.page?"align-items-center justify-content-center":"justify-start",style:"position:relative; opacity:"+e.scrollOpacity+";",attrs:{color:"rgba(f, f, f, 1)"}},[null!=e.page?d("v-breadcrumbs",{staticStyle:{"word-spacing":"15px"},attrs:{items:e.getBreadcrumbsToCurrentPage(),divider:">"},scopedSlots:e._u([{key:"item",fn:function(o){var n=o.item;return[d("v-breadcrumbs-item",{attrs:{href:n.href,disabled:n.disabled}},[d("font",{staticClass:"white--text"},[e._v(e._s(n.text.toUpperCase()))])],1)]}}],null,!1,2437446525)}):e._e(),e._v(" "),d("h1",[d("strong",[e._v(e._s(e.title))]),e._v(" "),d("p",{staticStyle:{"font-weight":"normal"}},[e._v(e._s(e.title2))])]),e._v(" "),d("h3",[e._v(e._s(e.subTitle))]),e._v(" "),d("br"),e._v(" "),d("br")],1)],1)],1)],1)],1)],1)}),[],!1,null,"23b77f1a",null);o.a=component.exports;r()(component,{VBreadcrumbs:l.a,VBreadcrumbsItem:m.a,VCol:_.a,VContainer:f.a,VOverlay:j.a,VParallax:x.a,VRow:v.a}),h()(component,{Scroll:C.b})},function(e,o,n){"use strict";n(28),n(19),n(20),n(4);var d=n(86),t=n.n(d),c=n(515),r={name:"SubmitEnquiryForm",props:["isDialog"],data:function(){return{isFormValid:!1,enquiry:{firstName:"",lastName:"",email:"",phone:"",countryCode:"+91",enquiry:""},formResponseCode:-1,formSubmitInProgress:!1,numberOfEnquiriesSubmitted:0,countryCodes:c,selectedCountry:{name:"India",dial_code:"+91",code:"IN"}}},computed:{isProd:function(){return!0},getMaxEnquiries:function(){return 5}},methods:{generateRandomText:function(e){return(1e32*Math.random()).toString(36).substr(2,e)},generateRandomNumber:function(e){return Math.random().toString().substr(2,e)},randomAutofill:function(){this.enquiry.firstName=this.generateRandomText(8),this.enquiry.lastName=this.generateRandomText(12),this.enquiry.email=this.generateRandomText(6)+"@example.com",this.enquiry.phone=this.generateRandomNumber(10),this.enquiry.countryCode="+91",this.enquiry.enquiry="I would like to know more about your "+this.generateRandomText(16)+" tours. Could you please call me?"},customFilterCountryCode:function(e,o,n){var d=e.name?e.name.toLowerCase():null,t=e.dial_code?e.dial_code.toLowerCase():null,c=o.toLowerCase();return d&&d.indexOf(c)>-1||t&&t.indexOf(c)>-1},selectCountryCode:function(){null!==this.selectedCountry&&void 0!==this.selectedCountry&&this.selectedCountry.hasOwnProperty("dial_code")&&(this.enquiry.countryCode=this.selectedCountry.dial_code)},submitForm:function(){var e=this;this.formSubmitInProgress=!0,t.a.post(this.$nuxt.$axios.defaults.baseURL+"/api/enquiries/",this.enquiry).then((function(o){e.formResponseCode=o.data.success,e.formSubmitInProgress=!1,e.numberOfEnquiriesSubmitted++})).catch((function(o){e.formResponseCode=0,e.formSubmitInProgress=!1,console.log("Error in invoking API"+o)}))},closeDialog:function(){this.isDialog&&this.$emit("showDialog",!1)},resetForm:function(){var e=this;setTimeout((function(){e.formResponseCode=-1}),500)}}},l=n(36),m=n(44),_=n.n(m),f=n(577),j=n(161),x=n(146),v=n(121),y=n(338),h=n(339),C=n(569),S=n(140),T=n(119),w=n(145),k=n(139),M=n(341),I=n(336),P=n(394),R=n(570),N=n(32),A=n(162),component=Object(l.a)(r,(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{attrs:{name:"submitEnquiryForm"}},[n("v-form",{on:{submit:function(o){return o.preventDefault(),e.submitForm()}},model:{value:e.isFormValid,callback:function(o){e.isFormValid=o},expression:"isFormValid"}},[n("v-card",{style:e.isDialog?"position:absolute; right:0px; bottom:80px;":"",attrs:{width:e.$vuetify.breakpoint.smAndDown?400:500,color:e.isDialog?"orange lighten-5":"amber lighten-5"}},[e.isDialog?n("v-card-subtitle",{staticClass:"pt-4 mb-2",style:e.isDialog?"background-color: orange":""},[n("v-toolbar",{attrs:{flat:"",color:"transparent"}},[n("v-toolbar-title",{staticClass:"mb-n2 ml-n6 title-1"},[e._v("\n            Need to enquire further?\n            "),n("p",{staticClass:"caption"},[e._v("Send us your question, and we will get back to you soon.")])]),e._v(" "),n("v-spacer"),e._v(" "),e.isDialog?n("v-btn",{attrs:{icon:""},on:{click:function(o){return e.closeDialog()}}},[n("v-icon",[e._v("mdi-close")])],1):e._e(),e._v(" "),e.isProd?e._e():n("v-btn",{attrs:{icon:""},on:{click:function(o){return e.randomAutofill()}}},[n("v-icon",[e._v("mdi-playlist-edit")])],1)],1)],1):e._e(),e._v(" "),n("v-card-text",{staticClass:"mt-0"},[n("v-container",[n("v-row",{attrs:{wrap:""}},[n("v-flex",[n("v-text-field",{attrs:{label:"First Name *",maxlength:"60",rules:[function(e){return!!e||"Please provide your First Name"}]},model:{value:e.enquiry.firstName,callback:function(o){e.$set(e.enquiry,"firstName",o)},expression:"enquiry.firstName"}})],1),e._v(" "),n("v-flex",[n("v-text-field",{attrs:{label:"Last Name *",maxlength:"60",rules:[function(e){return!!e||"Please provide your Surname (Last Name)"}]},model:{value:e.enquiry.lastName,callback:function(o){e.$set(e.enquiry,"lastName",o)},expression:"enquiry.lastName"}})],1)],1),e._v(" "),n("v-row",{attrs:{wrap:""}},[n("v-flex",[n("v-text-field",{attrs:{label:"E-mail *",type:"email",maxlength:"100",placeholder:"abc@example.com",rules:[function(e){return!!e||"Please provide your E-mail address"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]},model:{value:e.enquiry.email,callback:function(o){e.$set(e.enquiry,"email",o)},expression:"enquiry.email"}})],1)],1),e._v(" "),n("v-row",{staticClass:"align-center align-content-space-between"},[n("v-flex",{attrs:{sm1:"",md1:""}},[null!==e.selectedCountry&&void 0!==e.selectedCountry&&null!==e.selectedCountry.code&&void 0!==e.selectedCountry.code?n("v-img",{attrs:{src:"/images/flags/"+e.selectedCountry.code.toLowerCase()+".png","max-width":"30","max-height":"30"}}):e._e()],1),e._v(" "),n("v-flex",{attrs:{sm3:"",md3:""}},[n("v-autocomplete",{attrs:{items:e.countryCodes,"item-value":"dial_code","item-text":"name","return-object":"",filter:e.customFilterCountryCode,placeholder:e.enquiry.countryCode,rules:[function(e){return!!e||"Please select country-code"},function(e){return!!e&&e.hasOwnProperty("dial_code")&&e.dial_code.length<8||"Please enter a valid country code"}]},on:{change:function(o){return e.selectCountryCode()}},scopedSlots:e._u([{key:"selection",fn:function(data){return[e._v("\n                  "+e._s(data.item.dial_code)+"\n                ")]}},{key:"item",fn:function(data){return[n("v-img",{attrs:{src:"/images/flags/"+data.item.code.toLowerCase()+".png","max-width":"25px"}}),e._v("\n                      "+e._s(data.item.dial_code)+" - "+e._s(data.item.name)+"\n                ")]}}]),model:{value:e.selectedCountry,callback:function(o){e.selectedCountry=o},expression:"selectedCountry"}})],1),e._v(" "),n("v-flex",{attrs:{sm8:"",md8:""}},[n("v-text-field",{attrs:{label:"Phone *",type:"tel",placeholder:"1234567890",mask:"##########","return-masked-value":"",maxlength:"10",rules:[function(e){return!!e||"Please provide your Phone number"},function(e){return 10==e.length||"Phone number must be 10 digits long"}]},model:{value:e.enquiry.phone,callback:function(o){e.$set(e.enquiry,"phone",o)},expression:"enquiry.phone"}})],1)],1),e._v(" "),n("v-row",[n("v-flex",[n("br"),e._v(" "),n("v-textarea",{attrs:{label:"Question / Enquiry *",outlined:"",rows:"3","auto-grow":"","row-height":"12","no-resize":"",counter:"400",maxlength:"400",placeholder:"I would like to know more about your ______________ tours. Could you please call me?",rules:[function(e){return!!e||"Please enter your Question/Enquiry"}]},model:{value:e.enquiry.enquiry,callback:function(o){e.$set(e.enquiry,"enquiry",o)},expression:"enquiry.enquiry"}})],1)],1),e._v(" "),1==e.formResponseCode?n("p",{staticClass:"green--text ml-n4 font-weight-bold"},[e._v("We have received your enquiry, and will get back to you soon. Thank you for contacting us.")]):e._e(),e._v(" "),0==e.formResponseCode?n("p",{staticClass:"red--text ml-n4"},[n("strong",[e._v("** There was an error in submitting your enquiry.")]),e._v(" "),n("br"),e._v("We apologize, but request you to try again, or\n            "),n("nuxt-link",{attrs:{to:"/contact"}},[e._v("contact us")]),e._v("  by email or phone.\n          ")],1):e._e(),e._v(" "),e.numberOfEnquiriesSubmitted>=e.getMaxEnquiries?n("small",{staticClass:"blue--text ml-n4"},[e._v("** You have submitted "+e._s(e.numberOfEnquiriesSubmitted)+" enquiries today. Please wait until we get back to you.")]):e._e()],1)],1),e._v(" "),n("v-card-actions",{staticClass:"mt-n8"},[n("v-spacer"),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.formSubmitInProgress&&1!=e.formResponseCode,expression:"!formSubmitInProgress && formResponseCode!=1"}],attrs:{type:"submit",disabled:!e.isFormValid||e.numberOfEnquiriesSubmitted>=e.getMaxEnquiries,color:"success"}},[e._v("Submit")]),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.formSubmitInProgress,expression:"formSubmitInProgress"}],attrs:{disabled:"",dark:"",color:"success",loading:""}},[e._v("Please wait..")]),e._v(" "),e.isDialog?n("v-btn",{directives:[{name:"show",rawName:"v-show",value:1==e.formResponseCode||e.numberOfEnquiriesSubmitted>=e.getMaxEnquiries,expression:"formResponseCode==1 || numberOfEnquiriesSubmitted>=getMaxEnquiries"}],on:{click:function(o){e.closeDialog(),e.resetForm()}}},[e._v("Close")]):e._e()],1),e._v(" "),n("v-overlay",{attrs:{absolute:"",value:e.formSubmitInProgress}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"white",size:"50"}}),e._v(" "),n("p",{staticClass:"title"},[n("br"),e._v("Please wait...\n        ")])],1)],1)],1)],1)}),[],!1,null,"7e8bcae1",null);o.a=component.exports;_()(component,{VAutocomplete:f.a,VBtn:j.a,VCard:x.a,VCardActions:v.a,VCardSubtitle:v.b,VCardText:v.c,VContainer:y.a,VFlex:h.a,VForm:C.a,VIcon:S.a,VImg:T.a,VOverlay:w.a,VProgressCircular:k.a,VRow:M.a,VSpacer:I.a,VTextField:P.a,VTextarea:R.a,VToolbar:N.a,VToolbarTitle:A.a})},,,,,,,,,,function(e,o,n){e.exports=n.p+"img/e293210.jpg"},function(e,o,n){e.exports=n.p+"img/8169a3e.jpg"},function(e,o,n){e.exports=n.p+"img/26075eb.jpg"},function(e,o,n){e.exports=n.p+"img/1e5b9df.jpg"},function(e,o,n){e.exports=n.p+"img/0f21dea.jpg"},function(e,o,n){e.exports=n.p+"img/86a88c6.jpg"},function(e,o,n){e.exports=n.p+"img/bb4a3fa.jpg"},function(e,o,n){e.exports=n.p+"img/5ca3179.jpg"},function(e,o,n){e.exports=n.p+"img/b3eb115.jpg"},function(e,o,n){e.exports=n.p+"img/25441d6.jpg"},function(e,o,n){e.exports=n.p+"img/ea5d33f.jpg"},function(e,o,n){e.exports=n.p+"img/6542c5c.jpg"},function(e,o,n){e.exports=n.p+"img/bd2f04a.jpg"},function(e,o,n){e.exports=n.p+"img/784eb2d.jpg"},function(e,o,n){e.exports=n.p+"img/a730c3c.jpg"},function(e,o,n){e.exports=n.p+"img/3647984.jpg"},function(e,o,n){e.exports=n.p+"img/7e4e3f7.jpg"},function(e,o,n){e.exports=n.p+"img/f9a8a17.jpg"},function(e,o,n){var content=n(509);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("147d3f6b",content,!0,{sourceMap:!1})},,,,,,,,,,,,,function(e,o,n){e.exports=n.p+"img/027d849.jpg"},function(e,o,n){e.exports=n.p+"img/580e948.png"},function(e,o,n){e.exports=n.p+"img/348f7f4.jpg"},function(e,o,n){e.exports=n.p+"img/c9ba8f6.jpg"},function(e,o,n){e.exports=n.p+"img/99adfbc.jpg"},function(e,o,n){e.exports=n.p+"img/1b0a64c.jpg"},function(e,o,n){e.exports=n.p+"img/db2c17f.jpg"},function(e,o,n){e.exports=n.p+"img/2b87328.jpg"},function(e,o,n){e.exports=n.p+"img/bee323a.jpg"},function(e,o,n){e.exports=n.p+"img/cd5c0a8.jpg"},function(e,o,n){e.exports=n.p+"img/cbcaa3b.jpg"},function(e,o,n){e.exports=n.p+"img/fe53d79.jpg"},function(e,o,n){e.exports=n.p+"img/81d1df6.jpg"},function(e,o,n){e.exports=n.p+"img/a39514a.jpg"},function(e,o,n){e.exports=n.p+"img/7d835c7.jpg"},function(e,o,n){e.exports=n.p+"img/32d2ba2.jpg"},function(e,o,n){e.exports=n.p+"img/ea83f80.jpg"},function(e,o,n){e.exports=n.p+"img/74ce25e.jpg"},function(e,o,n){e.exports=n.p+"img/3951a82.jpg"},function(e,o,n){e.exports=n.p+"img/a9623de.jpg"},function(e,o,n){e.exports=n.p+"img/b58777c.jpg"},function(e,o,n){e.exports=n.p+"img/48706ec.jpg"},function(e,o,n){e.exports=n.p+"img/d7e29bc.jpg"},function(e,o,n){e.exports=n.p+"img/f961084.jpg"},function(e,o,n){e.exports=n.p+"img/ee4d131.png"},function(e,o,n){e.exports=n.p+"img/3c75c96.jpg"},function(e,o,n){e.exports=n.p+"img/6c90e82.jpg"},function(e,o,n){e.exports=n.p+"img/3156a30.jpg"},function(e,o,n){e.exports=n.p+"img/a78191e.jpg"},function(e,o,n){e.exports=n.p+"img/bddea40.jpg"},function(e,o,n){e.exports=n.p+"img/e9a9621.jpg"},function(e,o,n){e.exports=n.p+"img/cc388ec.jpg"},function(e,o,n){e.exports=n.p+"img/ad0b2cf.jpg"},function(e,o,n){e.exports=n.p+"img/4024c73.jpg"},function(e,o,n){e.exports=n.p+"img/a9eab2e.jpg"},function(e,o,n){e.exports=n.p+"img/4e26123.jpg"},function(e,o,n){e.exports=n.p+"img/b3e2221.jpg"},function(e,o,n){e.exports=n.p+"img/6e4014c.jpg"},function(e,o,n){e.exports=n.p+"img/6f1791e.jpg"},function(e,o,n){e.exports=n.p+"img/c5fcb1d.jpg"},function(e,o,n){e.exports=n.p+"img/dfc3bc9.jpg"},function(e,o,n){e.exports=n.p+"img/cae64d8.jpg"},function(e,o,n){e.exports=n.p+"img/42885fd.jpg"},function(e,o,n){e.exports=n.p+"img/8808a9d.jpg"},function(e,o,n){e.exports=n.p+"img/eb60ba5.jpg"},function(e,o,n){e.exports=n.p+"img/02d6975.jpg"},function(e,o,n){e.exports=n.p+"img/a33e491.jpg"},function(e,o,n){e.exports=n.p+"img/a0c0cd3.jpg"},function(e,o,n){e.exports=n.p+"img/ca2f5de.jpg"},function(e,o,n){e.exports=n.p+"img/15bbfcc.jpg"},function(e,o,n){e.exports=n.p+"img/5da29c6.jpg"},function(e,o,n){e.exports=n.p+"img/af3e63f.jpg"},function(e,o,n){e.exports=n.p+"img/775081f.jpg"},function(e,o,n){e.exports=n.p+"img/7941d4a.jpg"},function(e,o,n){e.exports=n.p+"img/4a8eb19.jpg"},function(e,o,n){e.exports=n.p+"img/4a0c6a6.jpg"},function(e,o,n){e.exports=n.p+"img/be4083d.jpg"},function(e,o,n){e.exports=n.p+"img/7efea99.jpg"},function(e,o,n){e.exports=n.p+"img/a660807.jpg"},function(e,o,n){e.exports=n.p+"img/a13c555.jpg"},function(e,o,n){e.exports=n.p+"img/4378e6d.jpg"},function(e,o,n){e.exports=n.p+"img/6c22778.jpg"},function(e,o,n){e.exports=n.p+"img/c27d92c.jpg"},function(e,o,n){e.exports=n.p+"img/276f27e.jpg"},function(e,o,n){e.exports=n.p+"img/5a5b781.png"},function(e,o,n){e.exports=n.p+"img/badc661.jpg"},function(e,o,n){e.exports=n.p+"img/c1672f1.jpg"},function(e,o,n){e.exports=n.p+"img/a86d619.jpg"},function(e,o,n){e.exports=n.p+"img/3dd7dde.jpg"},function(e,o,n){e.exports=n.p+"img/c884105.jpg"},function(e,o,n){e.exports=n.p+"img/eddd2b8.jpg"},function(e,o,n){e.exports=n.p+"img/d85ba7a.jpg"},function(e,o,n){e.exports=n.p+"img/4a0c6a6.jpg"},function(e,o,n){e.exports=n.p+"img/30f319d.jpg"},function(e,o,n){e.exports=n.p+"img/2a6cbf0.jpg"},function(e,o,n){e.exports=n.p+"img/d1e9b77.jpg"},function(e,o,n){e.exports=n.p+"img/3f50967.jpg"},function(e,o,n){e.exports=n.p+"img/4378e6d.jpg"},function(e,o,n){e.exports=n.p+"img/ff95e68.jpg"},function(e,o,n){e.exports=n.p+"img/7cf8d6c.jpg"},function(e,o,n){e.exports=n.p+"img/dea7324.jpg"},function(e,o,n){e.exports=n.p+"img/03a0e03.png"},function(e,o,n){e.exports=n.p+"img/5a5b781.png"},function(e,o,n){e.exports=n.p+"img/dee976f.png"},function(e,o,n){e.exports=n.p+"img/6c35379.png"},function(e,o,n){e.exports=n.p+"img/1c7d297.png"},,,,,,,,,,,,,,function(e,o,n){var map={"./Gaurav_Deshpande-orig.jpg":495,"./Gaurav_Deshpande.jpg":395,"./affiliations/affiliations.png":396,"./cover/backgnd_1.jpg":496,"./cover/backgnd_2.jpg":497,"./cover/backgnd_3.jpg":498,"./cover/backgnd_4.jpg":499,"./cover/backgnd_5.jpg":500,"./cover/backgnd_6.jpg":501,"./cover/orig/backgnd_1.jpg":502,"./cover/orig/backgnd_2.jpg":503,"./cover/orig/backgnd_3.jpg":504,"./cover/orig/backgnd_4.jpg":505,"./cover/orig/backgnd_5.jpg":506,"./cover/orig/backgnd_6.jpg":507,"./destinations/Angkor_Vat_Cambodia.jpg":397,"./destinations/Ashikaga_Japan.jpg":398,"./destinations/Brazil.jpg":399,"./destinations/Canada.jpg":400,"./destinations/Coron_Phillippines.jpg":401,"./destinations/Gili_Indonesia.jpg":402,"./destinations/Russia.jpg":403,"./destinations/Seoul_South_Korea.jpg":404,"./destinations/Taiwan.jpg":405,"./destinations/aurora-borealis-2647474_1920.jpg":406,"./destinations/eiffel-tower-3349075_1920.jpg":407,"./destinations/garden-by-the-bay-503897_1920.jpg":408,"./destinations/godafoss-1840758_1920.jpg":409,"./destinations/helicopter-1218974_1920.jpg":410,"./destinations/kuala-lumpur-170985_1920.jpg":411,"./destinations/malaysia-1864676_1920.jpg":412,"./destinations/maldives-1993704_1920.jpg":413,"./destinations/milos-greece.jpg":414,"./destinations/niagara-1590345_1920.jpg":415,"./destinations/orig/Angkor_Vat_Cambodia.jpg":416,"./destinations/orig/Ashikaga_Japan.jpg":417,"./destinations/orig/Brazil.jpg":418,"./destinations/orig/Canada.png":419,"./destinations/orig/Coron_Phillippines.jpg":420,"./destinations/orig/Gili_Indonesia.jpg":421,"./destinations/orig/Russia.jpg":422,"./destinations/orig/aurora-borealis-2647474_1920.jpg":423,"./destinations/orig/eiffel-tower-3349075_1920.jpg":424,"./destinations/orig/garden-by-the-bay-503897_1920.jpg":425,"./destinations/orig/godafoss-1840758_1920.jpg":426,"./destinations/orig/helicopter-1218974_1920.jpg":427,"./destinations/orig/kuala-lumpur-170985_1920.jpg":428,"./destinations/orig/malaysia-1864676_1920.jpg":429,"./destinations/orig/maldives-1993704_1920.jpg":430,"./destinations/orig/milos-greece.jpg":431,"./destinations/orig/niagara-1590345_1920.jpg":432,"./destinations/orig/rock-731140_1920.jpg":433,"./destinations/orig/scotland-1761292_1920.jpg":434,"./destinations/orig/sea-418742_1920.jpg":435,"./destinations/orig/statue-of-liberty-267948_1920.jpg":436,"./destinations/orig/the-palm-962785_1920.jpg":437,"./destinations/rock-731140_1920.jpg":438,"./destinations/scotland-1761292_1920.jpg":439,"./destinations/sea-418742_1920.jpg":440,"./destinations/statue-of-liberty-267948_1920.jpg":441,"./destinations/the-palm-962785_1920.jpg":442,"./testimonials/aditya.jpg":364,"./testimonials/ajai-aishwarya.jpg":365,"./testimonials/medium-quality/aditya.jpg":366,"./testimonials/medium-quality/ajai-aishwarya.jpg":367,"./testimonials/medium-quality/mutalik.jpg":368,"./testimonials/medium-quality/nikhil.jpg":369,"./testimonials/medium-quality/rayakar.jpg":370,"./testimonials/medium-quality/tanaya-bhagesh.jpg":371,"./testimonials/mutalik.jpg":372,"./testimonials/nikhil.jpg":373,"./testimonials/orig/aditya.jpg":374,"./testimonials/orig/ajai-aishwarya.jpg":375,"./testimonials/orig/mutalik.jpg":376,"./testimonials/orig/nikhil.jpg":377,"./testimonials/orig/rayakar.jpg":378,"./testimonials/orig/tanaya-bhagesh.jpg":379,"./testimonials/rayakar.jpg":380,"./testimonials/tanaya-bhagesh.jpg":381,"./tfv-logo.png":210,"./tours/Adventure_Tours.jpg":443,"./tours/Backpackers_Tours.jpg":444,"./tours/Cruise_Holidays.jpg":445,"./tours/Family_Tours.jpg":446,"./tours/Friends_Tours.jpg":447,"./tours/Honeymoon_Tours.jpg":448,"./tours/MICE.jpg":449,"./tours/One_Day_Tours.jpg":450,"./tours/Photography_Tours.jpg":451,"./tours/Rail_Tours.jpg":452,"./tours/Religious_Tours.jpg":453,"./tours/Romantic_Tours.jpg":454,"./tours/School_Trips.jpg":455,"./tours/Solo_Tours.jpg":456,"./tours/Study_Tours.jpg":457,"./tours/Wildlife_Tours.jpg":458,"./tours/india-map.png":459,"./tours/orig/Adventure_Tours.jpg":460,"./tours/orig/Backpackers_Tours.jpg":461,"./tours/orig/Cruise_Holidays.jpg":462,"./tours/orig/Family_Tours.jpg":463,"./tours/orig/Friends_Tours.jpg":464,"./tours/orig/Honeymoon_Tours.jpg":465,"./tours/orig/MICE.jpg":466,"./tours/orig/One_Day_Tours.jpg":467,"./tours/orig/Photography_Tours.jpg":468,"./tours/orig/Rail_Tours.jpg":469,"./tours/orig/Religious_Tours.jpg":470,"./tours/orig/Romantic_Tours.jpg":471,"./tours/orig/School_Trips.jpg":472,"./tours/orig/Solo_Tours.jpg":473,"./tours/orig/Study_Tours.jpg":474,"./tours/orig/Wildlife_Tours.jpg":475,"./tours/orig/india-map-orig.png":476,"./tours/orig/india-map.png":477,"./tours/orig/world-map-orig.png":478,"./tours/orig/world-map.png":479,"./tours/world-map.png":480};function d(e){var o=t(e);return n(o)}function t(e){if(!n.o(map,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return map[e]}d.keys=function(){return Object.keys(map)},d.resolve=t,e.exports=d,d.id=494},function(e,o,n){e.exports=n.p+"img/c9870fb.jpg"},function(e,o,n){e.exports=n.p+"img/a2374be.jpg"},function(e,o,n){e.exports=n.p+"img/daf7e73.jpg"},function(e,o,n){e.exports=n.p+"img/5f5abea.jpg"},function(e,o,n){e.exports=n.p+"img/4f42708.jpg"},function(e,o,n){e.exports=n.p+"img/d91ee65.jpg"},function(e,o,n){e.exports=n.p+"img/5a91797.jpg"},function(e,o,n){e.exports=n.p+"img/a2374be.jpg"},function(e,o,n){e.exports=n.p+"img/daf7e73.jpg"},function(e,o,n){e.exports=n.p+"img/5f5abea.jpg"},function(e,o,n){e.exports=n.p+"img/4f42708.jpg"},function(e,o,n){e.exports=n.p+"img/d91ee65.jpg"},function(e,o,n){e.exports=n.p+"img/5a91797.jpg"},function(e,o,n){"use strict";var d=n(382);n.n(d).a},function(e,o,n){(o=n(11)(!1)).push([e.i,".v-parallax__image[data-v-23b77f1a]{transform:none!important;width:100%!important}",""]),e.exports=o},,,,,,function(e){e.exports=JSON.parse('[{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1 264","code":"AI"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1 242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1 246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1 441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1 ","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+537","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1 767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1 849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1 473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1 671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1 876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+7 7","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1 670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1 939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1 868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1 649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"United States","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"},{"name":"land Islands","dial_code":"","code":"AX"},{"name":"Antarctica","dial_code":null,"code":"AQ"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Congo, The Democratic Republic of the","dial_code":"+243","code":"CD"},{"name":"Cote d\'Ivoire","dial_code":"+225","code":"CI"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Iran, Islamic Republic of","dial_code":"+98","code":"IR"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Korea, Democratic People\'s Republic of","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of","dial_code":"+82","code":"KR"},{"name":"Lao People\'s Democratic Republic","dial_code":"+856","code":"LA"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","dial_code":"+389","code":"MK"},{"name":"Micronesia, Federated States of","dial_code":"+691","code":"FM"},{"name":"Moldova, Republic of","dial_code":"+373","code":"MD"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"Réunion","dial_code":"+262","code":"RE"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Saint Barthélemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1 869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1 758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1 784","code":"VC"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan, Province of China","dial_code":"+886","code":"TW"},{"name":"Tanzania, United Republic of","dial_code":"+255","code":"TZ"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Venezuela, Bolivarian Republic of","dial_code":"+58","code":"VE"},{"name":"Viet Nam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1 284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1 340","code":"VI"}]')}])]);