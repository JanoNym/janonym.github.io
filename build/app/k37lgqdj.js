/*! Built with http://stenciljs.com */
const{h:n}=window.App;class e{render(){return n("div",null,n("header",null,n("h1",null,"Simon Game")),n("main",null,n("div",{class:"menu-item"},n("stencil-route-link",{url:"/game"},n("button",null,"Start game"))),n("div",{class:"menu-item"},n("stencil-route-link",{url:"/highscore"},n("button",null,"Highscores")))))}static get is(){return"sn-menu"}}export{e as SnMenu};