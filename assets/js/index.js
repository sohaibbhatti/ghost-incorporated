/**
 * Main JS file for Incorporated behaviours
 */

/*globals jQuery, document */
// (function ($) {
//     "use strict";
// 
//     $(document).ready(function(){
// 
//         // On the home page, move the blog icon inside the header 
//         // for better relative/absolute positioning.
// 
//         //$("#blog-logo").prependTo("#site-head-content");
// 
//     });
// 
// }(jQuery));

var lastScrollTop = 0;

$(window).scroll(function() {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var st = $(window).scrollTop();

    if ($(window).scrollTop() > 100) {
        $('body').addClass('nav-hidden');

        if (st - lastScrollTop < 0) {
          $('body').addClass('nav-show');
          $('body').removeClass('nav-hidden');

        }
        else {
          $('body').addClass('nav-hidden');
          $('body').removeClass('nav-show');
        }
    }

    else {
        $('body').removeClass('nav-hidden');
    }

    lastScrollTop = st;
});

$(".full img").on("click", function() {
  $(this).toggleClass("zoom");
});
