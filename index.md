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
<title>XboXed</title>
</head>
<body>
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="index.html">
          <img src="logo.png" alt="Text:XboXed" height="65">
        </a><h2>XboXed</h2>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">XboXed
                <span class="sr-only">(current)</span>
              </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="ogxbox.html">Xbox</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="xbox360.html">Xbox 360</a>
        <li class="nav-item">
          <a class="nav-link" href="xbone.html">Xbox One</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="seriesx.html">Xbox Series X</a>
        </li>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <h1>XboXed: an Xbox resource</h1>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 4</div>
  <a href="seriesx.html">
  <img src="seriesx.jpg" style="width:100%" alt="Xbox Series X console. Text: The new Xbox Series X">
  </a>
  <div class="text">Xbox Series X</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 4</div>
  <a href="xbone.html">
  <img src="xbone2.png" style="width:100%" alt="Xbox One consoles: Xbox One X, Xbox One S and Xbox One">
  </a>
  <div class="text" style="color:black">Xbox One</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 4</div>
  <a href="xbox360.html">
  <img src="xbox360.jpg" style="width:100%" alt="Xbox 360 consoles and controllers: Xbox 360, Xbox 360 S and Xbox 360 E">
  </a>
  <div class="text" style="color:black">Xbox 360</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">4 / 4</div>
  <a href="ogxbox.html">
  <img src="ogxbox.jpg" style="width:100%" alt="Original Xbox console with controllers and games">
  </a>
  <div class="text" style="color:black">Xbox</div>
</div>

<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>   
</div>
	<div class="container">
	<div class="main row">
	<div class="col-lg-4 box">
	<h2>Xbox</h2>
	<a href="ogxbox.html">
	<img src="ogxbox.jpg" class="responsive" alt="Original Xbox console with controllers and games" />
	</a>
	<p>The Xbox is a home video game console and the first installment in the Xbox series of video game consoles manufactured by Microsoft. It was released as Microsoft's first foray into the gaming console market on November 15, 2001, in North America, followed by Australia, Europe and Japan in 2002. It is classified as a sixth generation console, competing with Sony's PlayStation 2 and Nintendo's GameCube. It was also the first major console produced by an American company since the Atari Jaguar ceased production in 1996.</p>
	</div>
	<div class="col-lg-4 box">
	<h2>Xbox 360</h2>
	<a href="xbox360.html">
	<img src="xbox360.jpg" class="responsive" alt="Xbox 360 consoles and controllers: Xbox 360, Xbox 360 S and Xbox 360 E" />
	</a>
	<p>The Xbox 360 is a home video game console developed by Microsoft. As the successor to the original Xbox, it is the second console in the Xbox series. It competed with Sony's PlayStation 3 and Nintendo's Wii as part of the seventh generation of video game consoles. It was officially unveiled on MTV on May 12, 2005, with detailed launch and game information announced later that month at the 2005 Electronic Entertainment Expo.</p>
	</div>
	<div class="col-lg-4 box">
	<h2>Xbox One</h2>
	<a href="xbone.html">
	<img src="xbone2.png" class="responsive" alt="Xbox One consoles: Xbox One X, Xbox One S and Xbox One" />
	</a>
	<p>The Xbox One is an eighth-generation home video game console developed by Microsoft. Announced in May 2013, it is the successor to Xbox 360 and the third console in the Xbox series of video game consoles. It was first released in North America, parts of Europe, Australia, and South America in November 2013, and in Japan, China, and other European countries in September 2014. It is the first Xbox game console to be released in China, specifically in the Shanghai Free-Trade Zone. Microsoft marketed the device as an "all-in-one entertainment system", hence the name 'Xbox One'. The Xbox One mainly competes against Sony's PlayStation 4 and Nintendo's Wii U and Switch.</p>
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

</body>
</html> 