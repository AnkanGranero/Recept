import recipes from "./recipes.js"

const pancakeRecipe = recipes.pancakes

/* 
    - lägg till receptlista som länkar 
    - ändra recept baserat på vilket recept i receptlistan användaren markerat
    - lägg till funktion getImagesToRecipe 
*/

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

const servingPictures = document.getElementById("serving-pictures");
const pictures = servingPictures.querySelectorAll(".serving-picture")

pictures.forEach( (picture, index) => {
    const data = pancakeRecipe.servingPictures[index];
    if(data) {
        picture.src = data.src;
        picture.alt = data.alt
    }
    else {
        picture.scr = "";
        picture.alt = "Kunde inte hitta serveringsbild"
    }
})
