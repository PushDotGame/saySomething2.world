(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{193:function(t,e,n){"use strict";var r={name:"MainTitle",props:["text"]},l=n(6),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mt-6 mb-3 text-xl text-center text-gray-500 font-mono uppercase"},[this._v("\n  "+this._s(this.text)+"\n")])}),[],!1,null,"1a5bd200",null);e.a=component.exports},210:function(t,e,n){var content=n(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("e645eeb2",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";var r={name:"ArticleI",computed:{fast:function(){return this.$store.state.fast}}},l=n(6),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-link",{attrs:{to:this.fast.linkTo("/i")}},[e("div",{staticClass:"flex flex-col rounded shadow overflow-hidden"},[e("div",{staticClass:"flex-shrink-0"},[e("img",{staticClass:"h-28 w-full object-cover",attrs:{src:"https://stor.123eth.io/i.jpg?v=0",alt:"Guide"}})]),this._v(" "),e("div",{staticClass:"flex-1 bg-white p-6 flex flex-col justify-between"},[e("div",{staticClass:"flex-1"},[e("div",{staticClass:"text-gray-500"},[this._v("\n            Guide\n          ")]),this._v(" "),e("h3",{staticClass:"mt-2 text-xl leading-7 font-semibold text-gray-900"},[this._v("\n            How to write a message on blockchain, then win prize, lottery and bonus?\n          ")])])])])])],1)}),[],!1,null,"0b02188c",null);e.a=component.exports},245:function(t,e,n){"use strict";var r=n(210);n.n(r).a},246:function(t,e,n){(e=n(10)(!1)).push([t.i,".pg-message .the-card .canvas[data-v-0e22a533]{border-left-width:1px;border-right-width:1px;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem;background-color:#fff}.msg-details[data-v-0e22a533]{background-color:#fff;border-color:#e2e8f0;border-width:1px;border-radius:.25rem;box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.md-label[data-v-0e22a533]{padding:1.25rem 1rem;border-bottom-width:1px;border-color:#e2e8f0}.md-label h3[data-v-0e22a533]{line-height:1.625;font-size:1.125rem;font-weight:500;color:#1a202c}.md-label p[data-v-0e22a533]{margin-top:.25rem;max-width:42rem;font-size:.875rem;line-height:1.625;color:#a0aec0}.md-data dl div[data-v-0e22a533]{padding:1.25rem 1rem}.md-data dl div[data-v-0e22a533]:first-child{margin-top:0}.md-data dl div[data-v-0e22a533]:hover{background-color:#edf2f7}.md-data dl div dd[data-v-0e22a533]{line-height:1.625;font-size:.875rem;font-weight:500;color:#a0aec0}.md-data dl div dt[data-v-0e22a533]{margin-top:.25rem;font-size:.875rem;color:#1a202c}div.the-rules.ru-white[data-v-0e22a533]{background-color:#fff}",""]),t.exports=e},271:function(t,e,n){"use strict";n.r(e);n(20);var r,l=n(2),o=n(14),d=n.n(o),c=n(32),m=n.n(c),v=n(5),_=n(193),f={name:"message-serial",components:{ArticleI:n(224).a,MainTitle:_.a,VueQr:m.a},layout:"ab1",data:function(){return{message:{serial:null,account:null,name:null,nameHex:null,text:null,textHex:null,blockNumber:null,timestamp:null}}},validate:function(t){var e=t.params;return/^\d+$/.test(e.serial)},computed:{fn:function(){return v.a},fast:function(){return this.$store.state.fast},gameAddress:function(){return"0x1234567B172f040f45D7e924C0a7d088016191A6"},invite:function(){var t=d.a.localStorage.getData("adviserSerial"),e=location.protocol+"//"+location.host+"/i";return e=t?e+"?a="+t:e+"?p="+this.message.account}},mounted:(r=Object(l.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.state.fast.message(this.$route.params.serial).then((function(t){0===t.serial&&console.error("NO"),e.message=t}));case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),head:function(){return{title:"Message #"+this.$route.params.serial}}},h=(n(245),n(6)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pg-message"},[t.message.serial>0?n("div",[n("div",{staticClass:"my-12 leading-8 font-mono text-gray-500 text-xl text-center uppercase"},[t._v("\n      Message #"+t._s(t.message.serial)),n("br"),t._v("on Ethereum blockchain\n    ")]),t._v(" "),n("div",{staticClass:"the-card"},[n("div",{staticClass:"tab"},[n("div",{staticClass:"label"},[t._v("Message #"+t._s(t.message.serial))]),t._v(" "),n("div",{staticClass:"sub"},[n("fa",{attrs:{icon:["fas","fingerprint"]}}),t._v("\n          #"+t._s(t.message.blockNumber)+"\n        ")],1)]),t._v(" "),n("div",{staticClass:"canvas"},[n("nuxt-link",{staticClass:"the-player",attrs:{to:t.fast.linkToPlayer(t.message.account)}},[n("div",{staticClass:"avatar"},[n("fa",{attrs:{icon:["fas","user-tie"]}})],1),t._v(" "),n("ul",[n("li",[n("span",{staticClass:"name"},[t._v(t._s(t.message.name?t.message.name:"No name"))]),t._v(" "),n("span",{staticClass:"sub"},[t._v(t._s(t.$moment(1e3*t.message.timestamp).fromNow()))])]),t._v(" "),n("li",{staticClass:"account"},[t._v("\n              "+t._s(t.message.account)+"\n            ")])])]),t._v(" "),n("div",{staticClass:"the-message-text mt-6"},[t._v("\n          "+t._s(t.message.text)+"\n        ")]),t._v(" "),n("div",{staticClass:"mt-4 flex -mb-1"},[n("div",{staticClass:"pr-4 flex items-center justify-center leading-6 font-mono text-sm text-teal-500 text-center",staticStyle:{width:"70%"}},[t._v("\n            How to write a message on blockchain, then win prize, lottery and bonus?\n          ")]),t._v(" "),n("div",{staticStyle:{width:"30%"}},[n("vue-qr",{staticClass:"border-teal-300 border",attrs:{text:t.invite,size:640,margin:32,colorDark:"#38b2ac"}})],1)]),t._v(" "),n("div",{staticClass:"the-message-footer"},[n("span"),t._v(" "),n("span",[t._v(t._s(t.$moment(1e3*t.message.timestamp).format("LLL")))])])],1)]),t._v(" "),n("article-i",{staticClass:"my-6"}),t._v(" "),n("div",{staticClass:"mt-20 mb-8 leading-8 font-mono text-gray-500 text-xl text-center uppercase"},[t._v("\n      Details\n    ")]),t._v(" "),n("div",{staticClass:"msg-details mt-6"},[n("div",{staticClass:"md-label"},[n("h3",[t._v("\n          Message #"+t._s(t.message.serial)+"\n        ")]),t._v(" "),n("p",[t._v("\n          Details on Ethereum blockchain.\n        ")])]),t._v(" "),n("div",{staticClass:"md-data"},[n("dl",[n("div",[n("dd",[t._v("\n              Block height\n            ")]),t._v(" "),n("dt",[t._v("\n              #"+t._s(t.message.blockNumber)+"\n            ")])]),t._v(" "),n("div",[n("dd",[t._v("\n              Date & time\n            ")]),t._v(" "),n("dt",[t._v("\n              "+t._s(t.$moment(1e3*t.message.timestamp).fromNow())+"\n            ")])]),t._v(" "),n("div",[n("dd",[t._v("\n              Unix timestamp\n            ")]),t._v(" "),n("dt",[t._v("\n              "+t._s(t.message.timestamp)+"\n            ")])]),t._v(" "),n("div",[n("dd",[t._v("\n              Date & time\n            ")]),t._v(" "),n("dt",[t._v("\n              "+t._s(t.$moment(1e3*t.message.timestamp).format("LLLL"))+"\n            ")])]),t._v(" "),n("div",[n("dd",[t._v("\n              Sender name\n            ")]),t._v(" "),n("dt",[t._v("\n              "+t._s(t.message.name)+"\n            ")])]),t._v(" "),n("div",[n("dd",[t._v("\n              Sender address\n            ")]),t._v(" "),n("dt",{staticClass:"break-all"},[t._v("\n              "+t._s(t.message.account)+"\n            ")])]),t._v(" "),n("div",[n("dd",[t._v("\n              Text in hex\n            ")]),t._v(" "),n("dt",{staticClass:"break-all"},[t._v("\n              "+t._s(t.message.textHex)+"\n            ")])]),t._v(" "),n("div",[n("dd",[t._v("\n              Contract address\n            ")]),t._v(" "),n("dt",{staticClass:"break-all"},[t._v("\n              "+t._s(t.gameAddress)+"\n            ")])])])])])],1):n("div",{staticClass:"no-issued"},[t._v("\n    Message #"+t._s(t.$route.params.serial)+" does not exist\n  ")])])}),[],!1,null,"0e22a533",null);e.default=component.exports}}]);