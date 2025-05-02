// DATI DEL MENU - FACILI DA MODIFICARE

const menuData = {
    categories: [
        {
            id: "antipasti",
            name: "Antipasti",
            items: [
                {
                    id: "bruschetta",
                    name: "Bruschetta al Pomodoro",
                    price: "€8",
                    description: "Pane tostato con pomodori freschi, aglio, basilico e olio extravergine d'oliva",
                    image: "immagini/menu/bruschetta.jpg",
                    tags: ["vegetariano", "gluten free"]
                },
                {
                    id: "carpaccio",
                    name: "Carpaccio di Manzo",
                    price: "€14",
                    description: "Fettine sottili di manzo con scaglie di parmigiano, rucola e salsa al limone",
                    image: "immagini/menu/carpaccio.jpg",
                    tags: ["crudo"]
                }
            ]
        },
        {
            id: "primi",
            name: "Primi Piatti",
            items: [
                {
                    id: "carbonara",
                    name: "Spaghetti Carbonara",
                    price: "€12",
                    description: "Pasta fresca con uova, guanciale, pecorino e pepe nero",
                    image: "immagini/menu/carbonara.jpg",
                    tags: []
                },
                {
                    id: "risotto",
                    name: "Risotto ai Funghi",
                    price: "€14",
                    description: "Risotto cremoso con funghi porcini freschi e prezzemolo",
                    image: "immagini/menu/risotto.jpg",
                    tags: ["vegetariano"]
                }
            ]
        },
        {
            id: "hamburger",
            name: "Hamburger",
            items: [
                {
                    id: "classico",
                    name: "Classico",
                    price: "€10",
                    description: "Ottimo hamburger classico",
                    image: "immagini/menu/classico.jpg",
                    tags: ["TOP"]
                },
                {
                    id: "carbonaro",
                    name: "Carbonaro",
                    price: "€15",
                    description: "carbonara portatile",
                    image: "immagini/menu/carbonaro.jpg",
                    tags: ["laido"]
                },
                {
                    id: "pulled-pork",
                    name: "Pulled Pork",
                    price: "€14",
                    description: "LAIDO E CORROTTO",
                    image: "immagini/menu/pulled-pork.jpg",
                    tags: ["laido", "corrotto"]
                },
                {
                    id: "doppia-cotoletta",
                    name: "Doppia Cotoletta",
                    price: "€9",
                    description: "metti che hai fame",
                    image: "immagini/menu/doppia-cotoletta.jpg",
                    tags: []
                }
            ]
        },
        {
            id: "dolci",
            name: "Dolci",
            items: [
                {
                    id: "tiramisu",
                    name: "Tiramisù Classico",
                    price: "€8",
                    description: "Dolce al cucchiaio con savoiardi, caffè, mascarpone e cacao",
                    image: "immagini/menu/tiramisù.jpg",
                    tags: []
                }
            ]
        }
    ]
};

// PER AGGIUNGERE UNA NUOVA CATEGORIA:
// 1. Aggiungi un nuovo oggetto all'array categories
// 2. Definisci id, name e items (array vuoto se non hai ancora piatti)

// PER AGGIUNGERE UN NUOVO PIATTO:
// 1. Trova la categoria giusta
// 2. Aggiungi un nuovo oggetto all'array items con:
//    - id: nome unico in minuscolo
//    - name: nome completo del piatto
//    - price: prezzo con €
//    - description: descrizione dettagliata
//    - image: percorso dell'immagine
//    - tags: array di tag (opzionale)