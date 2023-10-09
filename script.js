document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // You can add your code here to handle the form submission (e.g., send an email or store data).
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    });
});
