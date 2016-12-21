(function(){
	  var long,lat,geoError;
	  function getGeoLocation(){
			try{
				if(navigator.geolocation)
			       {
					navigator.geolocation.getCurrentPosition(setGeoLocation,catchError);
			       }
			else 
				{
					alert("Location cannot be accessed");
				}

			}
			catch(e)
			{
				alert (e);
			}
		};
		function setGeoLocation(position)
		{
			
			
			 long =position.coords.longitude;
			 lat =position.coords.latitude;
			console.log("longitude"+ long +"latitude " +  lat );
			weatherData(lat,long,"celsius");
			zomatofoodLocator(lat,long);
			initMap(lat,long);


		};

		function catchError(error)
		{
			switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            //dispStatus();
            break;
        case error.POSITION_UNAVAILABLE:
            geoError = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            geoError = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            geoError = "An unknown error occurred."
            break;
		}};
		
		function weatherData(lat ,long,metric)
		{	
			//setInterval(function(){
			var weatherUrl;
			if(metric=="celsius"){
			 weatherUrl ="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric&APPID=ebd516cad986bd70da4d79ee784796e4" ;
			}
			else if(metric=="fahrenheit")
			{
				weatherUrl ="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=imperial&APPID=ebd516cad986bd70da4d79ee784796e4" ;
			}
			console.log(weatherUrl);
			var weatherApi= new XMLHttpRequest();
			weatherApi.onreadystatechange = function (){
					if(weatherApi.readyState==4 && weatherApi.status==200)
					{
						var weatherObj = JSON.parse(weatherApi.responseText);
						setWcBanner(weatherObj);
					}
			};
			weatherApi.open("GET" ,weatherUrl,true);
			weatherApi.send();	
		//},1800000);	


		};

		function setWcBanner(weatherObj){

			var cityName =weatherObj.name;
			var currentTemp =weatherObj.main.temp;
			var minTemp =weatherObj.main.temp_min;
			var maxTemp = weatherObj.main.temp_max;
			var weatherDesc = weatherObj.weather[0].description;
			var weatherCode =weatherObj.weather[0].main;
			var wcTitle= document.getElementById("wcTitle");
			var wcGreeting= document.getElementById("wcGreeting");
			var wcWeatherInfo= document.getElementById("wcWeatherInfo");
			wcWeatherInfo.innerHTML= cityName+" have a "+weatherDesc +" today"
			console.log(cityName+" "+minTemp+" "+maxTemp+" "+" "+weatherDesc);
			setWeatherWidget(cityName,currentTemp,weatherCode,weatherObj);
			document.getElementById("getStarted").onclick = function(){

			getStarted();
		};


		};

		function getStarted(){
			document.getElementById("overlay").className="hide ";
			document.getElementById("mainPage").className="setOpacity ";
			document.getElementById("weatherWidget").className="show ";
			var changeTemp = document.getElementById("changeTemp");
			
			changeTemp.onclick = function(){
				changeMetrics();
			};
			
		};

		function changeMetrics(){
			var changeTemp = document.getElementById("changeTemp");
			var tempMetric = changeTemp.getAttribute("data-temp");	
			var weatherUnit =document.getElementById("units");
			if(tempMetric=="fahrenheit")
			{	
				weatherUnit.innerHTML="&#8457;";
				changeTemp.innerHTML="See in Celsius";
				changeTemp.setAttribute("data-temp","celsius");
				weatherData(lat ,long,"fahrenheit");

			}
			else
			{
				weatherUnit.innerHTML="&#8451;";
				changeTemp.innerHTML="See in fahrenheit";
				changeTemp.setAttribute("data-temp","fahrenheit");
				weatherData(lat,long,"celsius");
			}

		};

		function setWeatherWidget(cityName,currentTemp,weatherCode,weatherObj)
		{	
			setWeatherImage(weatherCode);
			console.log("in Widget");
			document.getElementById("cityName").innerHTML="<h2>"+cityName+"</h2>";
			document.getElementById("currentTemp").innerHTML=currentTemp+" ";	

		};

		function setWeatherImage(weatherCode)
		{

		};


			

		function doNavigation()
		{		
				var surveyInfo =this.getAttribute("data-survey");
				var breakPoint=surveyInfo.indexOf("-");
				var current=surveyInfo.slice(0,breakPoint);
				var next=surveyInfo.slice(breakPoint+1,surveyInfo.length);
				console.log("in nav");	
				document.getElementsByClassName(next)[0].className+="setOpacity";
				document.getElementsByClassName(current)[0].className+="offOpacity";
			
		};

		function zomatofoodLocator(lat,long)
		{

			var zomatoUrl = "zomatofoodlist.txt"
			var zomatoApi= new XMLHttpRequest();
			zomatoApi.onreadystatechange = function (){
					if(zomatoApi.readyState==4 && zomatoApi.status==200)
					{
						var zomatoObj = JSON.parse(zomatoApi.responseText);
						console.log(zomatoObj);
						setRestaurants(zomatoObj);
					}
			};
			zomatoApi.open("GET" ,zomatoUrl,true);
			zomatoApi.send();	

		}

		function initMap(lati,longi) {
			console.log("inside map");
        // map = new google.maps.Map(document.getElementById('map'), {
        //   center: {lat: lati, lng: longi},
        //   zoom: 8
        // });
        var map_canvas = document.getElementById('map');
  		var map_options = {
         center : new google.maps.LatLng(lati, longi),  
         zoom : 13,
         mapTypeId : google.maps.MapTypeId.ROADMAP
  			};
		  var mapPin = " http://www.google.com/mapfiles/marker.png";
		  var map = new google.maps.Map(map_canvas, map_options)
		  var Marker = new google.maps.Marker({
		         map: map,
		         position: map.getCenter()
		  });
      }

      function setRestaurants(list)
{		
	
	var nameField = document.getElementById("restaurant1Name");
	var LocationField = document.getElementById("restaurant1Location");
	var address =list.nearby_restaurants[0].restaurant.location.address;
	var name=list.nearby_restaurants[0].restaurant.name;
	nameField.innerHTML=name;
	LocationField.innerHTML=address;
    document.getElementById("restaurant1-image").setAttribute("src",list.nearby_restaurants[0].restaurant.featured_image);

    var nameField1= document.getElementById("restaurant2Name");
	var LocationField1 = document.getElementById("restaurant2Location");
	var address1 =list.nearby_restaurants[1].restaurant.location.address;
	var name1=list.nearby_restaurants[1].restaurant.name;
	nameField1.innerHTML=name1;
	LocationField1.innerHTML=address1;
    document.getElementById("restaurant2-image").setAttribute("src",list.nearby_restaurants[1].restaurant.featured_image);
    
    
	
      	

	
      	
      };

	window.onload= function () {
	 getGeoLocation();
	}
})();

