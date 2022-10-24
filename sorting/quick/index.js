function quickSort(array, start = 0, end = array.length - 1) {
  if (start < end) {
    let lastSmaller = start - 1;
    let pivot = array[end];
    for (let i = start; i < end; i++) {
      if (array[i] < pivot) {
        const temp = array[lastSmaller + 1];
        array[lastSmaller + 1] = array[i];
        array[i] = temp;
        lastSmaller++;
      }
    }
    const temp = array[lastSmaller + 1];
    array[lastSmaller + 1] = array[end];
    array[end] = temp;
    quickSort(array, start, lastSmaller);
    quickSort(array, lastSmaller + 2, end);
  }
}
