

function loadHomePage(){
	document.getElementsByClassName('m1')[0].innerHTML = 'This isjjj box';
	document.getElementsByClassName('m1').backgroundColor = 'red';

}



function loadJSON()
{
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById('j1').innerHTML = myObj.restaurants[0].name;
  }
};
xmlhttp.open("GET", "http://demo2469824.mockable.io/best-restaurants", true);
xmlhttp.send();	
}


function loadJSON1()
{
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    for(i = 3; i < myObj.restaurants.length; i++){
		var c = document.getElementById("j"+i);
		//var b = document.getElementsByClassName("r"+i);
		msg = myObj.restaurants[i];
		c.innerHTML=msg.name;
		c.parentElement.style.background= "url("+msg.imgUrl+")" ;
		c.parentElement.style.backgroundSize = "100% 100%" ;
}
  }
};
xmlhttp.open("GET", "http://demo2469824.mockable.io/best-restaurants", true);
xmlhttp.send();	
}


function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "http://demo2469824.mockable.io/foods", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, txt, n, u;
  xmlDoc = xml.responseXML;
  txt = "";
  x = xmlDoc.getElementsByTagName("name");
  n = xmlDoc.getElementsByTagName("count");
  u = xmlDoc.getElementsByTagName("imgUrl");
  document.getElementById("x1").childNodes[1].innerHTML=x[0].childNodes[0].nodeValue;
  document.getElementById("x2").childNodes[1].innerHTML=x[1].childNodes[0].nodeValue;
  document.getElementById("x3").childNodes[1].innerHTML=x[2].childNodes[0].nodeValue;
  document.getElementById("x4").childNodes[1].innerHTML=x[3].childNodes[0].nodeValue;
  
  document.getElementById("x1").childNodes[3].innerHTML= n[0].childNodes[0].nodeValue + " " + document.getElementById("x1").childNodes[3].innerHTML ;
  document.getElementById("x2").childNodes[3].innerHTML= n[1].childNodes[0].nodeValue + " " + document.getElementById("x2").childNodes[3].innerHTML ;
  document.getElementById("x3").childNodes[3].innerHTML= n[2].childNodes[0].nodeValue + " " + document.getElementById("x3").childNodes[3].innerHTML ;
  document.getElementById("x4").childNodes[3].innerHTML= n[3].childNodes[0].nodeValue + " " + document.getElementById("x4").childNodes[3].innerHTML ;
  
  document.getElementById("x1").style.background= "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ),url(" + u[0].childNodes[0].nodeValue +")";
  document.getElementById("x1").style.backgroundPosition = "center";
  document.getElementById("x1").style.backgroundSize = "450px 300px";
  
  document.getElementById("x2").style.background= "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ),url(" + u[1].childNodes[0].nodeValue +")";
  document.getElementById("x2").style.backgroundPosition = "center";
  document.getElementById("x2").style.backgroundSize = "450px 300px";
  
  document.getElementById("x3").style.background= "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ),url(" + u[2].childNodes[0].nodeValue +")";
  document.getElementById("x3").style.backgroundPosition = "center";
  document.getElementById("x3").style.backgroundSize = "450px 300px";
  
  document.getElementById("x4").style.background= "linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ),url(" + u[3].childNodes[0].nodeValue +")";
  document.getElementById("x4").style.backgroundPosition = "center";
  document.getElementById("x4").style.backgroundSize = "450px 300px";
  
  for (i = 4; i< x.length; i++) {
    txt= x[i].childNodes[0].nodeValue;
  document.getElementById("Foodbar").getElementsByClassName("FB1")[i-4].innerHTML = x[i].childNodes[0].nodeValue;;
  }
  
}
