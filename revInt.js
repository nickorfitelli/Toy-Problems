function reverseInteger(number) {
    // TODO: Implement this function!  
    // Cannot turn number into a string or an array
  
    let revInt = 0;
    let lastDigit;
    let num = number;

    revMachine(num);

    function revMachine(number){
      lastDigit = num % 10; //Get the last digit 

      revInt = (revInt * 10) + lastDigit //add last digit by multiplying current rev by 10
  
      num = Math.floor(num/ 10); // remove last digit
  
      if(num === 0){
  
        return revInt;
  
      } else revMachine(num);
    }
  }



  //Test Cases

    var test = reverseInteger(1234);