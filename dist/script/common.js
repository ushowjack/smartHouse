"use strict";function GetDate(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}function Timestamp(e){var t=GetDate();return e=e.indexOf("?")>-1?e+"&timestamp="+t:e+"?timestamp="+t,encodeURI(e)}Array.prototype.myForEach=function(e,t){if(void 0===t&&(t=window),"Function"===Array.prototype.forEach)return void this.forEach(e,t);for(var n=0;n<this.length;n++)"function"==typeof e&&e.call(t,this[n],n,this)};var CookieUtil={get:function(e){var t=encodeURIComponent(e)+"=",n=document.cookie.indexOf(t),o=null;if(n>-1){var i=document.cookie.indexOf(";",n);-1===i&&(i=document.cookie.length),o=decodeURIComponent(document.cookie.substring(n+t.length,i))}return o},set:function(e){var t=e.name,n=e.value,o=e.expires,i=e.path,r=e.domain,a=e.secure,c=encodeURIComponent(t)+"="+encodeURIComponent(n);if(o){var l=Date.now();o=new Date(l+864e5*o)}o instanceof Date&&(c+="; expires="+o.toGMTString()),i&&(c+="; path="+i),r&&(c+="; domain="+r),a&&(c+="; secure"),document.cookie=c},unset:function(e){var t=e.name,n=e.path,o=e.domain,i=e.secure;this.set({name:t,value:"",path:n,domain:o,secure:i})}},FormUtil={placeholderOff:function(e){e.target.val=e.target.getAttribute("placeholder"),e.target.setAttribute("placeholder","")},placeholderOn:function(e){e.target.setAttribute("placeholder",e.target.val)},setPlaceholder:function(e){e.onfocus=FormUtil.placeholderOff,e.onblur=FormUtil.placeholderOn},placeholderPolyfill:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:"rgb(204, 204, 204)","line-height":"40px","font-size":"14px",position:"absolute",display:"inline",top:0,left:50,"z-index":2};$(e).each(function(e,n){var o=$(n).find("input").attr("placeholder"),i=$("<txt>"+o+"</txt>");i.css(t),$(n).append(i),$(n).find("input").focus(function(){i.text("")}),$(n).find("input").blur(function(){this.value||i.text(o)})})}};
//# sourceMappingURL=common.js.map