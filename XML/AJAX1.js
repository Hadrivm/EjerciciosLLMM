// 1. Muestra en una tabla el Artista, titulo, país, compañía, precio y año de todos los CD's

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table="<tr><th>Artist</th><th>Title</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td><td>" +
       x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
      "</td><td>" +
       x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }

  