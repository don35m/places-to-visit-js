$(document).ready(function() {
  $("#add-landmark").click(function() {
    $("#new-landmarks").append('<div class="new-landmark">' +
                                 '<div class="form-group">' +
                                   '<label for="new-attraction">Attraction</label>' +
                                   '<input type="text" class="form-control new-attraction">' +
                                 '</div>' +

                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +

                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +

                                 '<div class="form-group">' +
                                   '<label for="new-note">Notes</label>' +
                                   '<input type="text" class="form-control new-note">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var placeName = $("input#new-place-name").val();

    var newPlace = { placeName: placeName,
                     landmarks: [] };

    $(".new-landmark").each(function() {
      var attraction = $(this).find("input.new-attraction").val();
      var city = $(this).find("input.new-city").val();
      var state = $(this).find("input.new-state").val();
      var note = $(this).find("input.new-note").val();

      var newLandmark = { attraction: attraction, city: city, state: state, note: note };
      newPlace.landmarks.push(newLandmark);
    });

    $("ul#places").append("<li><span class='place'>" +
                            newPlace.placeName +
                            "</span></li>");

    $("input#new-place-name").val("");
    $("input.new-attraction").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-note").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".place-name").text(newPlace.placeName);

      newPlace.landmarks.forEach(function(landmark) {
        $("ul#landmarks").append("<li>" + landmark.attraction +
        ", " + landmark.city + ", " + landmark.state + ", " + landmark.note + "</li>");
      });
    });
  });
});
