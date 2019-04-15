var slides = document.getElementsByClassName('slide');

var currentSlide = 0;

var slideInterval = setInterval(nextSlide,5000);function next() {

   // pauseSlideShow();

   nextSlide();

};function previous() {

   // pauseSlideShow();

   previousSlide();

};
function nextSlide() {

   goToSlide(currentSlide+1);

}function previousSlide() {

   goToSlide(currentSlide-1);

}function goToSlide(n) {

   slides[currentSlide].className = "slide";

   currentSlide = (n+slides.length)%slides.length;

   slides[currentSlide].className = "slide showing";

}var playing = true;

function pause() {

   if (playing) {

   pauseSlideShow();

 } else {

   playSlideShow();

 }

};function pauseSlideShow() {    playing = false;

   clearInterval(slideInterval);

}function playSlideShow() {    playing = true;

   slideInterval = setInterval(nextSlide,5000);

}
