// Updated filterCocktails function
async function filterCocktails() {
  const searchValue = document.querySelector('.searchTerm').value.toLowerCase();
  const baseContainer = document.querySelector(".cards-container");

  // Fetch all cocktails (replace with your actual fetch method if different)
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchValue);
  const data = await response.json();

  // Clear existing cards
  baseContainer.innerHTML = '';

  // If no results, display a message
  if (!data.drinks) {
      baseContainer.innerHTML = `<p>No cocktails found for "${searchValue}".</p>`;
      return;
  } else if (searchValue == ""){
    updateAll();
  }

  // Generate new HTML for filtered items
  let html = '';
  data.drinks.forEach(drink => {
      html += `
          <div class="flip-card">
              <div class="base-container">
                  <div class="item-card">
                      <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                      <div class="container">
                          <div class="drink">
                              <h4><b>${drink.strDrink}</b></h4>
                          </div>
                          <p>${drink.strCategory}</p>
                      </div>
                  </div>
                  <div class="item-card-back">
                      <p class="ingredients"><b>Ingredients:</b></p>
                      ${getIngredients(drink)}
                      <p class="recipe"><b>Recipe:</b></p>
                      <p>${drink.strInstructions}</p>
                  </div>
              </div>
          </div>
      `;
  });

  // Update the cards-container with filtered results
  baseContainer.innerHTML = html;
}




