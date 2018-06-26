$(document).ready(function () {
    var uri = "https://api.openweathermap.org/data/2.5/weather?q=New%20York,us&units=imperial&appid=1350efe766beffe716f6b79859c00eff";

    // console.log(uri);
    $.get(uri, onRes);
};



function onRes(response) {
    console.log(response);
    $(".city").html(response.name);
    $(".temp").html(response.main.temp);
    $(".weather").html(response.weather[0].description);
}