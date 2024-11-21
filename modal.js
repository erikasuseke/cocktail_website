let modal = document.getElementById("recipeModal");
let btn = document.querySelector(".randomDrink-btn");

// atidaro langą kai paspaudžiamas mygtukas
btn.onclick = function() {
  modal.style.display = "block";
}

// uždaro langą paspaudus kitur
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}