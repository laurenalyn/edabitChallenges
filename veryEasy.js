// Create a function that takes two strings as arguments and return either true or false
// depending on whether the number of their charcters is equal or not.
function comp(str1, str2) {
  if (str1.length === str2.length) {
    return true;
    } else {
            return false;
    }
}

// Create a function that takes two numbers as arguments and return their sum.
function addition(a, b) {
    return a + b
}

// Create a function that takes a number as an argument, increments the number
// by +1 and returns the result.
function addition(num) {
	return num + 1;
}

// Create a function that takes a number (from 1 to 12) and return its
// corresponding month name as a string.
function month_name(num) {
    switch(num) {
        case 1: return "January";
            break;
        case 2: return "February";
            break;
        case 3: return "March";
            break;
        case 4: return "April"
            break;
        case 5: return "May";
            break;
        case 6: return "June";
            break;
        case 7: return "July";
            break;
        case 8: return "August"
            break;
        case 9: return "September";
            break;
        case 10: return "October";
            break;
        case 11: return "November";
            break;
        case 12: return "December"
            break;
    }
}

// Create a function that takes a number as its only argument and
// returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
	if (num <= 0 ){
		return true
	} else {
		return false
	}
}

// Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
	let num = arr.pop();
	return num;
}

// Create a function that takes a number as an argument and returns "even"
// for even numbers and "odd" for odd numbers.
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
		return "even"
    } else {
	    return "odd"
    }
}

// Create a function that takes an array and a string as arguments
// and return the index of the string.
function find_index(arr, str) {
    return arr.indexOf(str)
}

// Create a function that takes a base number and an exponent
// number and returns the calculation.
function calculateExponent(num, exp) {
	return Math.pow(num, exp);
}

// Create a function that takes a number as an argument and
// returns the amount of digits it has.
function findDigitAmount(num) {
    let count = 0;
    let stringNum = num.toString();
    let splitStr = stringNum.split("");
    for(let i = 0; i < splitStr.length; i++) {
        count ++  
    }
    return count;
}
function findDigitAmount(num) {
	return num.toString().length;
}

// Create a function that takes an array of numbers. Return the largest number in the array.
function findLargestNum(arr) {
    let max = arr.reduce(function(a, b) {
      return Math.max(a, b)
    });
    return max; 
}
// OR
function findLargestNum(arr) {
    return Math.max(...arr);
  }

//   Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
	let dash = [];
	for(let i = 0; i < num; i++) {
    dash.push("-");
  }
  return dash.join("");
}
// OR
function Go(num) {
	return "-".repeat(num);
}

// Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallestNum(arr) {
	return Math.min(...arr);
}

// Create a function that reverses a boolean value and returns the string "boolean expected"
// if another variable type is given.
function reverse(bool) {
    if (bool === false) {
        return bool = true;
    } else if (bool === true) {
        return bool = false;
    } else {
        return "boolean expected"
    }
}
// OR 
function reverse(bool) {
	if (typeof bool === 'boolean') {
		return !bool
	} else {
		return 'boolean expected'
	}
}
// OR
function reverse(bool) {
	if (typeof bool !== 'boolean') return "boolean expected"
	return !bool
}

// Create a function that accepts a string (of a persons first 
// and last name) and returns a string with the first and last name swapped.
function nameShuffle(str) {
	return str.split(" ").reverse().join(" ");
}

//Create a function that takes a string as its argument and returns the string in reversed order.
function reverse(str) {
	return str.split("").reverse().join("");
}

// Create a function to multiply all values in an array by the amount of values in that array.
function MultiplyByLength(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr.length);
    }
    return newArr;
  }