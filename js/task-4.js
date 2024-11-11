const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  };

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  loginForm.reset();
})