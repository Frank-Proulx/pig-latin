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

function vowelChecker(word) {
  let tested = letterChecker(word);
  let vowelArray = ["a", "e", "i", "o", "u"];
  let checker = false;
  vowelArray.forEach(function(element) {
    if (element === tested[0]) {
      checker = true;
    }
  });
  return checker;
}

function startsConsonant(word){
  let letterArray = word.split('');
  for (let i=0; i < letterArray.length; i++) {
    if (!vowelChecker(letterArray.join(''))) {
      letterArray.push(letterArray[0]);
      letterArray.shift();
    } else {
      break;
    }
  };
  if (letterArray[letterArray.length - 1].toLowerCase() === 'q' && letterArray[0].toLowerCase() === "u") {
    letterArray.push(letterArray[0]);
    letterArray.shift();  
  }
  return letterArray.join('') + "ay";
}


function pigLatin(word) {
  if (vowelChecker(word)) {
    return word + "way";
  } else {

  }
}
