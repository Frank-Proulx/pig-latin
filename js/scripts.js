// Utility Logic

function wordSplitter(word) {
  let split = word.split("");
  return split; 
}

// Business Logic

function letterChecker(word) {
  let checking = wordSplitter(word);
  let checked = [];
  checking.forEach(function(element) {
    if (element.toLowerCase() != element.toUpperCase()) {
      checked.push(element);
    }
  });
  return checked;
}

function vowelChecker(letter) {
  let vowelArray = ["a", "e", "i", "o", "u"];
  let checker = false;
  vowelArray.forEach(function(element) {
    if (element === letter) {
      checker = true;
    }
  });
  return checker;
}

function pigLatin(letter) {
  if (vowelChecker(letter)) {
    return letter + "way";
  }
}
