Thermostat
----------

Week 5 of Makers and the weekly pairing challenge will be working on a Thermostat.
This is part of an introduction to JavaScript.

To Run
-------
- fork repo
- open `/views/thermostat.html`

- due to size of project and the utilisation of a personal app key I opted not to include a file with the key. To utilise the weather api function you must add a file `./src/Weather.js` with the following and your own token where applicable.:
```
$(document).ready(function() {

  $('#city-pick').change(function(){
    let city = this.value;
    displayWeather(city);
  });

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=[YOUR WEATHER APP ID]';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-weather').text(data.main.temp)
    });
  };
});

```
