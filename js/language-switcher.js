// js/language-switcher.js
document.addEventListener('DOMContentLoaded', function() {
    // Elementi della UI che necessitano traduzione
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    // Carica la lingua salvata o imposta l'italiano come default
    let currentLang = localStorage.getItem('language') || 'it';
    let translations = {};
    document.documentElement.lang = currentLang;
    
    // Funzione principale per cambiare lingua
    window.changeLanguage = async function(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        
        try {
            // Carica le traduzioni prima di aggiornare il contenuto
            await loadTranslations();
            
            // Aggiorna tutti gli elementi della pagina
            updatePageContent();
            updateMetaTags();
            setActiveLanguageButton();
            updateImageAlts();
            
            // Aggiorna i componenti specifici
            if (typeof loadFeaturedDishes === 'function') {
                loadFeaturedDishes();
            }
            if (typeof updateMenuLanguage === 'function') {
                updateMenuLanguage(currentLang); // Passa la lingua corrente
            }
        } catch (error) {
            console.error('Error changing language:', error);
        }
    };
    
    // Carica le traduzioni
    async function loadTranslations() {
        try {
            const response = await fetch(`lang/${currentLang}.json`);
            translations = await response.json();
            return translations;
        } catch (error) {
            console.error('Error loading translations:', error);
            return {};
        }
    }
    
    // Aggiorna il contenuto della pagina con le traduzioni
    function updatePageContent() {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
                    element.value = translations[key];
                } else if (element.tagName === 'IMG' && element.alt) {
                    element.alt = translations[key];
                } else if (element.hasAttribute('title')) {
                    element.title = translations[key];
                } else if (element.hasAttribute('placeholder')) {
                    element.placeholder = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });
        
        // Aggiorna il titolo della pagina
        const pageTitle = document.querySelector('title[data-translate]');
        if (pageTitle && translations['metaTitle']) {
            document.title = translations['metaTitle'];
        }
    }
    
    // Aggiorna meta tag per SEO
    function updateMetaTags() {
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('lang', currentLang);
            canonicalLink.href = currentUrl.toString();
        }
        
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        
        if (ogTitle && ogDescription) {
            ogTitle.setAttribute('content', `${document.title} | ${currentLang.toUpperCase()}`);
            ogDescription.setAttribute('content', document.querySelector('meta[name="description"]').content);
        }
    }
    
    // Imposta il bottone della lingua attiva
    function setActiveLanguageButton() {
        const buttons = document.querySelectorAll('.language-switcher button');
        buttons.forEach(button => {
            const buttonLang = button.getAttribute('data-lang') || button.textContent.toLowerCase();
            const isActive = buttonLang === currentLang;
            
            button.classList.toggle('active', isActive);
            button.style.backgroundColor = isActive ? 'var(--primary-color)' : '';
            button.style.color = isActive ? 'white' : '';
        });
    }
    
    // Aggiorna gli alt delle immagini
    function updateImageAlts() {
        document.querySelectorAll('img[data-translate]').forEach(img => {
            const key = img.getAttribute('data-translate');
            if (translations[key]) {
                img.alt = translations[key];
            }
        });
    }
    
    // Inizializza tutto
    async function init() {
        await loadTranslations();
        updatePageContent();
        setActiveLanguageButton();
        initLazyLoading();
    }
    
    // Lazy loading per le immagini
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        // Aggiungi questo blocco CRUCIALE dalla vecchia versione
        lazyImages.forEach(img => {
            if (!img.dataset.src) {
                img.dataset.src = img.src; // Copia src in data-src
                img.src = ''; // Opzionale: svuota src per forzare lazy loading
            }
        });

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src; // Usa data-src
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, { rootMargin: '100px' });

            lazyImages.forEach(img => {
                observer.observe(img);
            });
        } else {
            // Fallback per browser senza Observer
            lazyImages.forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        }
    }
    
    // Avvia l'inizializzazione
    init();
});