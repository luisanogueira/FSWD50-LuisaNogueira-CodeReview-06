class Place {
	name = "";
	image = "";
	address = "";
	price = "";
	hours = "";

	constructor(name, image, address, price, hours) {
		this.name = name;
		this.image = image;
		this.address = address;
		this.price = price;
		this.hours = hours;
	}

	render(extension) {
		return `<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
		<h5 class="placeName">${this.name}</h5> <br> <img id="pic" 
		class="img-fluid rounded mx-auto d-block" 
		src="${this.image}"> <br> <p>Address: ${this.address}</p> 
		<p>Opening Hours: ${this.hours}</p> 
		 <p>Price: ${this.price}</p>${extension}</div>`;
	}
}

let eachLocation = [
new Place("St Charles Church", "img/church.jpg", "Karlsplatz 1, 1010 Vienna", "8€ / 4€(students)", "Mon-Sat:9:00-18:00 / Sun:12:00-19:00"),
new Place("Zoo Vienna", "img/zoo.jpg", "Schönbrunner Schlosspark, 1130 Wien",  "20€ / 10€(children)", "9:00-17:30"),
new Place("Kunsthistorisches Museum", "img/kunsthistorisches.jpg", "Maria-Theresien-Platz, 1010 Wien", "15€", "Tu-Su:10:00 - 18:00/ Th: 10:00 - 21:00"),
new Place("Naschmarkt", "img/naschmarkt.jpg", "Wienzeile, 1060 Wien", "free entrance", "Mo - Fr: 06:00 - 19:30 /Sa: 06:00 - 18:00")
]

for (let val of eachLocation) {
	document.getElementById("infoOne").innerHTML += val.render("");
}

class Restaurant extends Place {
	phone;
	website;

	constructor(name, image, address, price, hours, phone, website) {
		super(name, image, address, price, hours);
		this.phone = phone;
		this.website = website;
	}

	render(extension) {
		return super.render(`<p>Phone: ${this.phone}</p> <p> Website: <a href="${this.website}" target="_blank">${this.website}</a> </p> ${extension}`);
	}
}

let eachRestaurant = [
	new Restaurant("Lemon Leaf Thai", "img/thai.png", "Kettenbrückengasse 19, 1050 Vienna", "$$ - $$$", "11.00-15.00 und 17.30-23.00", "+43 (1) 5812308", "http://www.lemonleaf.at/"),
	new Restaurant("SIXTA", "img/sixta.png", "1050 Wien, Schönbrunner Straße 21", "$$ - $$$", "Tu-Su: 18.00-00.00", "+43 (1) 5852856 / +43 (1) 5852856" ,"http://www.sixta-restaurant.at/"),
	new Restaurant("Casa Mia", "img/casamia.jpg", "Zehetnergasse 13, 1140 Wien", "$-$$", "Tu-Su: 11.00-22.30", "+43 (1) 9234638", "https://www.casamia1230.at/"),
	new Restaurant("Griechenbeisl", "img/griechenbeisl2.jpg", "Griechengasse 9 Fleischmarkt 11, A - 1010 Vienna", "$$ - $$$", "11:00-01:00", "+43 (1) 5331977", "http://griechenbeisl.at/")
]

for (let val2 of eachRestaurant) {
	document.getElementById("infoTwo").innerHTML += val2.render("");
}

class Events extends Restaurant {
	type;

	constructor(name, image, address, price, hours, phone, website, type) {
		super(name, image, address, price, hours, phone, website);
		this.type = type;
	}

	render() {
		return super.render(`<p>Type of Event: ${this.type}</p>`);
	}
}

let eachEvent = [
	new Events("Kris Kristofferson", "img/kris.jpg", "Wiener Stadthalle - Halle F, Roland Rainer Platz 1, 1150 Wien", "58,50€", "Fr, 15.11.2018. 20:00", "+43 (1) 7999979", "http://kriskristofferson.com/", "Concert"),
	new Events("Lenny Kravitz", "img/lenny.jpg", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien", "47,80€", "Sat, 09.12.2019 - 19:30", "+43 (1) 7999979", "http://lennykravitz.com/", "Concert"),
	new Events("Mozart Requiem", "img/mozart.jpg", "St. Charles Church - Karlsplatz 1, 1010, Vienna", "38€ / 24€ (student)", "Sat, 13.10.2018 - 20:15", "no information", "http://www.concert-vienna.info/", "Orchestra")
]

for (let val3 of eachEvent) {
	document.getElementById("infoThree").innerHTML += val3.render();
}