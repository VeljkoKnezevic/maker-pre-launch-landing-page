const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
  const input = form[0];
  const message = document.querySelector(".footer__message");

  if (input.value.match(regex)) {
    e.preventDefault();
    message.style.display = "block";
    message.textContent = "Thank you for submitting your email!";
    input.style.borderColor = "#3ee9e5";
    message.style.color = "#3ee9e5";
  } else {
    e.preventDefault();
    message.style.display = "block";
    message.textContent = "Oops! That doesn’t look like an email address";
    input.style.borderColor = "#FF2965";
    message.style.color = "#ff2965";
  }
});
