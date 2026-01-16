// script.js

// Get required DOM elements for form handling and feedback
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
const userEmail = document.getElementById('user-email');

// Handle form submission and validate email input
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if(emailValue === '') {
    errorMessage.textContent = 'Email address is required';
    emailInput.style.borderColor = '#E74C3C';
    successMessage.style.display = 'none';
  } else if(!validateEmail(emailValue)) {
    errorMessage.textContent = 'Please enter a valid email address';
    emailInput.style.borderColor = '#E74C3C';
    successMessage.style.display = 'none';
  } else {
    errorMessage.textContent = '';
    emailInput.style.borderColor = '#ccc';
    userEmail.textContent = emailValue;
    successMessage.style.display = 'block';
    form.reset();
  }
});

// Clear error state while the user is typing
emailInput.addEventListener('input', function() {
  errorMessage.textContent = '';
  emailInput.style.borderColor = '#ccc';
});

// Validate email format using a regular expression
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
