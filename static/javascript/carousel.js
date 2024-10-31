$(document).ready(function() {
    var images = [
     "/img/eureeeo_0.jpeg",
     "/img/machine-a-voter_p.jpg",
     "/img/vote-internet-legislatives-2022-royaume-uni-.jpg",
     "/img/P4Z7LZ_2.jpg",
     "/img/img_bureau.png",
     "/img/procuration_p.jpg"
 ];

 var currentIndex = 0;
 var previousIndex = -1; //Pour s'assurer que l'image précédente n'est pas répétée
 var $carouselContainer = $('.carousel-container');

 // Ajouter les images au conteneur de carrousel
 images.forEach(function(src, index) {
     var $slide = $('<div class="carousel-slide right"></div>');
     $slide.css('background-image', 'url(' + src + ')');
     if (index === 0) $slide.addClass('active');
     $carouselContainer.append($slide);
 });

 function showSlide(index) {
     $('.carousel-slide').removeClass('active').eq(index).addClass('active');
 }

 function nextSlide() {
     do {
         currentIndex = Math.floor(Math.random() * images.length);
     } while (currentIndex === previousIndex);
     previousIndex = currentIndex;
     showSlide(currentIndex);
 }

 function startCarousel() {
     setInterval(nextSlide, 3000); // Change l'image toutes les 5 secondes
 }

     startCarousel();
 });