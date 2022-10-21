/**
 * Temporary Complexity -> O( n )
 * Spatial Complexity -> O( 1 )
 * Auxiliary Space -> O( 1 )
 */

function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}
