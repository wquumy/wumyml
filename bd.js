function LazyOnScroll(){setTimeout(function(){function t(){for(var t=document.getElementsByClassName("lazy"),e=0;e<t.length;e++)n(t[e])&&(t[e].src=t[e].getAttribute("data-src"))}function n(t){var n=t.getBoundingClientRect();return n.bottom>=0&&n.right>=0&&n.top<=(window.innerHeight||document.documentElement.clientHeight)&&n.left<=(window.innerWidth||document.documentElement.clientWidth)}function e(t,n){window.addEventListener?window.addEventListener(t,n):window.attachEvent("on"+t,n)}e("load",t),e("scroll",t),document.addEventListener("DOMContentLoaded",function(){"use strict";for(var t=document.querySelectorAll("a"),n=t.length,e=/firefox|trident/i.test(navigator.userAgent)?document.documentElement:document.body,o=function(t,n,e,o){return(t/=o/2)<1?e/2*t*t*t+n:e/2*((t-=2)*t*t+2)+n};n--;)t.item(n).addEventListener("click",function(t){var n,i=e.scrollTop,d=document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top,r=e.scrollHeight-window.innerHeight,c=r>i+d?d:r-i,a=function(t){var d=t-(n=n||t),r=o(d,i,c,900);e.scrollTop=r,900>d&&requestAnimationFrame(a)};requestAnimationFrame(a),t.preventDefault()})})},1e3)}window.addEventListener?window.addEventListener("load",LazyOnScroll,!1):window.attachEvent?window.attachEvent("onload",LazyOnScroll):window.onload=LazyOnScroll;