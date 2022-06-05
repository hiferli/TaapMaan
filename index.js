// const api_url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9a12834df62bc3ebee87c993a0e4c95e"; 
const api_url = "https://api.openweathermap.org/data/2.5/weather?lat=28.676422&lon=77.115112&appid=9a12834df62bc3ebee87c993a0e4c95e&units=metric"; 

fetch(api_url)
  .then(response => response.json())
  .then(data => console.log(data));
