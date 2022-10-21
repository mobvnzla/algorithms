/**
 * Temporary Complexity -> O( n )
 * Spatial Complexity -> O( 1 )
 * Auxiliary Space -> O( 1 )
 */

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  let dividedNumber = n;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = dividedNumber / 2;
  }

  return true;
}
