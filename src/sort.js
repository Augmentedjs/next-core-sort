/**
 * Sorts an array of objects by property in object (not a deep property)
 * @function sortObjects
 * @param {array} array The object array to sort
 * @param {object} key The property to sort by
 * @param {boolean} descending Reverse the order
 * @returns {array} The sorted array
 */
export const sortObjects = (array, key, descending) => {
  return array.sort( (a, b) => {
    const x = a[key], y = b[key];
    if (descending) {
      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    }
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
};

export const quicksortObjects = (array, key, descending) => {
  //if array is empty
  if (array.length === 0) {
    return [];
  }
  if (!key) {
    return array;
  }

  let i = 1;
  const l = array.length, left = [], right = [], pivot = array[0];
  //go through each element in array
  for (i = 1; i < l; i++) {
    const current = array[i];
    if (descending) {
      if (current[key] > pivot[key]) {
        left.push(current);
      } else {
        right.push(current);
      }
    } else {
      if (current[key] < pivot[key]) {
        left.push(current);
      } else {
        right.push(current);
      }
    }
  }
  return quicksortObjects(left, key, descending).concat(pivot, quicksortObjects(right, key, descending));
};

/**
 * Split the array into halves and merge them recursively
 * @function mergeSort
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */
export const mergeSort = (arr) => {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return _merge(mergeSort(left), mergeSort(right));
};

/**
 * compare the arrays item by item and return the concatenated result
 * @private
 */
const _merge = (left, right) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

/**
 * Quick Sort implementation for Arrays -
 * @function quickSort
 * @param {Array} arr Array to Sort
 * @returns {Array} Returns a sorted array
 */
export const quickSort = (arr) => {
  //if array is empty
  if (arr.length === 0) {
    return [];
  }

  let i = 1;
  const l = arr.length, left = [], right = [], pivot = arr[0];
  //go through each element in array
  for (i = 1; i < l; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
 * It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * @function insertionSort
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */
export const insertionSort = (unsortedList) => {
  let sortedList = [];
  if (unsortedList) {
    sortedList = unsortedList.slice();
    const len = sortedList.length;
    let i, j, tmp;
  	for (i = 1; i < len; i++) {
  		tmp = sortedList[i]; //Copy of the current element.
  		/*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
  		for (j = i - 1; j >= 0 && (sortedList[j] > tmp); j--) {
  			//Shift the number
  			sortedList[j + 1] = sortedList[j];
  		}
  		//Insert the copied number at the correct position
  		//in sorted part.
  		sortedList[j + 1] = tmp;
  	}
  }
	return sortedList;
};

/**
 * Simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.
 * @function bubbleSort
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */
export const bubbleSort = (a) => {
  let sorted = [];
  if (a) {
    sorted = a.slice();
    let swapped, i, tmp;
    const l = sorted.length - 1;
    do {
      swapped = false;
      for (i = 0; i < l; i++) {
        if (sorted[i] > sorted[i + 1]) {
          tmp = sorted[i];
          sorted[i] = sorted[i + 1];
          sorted[i + 1] = tmp;
          swapped = true;
        }
      }
    } while (swapped);
  }
  return sorted;
};
