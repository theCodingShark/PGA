let slideIndex4 = 0;
showSlides4();
function showSlides4() {
  let i;
  let slides = document.getElementsByClassName("mySlides4");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > slides.length) {slideIndex4 = 1}
  slides[slideIndex4-1].style.display = "block";
  setTimeout(showSlides4, 2000);
}

function changeStatus4() {
  var button = document.getElementById('room4-button');
  var randomColor = getRandomColor4();
  if (randomColor === 'green') {
    button.style.backgroundColor = '#00FF00';
    button.innerHTML = 'Available';
  } else {
    button.style.backgroundColor = '#FF0000';
    button.innerHTML = 'Not Available';
  }
}
function getRandomColor4() {
  var colors = ['green', 'red'];
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
