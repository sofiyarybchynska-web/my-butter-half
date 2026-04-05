function UpdateIngredients(ingredientsName, ingredientsAmount, add_or_remove) {
    for (let i = 0; i < ingredientsAvailable.length; i++) {
        if(ingredientsAvailable[i].name == ingredientsName[i]) {
            //update the data
            if (add_or_remove === "add") {
                ingredientsAvailable[i].amount += ingredientsAmount;
            } else if (add_or_remove === "remove") {
                ingredientsAvailable[i].amount -= ingredientsAmount;
            }

            //update the front end to reflect the new amount of the ingredient
            let ingredient = document.getElementById(ingredientsName[i]);
            ingredient.innerHTML = ingredientsAvailable[i].amount;
        }
    }
};