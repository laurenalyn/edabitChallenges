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

// 