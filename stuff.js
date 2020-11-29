var counter = function (arr) {
  return 'There are ' + arr.length + ' ELements';
};

var adder = function (a, b) {
  return `Sum of 2 Numbers are ${a + b}`;
};

var pi = 3.412;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
