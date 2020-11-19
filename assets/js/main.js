$('#carousel').carousel({
  interval: false,
  wrap: false
});

function showCarouselSection(index) {
  $('#carousel').carousel(index);
}

// Hide prev or next carousel controllers on start and last pages.
function checkCarouselItem() {
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
}

// On document load.
checkCarouselItem();

// On carousel slide events.
$("#carousel").on("slid.bs.carousel", "", checkCarouselItem);

function showProfileSection(section) {
  $('[id^="team-profile_"]').hide();
  $(section).show();
}

// TODO: The above function and this are essentially identical and can be merged.
function showProjectSection(section) {
  console.log('gere')
  $('[id^="project-plan_"]').hide();
  $(section).show();
}
