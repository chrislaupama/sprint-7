// exercise 1

function min(x, y){
    return Math.min(x, y);
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10


// exercise 2

function isEven(x) {
    if (x == 0) return true;
    else if (x == 1) return false;
    else if (x < 0) return isEven(-x);
    else return isEven(x - 2);
  }

  // exercise 3

function countChar(string, ch) {
    let counted = 0;
    for (let x = 0; x < string.length; x++) {
      if (string[x] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }