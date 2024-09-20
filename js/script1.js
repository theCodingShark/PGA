let slideIndex1 = 0;
showSlides1();
function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}
  slides[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 2000);
}

function changeStatus1() {
  var button = document.getElementById('room1-button');
  var randomColor = getRandomColor1();
  if (randomColor === 'green') {
    button.style.backgroundColor = '#00FF00';
    button.innerHTML = 'Available';
  } else {
    button.style.backgroundColor = '#FF0000';
    button.innerHTML = 'Not Available';
  }
}
function getRandomColor1() {
  var colors = ['green', 'red'];
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
