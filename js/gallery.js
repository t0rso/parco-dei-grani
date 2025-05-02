document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (se necessario)
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    if(hamburger && navbar) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navbar.classList.toggle('active');
        });
    }

    // Gallery Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            galleryItems.forEach(item => {
                if(filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});