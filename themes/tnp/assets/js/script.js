import CMS from "netlify-cms-app";
// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate("my-template", MyTemplate);

// Preloader js
$(window).on("load", function () {
  $(".preloader").addClass("d-none");
});

(function ($) {
  "use strict";

  //slider
  $(".slider").not(".slick-initialized").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
  });
})(jQuery);
