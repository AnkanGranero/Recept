import recipes from "./recipes.js"

const pancakeRecipe = recipes.pancakes

/* 
    - lägg till funktion getImagesToRecipe 
*/

function renderRecipe(recipe) {

    const heroImage = document.getElementById("hero-image");
    heroImage.src = recipe.heroImage.src;
    heroImage.alt = recipe.heroImage.alt;

    const title = document.getElementById("recipe-title");
    title.textContent = recipe.title;

    const lead = document.getElementById("recipe-lead");
    lead.textContent = recipe.lead;

    const ingredientsUl = document.getElementById("ingredients");
    ingredientsUl.innerHTML = "";

    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsUl.appendChild(li)
    });

    const instructionsOl = document.getElementById("instructions");
    instructionsOl.innerHTML = "";

    recipe.instructions.forEach(step => {
        const ol = document.createElement("li");
        ol.textContent = step;
        instructionsOl.appendChild(ol);
    }
    );

    const servingPictures = document.getElementById("serving-pictures");
    const pictures = servingPictures.querySelectorAll(".serving-picture")

    pictures.forEach((picture, index) => {
        const data = recipe.servingPictures[index];
        if (data) {
            picture.src = data.src;
            picture.alt = data.alt
        }
        else {
            picture.scr = "";
            picture.alt = "Kunde inte hitta serveringsbild"
        }
    })
}


const recipeList = document.getElementById("recipe-list");

Object.keys(recipes).forEach(key => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = recipes[key].title;
    button.dataset.recipe = key;
    button.addEventListener("click", () => {
        renderRecipe(recipes[key]);
    })
    li.appendChild(button);
    recipeList.appendChild(li);
})

renderRecipe(recipes.pancakes);

