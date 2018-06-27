//Preloader code
$(window).on("load", function() {

  $(".loader .inner").fadeOut(750, function() {
    $(".loader").fadeOut(1000);
  });
})

$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 4000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Devops Software Engineer.", "Cloud-Devops Enthusiast.",
      "Technologist.", "Web Development.",
      "M.S - MIS,2018.", "Motorcycling Enthusiast."
    ],
    typeSpeed: 85,
    loop: true,
    startDelay: 500,
    showCursor: false
  });

  //$('.owl-carousel').owlCarousel({
    $('#owl-skill').owlCarousel({
    loop: true,
    nav: true,
    items: 12,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 5
      }
    }
  });

  $('#owl-demo').owlCarousel({
    items : 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
    });

  //Offset on scroll
  var skillsTopOffset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

      $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: '#000',
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el).find('.percent').text(Math.round(percent));
        }
      });

    }

    if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

      $(".count").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal)
      })

      countUpFinished = true;
    }
  });

  $("[data-fancybox]").fancybox();
  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

  $("#filters a").click(function() {

    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });

    return false;
  });

  //Jquery code for smooth transition in navigation menu
  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({
      scrollTop: targetPosition - 50
    }, "slow");
  });

  //Sticky navigation for menubar
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {

    var body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

});
