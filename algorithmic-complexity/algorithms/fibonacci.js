/**
 * Temporary Complexity -> O( n )
 * Spatial Complexity -> O( n )
 * Auxiliary Space -> O( n )
 */

function fibonacci(number) {
  const fibonacciSequence = [1];

  let previousValue = 0;
  let currentValue = 1;

  if (number === 1) {
    return fibonacciSequence;
  }

  let i = number - 1;

  while (i) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;
    fibonacciSequence.push(currentValue);
    i -= 1;
  }

  return fibonacciSequence;
}
