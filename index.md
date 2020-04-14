<!DOCTYPE html>
<html lang="fi">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no" />
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="styles.css">
	<link rel="icon" href="favicon.png" sizes="16x16" type="image/png">
<meta charset="utf-8" />
<style>
* {box-sizing: border-box}
</style>
<title>Himskun seikkailut</title>
</head>
<body>
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">
          <img src="logo.jpg" alt="He-Man logo" height="65">
        </a><h2>HIMSKUN SEIKKAILUT</h2>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="indexx.html">Etusivu
                <span class="sr-only">(current)</span>
              </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="second.html">Sisältösivu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="third.html">Kuvagalleria</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <h1>He-Man oli hassu sarja</h1>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="carousel1.jpg" style="width:100%" alt="jotain">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="carousel2.jpg" style="width:100%" alt="jotain">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="carousel3.jpg" style="width:100%" alt="jotain">
  <div class="text">Caption Three</div>
</div>

<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>
	<div class="container">
	<div class="main row">
	<div class="col-sm-4 box">
	<h2>Uutinen 1</h2>
	<img src="uutinen1.jpg" width="250" alt="jotain" />
	<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus id rutrum lectus, et gravida erat. Cras nec urna vestibulum, dictum leo eget, tincidunt sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ultrices facilisis pellentesque. Praesent placerat accumsan ligula, ac tincidunt arcu feugiat a. Aenean vitae hendrerit nunc. Phasellus lacinia nec nisi sit amet elementum. Aenean maximus pulvinar nibh, non placerat mauris lacinia at. Sed molestie augue aliquet elit fringilla, rutrum commodo ex ultrices. Nunc consectetur bibendum quam. Sed orci quam, lobortis a semper vel, scelerisque ut dui. Curabitur eget interdum diam, id molestie nulla. Vivamus tincidunt ante vitae eros efficitur cursus. </p>
	</div>
	<div class="col-sm-4 box">
	<h2>Uutinen 2</h2>
	<img src="uutinen2.jpg" width="250" alt="jotain" />
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut nibh quis ex dictum tristique eget a massa. Vivamus ut mi ullamcorper, placerat velit nec, pharetra eros. Phasellus fringilla arcu eget mauris egestas, fermentum rhoncus turpis laoreet. Cras euismod felis non purus gravida, ut imperdiet justo varius. In eget tincidunt quam, quis ultricies ipsum. Mauris tellus arcu, tempor ac urna nec, elementum finibus dolor. Curabitur consequat luctus tortor. Nam aliquam dui sed bibendum pulvinar. Maecenas suscipit tristique enim. In sollicitudin felis ut lobortis ultrices. Integer efficitur felis et velit accumsan, nec suscipit ipsum congue. Maecenas erat mauris, iaculis eget pretium a, lobortis a diam. Morbi vitae arcu faucibus, scelerisque eros sed, bibendum erat. Aliquam erat volutpat. </p>
	</div>
	<div class="col-sm-4 box">
	<h2>Uutinen 3</h2>
	<img src="uutinen3.jpg" width="250" alt="jotain" />
	<p>Donec gravida faucibus imperdiet. Donec sagittis pretium lorem eget vehicula. Suspendisse ornare vel nunc eu consequat. Fusce elementum aliquet augue, vitae posuere augue faucibus et. Cras mattis egestas mauris fermentum vestibulum. Integer sit amet velit posuere, iaculis erat quis, scelerisque ante. Cras a sapien et ex luctus maximus. Nunc non sagittis erat, sit amet tristique est. Vestibulum pretium erat non tortor luctus tempus. Praesent sapien ipsum, condimentum sit amet neque ut, faucibus malesuada sapien. Curabitur vehicula venenatis arcu, vel iaculis leo dapibus a. </p>
	</div>
	</div>
	</div>

<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	
	<footer>
	<div class="row">
	<div class="col-sm-4">Footerissa</div>
	<div class="col-sm-4">on jotain</div>
	<div class="col-sm-4">tietoa sivustosta</div>
	</div>
	</footer>
</body>
</html> 