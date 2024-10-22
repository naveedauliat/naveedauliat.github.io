document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    if (name === "" || email === "") {
        alert("Please fill in all fields");
    } else {
        alert("Form submitted successfully!");
    }
});



const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

projects.forEach(project => {
    observer.observe(project);
});


// Smooth Scroll for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const windowHeight = window.innerHeight;
    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.classList.add('show');
        }
    });
});

