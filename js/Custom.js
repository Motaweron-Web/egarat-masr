$(document).ready(function () {
  //spinner
  $(".spinner ").fadeOut("slow");
  //WOW js
  new WOW().init();
  // select2
  $('.select2search').select2();
  $('.select2').select2({
    minimumResultsForSearch: -1
  });
  // img gallery
  $('[data-fancybox]').fancybox({
    buttons: [
      "zoom",
      // "share",
      // "slideShow",
      "fullScreen",
      // "download",
      "thumbs",
      "close"
    ],
    transitionEffect: "slide",
  });
  // odometer
  $('.odometer').appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })


  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////
  // ////////////////////////////////////////


  $('.sideBtn').click(function () {
    $(this).toggleClass('active');
    $('.sideMenu').toggleClass('active');
  });
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if ((appScroll > 2) && (appScroll < 99999999999)) {
      $(".navbar").addClass("navAnimate");
    };
    if ((appScroll > 0) && (appScroll < 20)) {
      $(".navbar").removeClass("navAnimate");
    };
  });


});
