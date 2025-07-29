// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return function translation(tx, ty){
    return [dx+tx, dy+ty];
  };
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function scale(param_x, param_y){
    return [sx * param_x, sy* param_y];
  };
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return function compose(x, y){
    return g(f(x,y)[0], f(x,y)[1]);
  };
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */

export function memoizeTransform(f) {
  let lastResult, last_x, last_y

  return function(x, y){

    if(last_x == x && last_y == y){
      return lastResult
    }

    last_x = x
    last_y = y
    return lastResult = f(x,y)
  }
}


// export function memoizeTransform(f) {
//   let last = [];
//   let result = "";

//   return function memo(x, y){
//     let key = String([x,y]);

//     if(last.length != 0){
//       if(last[0] == key){
//         last.pop();
//       }else{
//         result = f(x,y);
//         last.pop();
//         last[0] = key;
//       }
//     }else{
//       result = f(x,y);
//       last[0] = key;
//     }

//     return result;
//   };
// }