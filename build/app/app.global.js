/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){Context.activeRouter=function(){var e={},t={},n=0,i=[];return{set:function(t){e=Object.assign({},e,t),function(){for(var e=i,t=0;t<e.length;t++){(0,e[t])()}}()},get:function(t){return 0===Object.keys(e).length?{location:{pathname:Context.window.location.pathname,search:Context.window.location.search}}:t?e[t]:e},subscribe:function(e,r,o){if("function"!=typeof e)throw new Error("Expected listener to be a function.");r?function(e,i,r){t[i].listenerList[r]=e,t[i].listenerList.length===t[n].startLength&&t[i].groupedListener()}(e,r,o):i.push(e);var s=!0;return function(){if(s){if(r)!function(e,n){if(t[e].listenerList.splice(n,1),0===t[e].listenerList.length){var r=i.indexOf(t[e].groupedListener);i.splice(r,1),delete t[e]}}(r,o);else{var n=i.indexOf(e);i.splice(n,1)}s=!1}}},createGroup:function(e){return t[n+=1]={},t[n].startLength=e,t[n].listenerList=[],t[n].groupedListener=function(){var e=!1;t[n].listenerList.forEach(function(t){e?t(!0):e=null!==t(!1)})},i.push(t[n].groupedListener),n}}}();
})(resourcesUrl);
})("App");