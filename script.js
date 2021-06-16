//slideshow

var myIndex = 0;
show();

function show() {
  var x = document.getElementsByClassName("mySlides");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(show, 2000); // Change image every 2 seconds
}

//slideshow ends
