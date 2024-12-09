import { desserts } from "../data/desserts.js";

console.log(desserts);

// Grab the HTML references
const myNav = document.querySelector('nav');
const myViewer = document.querySelector('#viewer');

// Generate navigation buttons
desserts.forEach(dessert => {
    console.log(dessert);
    const myButton = document.createElement('button');
    myButton.textContent = `${dessert.type}`;
    myButton.addEventListener('click', () => showDessert(dessert));
    myNav.appendChild(myButton);
});

// Function to display dessert details
function showDessert(dessert) {
    console.log(dessert);

    // Clear previous content in the viewer
    myViewer.textContent = "";

    // Create elements for displaying dessert details
    let dessertSection = document.createElement("section");
    let dessertType = document.createElement("h1");
    let dessertMaketime = document.createElement("h2");
    let dessertIngredients = document.createElement("ul");
    let dessertDescription = document.createElement("p");
    let dessertPhoto = document.createElement('img');

    // Populate the elements with dessert data
    dessertType.textContent = dessert.type;
    dessertMaketime.textContent = `Preparation Time: ${dessert.maketime}`;
    dessertDescription.textContent = dessert.description;
    dessertPhoto.src = `images/${dessert.img}`;
    dessertPhoto.alt = dessert.type;

    // Add ingredients as list items
    dessert.ingredients.forEach(ingredient => {
        let ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        dessertIngredients.appendChild(ingredientItem);
    });

    // Assemble the section
    dessertSection.appendChild(dessertType);
    dessertSection.appendChild(dessertMaketime);
    dessertSection.appendChild(dessertPhoto);
    dessertSection.appendChild(dessertDescription);
    dessertSection.appendChild(dessertIngredients);

    // Display the assembled section
    myViewer.appendChild(dessertSection);
}

