const api_url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9a12834df62bc3ebee87c993a0e4c95e"; 

fetch(api_url)
  .then(response => response.json())
  .then(data => console.log(data));
