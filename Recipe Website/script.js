function printCheckedIngredients() {
    let a = document.forms["main"];
    let checkboxes = a.querySelectorAll('input[type="checkbox"]');
    let checkedIngredients = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            let label = checkbox.nextElementSibling.textContent;
            checkedIngredients.push(label);
        }
    });

    if (checkedIngredients.length > 0) {
        let ingredientsList = checkedIngredients.join("\n");
        alert("Checked Ingredients:\n" + ingredientsList);
    } else {
        alert("No ingredients are checked.");
    }
}