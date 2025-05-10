// js/menu.js
document.addEventListener('DOMContentLoaded', function() {
    // Carica la lingua corrente
    const currentLang = localStorage.getItem('language') || 'it';
    
    // Carica le categorie del menu
    loadMenuCategories();
    
    // Carica tutti i piatti inizialmente
    loadMenuItems('all');
    
    // Gestione click sulle categorie
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            loadMenuItems(categoryId);
        });
    });
});

function loadMenuCategories() {
    const categoriesContainer = document.getElementById('menuCategories');
    const currentLang = localStorage.getItem('language') || 'it';
    
    // Pulsante "Tutti"
    const allButton = document.createElement('button');
    allButton.className = 'category-btn active';
    allButton.setAttribute('data-category', 'all');
    allButton.textContent = currentLang === 'it' ? 'Tutti' : 'All';
    categoriesContainer.appendChild(allButton);
    
    // Aggiungi tutte le categorie
    menuData.categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.setAttribute('data-category', category.id);
        button.textContent = currentLang === 'it' ? category.name_ita : category.name_eng;
        categoriesContainer.appendChild(button);
    });
}

function createMenuItem(item, currentLang) {
    const itemElement = document.createElement('div');
    itemElement.className = `menu-item ${item.image ? 'has-image' : 'no-image'}`;
    
    let imageSection = '';
    if (item.image) {
        imageSection = `
            <div class="menu-item-img">
                <img src="immagini/menu/${item.image}" 
                     alt="${currentLang === 'it' ? item.name_ita : item.name_eng}" 
                     loading="lazy"
                     onerror="this.parentElement.style.display='none'; this.closest('.menu-item').classList.add('no-image')">
            </div>
        `;
    }
    
    itemElement.innerHTML = `
        ${imageSection}
        <div class="menu-item-content">
            <div class="menu-item-title">
                <span>${currentLang === 'it' ? item.name_ita : item.name_eng}</span>
                <span class="menu-item-price">€${item.price.toFixed(2)}</span>
            </div>
            <p class="menu-item-desc">${currentLang === 'it' ? item.description_ita : item.description_eng}</p>
        </div>
    `;
    
    return itemElement;
}

function loadMenuItems(categoryId) {
    const menuContainer = document.getElementById('menuContent');
    const currentLang = localStorage.getItem('language') || 'it';
    
    // Resetta il contenuto
    menuContainer.innerHTML = '';
    
    // Aggiorna lo stato attivo dei pulsanti
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === categoryId) {
            btn.classList.add('active');
        }
    });
    
    // Mostra tutti i piatti o filtra per categoria
    menuData.categories.forEach(category => {
        if (categoryId === 'all' || category.id === categoryId) {
            // Crea sezione categoria
            const section = document.createElement('div');
            section.className = 'category-section';
            
            const title = document.createElement('h3');
            title.className = 'category-title';
            title.textContent = currentLang === 'it' ? category.name_ita : category.name_eng;
            section.appendChild(title);
            
            const itemsContainer = document.createElement('div');
            itemsContainer.className = 'menu-items';
            
            // Aggiungi tutti i piatti della categoria
            category.items.forEach(item => {
                itemsContainer.appendChild(createMenuItem(item, currentLang));
            });
            
            section.appendChild(itemsContainer);
            menuContainer.appendChild(section);
        }
    });
}

// Funzione per aggiornare il menu quando cambia la lingua
window.updateMenuLanguage = function() {
    const currentLang = localStorage.getItem('language') || 'it';
    const activeCategory = document.querySelector('.category-btn.active')?.getAttribute('data-category') || 'all';
    
    // Aggiorna i nomi delle categorie
    document.querySelectorAll('.category-btn').forEach((button, index) => {
        if (index === 0) { // Pulsante "Tutti"
            button.textContent = currentLang === 'it' ? 'Tutti' : 'All';
        } else {
            const category = menuData.categories[index - 1];
            button.textContent = currentLang === 'it' ? category.name_ita : category.name_eng;
        }
    });
    
    // Ricarica i piatti
    loadMenuItems(activeCategory);
};