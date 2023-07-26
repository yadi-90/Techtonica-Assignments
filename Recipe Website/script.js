function printCheckedIngredients() {
    let list = document.forms["main"];
    let checkboxes = list.querySelectorAll('input[type="checkbox"]');
    let checkedIngredients = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            let label = checkbox.nextElementSibling.textContent;
            checkedIngredients.push(label);
        }
    });

    if (checkedIngredients.length > 0) {
        let ingredientsList = checkedIngredients.join("\n");
        alert("Grocery List:\n" + ingredientsList);
    } else {
        alert("No ingredients are checked.");
    }
}

let zoomImage = document.getElementById('zoomImage');

zoomImage.addEventListener('mouseenter', () => {
  zoomImage.style.transform = 'scale(1.25)';
});

zoomImage.addEventListener('mouseleave', () => {
  zoomImage.style.transform = 'scale(1)';
});