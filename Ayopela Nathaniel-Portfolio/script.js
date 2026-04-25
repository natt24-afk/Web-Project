
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(0)';
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.transform = 'translateY(-100%)';
}


const texts = [
    "BSIT STUDENT",
    "WEB DEVELOPER",
    "SOFTWARE DEVELOPER"
];

let speed = 100;
const textElements = document.querySelector(".typewriter span");
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});


const skillCards = document.querySelectorAll('.skill-card');
const skillDetail = document.getElementById('skill-detail');

const skillDetails = {
    'HTML5': 'Proficient in semantic HTML5, creating accessible and well-structured web documents.',
    'CSS3': 'Expertise in modern CSS including Flexbox, Grid, and responsive design techniques.',
    'JavaScript': 'Solid understanding of ES6+, DOM manipulation, and asynchronous programming.',
    'React': 'Experience building component-based user interfaces with React and hooks.'
};

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        const skill = card.getAttribute('data-skill');
        const detailText = skillDetails[skill];
        
        skillDetail.style.opacity = '0';
        setTimeout(() => {
            skillDetail.innerHTML = `<p>${detailText}</p>`;
            skillDetail.style.opacity = '1';
        }, 300);
    });
});


const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
    }
    
    if (message.trim().length < 10) {
        showStatus('Message must be at least 10 characters long.', 'error');
        return;
    }
    

    showStatus(`Thanks ${name}! Your message has been sent successfully.`, 'success');
    contactForm.reset();
});

function showStatus(message, type) {
    formStatus.innerText = message;
    formStatus.style.color = type === 'error' ? '#ff4d4d' : '#2ecc71';
    
    setTimeout(() => {
        formStatus.innerText = '';
    }, 5000);
}


window.onload = () => {
    typeWriter();
};
