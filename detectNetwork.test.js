const generateCardNum = function(prefix, length) {
  prefix = prefix.toString();
  length = length.toString();
  var nums = '';
  for (var i = 0; i < length - prefix.length; i += 1) {
    nums += '0';
  }
  return prefix + nums;
};

describe('Introduction to Mocha Tests - READ ME FIRST', function() {

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }
    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };
  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;
 
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });
  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });
  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  }); 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  }); 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011923456789112')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011923456789112123')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6441123456789112')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6441123456789112123')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6451123456789112')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6451123456789112123')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6461123456789112')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6461123456789112123')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6471123456789112')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6471123456789112123')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6481123456789112')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6481123456789112123')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6491123456789112')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6491123456789112123')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6511123456789112')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6511123456789112123')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  var expect = chai.expect;

  for (let length = 12; length <= 19; length++) {
    (function(length) {
    it('has a prefix of 5018 and a length of ' + length + '.', function () {
      cardValue = generateCardNum(5018, length);
      expect(detectNetwork(cardValue)).to.equal('Maestro');
    });
    it('has a prefix of 5020 and a length of ' + length + '.', function () {
      cardValue = generateCardNum(5020, length);
      expect(detectNetwork(cardValue)).to.equal('Maestro');
    });
    it('has a prefix of 5038 and a length of ' + length + '.', function () {
      cardValue = generateCardNum(5038, length);
      expect(detectNetwork(cardValue)).to.equal('Maestro');
    });
    it('has a prefix of 6304 and a length of ' + length + '.', function () {
      cardValue = generateCardNum(6304, length);
      expect(detectNetwork(cardValue)).to.equal('Maestro');
    });
    })(length)
  }
});

describe('should support Switch', function() {
  var expect = chai.expect;
  for (var length = 16; length <=19; length++) {
   if (length !== 17) {
   (function(length) {
    it('has a prefix of 4903 and a length of ' + length + '.', function() {
      cardValue = generateCardNum(4903, length);
      expect(detectNetwork(cardValue)).to.equal('Switch')
    });
    it('has a prefix of 4905 and a length of ' + length + '.', function() {
      cardValue = generateCardNum(4905, length);
      expect(detectNetwork(cardValue)).to.equal('Switch')
    });
    it('has a prefix of 4911 and a length of ' + length + '.', function() {
      cardValue = generateCardNum(4911, length);
      expect(detectNetwork(cardValue)).to.equal('Switch')
    });
    it('has a prefix of 4936 and a length of ' + length + '.', function() {
      cardValue = generateCardNum(4936, length);
      expect(detectNetwork(cardValue)).to.equal('Switch')
    });
    it('has a prefix of 564182 and a length of ' + length + '.', function() {
      cardValue = generateCardNum(564182, length);
      expect(detectNetwork(cardValue)).to.equal('Switch')
    });
    it('has a prefix of 633110 and a length of ' + length + '.', function() {
      cardValue = generateCardNum(633110, length);
      expect(detectNetwork(cardValue)).to.equal('Switch')
    });
    it('has a prefix of 6333 and a length of ' + length + '.', function() {
      cardValue = generateCardNum(6333, length);
      expect(detectNetwork(cardValue)).to.equal('Switch')
    });
    it('has a prefix of 6759 and a length of ' + length + '.', function() {
      cardValue = generateCardNum(6759, length);
      expect(detectNetwork(cardValue)).to.equal('Switch')
    });
    })(length)
    }
  }
});

describe('should support China UnionPay', function() {
  var expect = chai.expect;
  var cardValue;

  for (var prefix = 624; prefix <= 626; prefix++) {
    for (var length = 16; length <= 19; length++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      cardValue = generateCardNum(prefix, 16);
      expect(detectNetwork(cardValue)).to.equal('China UnionPay')
    });
  })}(prefix)
  }

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    for (var length = 16; length <= 19; length++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      cardValue = generateCardNum(prefix, length);
      expect(detectNetwork(cardValue)).to.equal('China UnionPay')
    });
  })}(prefix)
  }
  
  for (var prefix = 6282; prefix <= 6288; prefix++) {
    for (var length = 16; length <= 19; length++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      cardValue = generateCardNum(prefix, length);
      expect(detectNetwork(cardValue)).to.equal('China UnionPay')
    });
  })}(prefix)
  }
  
});


