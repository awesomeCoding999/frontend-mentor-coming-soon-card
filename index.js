const errorIcon = document.getElementById("error-icon");
const formElement = document.getElementsByTagName("form");
const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-btn");
const emailSubmitMsg = document.getElementById("email-submit-msg");
const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

console.log(formElement);

submitBtn.addEventListener("click", () => {
  let userInput = emailInput.value;

  if (!userInput.length) {
    emailSubmitMsg.textContent = "Please submit an email address";
    return;
  }

  if (emailValidationRegex.test(userInput)) {
    emailSubmitMsg.textContent = "Thank you for your submission!";
    emailSubmitMsg.style.color = "#006400";
  } else {
    emailSubmitMsg.textContent = "Please provide a valid email";
    errorIcon.style.visibility = "visible";
    formElement[0].style.border = "2px solid #F96464";
  }
});
