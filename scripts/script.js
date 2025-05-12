const pancakeRecipe = {
    heroImage: {
        src: "images/pannkakor.jpg",
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
    bottomPictures: [
        { src: "images/servering.jpeg", alt: "Pannkakor serverade med grädde och sylt" },
        { src: "images/servering2.jpg", alt: "Pannkakor serverade med grädde och hallon" },
    ]
}

const heroImage = document.getElementById("hero-image");
heroImage.src = pancakeRecipe.heroImage.src;
heroImage.alt = pancakeRecipe.heroImage.alt;

const title = document.getElementById("recipe-title");
title.textContent = pancakeRecipe.title;

const lead = document.getElementById("recipe-lead");
lead.textContent = pancakeRecipe.lead;

const ingredientsUl = document.getElementById("ingredients");

pancakeRecipe.ingredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsUl.appendChild(li)
});

const instructionsOl = document.getElementById("instructions");

pancakeRecipe.instructions.forEach(step => {
    const ol = document.createElement("li");
    ol.textContent = step;
    instructionsOl.appendChild(ol);
}
);

const servingPictureLeft = document.getElementById("serving-picture-left");
servingPictureLeft.src = pancakeRecipe.bottomPictures[0].src;
servingPictureLeft.alt = pancakeRecipe.bottomPictures[0].alt;

const servingPictureRight = document.getElementById("serving-picture-right");
servingPictureRight.src = pancakeRecipe.bottomPictures[1].src;
servingPictureRight.alt = pancakeRecipe.bottomPictures[1].alt;