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
        }
        // Altre categorie...
    ]
};