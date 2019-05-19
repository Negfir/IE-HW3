

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





