/**
 * Temporary Complexity -> O( n )
 * Spatial Complexity -> O( 1 )
 * Auxiliary Space -> O( 1 )
 */

function primalityTest(number) {
  if (number <= 3) {
    return true;
  }

  if (number % 1 !== 0) {
    return false;
  }

  if (number <= 1) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  const limiteDivisor = Math.sqrt(number);
  for (let divisor = 3; divisor <= limiteDivisor; divisor += 2) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}
