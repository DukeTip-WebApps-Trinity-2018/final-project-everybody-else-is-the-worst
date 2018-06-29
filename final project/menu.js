$(".btn").click(function () {
    //api call here
    var city = $(".city").val();
    var uri = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&units=imperial&appid=4e651d58543d2bad33b52678226ee6e6";
    console.log (uri);
    $.get(uri, onRes);
});

function onRes(response) {
    console.log(response);
    $(".country").html(response.sys.country);
    $(".temp").html(response.main.temp);
    switch (response.weather[0].id) {
        case 801:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Mocha" + "</p>");
            $(".weather").append('<img id="theImg" src="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/r_INe-ljise7v0r5/graphicstock-glass-of-coffee-mocha-with-ice_rPOZms9ub_thumb.jpg" />');
            break;
        case 802:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Mocha" + "</p>");
            $(".weather").append('<img id="theImg" src="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/r_INe-ljise7v0r5/graphicstock-glass-of-coffee-mocha-with-ice_rPOZms9ub_thumb.jpg" />');
        case 803:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Mocha" + "</p>");
            $(".weather").append('<img id="theImg" src="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/r_INe-ljise7v0r5/graphicstock-glass-of-coffee-mocha-with-ice_rPOZms9ub_thumb.jpg" />');
            break;
        case 804:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Mocha" + "</p>");
            $(".weather").append('<img id="theImg" src="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/r_INe-ljise7v0r5/graphicstock-glass-of-coffee-mocha-with-ice_rPOZms9ub_thumb.jpg" />');
            break;
        case 200:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 201:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 202:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 210:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 211:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 212:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 221:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 230:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 231:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 232:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Espresso" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/432856237_da68d53578_z.jpg" />');
            break;
        case 300:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Chocolate Milk" + "</p>");
            $(".weather").append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwziAr7xkWrsgN27dndcg2VM-LKIVG_0AuyGjBFs3lvTAflpWI" />');
            break;
        case 301:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Chocolate Milk" + "</p>");
            $(".weather").append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwziAr7xkWrsgN27dndcg2VM-LKIVG_0AuyGjBFs3lvTAflpWI" />');
            break;
        case 302:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Chocolate Milk" + "</p>");
            $(".weather").append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwziAr7xkWrsgN27dndcg2VM-LKIVG_0AuyGjBFs3lvTAflpWI" />');
            break;
        case 310:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Chocolate Milk" + "</p>");
            $(".weather").append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwziAr7xkWrsgN27dndcg2VM-LKIVG_0AuyGjBFs3lvTAflpWI" />');
            break;
        case 311:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Chocolate Milk" + "</p>");
            $(".weather").append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwziAr7xkWrsgN27dndcg2VM-LKIVG_0AuyGjBFs3lvTAflpWI" />');
            break;
        case 312:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Chocolate Milk" + "</p>");
            $(".weather").append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwziAr7xkWrsgN27dndcg2VM-LKIVG_0AuyGjBFs3lvTAflpWI" />');
            break;
        case 313:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Chocolate Milk" + "</p>");
            $(".weather").append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwziAr7xkWrsgN27dndcg2VM-LKIVG_0AuyGjBFs3lvTAflpWI" />');
            break;
        case 314:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Chocolate Milk" + "</p>");
            $(".weather").append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwziAr7xkWrsgN27dndcg2VM-LKIVG_0AuyGjBFs3lvTAflpWI" />');
            break;
        case 321:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Chocolate Milk" + "</p>");
            $(".weather").append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwziAr7xkWrsgN27dndcg2VM-LKIVG_0AuyGjBFs3lvTAflpWI" />');
            break;
        case 500:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 501:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 502:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 503:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 504:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 511:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 520:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 521:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 522:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 531:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Short Macchiao" + "</p>");
            $(".weather").append('<img id="theImg" src="http://www.latteartguide.com/wp-content/uploads/2016/01/short-macchiato.jpg" />');
            break;
        case 600:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 601:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 602:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 611:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 612:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 615:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 616:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 620:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 621:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
$(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 622:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Hot Chocolate" + "</p>");
            $(".weather").append('<img id="theImg" src="https://drcolbert.com/wp-content/uploads/2017/12/shutterstock_271854836-300x200.jpg" />');
            break;
        case 701:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;
        case 711:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;
        case 721:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;
        case 731:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;
        case 741:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;

        case 751:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;
        case 761:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;
        case 762:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;
        case 771:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;
        case 781:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
             $(".weather").append("<p>" + "The suggested drink is Chai Latte" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.organicindia.com/us/uploads/wysiwyg/assets/uploads/Chai_latte_new.jpg" />');
            break;
        case 800:
            $(".weather").html("<p>" + response.weather[0].description + "</p>");
            $(".weather").append("<p>" + "The suggested drink is Cappuccino" + "</p>");
            $(".weather").append('<img id="theImg" src="https://www.curlycoffee.nl/wp-content/uploads/2012/11/cappuccino-300x200.jpg" />');
            break;
    }
    $(".city-name").html(response.name);
    $(".humidity").html(response.main.humidity);
}





