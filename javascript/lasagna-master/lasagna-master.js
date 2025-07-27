/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time){
    let message = '';

    if (time == null || time == undefined){
        message = 'You forgot to set the timer.';
        return message;
    }

    message = time == 0 ? 'Lasagna is done.' : 'Not done, please wait.';

    return message;
}

export function preparationTime(layers, time = 2){
    return layers.length * time;
}

export function quantities(layers){
   let sumSauce = layers.filter((item) => item == 'sauce').length * 0.2;
   let sumNoodles = layers.filter((item) => item == 'noodles').length * 50;

   return { noodles: sumNoodles, sauce: sumSauce };
}

export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length -1]);
}

export function scaleRecipe(recipe, portion = 2){
    let result = {};

    for (let key in recipe){
        result[key] = portion/2 * recipe[key];
    }

    return result;
}