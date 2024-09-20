function openLogin() {
  window.location.href = "login.html";
}
function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "group6" && password === "password") {
    sessionStorage.setItem("loggedIn", true);
    window.location.href = "index.html";
    return false; 
  } else {
    alert("Invalid username or password!");
    return false; 
  }
}
window.onload = function() {
  var loginBtn = document.getElementById("loginBtn");
  if (sessionStorage.getItem("loggedIn")) {
    loginBtn.innerText = "Logout";
    loginBtn.onclick = function() {
      sessionStorage.removeItem("loggedIn");
      window.location.href = "index.html";
    };
  }
};
  