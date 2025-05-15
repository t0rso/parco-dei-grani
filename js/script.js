const featuredDishesConfig = [
    { id: "salsiccia-cipolla", category: "specialità" },       // Esempio 1
    { id: "coppa-pomodoro", category: "specialità" },       // Esempio 2
    { id: "porchetta", category: "specialità" }          // Esempio 3
];

document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedDishes();
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
function loadFeaturedDishes() {
    const container = document.getElementById('highlightCards');
    if (!container) return;
    
    container.innerHTML = ''; // Pulisci il contenitore
    
    const currentLang = localStorage.getItem('language') || 'it';
    
    featuredDishesConfig.forEach(config => {
        // Trova la categoria
        const category = menuData.categories.find(cat => cat.id === config.category);
        if (!category) return;
        
        // Trova il piatto specifico
        const dish = category.items.find(item => item.id === config.id);
        if (!dish) return;
        
        // Crea la card
        const card = document.createElement('div');
        card.className = 'highlight-card';
        
        // Gestione nome e descrizione
        const name = currentLang === 'it' ? dish.name_ita : dish.name_eng;
        const desc = currentLang === 'it' ? dish.description_ita : dish.description_eng;
        const price = `€${dish.price.toFixed(2)}`;
        
        // Gestione immagine (con fallback elegante)
        let imageHtml = '';
        if (dish.image) {
            imageHtml = `
                <div class="highlight-card-img">
                    <img src="immagini/menu/${dish.image}" 
                         alt="${name}"
                         loading="lazy"
                         onerror="this.style.display='none'">
                </div>
            `;
        }
        
        card.innerHTML = `
            ${imageHtml}
            <div class="highlight-card-content">
                <h3>${name}</h3>
                <p class="highlight-card-desc">${desc}</p>
                <span class="highlight-card-price">${price}</span>
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