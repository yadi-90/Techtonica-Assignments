let theForm = document.theForm;


function btnRemoveIngredientsClick() {
    let options = theForm.theIngredient.options;
    if (options[2].text == "Ingredient"){
        options[2] = null;
    } else {
        alert (" There is no ingredient in list!");
        }
    }
    function btnAddIngredientsClick () {
        let options= theForm.theIngredients.options;

        if (options[2].text != "Ingredient"){
            let lastOption= new Option();
            options[options.lenght] = lastOption;

            for(let index = options.lenght - 1; index > 2; index--){
                currentOption.text = previousOption.text;
                currentOption.value = previousOption.value;
            }
            let option = newOption("ingredients", 2);
            options[2] = option;
        } else {
            alert ("Do you want to have Two Extra Ingredients")
        }
    }
        theForm.btnRemovedIng.addEventListener("click", btnRemoveIngClick);
        theForm.btnAddIng.addEventListener("click", btnAddIngClick);



