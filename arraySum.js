function getArraySum(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

var numbers = [45, 81, 63, 56, 35, 23, 98];

var result = getArraySum(numbers);

console.log("total of the numbers: ", result);

var total = getArraySum([43, 56, 12, 41, 86]);

console.log("total of the numbers:", total);
