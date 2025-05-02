document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Menu category switching
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuItemsContainer = document.getElementById('menu-items');

    function loadMenuItems(category) {
        menuItemsContainer.innerHTML = '';
        
        menuData[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <h3 class="menu-item-title">
                        ${item.name}
                        <span class="menu-item-price">${item.price}</span>
                    </h3>
                    <p class="menu-item-desc">${item.description}</p>
                </div>
            `;
            menuItemsContainer.appendChild(menuItem);
        });
    }

    // Set initial menu category
    loadMenuItems('antipasti');

    // Add event listeners to category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load menu items for selected category
            const category = this.getAttribute('data-category');
            loadMenuItems(category);
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Carica le card dei piatti in evidenza
function loadHighlightDishes() {
    const container = document.getElementById('highlightCards');
    
    // Seleziona la categoria da cui prendere i piatti (es. antipasti)
    const category = menuData.categories.find(cat => cat.id === 'antipasti');
    
    if (!category || !category.items) return;
    
    // Prendi i primi 3 piatti della categoria
    const highlights = category.items.slice(0, 3);
    
    // Genera le card
    highlights.forEach(dish => {
        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.innerHTML = `
            <div class="highlight-card-img">
                <img src="${dish.image}" alt="${dish.name}" onerror="this.src='images/placeholder-dish.jpg'">
            </div>
            <div class="highlight-card-content">
                <h3 class="highlight-card-title">
                    ${dish.name}
                    <span class="highlight-card-price">${dish.price}</span>
                </h3>
                <p class="highlight-card-desc">${dish.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Chiama la funzione quando la pagina è caricata
document.addEventListener('DOMContentLoaded', function() {
    // ... altro codice esistente ...
    loadHighlightDishes();
});