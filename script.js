document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    const emailVal = email.value.trim();
    const passVal = password.value.trim();

    if (emailVal === "") {
      alert("Email is required");
      email.focus();
      e.preventDefault();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailVal)) {
      alert("Invalid email format");
      email.focus();
      e.preventDefault();
      return;
    }

    if (passVal === "") {
      alert("Password is required");
      password.focus();
      e.preventDefault();
      return;
    }

    if (passVal.length < 6) {
      alert("Password must be at least 6 characters");
      password.focus();
      e.preventDefault();
      return;
    }

  });
});
