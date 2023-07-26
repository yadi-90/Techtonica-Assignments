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

const zoomableImages = document.querySelectorAll('.zoomable-image');

zoomableImages.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    // Code to execute when the mouse enters the image area
    image.style.transform = 'scale(1.2)'; // Apply the zoom-out effect
  });

  image.addEventListener('mouseleave', () => {
    // Code to execute when the mouse leaves the image area
    image.style.transform = 'scale(1)'; // Reset the image scale
  });
});