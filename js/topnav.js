function myFunction() {
  var x = document.getElementById("myTopnav","fbtopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

}