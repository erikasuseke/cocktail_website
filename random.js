function getRandom(allDrinks) {
    let baseContainer = document.querySelector(".modal-content");
        let randomIndex = Math.floor(Math.random() * allDrinks.length);
        let selectedDrink = allDrinks[randomIndex];
        let html =
            `<div class="modalRecipeContent">
                <div class="modal-card">
                    <img src="${selectedDrink.strDrinkThumb}" alt="">
                    <div class="modal-card-descr">
                        <h4><b>${selectedDrink.strDrink}</b></h4>
                        <p><b>${selectedDrink.strCategory}</b></p>
                        <p>${getIngredients(selectedDrink)}</p>
                        <p>${selectedDrink.strInstructions}</p>
                    </div>
                </div>
            </div>`;

        baseContainer.innerHTML = html;
}

function drinkOfTheMonth (allDrinks) {
    let baseContainer = document.querySelector(".hero");
    let html =
    `<div class="drinkOfTheMonthContainer">
        <h2>Drink of the month</h2>
        <div class="drinkOfTheMonthCard">
            <div class="imageBox">
                <img src="${allDrinks[14].strDrinkThumb}" alt="">
            </div>
            <div class="drinkOfTheMonthDescr">
                <h4><b>${allDrinks[14].strDrink}</b></h4>
                <p><b>${allDrinks[14].strCategory}</b></p>
                <p><b>Ingredients:</b></p>
                <p>${getIngredients(allDrinks[14])}</p>
                <p><b>How to make:</b></p>
                <p>${allDrinks[14].strInstructions}</p>
            </div>
        </div>
    </div>`;

    baseContainer.innerHTML = html;
}
        