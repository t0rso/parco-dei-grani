document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    if(hamburger && navbar) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navbar.classList.toggle('active');
        });
    }
});