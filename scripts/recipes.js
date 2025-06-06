const recipes = {

    pancakes: {
        heroImage: {
            src: "images/pancakes/hero.jpg",
            alt: "Bild på pankakor på ett dukat bord med tillbehör som sylt och bär"
        },
        title: "Enkelt recept på pankakor",
        lead: "Gör traditionella tunna pannkakor med detta enkla och goda pannkaksrecept",
        ingredients: [
            "2 1/2 dl vetemjöl",
            "1/2 tesked salt",
            "6 dl mjölk",
            "3 ägg",
            "smör till (stekning)",
            "sylt, bär, grädde eller frukt till servering"
        ],
        instructions: [
            "Blanda mjöl och salt i en bunke",
            "Vispa i hälften av mjölken och vispa till en slät smet",
            "Låt smeten vila i 10 min",
            "Stek tunna pannkakor i lite smör, för varje pannkaka, i en stek- eller pannkakspanna",
            "Servera med sylt, bär eller frukt"
        ],
        servingPictures: [
            { src: "images/pancakes/serving1.jpg", alt: "Pannkakor serverade med grädde och sylt" },
            { src: "images/pancakes/serving2.jpg", alt: "Pannkakor serverade med grädde och hallon" },
        ]
    },
    carbonara: {
        heroImage: {
            src: "images/carbonara/hero.jpg",
            alt: "En tallrik spaghetti carbonara toppad med svartpeppar och riven parmesan"
        },
        title: "Krämig Spaghetti Carbonara",
        lead: "En klassisk italiensk pastarätt med krämig sås, parmesan och knaperstekt bacon.",
        ingredients: [
            "400 g spaghetti",
            "150 g pancetta eller bacon",
            "2 ägg + 1 äggula",
            "1 dl riven parmesan",
            "Svartpeppar",
            "Salt"
        ],
        instructions: [
            "Koka pastan enligt anvisningarna",
            "Stek baconet knaprigt",
            "Vispa ihop ägg och parmesan i en skål",
            "Häll av pastan men spara lite pastavatten",
            "Blanda pastan med bacon och äggblandningen, späd med lite pastavatten om det behövs",
            "Toppa med svartpeppar och extra parmesan"
        ],
        servingPictures: [
            { src: "images/carbonara/serving1.jpg", alt: "Spaghetti carbonara med riven ost och svartpeppar" },
            { src: "images/carbonara/serving2.jpg", alt: "Närbild på en gaffel som snurrar in carbonara" },
        ]
    },
    falafelWrap: {
        heroImage: {
            src: "images/falafelWrap/hero.jpg",
            alt: "Falafelwrap med sallad, hummus och picklad rödlök"
        },
        title: "Vegansk Falafelwrap",
        lead: "Krispig falafel med krämig hummus i ett tunnbröd – perfekt som lunch eller middag.",
        ingredients: [
            "8 falafelbollar (färdiga eller hemgjorda)",
            "2 tortillabröd eller libabröd",
            "Hummus",
            "Sallad",
            "Picklad rödlök",
            "Tomat och gurka"
        ],
        instructions: [
            "Värm bröden snabbt i stekpanna eller mikro",
            "Bred ut hummus i mitten",
            "Fyll med sallad, tomat, gurka och falafel",
            "Toppa med picklad rödlök",
            "Rulla ihop till en wrap och servera"
        ],
        servingPictures: [
            { src: "images/falafelWrap/serving1.jpg", alt: "Öppen wrap med falafel och färska grönsaker" },
            { src: "images/falafelWrap/serving2.jpg", alt: "Falafelwrap delad i två på ett träfat" },
        ]
    },
}


export default recipes;