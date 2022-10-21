function InsertionSort(array, i = null, insert = null, needInsert = false) {
  if (needInsert) {
    if (insert < array[i - 1]) {
      array[i] = array[i - 1];
      i--;
      return InsertionSort(array, i, insert, true);
    } else {
      array[i] = insert;
      return array;
    }
  }

  for (let j = 0; j < array.length; j++) {
    if (array[j] < array[j - 1]) {
      array = InsertionSort(array, j, array[j], true);
    }
  }
  return array;
}
