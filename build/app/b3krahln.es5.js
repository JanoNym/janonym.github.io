/*! Built with http://stenciljs.com */
App.loadBundle("b3krahln",["exports","./chunk1.js"],function(e,n){var t=window.App.h,r=function(){function e(){}return e.prototype.componentDidLoad=function(){n.Highscore.addHighscore(this.match.params.count)},e.prototype.render=function(){return t("div",null,t("header",null,t("h1",null,"Game Over")),t("main",null,t("h2",null,"Great you did ",this.match.params.count," correct steps."),t("div",{class:"menu-item"},t("stencil-route-link",{url:"/game"},t("button",null,"Try again"))),t("div",{class:"menu-item"},t("stencil-route-link",{url:"/"},t("button",null,"Back to menu")))))},Object.defineProperty(e,"is",{get:function(){return"sn-gameover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{match:{type:"Any",attr:"match"}}},enumerable:!0,configurable:!0}),e}();e.SnGameover=r,Object.defineProperty(e,"__esModule",{value:!0})});