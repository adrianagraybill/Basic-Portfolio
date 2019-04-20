'use strict';

let slideshow = function () {
  let slides = $('[data-slides]');
  let pictures = slides.data('slides');
  let turn = pictures.length;
  let carousel = function () {
    slides
      .css('background-image', 'url("' + pictures[Math.floor(Math.random() * turn)] + '") ')
      .show(0, function () {
        setTimeout(carousel, 5000);
      });
  };

  carousel();
};

slideshow();
