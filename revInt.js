function reverseInteger(number) {
    // TODO: Implement this function!  
    // Cannot turn number into a string or an array
  
    let revInt = 0;
    let lastDigit;

    revMachine(number);

    revMachine = (num) => {

      lastDigit = num % 10; //Get the last digit 

      revInt = (revInt * 10) + lastDigit

      number = number / 10; 

      if(number = 0){

        return revInt;

      } else revMachine(number);
    };
  }

  //Test Cases

    var test = reverseInteger("1234");