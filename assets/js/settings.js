
(function ($) {
    'use strict';

    jQuery(document).ready(function () {
        /* Scroll */
        $('a.smooth_scroll').on("click", function (e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
        });

        $('.portfolio').mixItUp();
         /*Background change*/
          $(window).on('scroll', function () {
              var menu_area = $('.menu-area');
              if ($(window).scrollTop() > 200) {
                  menu_area.addClass('sticky-menu');
              } else {
                  menu_area.removeClass('sticky-menu');
              }
          });

          $(document).on('click', '.navbar-collapse.in', function (e) {
              if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                  $(this).collapse('hide');
              }
          });

          $('body').scrollspy({
              target: '.navbar-collapse',
              offset: 195
          });

    });

})(jQuery);