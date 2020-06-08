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
  
      num = Math.floor(num/ 10); // remove last digit by dividing by 10 and rounding down to get rid of decimal
  
      if(num === 0){ // if we divide by 10 and it rounds to zero, there are no more numbers
  
        return revInt; //return the reveresed digit
  
      } else revMachine(num); //recursion
    }

    let answer = revInt;

    return answer;

  }



  //Test Cases

    var test = reverseInteger(1234);
    console.log(test)