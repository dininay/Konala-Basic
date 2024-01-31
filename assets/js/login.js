document.addEventListener("DOMContentLoaded", function () {
    var signUpButton = document.getElementById("signUpButton");
    if (signUpButton){
      var namaInput = document.getElementById("nama");
      var emailInput = document.getElementById("email");
      var passwordInput = document.getElementById("password");
      var errorMessage = document.getElementById("errorMessage");
    
      signUpButton.addEventListener("click", function () {
          var nama = namaInput.value;
          var email = emailInput.value;
          var password = passwordInput.value;
    
          if (nama.trim() === "" || email.trim() === "" || password.trim() === "") {
              errorMessage.textContent = "Masukkan nama, email, dan password anda terlebih dahulu.";
              errorMessage.style.display = "block"; 
          } else {
              errorMessage.style.display = "none"; 
              alert("Berhasil Sign Up!"); 
          }
      });
    
      namaInput.addEventListener("input", function () {
          errorMessage.style.display = "none";
      });
    
      emailInput.addEventListener("input", function () {
          errorMessage.style.display = "none";
      });
    
      passwordInput.addEventListener("input", function () {
          errorMessage.style.display = "none";
      });
    }
    else {
      var signInButton = document.getElementById("signInButton");
      var emailInput = document.getElementById("email");
      var passwordInput = document.getElementById("password");
      var errorMessage = document.getElementById("errorMessage");
    
      signInButton.addEventListener("click", function () {
          var email = emailInput.value;
          var password = passwordInput.value;
    
          if (email.trim() === "" || password.trim() === "") {
              errorMessage.textContent = "Masukkan email dan password anda terlebih dahulu.";
              errorMessage.style.display = "block";
          } else {
              errorMessage.style.display = "none";
              alert("Berhasil Sign In!"); 
          }
      });
      
      emailInput.addEventListener("input", function () {
          errorMessage.style.display = "none";
      });
    
      passwordInput.addEventListener("input", function () {
          errorMessage.style.display = "none";
      });
    }
  });
  
  var signupLink = document.getElementById("signin-link");
  
    signupLink.addEventListener("click", function (e) {
        window.location.href = "signin.html"; 
        e.preventDefault(); 
    });
  
  var signupLink = document.getElementById("signup-link");
  
    signupLink.addEventListener("click", function (e) {
        window.location.href = "signup.html"; 
        e.preventDefault(); 
    });
  