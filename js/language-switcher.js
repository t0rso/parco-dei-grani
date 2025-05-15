// js/language-switcher.js
document.addEventListener('DOMContentLoaded', function() {
    // Elementi della UI che necessitano traduzione
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    // Carica la lingua salvata o imposta l'italiano come default
    let currentLang = localStorage.getItem('language') || 'it';
    document.documentElement.lang = currentLang;
    
    // Funzione per cambiare lingua
    window.changeLanguage = function(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        loadTranslations();
        updateMetaTags();
        setActiveLanguageButton();
        updateImageAlts();
        loadFeaturedDishes();
        
        // Aggiorna il menu se siamo nella pagina del menu
        if (typeof updateMenuLanguage === 'function') {
            updateMenuLanguage();
        }
    };
    
    // Carica le traduzioni
    async function loadTranslations() {
        try {
            const response = await fetch(`lang/${currentLang}.json`);
            const translations = await response.json();
            
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
            
            // Aggiorna il titolo della pagina se presente
            const pageTitle = document.querySelector('title[data-translate]');
            if (pageTitle && translations['metaTitle']) {
                document.title = translations['metaTitle'];
            }
            
        } catch (error) {
            console.error('Error loading translations:', error);
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
        
        // Aggiorna meta tag OpenGraph
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
            if (button.textContent.toLowerCase() === currentLang) {
                button.classList.add('active');
                button.style.backgroundColor = 'var(--primary-color)';
                button.style.color = 'white';
            } else {
                button.classList.remove('active');
                button.style.backgroundColor = '';
                button.style.color = '';
            }
        });
    }
    
    // Aggiorna gli alt delle immagini
    function updateImageAlts() {
        const images = document.querySelectorAll('img[data-translate]');
        images.forEach(img => {
            const key = img.getAttribute('data-translate');
            if (translations[key]) {
                img.alt = translations[key];
            }
        });
    }
    
    // Lazy loading per le immagini
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '100px'
        });
        
        lazyImages.forEach(img => {
            img.dataset.src = img.src;
            img.src = '';
            observer.observe(img);
        });
    }
    
    // Inizializza tutto
    function init() {
        loadTranslations();
        setActiveLanguageButton();
        initLazyLoading();
        
        // Gestione caricamento immagini lazy
        document.addEventListener('DOMContentLoaded', () => {
            const lazyImages = [].slice.call(document.querySelectorAll('img[loading="lazy"]'));
            
            if ('IntersectionObserver' in window) {
                let lazyImageObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            let lazyImage = entry.target;
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.add('loaded');
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });
                
                lazyImages.forEach(function(lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                });
            }
        });
    }
    
    // Avvia l'inizializzazione
    init();
});