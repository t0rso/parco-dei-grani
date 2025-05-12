// data/menu-data.js
const menuData = {
    categories: [
        {
            id: "specialità",
            name_ita: "Le nostre Specialità",
            name_eng: "Our Specialties",
            items: [
                {
                    id: "salsiccia-cipolla",
                    name_ita: "Piada salsiccia e cipolla",
                    name_eng: "Piadina sausage and onion",
                    description_ita: "Salsiccia, cipolla, pomodoro, maionese",
                    description_eng: "Sausage, onion, tomato, mayonnaise",
                    price: 7.2
                },
                {
                    id: "coppa-pomodoro",
                    name_ita: "Piada coppa e pomodoro",
                    name_eng: "Piadina coppa and tomato",
                    description_ita: "Coppa, pomodoro gratinato, formaggio",
                    description_eng: "Coppa, gratin tomato, cheese",
                    price: 7.0
                },
                {
                    id: "sardoncini-radicchio",
                    name_ita: "Piada sardoncini e radicchio",
                    name_eng: "Piadina sardines and radicchio",
                    description_ita: "Sardoncini fritti, radicchio verde, cipolla di Tropea",
                    description_eng: "Fried sardines, green radicchio, Tropea onion",
                    price: 7.80
                },
                {
                    id: "porchetta",
                    name_ita: "Piada porchetta",
                    name_eng: "Piadina porchetta",
                    description_ita: "Porchetta, insalata (A seconda della disponibilità)",
                    description_eng: "Porchetta, salad (Subject to availability)",
                    price: 7.80
                },
                {
                    id: "salsiccia-friarielli",
                    name_ita: "Piada salsiccia e friarielli",
                    name_eng: "Piadina sausage and friarielli",
                    description_ita: "Salsiccia, friarielli, formaggio Castel San Pietro",
                    description_eng: "Sausage, friarielli, Castel San Pietro cheese",
                    price: 7.50
                },
                {
                    id: "pulled-pork",
                    name_ita: "Piada pulled pork",
                    name_eng: "Piadina pulled pork",
                    description_ita: "Pulled pork, salsa Cesar piccante, scamorza, insalata, pomodoro",
                    description_eng: "Pulled pork, Caesar dressing, scamorza, lettuce, tomato",
                    price: 8.3
                },
                {
                    id: "pulled-pork-friarielli",
                    name_ita: "Piada pulled pork e friarielli",
                    name_eng: "Piadina pulled pork and friarielli",
                    description_ita: "Pulled pork, friarielli, fontina, salsa Cesar",
                    description_eng: "Pulled pork, friarielli, fontina, Caesar dressing",
                    price: 8.70
                },
                {
                    id: "salame-nduja",
                    name_ita: "Piada salame e nduja",
                    name_eng: "Piadina salami and nduja",
                    description_ita: "Salame piccante, nduja, pomodoro gratinato, scamorza",
                    description_eng: "Spicy salami, nduja, gratin tomato, scamorza",
                    price: 8.00
                },
                {
                    id: "roastbeef-insalata",
                    name_ita: "Piada roastbeef e insalata",
                    name_eng: "Piadina roast beef and salad",
                    description_ita: "Roastbeef, insalata verde, maionese, pomodoro, pepe nero",
                    description_eng: "Roast beef, green salad, mayonnaise, tomato, black pepper",
                    price: 8.80
                },
                {
                    id: "roastbeef-pomodoro",
                    name_ita: "Piada roastbeef e pomodoro",
                    name_eng: "Piadina roast beef and tomato",
                    description_ita: "Roastbeef, pomodoro gratinato, formaggio fresco",
                    description_eng: "Roast beef, gratin tomato, fresh cheese",
                    price: 9.30
                },
                {
                    id: "alici",
                    name_ita: "Piada alici marinate",
                    name_eng: "Piadina marinated anchovies",
                    description_ita: "Alici marinate, radicchio, cipolla, scopatolo",
                    description_eng: "Marinated anchovies, radicchio, onion, scopatolo",
                    price: 7.60
                },
                {
                    id: "bianchetti",
                    name_ita: "Piada bianchetti",
                    name_eng: "Piadina bianchetti",
                    description_ita: "Bianchetti, riduzione di Sangiovese, scopatolo, rucola",
                    description_eng: "Bianchetti, Sangiovese reduction, scopatolo, rocket",
                    price: 9.5
                }
            ]
        },
        {
            id: "piadine",
            name_ita: "Piadine",
            name_eng: "Piadine",
            items: [
                {
                    id: "crudo",
                    name_ita: "Prosciutto crudo di Parma",
                    name_eng: "Parma ham",
                    description_ita: "",
                    description_eng: "",
                    price: 6.5
                },
                {
                    id: "crudo-formaggio",
                    name_ita: "Prosciutto crudo di Parma e formaggio",
                    name_eng: "Parma ham and cheese",
                    description_ita: "",
                    description_eng: "",
                    price: 7.0
                },
                {
                    id: "crudo-formaggio-rucola",
                    name_ita: "Prosciutto crudo di Parma, formaggio e rucola",
                    name_eng: "Parma ham, cheese and rocket",
                    description_ita: "",
                    description_eng: "",
                    price: 7.2
                },
                {
                    id: "speck-scamorza",
                    name_ita: "Speck e scamorza",
                    name_eng: "Speck and scamorza cheese",
                    description_ita: "",
                    description_eng: "",
                    price: 6.3
                },
                {
                    id: "salame-piccante-scamorza",
                    name_ita: "Salame piccante e scamorza",
                    name_eng: "Spicy salami and scamorza cheese",
                    description_ita: "",
                    description_eng: "",
                    price: 6.3
                },
                {
                    id: "salsiccia",
                    name_ita: "Salsiccia",
                    name_eng: "Sausage",
                    description_ita: "",
                    description_eng: "",
                    price: 5.8
                },
                {
                    id: "salsiccia-cipolla",
                    name_ita: "Salsiccia e cipolla",
                    name_eng: "Sausage and onion",
                    description_ita: "",
                    description_eng: "",
                    price: 6.6
                },
                {
                    id: "salsiccia-formaggio-rucola",
                    name_ita: "Salsiccia, formaggio e rucola",
                    name_eng: "Sausage, cheese and rocket",
                    description_ita: "",
                    description_eng: "",
                    price: 6.8
                },
                {
                    id: "salame",
                    name_ita: "Salame",
                    name_eng: "Salami",
                    description_ita: "",
                    description_eng: "",
                    price: 5.2
                },
                {
                    id: "bresaola",
                    name_ita: "Bresaola",
                    name_eng: "Bresaola",
                    description_ita: "",
                    description_eng: "",
                    price: 7.0
                },
                {
                    id: "bresaola-formaggio-rucola",
                    name_ita: "Bresaola, formaggio e rucola",
                    name_eng: "Bresaola, cheese and rocket",
                    description_ita: "",
                    description_eng: "",
                    price: 7.6
                },
                {
                    id: "cotto",
                    name_ita: "Prosciutto cotto",
                    name_eng: "Cooked ham",
                    description_ita: "",
                    description_eng: "",
                    price: 4.8
                },
                {
                    id: "cotto-formaggio",
                    name_ita: "Prosciutto cotto e formaggio",
                    name_eng: "Cooked ham and cheese",
                    description_ita: "",
                    description_eng: "",
                    price: 5.3
                },
                {
                    id: "mortadella",
                    name_ita: "Mortadella",
                    name_eng: "Mortadella",
                    description_ita: "",
                    description_eng: "",
                    price: 4.0
                },
                {
                    id: "formaggio-rucola",
                    name_ita: "Formaggio e rucola",
                    name_eng: "Cheese and rocket",
                    description_ita: "",
                    description_eng: "",
                    price: 4.4
                },
                {
                    id: "insalata-tonno",
                    name_ita: "Insalata, tonno, grana e pomodoro fresco",
                    name_eng: "Salad, tuna, parmesan and fresh tomato",
                    description_ita: "",
                    description_eng: "",
                    price: 8.2
                },
                {
                    id: "finocchiona",
                    name_ita: "Finocchiona, formaggio fresco e rucola",
                    name_eng: "Finocchiona salami, fresh cheese and rocket",
                    description_ita: "",
                    description_eng: "",
                    price: 6.8
                },
                {
                    id: "radicchio",
                    name_ita: "Radicchio, cipolla cruda e pomodoro fresco",
                    name_eng: "Radicchio, raw onion and fresh tomato",
                    description_ita: "",
                    description_eng: "",
                    price: 5.0
                },
                {
                    id: "tacchino",
                    name_ita: "Fesa di tacchino, rucola e pomodoro fresco",
                    name_eng: "Turkey breast, rocket and fresh tomato",
                    description_ita: "",
                    description_eng: "",
                    price: 6.5
                }
            ]
        },
        {
            id: "cassoni",
            name_ita: "Cassoni",
            name_eng: "Cassoni",
            items: [
                {
                    id: "cassone-mozzarella",
                    name_ita: "Cassone mozzarella e pomodoro",
                    name_eng: "Cassone mozzarella and tomato",
                    description_ita: "Mozzarella, pomodoro",
                    description_eng: "Mozzarella, tomato",
                    price: 5.0
                },
                {
                    id: "cassone-erbe",
                    name_ita: "Cassone alle erbe",
                    name_eng: "Cassone with herbs", 
                    description_ita: "Erbe miste",
                    description_eng: "Mixed herbs",
                    price: 5.00
                },
                {
                    id: "cassone-erbe-pecorino",
                    name_ita: "Cassone erbe e pecorino",
                    name_eng: "Cassone herbs and pecorino",
                    description_ita: "Erbe miste, pecorino",
                    description_eng: "Mixed herbs, pecorino cheese",
                    price: 5.50
                },
                {
                    id: "cassone-erbe-salsiccia",
                    name_ita: "Cassone erbe e salsiccia",
                    name_eng: "Cassone herbs and sausage", 
                    description_ita: "Erbe miste, salsiccia",
                    description_eng: "Mixed herbs, sausage",
                    price: 5.50
                },
                {
                    id: "cassone-mozzarella-salsiccia",
                    name_ita: "Cassone mozzarella e salsiccia",
                    name_eng: "Cassone mozzarella and sausage",
                    description_ita: "Mozzarella, salsiccia",
                    description_eng: "Mozzarella, sausage",
                    price: 5.50
                },
                {
                    id: "cassone-salsiccia-patate",
                    name_ita: "Cassone salsiccia e patate",
                    name_eng: "Cassone sausage and potatoes",
                    description_ita: "Salsiccia, patate",
                    description_eng: "Sausage, potatoes",
                    price: 5.00
                },
                {
                    id: "cassone-mozzarella-salame",
                    name_ita: "Cassone mozzarella e salame",
                    name_eng: "Cassone mozzarella and salami",
                    description_ita: "Mozzarella, salame piccante, olive nere",
                    description_eng: "Mozzarella, spicy salami, black olives",
                    price: 5.50
                },
                {
                    id: "cassone-mozzarella-speck",
                    name_ita: "Cassone mozzarella e speck",
                    name_eng: "Cassone mozzarella and speck", 
                    description_ita: "Mozzarella, speck, gorgonzola",
                    description_eng: "Mozzarella, speck, gorgonzola",
                    price: 5.50
                }
            ]
        },
        {
            id: "hamburger",
            name_ita: "Hamburger",
            name_eng: "Burgers",
            description_ita: "I nostri panini con carne di chianina certificata da 200gr. con pane artigianale con sesamo, accompagnati con patatine dipper",
            description_eng: "Our burgers with certified Chianina beef (200gr) and artisanal sesame bread, served with dipper fries",
            items: [
                {
                    id: "marugone",
                    name_ita: "Marugone",
                    name_eng: "Classic Burger",
                    description_ita: "Pane classico con sesamo, hamburger di chianina, pomodori a fette, lattuga, cipolla stufata, maionese e ketchup + patatine dipper",
                    description_eng: "Classic sesame bun, Chianina beef patty, sliced tomatoes, lettuce, stewed onions, mayonnaise and ketchup + dipper fries",
                    price: 13
                },
                {
                    id: "cheeseburger",
                    name_ita: "Cheese burger",
                    name_eng: "Cheeseburger",
                    description_ita: "Pane classico con sesamo, hamburger di chianina, cheddar, pomodori a fette, lattuga, cipolla stufata, maionese e ketchup + patatine dipper",
                    description_eng: "Classic sesame bun, Chianina beef patty, cheddar cheese, sliced tomatoes, lettuce, stewed onions, mayonnaise and ketchup + dipper fries",
                    price: 13.5
                },
                {
                    id: "cheesebacon",
                    name_ita: "Cheesebacon burger",
                    name_eng: "Bacon Cheeseburger",
                    description_ita: "Pane classico con sesamo, hamburger di chianina, cheddar, bacon, pomodori a fette, lattuga, cipolla stufata, maionese e ketchup + patatine dipper",
                    description_eng: "Classic sesame bun, Chianina beef patty, cheddar cheese, bacon, sliced tomatoes, lettuce, stewed onions, mayonnaise and ketchup + dipper fries",
                    price: 14
                },
                {
                    id: "crispy",
                    name_ita: "Crispy burger",
                    name_eng: "Crispy Burger",
                    description_ita: "Pane classico con sesamo, hamburger di chianina, bacon, crema di funghi, doppio cheddar + patatine dipper",
                    description_eng: "Classic sesame bun, Chianina beef patty, bacon, mushroom cream, double cheddar + dipper fries",
                    price: 14
                },
                {
                    id: "papen",
                    name_ita: "Il panino Papen... solo per i veri Lovi",
                    name_eng: "The Papen Burger... only for real Lovi",
                    description_ita: "Pane classico con sesamo con la nostra salsiccia alla griglia, bacon, cheddar, cipolla stufata + patatine dipper",
                    description_eng: "Classic sesame bun with our grilled sausage, bacon, cheddar, stewed onions + dipper fries",
                    price: 13
                },
                {
                    id: "veggy",
                    name_ita: "Veggy burger",
                    name_eng: "Veggie Burger",
                    description_ita: "Pane classico con sesamo con melanzana gratinata, maionese vegana al lime, pomodori a fette e tapenade di olive verdi + patatine dipper",
                    description_eng: "Classic sesame bun with grilled eggplant, vegan lime mayonnaise, sliced tomatoes and green olive tapenade + dipper fries",
                    price: 12.5
                }
            ]
        },
        {
            id: "bambini",
            name_ita: "Per i più piccoli",
            name_eng: "Kids Menu",
            description_ita: "Menu speciale per bambini accompagnato con patatine stick",
            description_eng: "Special kids menu served with fries sticks",
            items: [
                {
                    id: "baby-burger",
                    name_ita: "Baby burger",
                    name_eng: "Kids Burger",
                    description_ita: "Pane classico con sesamo e carne di prima scelta 100% italiana + patatine stick (Opzioni: +Cheddar/Bacon +1,0€)",
                    description_eng: "Classic sesame bun with premium 100% Italian beef + fries sticks (Options: +Cheddar/Bacon +1,0€)",
                    price: 8.5
                },
                {
                    id: "baby-cotoletta",
                    name_ita: "Baby cotoletta",
                    name_eng: "Kids Chicken Cutlet",
                    description_ita: "Pane classico con sesamo e cotoletta di pollo + patatine stick (Opzioni: +Cheddar/Bacon +1,0€)",
                    description_eng: "Classic sesame bun with chicken cutlet + fries sticks (Options: +Cheddar/Bacon +1,0€)",
                    price: 8.5
                }
            ]
        },
        {
            id: "insalate",
            name_ita: "Insalate",
            name_eng: "Salads",
            items: [
                {
                    id: "insalata-mista",
                    name_ita: "Insalata mista",
                    name_eng: "Mixed salad",
                    description_ita: "Lattuga, pomodori, rucola e carote alla julienne",
                    description_eng: "Lettuce, tomatoes, rocket and julienne carrots",
                    price: 5.5
                },
                {
                    id: "riminese",
                    name_ita: "La riminese",
                    name_eng: "La riminese",
                    description_ita: "Radicchio, cipolla, aceto rosso e Scoparolo",
                    description_eng: "Radicchio, onion, red vinegar and Scoparolo",
                    price: 6.5
                },
                {
                    id: "adriatico-mare-nostrum",
                    name_ita: "Adriatico Mare Nostrum",
                    name_eng: "Adriatico Mare Nostrum",
                    description_ita: "Misticanza, cipolla di tropea, parmigiano a scaglie e riduzione di sangiovese. Accompagnata con sardoncini fritti",
                    description_eng: "Mixed greens, Tropea onion, parmesan flakes and sangiovese reduction. Served with fried small sardines",
                    price: 12.0
                },
                {
                    id: "oltremare",
                    name_ita: "Oltremare",
                    name_eng: "Overseas",
                    description_ita: "Lattuga, Filetti di Acciughe marinate, avocado, caprino olive taggiasche denocciolate, pomodori secchi",
                    description_eng: "Lettuce, marinated anchovy fillets, avocado, pitted taggiasche olives, sun-dried tomatoes",
                    price: 12.0
                },
                {
                    id: "caesar-parco-dei-grani",
                    name_ita: "La Caesar Parco dei grani",
                    name_eng: "The Parco dei Grani Caesar",
                    description_ita: "Caesar dressing, crostini alla paprica, bacon crispy, petto di pollo marinato, insalata, erba cipollina e germogli",
                    description_eng: "Caesar dressing, paprika croutons, crispy bacon, marinated chicken breast, salad, chives and sprouts",
                    price: 12.0
                }
            ]
        },
        {
            id: "stuzzicherie",
            name_ita: "Le Stuzzicherie",
            name_eng: "Appetizers",
            items: [
                {
                    id: "jalapenos-ripieni",
                    name_ita: "Peperoncini Jalapeños piccanti ripieni di formaggio",
                    name_eng: "Spicy Jalapeño peppers stuffed with cheese",
                    description_ita: "",
                    description_eng: "",
                    price: 5.5
                },
                {
                    id: "crocchette-pollo",
                    name_ita: "Crocchette di pollo",
                    name_eng: "Chicken croquettes",
                    description_ita: "",
                    description_eng: "",
                    price: 5.5
                },
                {
                    id: "patatine-stick",
                    name_ita: "Porzione di patatine fritte stick",
                    name_eng: "French fries sticks portion",
                    description_ita: "",
                    description_eng: "",
                    price: 4
                },
                {
                    id: "patatine-dipper",
                    name_ita: "Porzione di patatine fritte dipper",
                    name_eng: "French fries dipper portion",
                    description_ita: "",
                    description_eng: "",
                    price: 4.5
                },
                {
                    id: "gratinato",
                    name_ita: "Un gratinato",
                    name_eng: "Gratin dish",
                    description_ita: "",
                    description_eng: "",
                    price: 2.5
                },
                {
                    id: "salsiccia",
                    name_ita: "Una salsiccia",
                    name_eng: "One sausage",
                    description_ita: "",
                    description_eng: "",
                    price: 1.9
                },
                {
                    id: "cipolla-cotta-small",
                    name_ita: "Cipolla cotta piccola",
                    name_eng: "Cooked onion small",
                    description_ita: "",
                    description_eng: "",
                    price: 2.8
                },
                {
                    id: "cipolla-cotta-large",
                    name_ita: "Cipolla cotta grande",
                    name_eng: "Cooked onion large",
                    description_ita: "",
                    description_eng: "",
                    price: 3.8
                },
                {
                    id: "salse",
                    name_ita: "Salse in bustina",
                    name_eng: "Sauce sachets",
                    description_ita: "",
                    description_eng: "",
                    price: 0.2
                }
            ]
        },
        {
            id: "taglieri",
            name_ita: "Il Tagliere",
            name_eng: "The Cutting Board",
            items: [
                {
                    id: "tagliere-tradizione",
                    name_ita: "La tradizione senza fronzoli",
                    name_eng: "Tradition without frills",
                    description_ita: "I nostri salumi di qualità, pecorini da taglio, rucola",
                    description_eng: "Our quality cured meats, pecorino cheeses, rocket",
                    price: 13.5
                },
                {
                    id: "tagliere-formaggi",
                    name_ita: "Tagliere di formaggi misti",
                    name_eng: "Mixed cheese board",
                    description_ita: "La nostra selezione di formaggi accompagnati da miele e marmellata",
                    description_eng: "Our selection of cheeses served with honey and jam",
                    price: 14.5
                }
            ]
        },
        {
            id: "pesce",
            name_ita: "Il Pesce",
            name_eng: "Fish Specialties",
            items: [
                {
                    id: "calamari-marinara",
                    name_ita: "Calamari fritti e salsa marinara",
                    name_eng: "Fried calamari with marinara sauce",
                    description_ita: "",
                    description_eng: "",
                    price: 11.5
                },
                {
                    id: "calamari-pecorino",
                    name_ita: "Calamari fritti golosi con pecorino scoparolo, rucola, riduzione di Sangiovese",
                    name_eng: "Tasty fried calamari with pecorino scoparolo, rocket, Sangiovese reduction",
                    description_ita: "",
                    description_eng: "",
                    price: 13.0,
                },
                {
                    id: "fritto-misto",
                    name_ita: "Fritto misto",
                    name_eng: "Mixed fried seafood",
                    description_ita: "",
                    description_eng: "",
                    price: 13.0
                }
            ]
        },
        {
            id: "dolci",
            name_ita: "I Dolci 'Al lìveri'",
            name_eng: "Desserts 'The old-fashioned way'",
            items: [
                {
                    id: "mascarpone",
                    name_ita: "Il mascarpone come una volta",
                    name_eng: "Traditional mascarpone cream",
                    description_ita: "",
                    description_eng: "",
                    price: 6.0
                },
                {
                    id: "crema-bruciata",
                    name_ita: "La crema bruciata",
                    name_eng: "Burnt cream",
                    description_ita: "",
                    description_eng: "",
                    price: 6.0
                },
                {
                    id: "piada-nutella",
                    name_ita: "Piada con Nutella",
                    name_eng: "Flatbread with Nutella",
                    description_ita: "",
                    description_eng: "",
                    price: 3.5
                },
                {
                    id: "piada-miele",
                    name_ita: "Piada miele noci e pecorino",
                    name_eng: "Flatbread with honey, walnuts and pecorino",
                    description_ita: "",
                    description_eng: "",
                    price: 6.0
                },
                {
                    id: "sorbetto",
                    name_ita: "Sorbetto",
                    name_eng: "Sorbet",
                    description_ita: "",
                    description_eng: "",
                    price: 3.5
                }
            ]
        }
        // Altre categorie...
    ]
};