// Toggle AM/PM dropdown
const amPmToggle = document.getElementById('am-pm-toggle');
console.log(amPmToggle)
const amPmDropdown = document.getElementById('am-pm-dropdown');
const amPmText = document.getElementById('am-pm-text');
const arrowIcon = document.querySelector('.arrow-icon');

amPmToggle.addEventListener('click', () => {
    amPmDropdown.classList.toggle('active');
    arrowIcon.classList.toggle('up');
});

// Select AM/PM
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        dropdownItems.forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        amPmText.textContent = item.dataset.value;
        amPmDropdown.classList.remove('active');
        arrowIcon.classList.remove('up');
    });
});

// People counter
const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');
const counterValue = document.querySelector('.counter-value');
let peopleCount = 4;

decreaseBtn.addEventListener('click', () => {
    if (peopleCount > 1) {
        peopleCount--;
        updateCounter();
    }
});

increaseBtn.addEventListener('click', () => {
    if (peopleCount < 20) {
        peopleCount++;
        updateCounter();
    }
});

function updateCounter() {
    counterValue.textContent = `${peopleCount} people`;
}

// Form validation
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const dateInputs = document.querySelectorAll('.date-input');
const dateError = document.getElementById('date-error');
const timeInputs = document.querySelectorAll('.time-inputs .date-input');
const timeError = document.getElementById('time-error');

emailInput.addEventListener('blur', () => {
    if (emailInput.value && !isValidEmail(emailInput.value)) {
        emailError.textContent = 'This field is required';
        emailInput.style.borderColor = '#e74c3c';
        emailInput.style.color = '#e74c3c';
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = '';
    }
});

dateInputs.forEach(input => {
    input.addEventListener('blur', validateDate);
});

timeInputs.forEach(input => {
    input.addEventListener('blur', validateTime);
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateDate() {
    const month = dateInputs[0].value;
    const day = dateInputs[1].value;
    const year = dateInputs[2].value;

    const isValidMonth = !isNaN(month) && month.trim() !== '';
    const isValidDay = !isNaN(day) && day.trim() !== '';
    const isValidYear = !isNaN(year) && year.trim() !== '';

    const date = new Date(`${year}-${month}-${day}`);

    const isValidDate = date.getFullYear() === parseInt(year) && 
                        date.getMonth() + 1 === parseInt(month) && 
                        date.getDate() === parseInt(day);
    
    console.log((month || day || year) && (!month || !day || !year) || !isValidMonth || !isValidDay || !isValidYear || !isValidDate);
    if ((month || day || year) && (!month || !day || !year) || !isValidMonth || !isValidDay || !isValidYear || !isValidDate) {
        dateError.textContent = 'This field is incomplete, contains invalid characters (only numbers allowed), or the date is invalid';
        for (let i = 0; i < 3; i++) {
            dateInputs[i].style.borderColor = '#e74c3c';
            dateInputs[i].style.color = '#e74c3c';
        }
    } else {
        dateError.textContent = '';
        for (let i = 0; i < 3; i++) {
            dateInputs[i].style.borderColor = '';
            dateInputs[i].style.color = '';
        }
    }
}



function validateTime() {
    const hour = timeInputs[0].value;
    const minute = timeInputs[1].value;

    const isValidHour = !isNaN(hour) && hour.trim() !== '' && hour >= 1 && hour <= 12;
    const isValidMinute = !isNaN(minute) && minute.trim() !== '' && minute >= 0 && minute <= 59;

    if ((hour || minute) && (!hour || !minute) || !isValidHour || !isValidMinute) {
        timeError.textContent = 'This field is incomplete or contains invalid characters (hours: 1-12, minutes: 0-59)';
        for (let i = 0; i < 2; i++) {
            timeInputs[i].style.borderColor = '#e74c3c';
            timeInputs[i].style.color = '#e74c3c';
        }
    } else {
        timeError.textContent = '';
        for (let i = 0; i < 2; i++) {
            timeInputs[i].style.borderColor = '';
            timeInputs[i].style.color = '';
        }
    }
}


// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!amPmToggle.contains(e.target)) {
        amPmDropdown.classList.remove('active');
        arrowIcon.classList.remove('up');
    }
});

// Prevent propagation in dropdown
amPmDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});