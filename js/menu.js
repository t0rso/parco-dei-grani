document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Chiudi il menu mobile quando si clicca su un link
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Header sticky
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Inizializza il menu
    initMenu();

    function initMenu() {
        const categoriesContainer = document.getElementById('menuCategories');
        const menuContent = document.getElementById('menuContent');
        
        // Pulisci i contenitori
        categoriesContainer.innerHTML = '';
        menuContent.innerHTML = '';
        
        // Crea i pulsanti delle categorie
        menuData.categories.forEach((category, index) => {
            const button = document.createElement('button');
            button.className = 'category-btn';
            button.textContent = category.name;
            button.dataset.category = category.id;
            
            button.addEventListener('click', () => {
                // Rimuovi active da tutti i pulsanti
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Aggiungi active al pulsante cliccato
                button.classList.add('active');
                
                // Mostra la categoria selezionata
                showCategory(category.id);
            });
            
            // Attiva la prima categoria di default
            if (index === 0) {
                button.classList.add('active');
                showCategory(category.id);
            }
            
            categoriesContainer.appendChild(button);
        });
    }

    function showCategory(categoryId) {
        const menuContent = document.getElementById('menuContent');
        const category = menuData.categories.find(cat => cat.id === categoryId);
        
        menuContent.innerHTML = '';
        
        if (!category) return;
        
        // Crea il titolo della categoria
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.name;
        menuContent.appendChild(categoryTitle);
        
        // Crea il container degli item
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'menu-items';
        menuContent.appendChild(itemsContainer);
        
        // Aggiungi tutti gli item della categoria
        category.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            // Costruisci il contenuto dell'item
            let itemHTML = `
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='images/menu/placeholder.jpg'">
                </div>
                <div class="menu-item-content">
                    <h3 class="menu-item-title">
                        ${item.name}
                        <span class="menu-item-price">${item.price}</span>
                    </h3>
                    <p class="menu-item-desc">${item.description}</p>
            `;
            
            // Aggiungi i tag se presenti
            if (item.tags && item.tags.length > 0) {
                itemHTML += `<div class="menu-item-tags">`;
                item.tags.forEach(tag => {
                    itemHTML += `<span class="tag">${tag}</span>`;
                });
                itemHTML += `</div>`;
            }
            
            itemHTML += `</div>`; // Chiudi menu-item-content
            
            menuItem.innerHTML = itemHTML;
            itemsContainer.appendChild(menuItem);
        });
    }
});