var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function g(e,t,n){var o,i,r,a,f,u,l=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function O(e){return l=e,f=setTimeout(h,t),c?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=r}function h(){var e=m();if(S(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return g?d(n,r-(e-l)):n}(e))}function j(e){return f=void 0,b&&o?y(e):(o=i=void 0,a)}function w(){var e=m(),n=S(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return O(u);if(g)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=p(t)||0,v(n)&&(c=!!n.leading,r=(g="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},w.flush=function(){return void 0===f?a:j(m())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");let y=JSON.parse(localStorage.getItem("feedback-form-state"))||{};b.addEventListener("input",t((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),b.addEventListener("submit",(function(e){e.preventDefault();2!==Object.values(y).length?alert("Please fill both fields!"):(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),b.reset(),localStorage.removeItem("feedback-form-state"),y={})})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.elements.message.value=e.message||"",b.elements.email.value=e.email||"")}();
//# sourceMappingURL=03-feedback.7717b06b.js.map
