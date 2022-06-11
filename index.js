// const api_url = "https://api.openweathermap.org/data/2.5/weather?lat=28.676422&lon=77.115112&appid=9a12834df62bc3ebee87c993a0e4c95e&units=metric"; 
const api_url = "https://api.openweathermap.org/data/2.5/weather?lat=28.676422&lon=77.115112&appid=9a12834df62bc3ebee87c993a0e4c95e&units=metric"; 

function countryChange(){
  console.log($('#country').find('option:selected').val())
}

fetch(api_url)
  .then(response => response.json())
  .then(
    data =>
      {
        console.log(data)
        // Making required objects
        const main_object = data.main
        const cordinates_object = data.coord

        document.getElementById('latitude').innerText += cordinates_object['lat']
        document.getElementById('longitude').innerText += cordinates_object['lon']
        document.getElementById('temperature').innerText += main_object['temp'];
        // console.log(data.weather[0]['description'])
        // console.log(data.sys['country'])
    }
  )
  .catch(error => console.log('Error: ' + error))

