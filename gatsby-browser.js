// custom typefaces
import 'typeface-playfair-display'
import 'typeface-lato'
import 'typeface-lora'

import skrollr from 'skrollr'

window.skrollr = skrollr

// import skrollr from 'skrollr'
//
// skrollr.init({
//   render: function(data) {
//     //Log the current scroll position.
//     console.log(data.curTop);
//   }
// });

// import $ from 'jquery'
//
//
// $(window).scroll(function() {
//
//   // selectors
//   var $window = $(window),
//       $body = $('body'),
//       $panel = $('.panel');
//
//   // Change 33% earlier than scroll position so colour is there when you arrive.
//   var scroll = $window.scrollTop() + ($window.height() * 2 / 3);
//
//   $panel.each(function () {
//     var $this = $(this);
//
//     // if position is within range of this panel.
//     // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
//     // Remember we set the scroll to 33% earlier in scroll var.
//     if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
//
//       // Remove all classes on body with color-
//       $body.removeClass(function (index, css) {
//         return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
//       });
//
//       // Add class of currently active div
//       $body.addClass('color-' + $(this).data('color'));
//     }
//   });
//
// }).scroll();
