var theForm = document.theForm;

function btnRemoveIngredientsClick() {
    var options = theForm.theIngredient.options;
    if (options[2].text == "Ingredient"){
        options[2] = null;
    } else {
        alert (" There is no ingredient in list!");
        }
    }

