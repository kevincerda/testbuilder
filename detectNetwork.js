// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (cardNumber.length === 14 && (cardNumber.startsWith('38') || cardNumber.startsWith('39'))) {
  	return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && (cardNumber.startsWith('34') || cardNumber.startsWith('37'))) {
  	  return 'American Express';
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.startsWith('4'))) {
  	  return 'Visa';
  } else if ((cardNumber.length === 16) && (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') ||cardNumber.startsWith('54') || cardNumber.startsWith('55'))) {
  	  return 'MasterCard';
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && cardNumber.startsWith('6011') || cardNumber.startsWith('644') || cardNumber.startsWith('645') || cardNumber.startsWith('646') || cardNumber.startsWith('647') || cardNumber.startsWith('648') || cardNumber.startsWith('649') || cardNumber.startsWith('65'));
  		return 'Discover';
  }
};

// 6011, 644-649, or 65
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.