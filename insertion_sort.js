function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}

const numbers = [10, 25, 5, 42, 8, 50, 15];
const sortedNumbers = insertionSort(numbers);

console.log("Sorted numbers (in ascending order):", sortedNumbers);
