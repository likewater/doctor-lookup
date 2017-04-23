var Doctor = require('./../js/doctor.js').doctorModule;

var doctorDisplay = function(doctors) {
  doctors.forEach(function(doctor){
      $('.showDoctors').append(

        "<p>Dr. " + doctor.profile.first_name + "</p>"

      );
    });
}

$(document).ready(function() {
  var currentDoctorObject = new Doctor();

  $('#formFlow').submit(function() {
    event.preventDefault();
    var location = $('#location').val();
    $('#location').val("");
    // var user_location = $('#user_location').val();
    // $('#user_location').val();
    // var specialty_uid = $('#specialty_uid').val();
    // $('#specialty_uid').val();
    // var insurance_uid = $('#insurance_uid').val();
    // $('#insurance_uid').val();
    // currentDoctorObject.getDoctor(specialty_uid, insurance_uid, location, user_location);
    currentDoctorObject.getDoctor(location, doctorDisplay);
  });
});
