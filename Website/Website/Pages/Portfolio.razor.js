﻿export function init()
{
    // Also can pass in optional settings block
    var rellax = new Rellax('.rellax');


    // Make our ScrollSpy work
    var scrollSpys = [].slice.call(document.querySelectorAll('[data-spy="scroll"]'));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
        var $spy = $(scrollSpys[i]);

        $.fn['scrollspy'].call($spy, $spy.data());
    }
}







// fired when new scrollsby element is active
$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    /*alert("This is a warning message!");*/
})