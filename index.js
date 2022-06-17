// const weather_api = "https://api.openweathermap.org/data/2.5/weather?appid=9a12834df62bc3ebee87c993a0e4c95e&units=metric&lat=28.676422&lon=77.115112"; 
let unmarked_weather_api = "https://api.openweathermap.org/data/2.5/weather?appid=9a12834df62bc3ebee87c993a0e4c95e&units=metric"; 
const geolocator_api = "https://restcountries.com/v3.1/alpha/" 

var lat = 0;
var lon = 0;

function lat_long_finding(geolocator_api){
  fetch(geolocator_api)
  .then(response => response.json())
  .then(
    data =>
      {
        var lat_long = data[0].capitalInfo;
        var lat_long_array = lat_long.latlng;
        console.log(lat_long_array)
 
        weather_details(lat_long_array);
    }
  )
  .catch(error => console.log('Error: ' + error))
}

function countryChange(){
  geolocator_api_country = geolocator_api.concat($('#country').find('option:selected').val().toLowerCase());
  lat_long_array = lat_long_finding(geolocator_api_country)
}

function weather_details(lat_long_array){
  let weather_api = unmarked_weather_api + "&lat=" + lat_long_array[0].toString() + "&lon=" + lat_long_array[1].toString();
  console.log(weather_api);
  fetch(weather_api)
  .then(response => response.json())
    .then(
      data =>
        {
          console.log(data)
          // Making required objects
          const main_object = data.main
          const cordinates_object = data.coord
  
          document.getElementById('latitude').textContent = cordinates_object['lat']
          document.getElementById('longitude').textContent = cordinates_object['lon']
          document.getElementById('temperature').textContent = main_object['temp'];
      }
    )
    .catch(error => console.log('Error: ' + error))
}



