

window.onload = getEvent(events);

document.getElementById("eventsButton").addEventListener("click", function() {
    localStorage.setItem('events', document.getElementById("events").value)
    var name = localStorage.getItem('events')
    console.log("The event is called: " + name);
  })



  function getEvent(events){

    console.log("hello");

    fetch("https://app.ticketmaster.com/discovery/v2/events.json?events/{"+name+"}size=1&apikey=akthNr9MQuBumG3nChjDn4HAnIAve7io")
      .then((resp) => resp.json())
      .then(function(city) {
        console.log(city);

        console.log(events);


      })
      .catch(function(error) {
        console.log(error);
      });

  }




  function getWeather(city){

    var apikey = "e88914d61cac7511590118289158512a";
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ apikey;


    fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(data);
        var weathr = data.weather[0].description;
        console.log(weathr);
        document.getElementById("weather").innerHTML = weathr;

      })
      .catch(function(error) {
        console.log(error);
      });

  }
