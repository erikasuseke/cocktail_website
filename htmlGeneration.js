let html = '';

function getIngredients(data) {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) { 
        let ingredient = data[`strIngredient${i}`];
        if (ingredient) {
            ingredients.push(`<p>${ingredient}</p>`);
        } else {
            break; 
        }
    }
    return ingredients.join(''); 
}

function generateHTML(allDrinks) {
    let baseContainer = document.querySelector(".cards-container");
    for (let i = 0; i < allDrinks.length; i++) {
        html += `
        <div class="flip-card">
            <div class="base-container">
                <div class="item-card">
                    <img src="${allDrinks[i].strDrinkThumb}" alt="">
                    <div class="container">
                        <div class="drink">
                        <h4><b>${allDrinks[i].strDrink}</b></h4>
                        </div>
                        <p>${allDrinks[i].strCategory}</p>
                    </div>
                </div>
                <div class="item-card-back">
                <p class = "ingredients"><b>Ingredients:</b></p>
                    ${getIngredients(allDrinks[i])}
                    <p class = "recipe"><b>Recipe:</b></p>
                    <p>${allDrinks[i].strInstructions}</p>
                </div>
            </div>
        </div>
        `;
    }
    baseContainer.innerHTML = html;
}

