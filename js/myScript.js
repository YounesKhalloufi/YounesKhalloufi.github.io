$(function () {
  setTimeout(() => {
    $(".preloader").fadeOut("slow");
    $("body, html").css("overflow", "auto");
  }, 4000);
  // animateDiv("#school");
  // animateDiv("#email");
  // animateDiv("#phone");
  // animateDiv("#age");

  ///////////////////////
  function animateDiv(idd) {
    var positionTop = $(window).scrollTop();
    var positionBottom = positionTop + window.innerHeight;
    var divTop = $(idd).offset().top;
    var divBottom = divTop + $(idd).height();
    if (positionTop < divTop && positionBottom > divBottom) {
      if (
        idd == "#prog-and-db" ||
        idd == "#web-dev" ||
        idd == "#other-skills"
      ) {
        $(".progress-bar", idd)
          .css("-webkit-animation", "animate-positive 2s")
          .css("animation", "animate-positive 2s");
      } else if (
        (idd == "#education1" ||
          idd == "#education2" ||
          idd == "#education3") &&
        window.innerWidth < 768
      ) {
        $(idd).addClass("animated bounce");
      } else {
        $(idd).addClass("animated slideInDown");
      }
    }
    if (divTop > positionBottom || divBottom < positionTop) {
      if (
        idd == "#prog-and-db" ||
        idd == "#web-dev" ||
        idd == "#other-skills"
      ) {
        $(".progress-bar", idd)
          .css("-webkit-animation", "none")
          .css("animation", "none");
      } else if (
        (idd == "#education1" ||
          idd == "#education2" ||
          idd == "#education3") &&
        window.innerWidth < 768
      ) {
        $(idd).removeClass("animated bounce");
      } else {
        $(idd).removeClass("animated slideInDown");
      }
    }
  }

  $(window).scroll(function () {
    // adjusting the height of #other-skills
    var newOtherSkillsHeight = $("#web-dev").height();
    $("#other-skills").height(newOtherSkillsHeight);
    // appliying animation on divs
    // animateDiv("#school");
    // animateDiv("#email");
    // animateDiv("#phone");
    // animateDiv("#age");

    // animateDiv("#education1");
    // animateDiv("#education2");
    // animateDiv("#education3");

    animateDiv("#prog-and-db");
    animateDiv("#web-dev");
    animateDiv("#other-skills");

    animateDiv("#m1");
    animateDiv("#m2");
    animateDiv("#m3");
    animateDiv("#m4");
  });

  //sroll smoothly to elements
  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate(
      {
        scrollTop: position - 70,
      },
      900
    );

    // auto collapse menu on mobile
    $(".icon").click();
    $("#header").css("height", "63.88px");
    $("#header").css("box-shadow", "none");
  });

  // footer dynamic copyright year
  $("#year").text(new Date().getFullYear());

  // responsive menu bar
  $(".icon").click(function () {
    $("#ul-container").toggleClass("responsive");

    if ($("#ul-container").hasClass("responsive")) {
      $("#header").css("height", "266px");
      $("#header").css("box-shadow", "-6px 14px 20px 1px rgb(0 0 105 / 20%)");
    } else {
      $("#header").css("height", "63.88px");
      $("#header").css("box-shadow", "none");
    }

    //toggle icon
    if ($("#the-icon").hasClass("fa-bars")) {
      $("#the-icon").removeClass("fa-bars");
      $("#the-icon").addClass("fa-times");
    } else {
      $("#the-icon").removeClass("fa-times");
      $("#the-icon").addClass("fa-bars");
    }
  });

  // when resizing the window, reset to defaults
  $(window).resize(function () {
    if (window.innerWidth > 768) $("#header").css("height", "63.88px");
    $("#ul-container").removeClass("responsive");
    $("#header").css("box-shadow", "none");

    $("#the-icon").removeClass("fa-times");
    $("#the-icon").addClass("fa-bars");
  });

  // switch to dark theme
  $("#switch-dark-theme").click(function () {
    $(this).toggleClass("dark");
    //toggle icon
    if ($("#dark-icon").hasClass("fa-moon")) {
      $("#dark-icon").removeClass("fa-moon");
      $("#dark-icon").addClass("fa-sun");
    } else {
      $("#dark-icon").removeClass("fa-sun");
      $("#dark-icon").addClass("fa-moon");
    }

    $("#head").toggleClass("dark");
    $("#header").toggleClass("dark");
    $("#container").toggleClass("dark");
    $("#more-container").toggleClass("dark");
    $("#footer p").toggleClass("dark");
    $(".aboutMecontainer").toggleClass("dark");
    $(".img-border").toggleClass("dark");
    $(".skills-elts h2").toggleClass("dark");
    $(".exp h4").toggleClass("dark");
  });
});
