// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var prefix = {
  '65':'Discover',
  '644':'Discover',
  '645':'Discover', 
  '646':'Discover',
  '647':'Discover', 
  '648':'Discover', 
  '649':'Discover', 
  '6001':'Discover',
  '51':'MasterCard',
  '52':'MasterCard',
  '53':'MasterCard',
  '54':'MasterCard',
  '55':'MasterCard',
  '4':'Visa',
  '34':'American Express',
  '37':'American Express',
  '38':'Diner\'s Club',
  '39':'Diner\'s Club',
  '5018':'Maestro',
  '5020':'Maestro',
  '5038':'Maestro',
  '6304':'Maestro'
}; 

function findPre (num){
  for (var key in prefix){
    if(num.startsWith(key)){
      return prefix[key];
    }
  }
};

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber.length === 14 && (findPre(cardNumber) === 'Diner\'s Club')) {
  	return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && (findPre(cardNumber) === 'American Express')) {
  	  return 'American Express';
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && (findPre(cardNumber) === 'Visa')) {
  	  return 'Visa';
  } else if ((cardNumber.length === 16) && (findPre(cardNumber) === 'MasterCard')) {
  	  return 'MasterCard';
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (findPre(cardNumber) === 'Discover')) {
      return 'Discover';
  } else if ((cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) && (findPre(cardNumber) === 'Maestro')) {
      return 'Maestro';
  }
}
 

// 5018, 5020, 5038, or 6304, and a length of 12-19.