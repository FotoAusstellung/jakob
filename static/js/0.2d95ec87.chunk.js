webpackJsonp([0],{561:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getCLS",function(){return p}),n.d(t,"getFCP",function(){return y}),n.d(t,"getFID",function(){return F}),n.d(t,"getLCP",function(){return P}),n.d(t,"getTTFB",function(){return k});var i,a,r,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver(function(e){return e.getEntries().map(t)});return n.observe({type:e,buffered:!0}),n}}catch(e){}},f=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(e){addEventListener("pageshow",function(t){t.persisted&&e(t)},!0)},d="function"==typeof WeakSet?new WeakSet:new Set,m=function(e,t,n){var i;return function(){t.value>=0&&(n||d.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},p=function(e,t){var n,i=u("CLS",0),a=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},r=c("layout-shift",a);r&&(n=m(e,i,t),f(function(){r.takeRecords().map(a),n()}),s(function(){i=u("CLS",0),n=m(e,i,t)}))},v=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},h=function(){f(function(e){var t=e.timeStamp;v=t},!0)},g=function(){return v<0&&(v=l(),h(),s(function(){setTimeout(function(){v=l(),h()},0)})),{get timeStamp(){return v}}},y=function(e,t){var n,i=g(),a=u("FCP"),r=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.timeStamp&&(a.value=e.startTime,a.entries.push(e),d.add(a),n()))},o=performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",r);(o||f)&&(n=m(e,a,t),o&&r(o),s(function(i){a=u("FCP"),n=m(e,a,t),requestAnimationFrame(function(){requestAnimationFrame(function(){a.value=performance.now()-i.timeStamp,d.add(a),n()})})}))},S={passive:!0,capture:!0},E=new Date,L=function(e,t){i||(i=t,a=e,r=new Date,b(removeEventListener),w())},w=function(){if(a>=0&&a<r-E){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach(function(t){t(e)}),o=[]}},T=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){L(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,S),removeEventListener("pointercancel",i,S)};addEventListener("pointerup",n,S),addEventListener("pointercancel",i,S)}(t,e):L(t,e)}},b=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,T,S)})},F=function(e,t){var n,r=g(),p=u("FID"),v=function(e){e.startTime<r.timeStamp&&(p.value=e.processingStart-e.startTime,p.entries.push(e),d.add(p),n())},l=c("first-input",v);n=m(e,p,t),l&&f(function(){l.takeRecords().map(v),l.disconnect()},!0),l&&s(function(){var r;p=u("FID"),n=m(e,p,t),o=[],a=-1,i=null,b(addEventListener),r=v,o.push(r),w()})},P=function(e,t){var n,i=g(),a=u("LCP"),r=function(e){var t=e.startTime;t<i.timeStamp&&(a.value=t,a.entries.push(e)),n()},o=c("largest-contentful-paint",r);if(o){n=m(e,a,t);var p=function(){d.has(a)||(o.takeRecords().map(r),o.disconnect(),d.add(a),n())};["keydown","click"].forEach(function(e){addEventListener(e,p,{once:!0,capture:!0})}),f(p,!0),s(function(i){a=u("LCP"),n=m(e,a,t),requestAnimationFrame(function(){requestAnimationFrame(function(){a.value=performance.now()-i.timeStamp,d.add(a),n()})})})}},k=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}});
//# sourceMappingURL=0.2d95ec87.chunk.js.map