var firstNonRepeatedCharacter = function (string) {
    // TODO: your solution here
    //Look for first nonrepeated character


    for (let i in string) {
        console.log(string.lastIndexOf(string[i]))
        console.log(string.indexOf(string[i]))
        if (string.lastIndexOf(string[i]) === string.indexOf(string[i])) {
          return string[i];
        }
      }
      return null;

    
  };

  firstNonRepeatedCharacter("AABDS")