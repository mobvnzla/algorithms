function bubbleSort(array) {
  let length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let temporary = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporary;
      }
    }
  }
  return array;
}
