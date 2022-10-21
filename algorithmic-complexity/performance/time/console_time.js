function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.time('count-duration');
count(5);
console.timeEnd('count-duration');
