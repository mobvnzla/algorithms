function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repeat(array) {
  let array_repeated = array;
  return array_repeated;
}

function convertIntoString(array) {
  let result = array.map((item) => item.toString());
  return result;
}

function twoDimensional(value) {
  let x = new Array(value);
  for (let i = 0; i < value; i++) {
    x[i] = new Array(value).fill(0);
  }
  return x;
}

console.log(twoDimensional(5));
