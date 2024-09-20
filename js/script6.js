function changeStatus6() {
  var button = document.getElementById('excoff2-button');
  var randomColor = getRandomColor6();
  if (randomColor === 'green') {
    button.style.backgroundColor = '#00FF00';
    button.innerHTML = 'Available';
  } else {
    button.style.backgroundColor = '#FF0000';
    button.innerHTML = 'Not Available';
  }
}
function getRandomColor6() {
  var colors = ['green', 'red'];
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

