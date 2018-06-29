// weather
$(document).ready(function () {
  // var x = window.matchMedia("(max-width: 990px)")
  // myFunction(x) // Call listener function at run time
  // x.addListener(myFunction) // Attach listener function on state changes
  var uri = "https://api.openweathermap.org/data/2.5/weather?q=New%20York,us&units=imperial&appid=1350efe766beffe716f6b79859c00eff";
});

function onRes(response) {
  console.log(response);
  $(".city").html(response.name);
  $(".weather").html(response.weather[0].description);
  if (response.main.temp > 60)
    $(".temp").html("<p>" + response.main.temp + "<br>" + "The suggested drink for this today's weather in New York is a cup of iced tea :" + "</p>");
  $(".temp").append('<img id="theImg" src="https://globalassets.starbucks.com/assets/c2830c76f23247249710e97d532e3e65.jpg" />');
}

// function myFunction() {
//   if ($(window).width() < 992) {
//     $("#sidebar").toggle(false);
//     $("#menu").attr("href", "menu.html");
//   } else {
//     $("#menu").attr("href", "#");
//   }
// }