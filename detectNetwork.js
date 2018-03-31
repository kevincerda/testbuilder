const getPrefix = function(cardNumber, prefixLength) {
	return parseInt(cardNumber.slice(0, prefixLength));
};

const checkDinersClub = function(cardNumber) {
	const dcLength = [14];
	const dcPrefix = [38, 39];
	return dcLength.includes(cardNumber.length) && dcPrefix.includes(getPrefix(cardNumber, 2));
};

const checkAmericanExpress = function(cardNumber) {
   const amLength = [15];
   const amPrefix = [34, 37];
   return amLength.includes(cardNumber.length) && amPrefix.includes(getPrefix(cardNumber, 2));
};

const checkVisa = function(cardNumber) {
	const vLength = [13, 16, 19];
	const vPrefix = [4];
	return vLength.includes(cardNumber.length) && vPrefix.includes(getPrefix(cardNumber, 1));
};

const checkMasterCard = function(cardNumber) {
	const mcLength = [16];
	const mPrefix = [51, 52, 53, 54, 55];
	return mcLength.includes(cardNumber.length) && mPrefix.includes(getPrefix(cardNumber, 2));
};

const checkDiscover = function(cardNumber) {
	const dLength = [16, 19];
	const dPrefix = [65, 644, 645, 646, 647, 648, 649, 6011];
	return dLength.includes(cardNumber.length) && (dPrefix.includes(getPrefix(cardNumber, 2)) || dPrefix.includes(getPrefix(cardNumber, 3)) || dPrefix.includes(getPrefix(cardNumber, 4)));
};

const checkMaestro = function(cardNumber) {
	const mLength = [12, 13, 14, 15, 16, 17, 18, 19]; 
  const mPrefix = [5018, 5020, 5038, 6304];
  return mLength.includes(cardNumber.length) && (mPrefix.includes(getPrefix(cardNumber,4)));
};

const checkChinaUnionPay = function(cardNumber) {
	const cupLength = [16, 17, 18, 19];
	const cupPrefix = [624, 625, 626, 6282, 6283, 6284, 6285, 6286, 6287, 6288];
	return cupLength.includes(cardNumber.length) && ((cupPrefix.includes(getPrefix(cardNumber, 3)) || cupPrefix.includes(getPrefix(cardNumber, 4)) || (getPrefix(cardNumber, 6) >= 622126 && getPrefix(cardNumber, 6) <= 622925)));
};

const checkSwitch = function(cardNumber) {
	const sLength = [16, 18, 19];
	const sPrefix = [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110];
	return sLength.includes(cardNumber.length) && sPrefix.includes(getPrefix(cardNumber, 4)) || sPrefix.includes(getPrefix(cardNumber, 6));
};

var detectNetwork = function(cardNumber) {
  if (checkDinersClub(cardNumber)) {
  	return 'Diner\'s Club';
  } else if (checkAmericanExpress(cardNumber)) {
  	  return 'American Express';
  } else if (checkSwitch(cardNumber)) {
  	  return 'Switch';
  } else if (checkVisa(cardNumber)) {
  	  return 'Visa';
  } else if (checkMasterCard(cardNumber)) {
  	  return 'MasterCard';
  } else if (checkDiscover(cardNumber)) {
      return 'Discover';
  } else if (checkMaestro(cardNumber)) {
      return 'Maestro';
  } else if (checkChinaUnionPay(cardNumber)) {
  	  return 'China UnionPay';
  }
};
