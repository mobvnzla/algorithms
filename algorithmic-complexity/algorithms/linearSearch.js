/**
 * Temporary Complexity -> O( n )
 * Spatial Complexity -> O( n )
 * Auxiliary Space -> O( 1 )
 */

function linearSearch(array, key) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === key) {
      return index;
    }
  }
  return -1;
}
