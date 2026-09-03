function secondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
}


function calculateFrequency(string) {
  var frequency = [];

  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    if (char >= 'a' && char <= 'z') {
      if (frequency[char] === undefined) {
        frequency[char] = 1;
      } else {
        frequency[char]++;
      }
    }
  }

  return frequency;
}

function flatten(unflatObject) {
  var flatObject = {};

  function recurse(object, prefix) {
    for (var key in object) {
      var newKey = prefix ? prefix + "." + key : key;

      if (typeof object[key] === "object" && object[key] !== null) {
        recurse(object[key], newKey);
      } else {
        flatObject[newKey] = object[key];
      }
    }
  }

  recurse(unflatObject, "");

  return flatObject;
}

function unflatten(flatObject) {
  var unflatObject = {};

  for (var key in flatObject) {
    var keys = key.split(".");
    var current = unflatObject;

    for (var i = 0; i < keys.length - 1; i++) {
      if (current[keys[i]] === undefined) {
        current[keys[i]] = {};
      }

      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = flatObject[key];
  }

  return unflatObject;
}
