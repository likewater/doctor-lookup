var Doctor = require('./../js/doctor.js').doctorModule;

var doctorDisplay = function(doctors) {
  doctors.forEach(function(doctor){
      $('.showDoctors').append(
        "<table class='table table-striped'><thead><th>First Name</th><th>Last Name</th><th>Title</th><th>Picture</th></thead><tbody><td><p>" + doctor.profile.first_name + "</p></td><td><p>" + doctor.profile.last_name + "</p></td><td><p>" + doctor.profile.title + "</p></td><td><img src=" + doctor.profile.image_url + "></img></td></tbody></table><hr>"
      );
  });
}

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#formFlow').submit(function() {
    event.preventDefault();
    var location = $('#location').val();
    $('#location').val("");
    currentDoctorObject.getDoctor(location, doctorDisplay);
  });
});
