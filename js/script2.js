let slideIndex2 = 0;
showSlides2();
function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}
  slides[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 2000);
}

function changeStatus2() {
  var button = document.getElementById('room2-button');
  var randomColor = getRandomColor2();
  if (randomColor === 'green') {
    button.style.backgroundColor = '#00FF00';
    button.innerHTML = 'Available';
  } else {
    button.style.backgroundColor = '#FF0000';
    button.innerHTML = 'Not Available';
  }
}
function getRandomColor2() {
  var colors = ['green', 'red'];
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
