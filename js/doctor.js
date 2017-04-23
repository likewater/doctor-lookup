var apiKey = require('./../.env').apiKey;
var resourceUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey;

function Doctor(){//is this correct?
}

Doctor.prototype.getDoctor = function(location, doctorDisplay){

$.get(resourceUrl).then(function(response) {
  doctorDisplay(response.data);
  //console.log(response.data);
  //var result = JSON.stringify(response);
  //var doctors = response;
  //response.doctors.forEach(function(doctor) {
  // $('.showDoctors').append("<p>" + response.data + " test" + response.data.first_name + "</p>");
  // console.log(response.data);

//});
  }).fail(function(error) {
      $('.showDoctors').text(error.responseJSON.message);
   });
};
exports.doctorModule = Doctor;
