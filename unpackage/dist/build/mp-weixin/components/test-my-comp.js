(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/test-my-comp"],{"0c42":function(n,t,e){"use strict";var o=e("0d4c"),c=e.n(o);c.a},"0d4c":function(n,t,e){},"11f0":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"test-my-comp",props:["name"],data:function(){return{}},computed:{},watch:{},methods:{handleNum:function(){this.$emit("onNum",11)}},onLoad:function(){console.log("公共组件的onLoad")},created:function(){console.log("公共组件的created")}};t.default=o},"5dbb":function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return o}));var c=function(){var n=this,t=n.$createElement;n._self._c},u=[]},a72e:function(n,t,e){"use strict";e.r(t);var o=e("11f0"),c=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=c.a},aa8e:function(n,t,e){"use strict";e.r(t);var o=e("5dbb"),c=e("a72e");for(var u in c)"default"!==u&&function(n){e.d(t,n,(function(){return c[n]}))}(u);e("0c42");var a,r=e("f0c5"),f=Object(r["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/test-my-comp-create-component',
    {
        'components/test-my-comp-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("aa8e"))
        })
    },
    [['components/test-my-comp-create-component']]
]);
