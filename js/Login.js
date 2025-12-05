const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector(".btn-login");

 
  loginButton.addEventListener("click", function (event) {

    event.preventDefault(); 

    
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    
    if (email === "" || password === "") {
      alert("Please enter email and password.");
    } else {
      alert("Login successful! Welcome to GenieEats 🍽️");
    }
  });