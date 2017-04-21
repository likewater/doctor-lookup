var apiKey = require('./../.env').apiKey;

Doctor = function(){
}
Doctor.prototype.getDoctor = function(location, specialty, insurance) {

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?location=' + location + '&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=647520a0b46d95fb8ef2cc58492b69a7').then(function(response) {



  // $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + doctor + '&distance=25&stolenness=proximity').then(function(response) {

    $('.showDoctors').text(response(function(location, specialty, insurance) {
      $('.showDoctors').append("<p>Name" + data.practices.name  + "</p>")

      // "><span><strong>Description</strong>:</span>" + " " + bike.title + "<br>" + "<span><strong>Serial number:</strong></span>" + " " +  bike.serial + "<br>" + "<span><strong>Date reported stolen:</strong></span>" + " " + new Date(bike.date_stolen * 1000) + "</p><br>");
      // console.log("response test: " + response);
    }));

  }).fail(function(error) {
      $('.showDoctors').text(error.responseJSON.message);
  });
};

// Bike.prototype.getLocationMake = function(location, manufacturer) {
//   $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + manufacturer + '&location=' + location + '&distance=25&stolenness=proximity').then(function(response) {
//     $('.showBikes').text(response.bikes.forEach(function(bike) {
//       $('.showBikes').append("<a href=https://bikeindex.org/bikes/" + bike.id  + "><span><strong>Description</strong>:</span>" + " " + bike.title + "<br>" + "<span><strong>Serial number:</strong></span>" + " " +  bike.serial + "<br>" + "<span><strong>Date reported stolen:</strong></span>" + " " + new Date(bike.date_stolen * 1000) + "</p><br></a>");
//     }));
//   })
//     .fail(function(error) {
//       $('.showDoctors').text(error.responseJSON.message);
//   });
// };
exports.doctorModule = Doctor;
