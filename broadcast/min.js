/*! (c) Andrea Giammarchi - ISC */
function broadcast(){function n(n,t){var e=u(n);e.c.indexOf(t)<0&&e.c.push(t),r(n,t)}function t(n,t){var e=u(n);1<arguments.length?(f(e.c,t),f(e.f,t)):l["delete"](n)}function e(n,t){if(!(1<arguments.length))return e.bind(null,n);var r=u(n);for(r.$=Promise.resolve(t);r.f.length;)r.$.then(r.f.shift());for(;r.r.length;)r.$.then(r.r.shift());r.f.push.apply(r.f,r.c)}function r(n,t){var r=u(n);if(null!==r.$&&r.$.then(e.bind(null,n)),!(1<arguments.length))return new Promise(function(n){r.r.push(n)});r.f.indexOf(t)<0&&r.f.push(t)}function f(n,t){var e=n.indexOf(t);-1<e&&n.splice(e,1)}function u(n){return l.get(n)||i(n)}function i(n){var t={c:[],f:[],r:[],$:null};return l.set(n,t),t}var l=new Map;return{all:n,drop:t,"new":broadcast,that:e,when:r}}