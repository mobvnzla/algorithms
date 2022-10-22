function mergeSort(array) {
  const sortedArray = [];
  let auxiliaryArray = [];
  if (array.length > 1) {
    if (array.length % 2 != 0) {
      auxiliaryArray.push(...array.splice(array.length / 2 + 1));
    } else {
      auxiliaryArray.push(...array.splice(array.length / 2));
    }
    if (array.length > 1) array = mergeSort(array);
    if (auxiliaryArray.length > 1) auxiliaryArray = mergeSort(auxiliaryArray);
  }
  while (array.length > 0 && auxiliaryArray.length > 0) {
    sortedArray.push(...(array[0] < auxiliaryArray[0] ? array.splice(0, 1) : auxiliaryArray.splice(0, 1)));
  }
  if (array.length > 0) sortedArray.push(...array.splice(0));
  if (auxiliaryArray.length > 0) sortedArray.push(...auxiliaryArray.splice(0, 1));
  array.push(...sortedArray);
  return array;
}
