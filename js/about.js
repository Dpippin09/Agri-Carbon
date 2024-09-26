document.addEventListener('DOMContentLoaded', () => {
    // Example: Display an alert when the page loads
    alert('Welcome to the About Us page!');

    // Example: Add a click event to a button (if you have one)
    const button = document.querySelector('#learn-more-button');
    if (button) {
        button.addEventListener('click', () => {
            alert('Thank you for your interest! More information coming soon.');
        });
    }
});