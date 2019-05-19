

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

