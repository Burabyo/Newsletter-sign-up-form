// ===== Get DOM elements =====
const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

const modal = document.getElementById('popup-modal');
const modalEmail = document.getElementById('modal-email');
const closeBtn = document.querySelector('.close');
const dismissBtn = document.getElementById('close-btn');

const newsletterCard = document.querySelector('.newsletter-card'); 

// ===== Form submit =====
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    showError('Email address is required');
    return;
  }

  if (!validateEmail(emailValue)) {
    showError('Please enter a valid email address');
    return;
  }

  clearError();
  modalEmail.textContent = emailValue;

  // Hide the newsletter card and show modal
  newsletterCard.style.display = 'none';
  modal.style.display = 'flex';

  form.reset();
});

// ===== Clear error while typing =====
emailInput.addEventListener('input', clearError);

// ===== Close modal =====
closeBtn.addEventListener('click', closeModal);
dismissBtn.addEventListener('click', closeModal);

window.addEventListener('click', function (e) {
  if (e.target === modal) closeModal();
});

// ===== Helpers =====
function showError(message) {
  errorMessage.textContent = message;
  emailInput.style.borderColor = '#E74C3C';
}

function clearError() {
  errorMessage.textContent = '';
  emailInput.style.borderColor = '#ccc';
}

function closeModal() {
  modal.style.display = 'none';
  newsletterCard.style.display = 'flex';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
