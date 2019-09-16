(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("next-core-sort", [], factory);
	else if(typeof exports === 'object')
		exports["next-core-sort"] = factory();
	else
		root["next-core-sort"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sort = __webpack_require__(/*! ./sort.js */ "./src/sort.js");

module.exports.sortObjects = _sort.sortObjects;
module.exports.quicksortObjects = _sort.quicksortObjects;
module.exports.mergeSort = _sort.mergeSort;
module.exports.quickSort = _sort.quickSort;
module.exports.insertionSort = _sort.insertionSort;
module.exports.bubbleSort = _sort.bubbleSort;

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Sorts an array of objects by property in object (not a deep property)
 * @function sortObjects
 * @param {array} array The object array to sort
 * @param {object} key The property to sort by
 * @param {boolean} descending Reverse the order
 * @returns {array} The sorted array
 */

const sortObjects = exports.sortObjects = (array, key, descending) => {
  return array.sort((a, b) => {
    const x = a[key],
          y = b[key];

    if (descending) {
      return x < y ? 1 : x > y ? -1 : 0;
    }

    return x < y ? -1 : x > y ? 1 : 0;
  });
};

const quicksortObjects = exports.quicksortObjects = (array, key, descending) => {
  //if array is empty
  if (array.length === 0) {
    return [];
  }

  if (!key) {
    return array;
  }

  let i = 1;
  const l = array.length,
        left = [],
        right = [],
        pivot = array[0]; //go through each element in array

  for (i = 1; i < l; i++) {
    const current = array[i];
    console.debug(`Compare ${pivot[key]} to ${current[key]}`);

    if (descending) {
      if (current[key] < pivot[key]) {
        left.push(current);
      } else {
        right.push(current);
      }
    } else {
      if (current[key] > pivot[key]) {
        left.push(current);
      } else {
        right.push(current);
      }
    }
  }

  return quicksortObjects(left).concat(pivot, quicksortObjects(right));
};
/**
 * Split the array into halves and merge them recursively
 * @function mergeSort
 * @param {array} array The array to sort
 * @returns {array} The sorted array
 */


const mergeSort = exports.mergeSort = arr => {
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


const quickSort = exports.quickSort = arr => {
  //if array is empty
  if (arr.length === 0) {
    return [];
  }

  let i = 1;
  const l = arr.length,
        left = [],
        right = [],
        pivot = arr[0]; //go through each element in array

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


const insertionSort = exports.insertionSort = unsortedList => {
  let sortedList = [];

  if (unsortedList) {
    sortedList = unsortedList.slice();
    const len = sortedList.length;
    let i, j, tmp;

    for (i = 1; i < len; i++) {
      tmp = sortedList[i]; //Copy of the current element.

      /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/

      for (j = i - 1; j >= 0 && sortedList[j] > tmp; j--) {
        //Shift the number
        sortedList[j + 1] = sortedList[j];
      } //Insert the copied number at the correct position
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


const bubbleSort = exports.bubbleSort = a => {
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

/***/ })

/******/ });
});
//# sourceMappingURL=next-core-sort.js.map