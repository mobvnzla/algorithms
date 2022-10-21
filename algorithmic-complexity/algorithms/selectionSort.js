/**
 * Temporary Complexity -> O( n**2 )
 * Spatial Complexity -> O( n )
 * Auxiliary Space -> O( 1 )
 */

function selectionSort(array) {
  let length = array.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temporary = array[i];
      array[i] = array[min];
      array[min] = temporary;
    }
  }
  return array;
}
