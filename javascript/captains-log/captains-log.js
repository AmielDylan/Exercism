// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let r = Math.random();

  r = r < 0.1 ? r * 100000 : r * 10000;
  return `NCC-${r}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 41000 + Math.random() * 1000;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let p = ['D','H','J','K','L','M','N','R','T','Y'];
  let r = Math.round(Math.random() * 10);
  
  if(r >= p.length){
    r -= p.length;
  }

  return p[r];
}
