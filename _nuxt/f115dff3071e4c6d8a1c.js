(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{334:function(t,e,n){var content=n(349);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("25aece0b",content,!0,{sourceMap:!1})},335:function(t,e,n){var map={"./backgnd_1.jpg":336,"./backgnd_2.jpg":337,"./backgnd_3.jpg":338,"./backgnd_4.jpg":339,"./backgnd_5.jpg":340,"./backgnd_6.jpg":341,"./orig/backgnd_1.jpg":342,"./orig/backgnd_2.jpg":343,"./orig/backgnd_3.jpg":344,"./orig/backgnd_4.jpg":345,"./orig/backgnd_5.jpg":346,"./orig/backgnd_6.jpg":347};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=335},336:function(t,e,n){t.exports=n.p+"img/a2374be.jpg"},337:function(t,e,n){t.exports=n.p+"img/daf7e73.jpg"},338:function(t,e,n){t.exports=n.p+"img/5f5abea.jpg"},339:function(t,e,n){t.exports=n.p+"img/4f42708.jpg"},340:function(t,e,n){t.exports=n.p+"img/d91ee65.jpg"},341:function(t,e,n){t.exports=n.p+"img/5a91797.jpg"},342:function(t,e,n){t.exports=n.p+"img/a2374be.jpg"},343:function(t,e,n){t.exports=n.p+"img/daf7e73.jpg"},344:function(t,e,n){t.exports=n.p+"img/5f5abea.jpg"},345:function(t,e,n){t.exports=n.p+"img/4f42708.jpg"},346:function(t,e,n){t.exports=n.p+"img/d91ee65.jpg"},347:function(t,e,n){t.exports=n.p+"img/5a91797.jpg"},348:function(t,e,n){"use strict";var o=n(334);n.n(o).a},349:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-parallax__image[data-v-5b3c6020]{transform:none!important;width:100%!important}",""]),t.exports=e},350:function(t,e,n){"use strict";var o={name:"CoverImage",props:["backgroundImage","page","title","title2","subTitle"],data:function(){return{scrollOpacity:1}},methods:{onScroll:function(){var t=1-(window.top.scrollY||document.documentElement.scrollTop||window.pageYOffset)/600;t=(t=t>1?1:t)<0?0:t,this.scrollOpacity=t},navigateTo:function(path){this.$router.push(path)}}},r=(n(348),n(36)),l=n(44),c=n.n(l),d=n(152),v=n(327),f=n(328),h=n(143),m=n(358),w=n(331),_=n(150),x=n.n(_),y=n(90),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-parallax",{attrs:{src:n(335)("./"+t.backgroundImage),height:"550",alt:"Travelfreak Vacations"}},[o("v-container",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{"fill-height":""}},[o("v-row",[o("v-col",[o("transition",{attrs:{appear:"",name:"slide-fade"}},[o("v-overlay",{class:null!=t.page?"align-items-center justify-content-center":"justify-start",style:"position:relative; opacity:"+t.scrollOpacity+";",attrs:{color:"rgba(f, f, f, 1)"}},[null!=t.page?o("p",{staticStyle:{"word-spacing":"20px"}},[o("v-btn",{attrs:{text:""},on:{click:function(e){return t.navigateTo("/")}}},[t._v("HOME")]),t._v("\n              > "+t._s(t.page.toUpperCase())+"\n            ")],1):t._e(),t._v(" "),o("h1",[o("strong",[t._v(t._s(t.title))]),t._v(" "),o("p",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(t.title2))])]),t._v(" "),o("h3",[t._v(t._s(t.subTitle))]),t._v(" "),o("br"),t._v(" "),o("br")])],1)],1)],1)],1)],1)}),[],!1,null,"5b3c6020",null);e.a=component.exports;c()(component,{VBtn:d.a,VCol:v.a,VContainer:f.a,VOverlay:h.a,VParallax:m.a,VRow:w.a}),x()(component,{Scroll:y.b})},351:function(t,e,n){var content=n(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("0cd63bd9",content,!0,{sourceMap:!1})},352:function(t,e,n){(e=n(11)(!1)).push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=e},357:function(t,e,n){"use strict";n(122);var o=n(93);e.a=Object(o.a)("layout")},358:function(t,e,n){"use strict";n(13),n(351);var o=n(1).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),r=n(7),l=Object(r.a)(o);e.a=l.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})},508:function(t,e,n){"use strict";n.r(e);var o={name:"Contact",head:{title:"Contact",link:[{rel:"canonical",href:"https://www.travelfreakvacations.com/contact"}],meta:[{name:"description",content:"We have a network across 7 continents. Connect with us, and we will take care of all your travel needs."},{property:"og:title",content:"Contact - Travelfreak Vacations"},{property:"og:site_name",content:"Travelfreak Vacations"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.travelfreakvacations.com/contact"},{property:"og:image",content:"https://www.travelfreakvacations.com/images/tfv-logo.png"},{property:"og:description",content:"We have a network across 7 continents. Connect with us, and we will take care of all your travel needs."}]},components:{CoverImage:n(350).a}},r=n(36),l=n(44),c=n.n(l),d=n(144),v=n(121),f=n(328),h=n(329),m=n(357),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{name:"contact"}},[n("CoverImage",{attrs:{page:"Contact",backgroundImage:"backgnd_4.jpg",title:"Contact Us"}}),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("v-container",{attrs:{"data-aos":"fade-down","data-aos-duration":"200"}},[n("h2",[n("strong",[t._v("Contact Us")])]),t._v(" "),n("v-layout",{staticClass:"ma-2 mp-2",attrs:{row:"",wrap:"","justify-space-around":""}},[n("v-flex",{attrs:{sm10:"",md3:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-subtitle",{staticClass:"mb-1 font-weight-bold"},[t._v("Address")]),t._v(" "),n("v-card-text",{staticClass:"display-0 text--secondary"},[t._v('\n            Plot no. 27, "Ranjan", Navsahydri society,\n            '),n("br"),t._v("Karvenagar,\n            "),n("br"),t._v("Near Tol Hospital,\n            "),n("br"),t._v("Pune - 411052\n          ")])],1)],1),t._v(" "),n("v-flex",{attrs:{sm10:"",md3:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-subtitle",{staticClass:"mb-1 font-weight-bold"},[t._v("Phone")]),t._v(" "),n("v-card-text",{staticClass:"display-0 text--secondary"},[n("a",{attrs:{href:"tel://+91-9004052169"}},[t._v("+91 9004052169")]),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{href:"tel://+91-9011002430"}},[t._v("+91 9011002430")])])],1)],1),t._v(" "),n("v-flex",{attrs:{sm10:"",md3:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-subtitle",{staticClass:"mb-1 font-weight-bold"},[t._v("Email")]),t._v(" "),n("v-card-text",{staticClass:"display-0 text--secondary"},[n("a",{attrs:{href:"mailto:info@travelfreakvacations.com"}},[t._v("info@travelfreakvacations.com")])])],1)],1),t._v(" "),n("v-flex",{attrs:{sm10:"",md3:""}},[n("v-card",{attrs:{flat:""}},[n("v-card-subtitle",{staticClass:"mb-1 font-weight-bold"},[t._v("Website")]),t._v(" "),n("v-card-text",{staticClass:"display-0 text--secondary"},[n("a",{attrs:{href:"https://www.travelfreakvacations.com"}},[t._v("www.travelfreakvacations.com")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:v.a,VCardText:v.b,VContainer:f.a,VFlex:h.a,VLayout:m.a})}}]);