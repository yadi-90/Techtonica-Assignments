

let video = document.getElementById('video');
video.autoplay = true;
video.addEventListener('ended', function () {
  video.currentTime = 0;
  video.play();
});



/////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////
const zoomableImages = document.querySelectorAll('.zoomable-image');

zoomableImages.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.2)'; 
  });
  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)'; 
  });
});