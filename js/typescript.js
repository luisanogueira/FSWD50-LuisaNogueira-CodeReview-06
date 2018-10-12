var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(name, image, address, price, hours) {
        this.name = "";
        this.image = "";
        this.address = "";
        this.price = "";
        this.hours = "";
        this.name = name;
        this.image = image;
        this.address = address;
        this.price = price;
        this.hours = hours;
    }
    Place.prototype.render = function (extension) {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12\">\n\t\t<h5 class=\"placeName\">" + this.name + "</h5> <br> <img id=\"pic\" \n\t\tclass=\"img-fluid rounded mx-auto d-block\" \n\t\tsrc=\"" + this.image + "\"> <br> <p>Address: " + this.address + "</p> \n\t\t<p>Opening Hours: " + this.hours + "</p> \n\t\t <p>Price: " + this.price + "</p>" + extension + "</div>";
    };
    return Place;
}());
var eachLocation = [
    new Place("St Charles Church", "img/church.jpg", "Karlsplatz 1, 1010 Vienna", "8€ / 4€(students)", "Mon-Sat:9:00-18:00 / Sun:12:00-19:00"),
    new Place("Zoo Vienna", "img/zoo.jpg", "Schönbrunner Schlosspark, 1130 Wien", "20€ / 10€(children)", "9:00-17:30"),
    new Place("Kunsthistorisches Museum", "img/kunsthistorisches.jpg", "Maria-Theresien-Platz, 1010 Wien", "15€", "Tu-Su:10:00 - 18:00/ Th: 10:00 - 21:00"),
    new Place("Naschmarkt", "img/naschmarkt.jpg", "Wienzeile, 1060 Wien", "free entrance", "Mo - Fr: 06:00 - 19:30 /Sa: 06:00 - 18:00")
];
for (var _i = 0, eachLocation_1 = eachLocation; _i < eachLocation_1.length; _i++) {
    var val = eachLocation_1[_i];
    document.getElementById("infoOne").innerHTML += val.render("");
}
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, image, address, price, hours, phone, website) {
        var _this = _super.call(this, name, image, address, price, hours) || this;
        _this.phone = phone;
        _this.website = website;
        return _this;
    }
    Restaurant.prototype.render = function (extension) {
        return _super.prototype.render.call(this, "<p>Phone: " + this.phone + "</p> <p> Website: <a href=\"" + this.website + "\" target=\"_blank\">" + this.website + "</a> </p> " + extension);
    };
    return Restaurant;
}(Place));
var eachRestaurant = [
    new Restaurant("Lemon Leaf Thai", "img/thai.png", "Kettenbrückengasse 19, 1050 Vienna", "$$ - $$$", "11.00-15.00 und 17.30-23.00", "+43 (1) 5812308", "http://www.lemonleaf.at/"),
    new Restaurant("SIXTA", "img/sixta.png", "1050 Wien, Schönbrunner Straße 21", "$$ - $$$", "Tu-Su: 18.00-00.00", "+43 (1) 5852856 / +43 (1) 5852856", "http://www.sixta-restaurant.at/"),
    new Restaurant("Casa Mia", "img/casamia.jpg", "Zehetnergasse 13, 1140 Wien", "$-$$", "Tu-Su: 11.00-22.30", "+43 (1) 9234638", "https://www.casamia1230.at/"),
    new Restaurant("Griechenbeisl", "img/griechenbeisl2.jpg", "Griechengasse 9 Fleischmarkt 11, A - 1010 Vienna", "$$ - $$$", "11:00-01:00", "+43 (1) 5331977", "http://griechenbeisl.at/")
];
for (var _a = 0, eachRestaurant_1 = eachRestaurant; _a < eachRestaurant_1.length; _a++) {
    var val2 = eachRestaurant_1[_a];
    document.getElementById("infoTwo").innerHTML += val2.render("");
}
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, image, address, price, hours, phone, website, type) {
        var _this = _super.call(this, name, image, address, price, hours, phone, website) || this;
        _this.type = type;
        return _this;
    }
    Events.prototype.render = function () {
        return _super.prototype.render.call(this, "<p>Type of Event: " + this.type + "</p>");
    };
    return Events;
}(Restaurant));
var eachEvent = [
    new Events("Kris Kristofferson", "img/kris.jpg", "Wiener Stadthalle - Halle F, Roland Rainer Platz 1, 1150 Wien", "58,50€", "Fr, 15.11.2018. 20:00", "+43 (1) 7999979", "http://kriskristofferson.com/", "Concert"),
    new Events("Lenny Kravitz", "img/lenny.jpg", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "47,80€", "Sat, 09.12.2019 - 19:30", "+43 (1) 7999979", "http://lennykravitz.com/", "Concert"),
    new Events("Mozart Requiem", "img/mozart.jpg", "St. Charles Church - Karlsplatz 1, 1010, Vienna", "38€ / 24€ (student)", "Sat, 13.10.2018 - 20:15", "no information", "http://www.concert-vienna.info/", "Orchestra")
];
for (var _b = 0, eachEvent_1 = eachEvent; _b < eachEvent_1.length; _b++) {
    var val3 = eachEvent_1[_b];
    document.getElementById("infoThree").innerHTML += val3.render();
}
