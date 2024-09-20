function submitForm(event) {
  event.preventDefault();
  var emailInput = document.getElementById('email');
  var queryInput = document.getElementById('query');
  var submitButton = document.getElementById('submit-button');
  var email = emailInput.value.trim();
  var query = queryInput.value.trim();
  submitButton.style.backgroundColor = '#00FF00';
  submitButton.innerHTML = 'Submitted';
  emailInput.value = '';
  queryInput.value = '';
}