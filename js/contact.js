const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Inputs
    const nameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    // Error placeholders
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    successMessage.style.display = "none";

    let isValid = true;

    // 1. Name validation (No empty fields)
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Full name is required.";
        isValid = false;
    }

    // 2. Email validation (Format check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email address is required.";
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // 3. Phone validation (Only digits)
    const phoneRegex = /^[0-9]+$/;
    if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    } else if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.textContent = "Phone number must contain only numbers.";
        isValid = false;
    }

    // 4. Message validation (No empty fields)
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message content is required.";
        isValid = false;
    }

    // If valid, submit simulation
    if (isValid) {
        successMessage.style.display = "block";
        contactForm.reset();
    }
});