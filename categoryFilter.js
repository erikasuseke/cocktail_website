function generateCategoriesHtml(allDrinks) {
    let categoryContainer = document.querySelector(".drinkSelection");
    let htmlSelectCategories = '<option value="0">All drinks</option>';  

    let categories = new Set(); 

    for (let i = 0; i < allDrinks.length; i++) {
        const category = allDrinks[i].strCategory;

        if (category && !categories.has(category)) {
            categories.add(category);
            htmlSelectCategories += `<option value="${category}">${category}</option>`;
        }
    }
    categoryContainer.innerHTML = htmlSelectCategories;

    transferDrinks(allDrinks);

    categoryContainer.addEventListener("change", function(event) {
        const selectedCategory = event.target.value;
        if (selectedCategory === "0") {
            transferDrinks(allDrinks);
        } else {
            const filteredDrinks = allDrinks.filter(drink => drink.strCategory === selectedCategory);
            transferDrinks(filteredDrinks);
        }
    });
  };

  function transferDrinks(drinks) {
    const baseContainer = document.querySelector(".cards-container");
    baseContainer.innerHTML = '';
    let html = '';
    for (let i = 0; i < drinks.length; i++) {
        html += `
        <div class="flip-card">
            <div class="base-container">
                <div class="item-card">
                    <img src="${drinks[i].strDrinkThumb}" alt="">
                    <div class="container">
                        <div class="drink">
                        <h4><b>${drinks[i].strDrink}</b></h4>
                        </div>
                        <p>${drinks[i].strCategory}</p>
                    </div>
                </div>
                <div class="item-card-back">
                <p class = "ingredients"><b>Ingredients:</b></p>
                    ${getIngredients(drinks[i])}
                    <p class = "recipe"><b>Recipe:</b></p>
                    <p>${drinks[i].strInstructions}</p>
                </div>
            </div>
        </div>
        `;
    }
    baseContainer.innerHTML = html;
  }



