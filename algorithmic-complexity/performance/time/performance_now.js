function count(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let startTime = performance.now();
count(5);
let endTime = performance.now();

let duration = endTime - startTime;

console.log(`algorithm has lasted ${duration}ms.`);
