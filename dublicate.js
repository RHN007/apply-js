var name = [3, 6, 2, 6, 7, 2, 1, 8, 9, 56, 2, 4, 6];

var uniqueName = [];

for (var i = 0; i < name.length; i++) {
  var element = name[i];
  var index = uniqueName.indexOf(element);
  if (index == -1) {
    uniqueName.push(element);
  }
}
console.log(uniqueName);
