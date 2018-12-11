//
'use strict';
//
var docEl = document.documentElement;
var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
function recalc() {
    var clientWidth = docEl.clientWidth;
    var clientHeight = docEl.clientHeight;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
};
//
window.addEventListener && window.addEventListener(resizeEvt, recalc, false);
//
recalc();
