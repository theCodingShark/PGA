function openSignup() {
  window.location.href = "signup.html";
}
function validateSignup() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");
  message.innerText = "Signup successful! Please go to the home page for login.";
  message.style.display = "block";
  return false;
}
