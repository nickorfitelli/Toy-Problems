var bubbleSort = function(array) {
    // Your code here.

    var bub = array;
    var flag = 1;

    while(flag > 0){
        flag = 0;
        for (let i = 0, j = i+1 ; i < bub.length; i++, j++) {
             if (bub[i] > bub[j]) {
                  [bub[i], bub[j]] = [bub[j], bub[i]];
                  flag ++;
                }  
        }
    }

    return bub;

  };

  console.log(bubbleSort([6,5,4,3,2,1]))