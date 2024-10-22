const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;

    if (name === '' || email === '') {
        alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
        alert('Invalid email format.');
    } else {
        alert('Form submitted successfully.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}
