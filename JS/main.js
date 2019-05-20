

function loadHomePage(){
	document.getElementsByClassName('m1')[0].innerHTML = 'This isjjj box';
	document.getElementsByClassName('m1').backgroundColor = 'red';

}

$(document).ready(function() {
  // Gets the span width of the filled-ratings span
  // this will be the same for each rating
  var star_rating_width = $('.fill-ratings span').width();
  // Sets the container of the ratings to span width
  // thus the percentages in mobile will never be wrong
  $('.star-ratings').width(star_rating_width);
});


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
	document.getElementById("res1").style.background= "url("+myObj.restaurants[0].imgUrl+")";
	document.getElementById("res1").style.backgroundSize = "100% 100%" ;
	document.getElementById("resP1").innerHTML=myObj.restaurants[0].name;
	document.getElementById("resFood1").innerHTML=myObj.restaurants[0].foods[0]+" &bull; "+myObj.restaurants[0].foods[1]+" &bull; "+myObj.restaurants[0].foods[2]+" &bull; "+myObj.restaurants[0].foods[3];
    document.getElementById("resAdd1").innerHTML=myObj.restaurants[0].address;	
	var rate1=parseFloat(myObj.restaurants[0].rate);
	var perc1=(rate1/5)*100;
	document.getElementById("star1").style.width=perc1+"%";	
	document.getElementById("rate1").innerHTML=myObj.restaurants[0].rate;	
	document.getElementById("c1").innerHTML="("+myObj.restaurants[0].numOfRates+")";
	
	document.getElementById("res2").style.background= "url("+myObj.restaurants[1].imgUrl+")";
	document.getElementById("res2").style.backgroundSize = "100% 100%" ;
	document.getElementById("resP2").innerHTML=myObj.restaurants[1].name;
	document.getElementById("resFood2").innerHTML=myObj.restaurants[1].foods[0]+" &bull; "+myObj.restaurants[1].foods[1]+" &bull; "+myObj.restaurants[1].foods[2]+" &bull; "+myObj.restaurants[0].foods[3];
    document.getElementById("resAdd2").innerHTML=myObj.restaurants[1].address;	
	var rate2=parseFloat(myObj.restaurants[1].rate);
	var perc2=(rate2/5)*100;
	document.getElementById("star2").style.width=perc2+"%";
	document.getElementById("rate2").innerHTML=myObj.restaurants[1].rate;
	document.getElementById("c2").innerHTML="("+myObj.restaurants[1].numOfRates+")";
	
	document.getElementById("res3").style.background= "url("+myObj.restaurants[2].imgUrl+")";
	document.getElementById("res3").style.backgroundSize = "100% 100%" ;
	document.getElementById("resP3").innerHTML=myObj.restaurants[2].name;
	document.getElementById("resFood3").innerHTML=myObj.restaurants[2].foods[0]+" &bull; "+myObj.restaurants[2].foods[1]+" &bull; "+myObj.restaurants[2].foods[2]+" &bull; "+myObj.restaurants[0].foods[3];
    document.getElementById("resAdd3").innerHTML=myObj.restaurants[2].address;
	var rate3=parseFloat(myObj.restaurants[2].rate);
	var perc3=(rate3/5)*100;
	document.getElementById("star3").style.width=perc3+"%";
	document.getElementById("rate3").innerHTML=myObj.restaurants[2].rate;
	document.getElementById("c3").innerHTML="("+myObj.restaurants[2].numOfRates+")";
	
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
  //var gr=document.getElementById("Foodbar");
  //var par =document.createElement(div,class="bar");
  //var chil =document.createElement(div,class="FB1");
  //par.appendChild(chil);
  //gr.appendChild(par);
  document.getElementById("Foodbar").getElementsByClassName("FB1")[i-4].innerHTML = x[i].childNodes[0].nodeValue;
  }
  
}
