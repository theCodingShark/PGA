let slideIndex3 = 0;
showSlides3();
function showSlides3() {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}
  slides[slideIndex3-1].style.display = "block";
  setTimeout(showSlides3, 2000); 
}

function changeStatus3() {
  var button = document.getElementById('room3-button');
  var randomColor = getRandomColor3();
  if (randomColor === 'green') {
    button.style.backgroundColor = '#00FF00';
    button.innerHTML = 'Available';
  } else {
    button.style.backgroundColor = '#FF0000';
    button.innerHTML = 'Not Available';
  }
}
function getRandomColor3() {
  var colors = ['green', 'red'];
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
