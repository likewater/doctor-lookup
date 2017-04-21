var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  var currentDoctorObject = new Doctor();

  $('#doctorSearch').click(function() {
    var doctor = $('#doctor').val();
    $('#doctor').val();
    currentDoctorObject.getDoctor(doctor);
  });
});
