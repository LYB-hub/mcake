(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collect-data/collect-data"],{"2e3a":function(t,e,a){"use strict";a.r(e);var c=a("b98f"),n=a("47cc");for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);var o,s=a("f0c5"),r=Object(s["a"])(n["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],o);e["default"]=r.exports},"47cc":function(t,e,a){"use strict";a.r(e);var c=a("cb7a"),n=a.n(c);for(var u in c)"default"!==u&&function(t){a.d(e,t,(function(){return c[t]}))}(u);e["default"]=n.a},5289:function(t,e,a){"use strict";(function(t){a("c4eb");c(a("66fd"));var e=c(a("2e3a"));function c(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=a,t(e.default)}).call(this,a("543d")["createPage"])},b98f:function(t,e,a){"use strict";var c;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return c}));var n=function(){var t=this,e=t.$createElement;t._self._c},u=[]},cb7a:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{handleCfy:function(){var e=this;t.request({url:"https://h5.mcake.com/api/5e90690f0e270d04?cityId=110",method:"GET",header:{"access-token":"bb15f4da64bd6c650de80b0125ad411b",version:"v1.0"},success:function(t){var a=t.data.data,c={requests:[]};a.forEach((function(t){c.requests.push({method:"POST",path:"/1.1/classes/classify",body:t})})),e.$post("/1.1/batch",c)}})},handleGoods:function(){var e=this;t.request({url:"https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=2&bid=6",method:"GET",header:{"access-token":"cea1733a84af6414e3a5c20d5832ed88",version:"v1.0"},success:function(t){console.log(t);var a=t.data.data.list,c={requests:[]};a.forEach((function(t){c.requests.push({method:"POST",path:"/1.1/classes/goods",body:t})})),e.$post("/1.1/batch",c)}})}}};e.default=a}).call(this,a("543d")["default"])}},[["5289","common/runtime","common/vendor"]]]);