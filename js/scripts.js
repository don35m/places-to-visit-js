$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var placeName = $("input#new-place-name").val();
    var attraction = $("input#new-attraction").val();
    var city = $("input#new-city").val();
    var state = $("input#new-state").val();
    var newPlace = { placeName: placeName, attraction: attraction, city: city,
      state: state };

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + " " + newPlace.attraction +
    " " + newPlace.city + " " + newPlace.state + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-attraction").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
  });
});
