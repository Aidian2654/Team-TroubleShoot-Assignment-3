$('#carousel').carousel({
  interval: false,
  wrap: false
})

// Hide prev or next carousel controllers on start and last pages.
checkCarouselItem = function() {
  let $this;
  $this = $("#carousel");
  if ($("#carousel .carousel-inner .carousel-item:first").hasClass("active")) {
    $this.children(".carousel-control-prev").hide();
    $this.children(".carousel-control-next").show();
  } else if ($("#carousel .carousel-inner .carousel-item:last").hasClass("active")) {
    $this.children(".carousel-control-next").hide();
    $this.children(".carousel-control-prev").show();
  } else {
    $this.children(".carousel-control-next").show();
    $this.children(".carousel-control-prev").show();
  }
};

// On document load.
checkCarouselItem();

// On carousel slide events.
$("#carousel").on("slid.bs.carousel", "", checkCarouselItem);

function showProfileSection(section) {
  $('[id^="team-profile_"]').hide();
  $(section).show();
}
