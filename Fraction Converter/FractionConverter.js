// Write a function that takes a number as its argument and returns a string that represents that number's simplified fraction.

// Example: toFraction(0.5) === '1/2'

// Whole numbers and mixed fractions should be returned as irregular fractions

// Example: toFraction(3.0) === '3/1'

// Example: toFraction(2.5) === '5/2'

var toFraction = function(number) {

    var returnStr = number.toString();
    var arrHold = returnStr.split('.');
   
    

        //see if whole number
        if(arrHold[1] === undefined){
          return `${arrHold[0]}/1`;
      }

    
    var len = arrHold[1].length;
    var denom = Math.pow(10,len)
    var numer = Math.trunc(number * denom);
    var gcd = gcd_two_numbers(numer,denom);



  // while(true){

  //   if((numer % gcd || denom % gcd) != 0 ) break;

  //   numer = numer/gcd;
  //   denom = denom/gcd;

  // }

    // //find dec length
    // var len = arrHold[1].length;
    // //calc d
    // denom = Math.pow(len,10);
    // //calc n
    // numer = arrHold[1] * denom;
    // //GCD

    // gcd = gcd_two_numbers(numer,denom);



    

    return `${numer/gcd}/${denom/gcd}`
    
  };

  function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }


  console.log(toFraction(0.253213))