const getPrefix = function(cardNumber, prefixLength) {
	return parseInt(cardNumber.slice(0, prefixLength));
};

// containsPrefix will compare two arrays of prefixes and check if theres a matching value;
// useful when a network has multiple prefix lengths;
const containsPrefix = function(prefixes, prefix) {
	return prefixes.some(el => prefix.includes(el));
};

const withinRange = function(prefix, min, max) {
	return prefix >= min && prefix <= max;
};

const checkDinersClub = function(cardNumber) {
	let prefix = getPrefix(cardNumber, 2);
	const lengths = [14];
	const prefixes = [38, 39];
	return lengths.includes(cardNumber.length) && prefixes.includes(prefix);
};

const checkAmericanExpress = function(cardNumber) {
	let prefix = getPrefix(cardNumber, 2);
	const lengths = [15];
	const prefixes = [34, 37];
	return lengths.includes(cardNumber.length) && prefixes.includes(prefix);
};

const checkVisa = function(cardNumber) {
	let prefix = getPrefix(cardNumber, 1);
	const lengths = [13, 16, 19];
	const prefixes = [4];
	return lengths.includes(cardNumber.length) && prefixes.includes(prefix);
};

const checkMasterCard = function(cardNumber) {
	let prefix = getPrefix(cardNumber, 2);
	const lengths = [16];
	const prefixes = [51, 52, 53, 54, 55];
	return lengths.includes(cardNumber.length) && prefixes.includes(prefix);
};

const checkDiscover = function(cardNumber) {
	let prefix = [getPrefix(cardNumber, 2), getPrefix(cardNumber, 3), getPrefix(cardNumber, 4)];
	const lengths = [16, 19];
	const prefixes = [65, 644, 645, 646, 647, 648, 649, 6011];
	return lengths.includes(cardNumber.length) && containsPrefix(prefixes, prefix);
};

const checkMaestro = function(cardNumber) {
	let prefix = getPrefix(cardNumber, 4);
	const lengths = [12, 13, 14, 15, 16, 17, 18, 19];
	const prefixes = [5018, 5020, 5038, 6304];
	return lengths.includes(cardNumber.length) && prefixes.includes(prefix);
};

const checkChinaUnionPay = function(cardNumber) {
	let prefix = [getPrefix(cardNumber, 3), getPrefix(cardNumber, 4)];
	const lengths = [16, 17, 18, 19];
	const prefixes = [624, 625, 626, 6282, 6283, 6284, 6285, 6286, 6287, 6288];
	return lengths.includes(cardNumber.length) && (containsPrefix(prefixes, prefix) || withinRange(getPrefix(cardNumber, 6), 622126, 622925));
};

const checkSwitch = function(cardNumber) {
	let prefix = [getPrefix(cardNumber, 4), getPrefix(cardNumber, 6)];
	const lengths = [16, 18, 19];
	const prefixes = [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110];
	return lengths.includes(cardNumber.length) && containsPrefix(prefixes, prefix);
};

var detectNetwork = function(cardNumber) {
	return checkDinersClub(cardNumber) ? 'Diner\'s Club' :
	checkAmericanExpress(cardNumber) ? 'American Express' :
	checkSwitch(cardNumber) ? 'Switch' :
	checkVisa(cardNumber) ? 'Visa' :
	checkMasterCard(cardNumber) ? 'MasterCard' :
	checkDiscover(cardNumber) ? 'Discover' :
	checkMaestro(cardNumber) ? 'Maestro' :
	checkChinaUnionPay(cardNumber) ? 'China UnionPay' :'Unknown Network'
};
