$(document).ready(function () {
  //spinner
  $(".spinner ").fadeOut("slow");
  //WOW js
  new WOW().init();
  // select2
  $('.select2').select2();
  $('.select2WithoutSearch').select2({
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
});
