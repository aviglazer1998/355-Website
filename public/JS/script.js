$(document).ready(function () {
	navigator.geolocation.getCurrentPosition(success, error);

	function success(pos) {
		var lat = pos.coords.latitude;
		var long = pos.coords.longitude;
		weather(lat, long);
	}

	function error() {
		console.log("There was an error");
	}

	function weather(lat, long) {
		var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

		$.getJSON(URL, function (data) {
			updateDOM(data);
		});
	}

	function updateDOM(data) {
		var city = data.name;
		var temp = Math.round(data.main.temp_max);
		var desc = data.weather[0].description;
		var icon = data.weather[0].icon;
		var pressure = data.main.pressure;
		var humidity = data.main.humidity;
		var wind = data.wind.speed;
		var windDirection = data.wind.deg;

		$("#city").html(city);
		$("#temp").html(temp);
		$("#desc").html(desc);
		$("#icon").attr("src", icon);
		$(".pressure").html(pressure);
		$(".humidity").html(humidity);
		$(".wind").html(wind);
		$(".windDirection").html(windDirection);
	}
});
