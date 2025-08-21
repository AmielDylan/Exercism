/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let sumPrice = 0;
  let extraArray = [...extras];

  if (extraArray.length === 0) {

    switch(pizza){
      case 'Margherita':
        sumPrice = 7;
        break;
      case 'Caprese':
        sumPrice = 9;
        break;
      case 'Formaggio':
        sumPrice = 10;
        break;
    }

    return sumPrice;
  }

  switch(extraArray[extraArray.length - 1]){
    case 'ExtraSauce':
      sumPrice = 1;
      break;
    case 'ExtraToppings':
      sumPrice = 2;
      break;
  }

  extraArray.pop();

  return sumPrice + pizzaPrice(pizza, ...extraArray);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let sumPrice = 0;
  
  pizzaOrders.forEach((order) => {
    sumPrice += pizzaPrice(order.pizza, ...order.extras);
  });

  // sumPrice = pizzaOrders.reduce((acc, order) => {
  //   return acc + pizzaPrice(order.pizza, ...order.extras);
  // }, sumPrice);

  return sumPrice;
}
