document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop default form submission

    const emailVal = email.value.trim();
    const passVal = password.value.trim();

    // Check email
    if (!emailVal) {
      alert("Email is required");
      email.focus();
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailVal)) {
      alert("Invalid email format");
      email.focus();
      return;
    }

    // Check password
    if (!passVal) {
      alert("Password is required");
      password.focus();
      return;
    }
    if (passVal.length < 6) {
      alert("Password must be at least 6 characters");
      password.focus();
      return;
    }

    window.location.href = "home.html";
  });
});
