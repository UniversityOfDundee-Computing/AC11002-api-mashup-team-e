

window.onload = getEvent(events);

document.getElementById("eventsButton").addEventListener("click", function() {
    localStorage.setItem('events', document.getElementById("events").value)
    var name = localStorage.getItem('events')
    console.log("The event is called: " + name);
  })



  function getEvent(events){
    $.ajax({
      type:"GET",
      url:"https://app.ticketmaster.com/discovery/v2/events/"+name+"size=1&apikey=akthNr9MQuBumG3nChjDn4HAnIAve7io",
      async:true,
      dataType: "json",
      success: function(json) {
                  console.log(json);
                  // Parse the response.
                  // Do other things.
               },
      error: function(xhr, status, err) {
                  // This time, we do not end up here!
               }
    });
    console.log("hello");


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
