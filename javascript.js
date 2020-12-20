

window.onload = getEvent(events);

document.getElementById("eventsButton").addEventListener("click", function() {
    localStorage.setItem('events', document.getElementById("events").value)
    var nme = localStorage.getItem('events')
    console.log("The event is called: " + nme);
  })



  function getEvent(events){

    console.log("hello");
    var nme = localStorage.getItem('events')
    console.log(nme);
        fetch("https://app.ticketmaster.com/discovery/v2/events.json?keyword="+nme+"&apikey=akthNr9MQuBumG3nChjDn4HAnIAve7io")
          .then((resp) => resp.json())
          .then(function(data) {
            console.log(data);

            var city = data._embedded.events[0]._embedded.venues[0].city.name;
            getWeather(city);

          })
          .catch(function(error) {
            console.log(error);
          });

  }




  function getWeather(city){


    var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=e88914d61cac7511590118289158512a";


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
