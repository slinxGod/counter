'use strict';
//
$(function(){
    var h = 0;
    $('.fixed-bottom').each(function() {
        h = h + $(this).outerHeight();
    })
    $('.page').css({
        'paddingBottom': h
    });
    var vh = 0;
    $('.fixed-top').each(function() {
        vh = vh + $(this).outerHeight();
    })
    $('.page').css({
        'paddingTop': vh
    });
})

document.body.addEventListener('touchstart', function (){});