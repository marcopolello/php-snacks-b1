function loadHotels() {
  //console.log("Hello World!");
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var result = this.responseText;
      }
      //console.log(typeof this.responseText);
      const array = JSON.parse(result);
      //console.log(array);
      var listaHotels = "";
      for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.parking == true) {
          element.parking = "Si";
        } else{
          element.parking = "No";
        }
        //console.log(element);
        listaHotels += "<div id='hotel'>" +
        "<h1>" + element.name + "</h1>"
        + "<h4>" + element.description + "</h4>"
        + "<h5>Parcheggio: " + element.parking + "</h5>"
        + "<h5>Voto: " + element.vote + "</h5>"
        + "<h5>Distanza dal centro: " + element.distance_to_center + " Km</h5>"
        + "</div>";
      }
      document.getElementById('container').innerHTML = listaHotels;
    };
  xhttp.open("GET", "data.php", true);
  xhttp.send();
}
