/* task 1*/
const arrtask1 = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2); // [5, 3, 4, 6, 7]
function compact(arr) {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
  /* task 2*/
  let arrtask2 = createArray(2, 9);
  console.log(arrtask2); // [2, 3, 4, 5, 6, 7, 8, 9]
  function createArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  
    //task3
function showIntegersInRange(a, b) {
    for (let i = a; i <= b; i++) {
      for (let j = a; j <= i; j++) {
        console.log(i);
      }
    }
  }
  showIntegersInRange(0, 9);
  
  // task 4

  
  function randArray(k) {
    const arr = [];
    for (let i = 0; i < k; i++) {
      arr.push(Math.floor(Math.random() * 500) + 1);
    }
    return arr;
  }
  console.log(randArray(5));
  
  // task 5
  
  let arrTask5 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
  
  function funcName(arr) {
    let newArr = arr.flat();
    let arrNumbers = newArr.filter((elem) => {
      return typeof elem === 'number';
    });
    let arrStrings = newArr.filter((elem) => {
      return typeof elem === 'string';
    });
    return [arrNumbers, arrStrings]
  }
  
  let arrNew = funcName(arrTask5);
  console.log(arrNew);
  
  // task 6
 
  function calc(a, b, op){
    switch(op){
      case 1:
        return a - b;
      case 2:
        return a * b;
      case 3:
        return a / b;
      default:
        return a + b;
    }
  }
  console.log('3 - 2 = ', calc(3,2,1));
  console.log('3 * 2 = ', calc(3,2,2));
  console.log('4 / 2 = ', calc(4,2,3));
  console.log('3 + 2 = ', calc(3,2,4));
 // task 7
function findUnique(arr){
    for(el of arr){
      if(arr.indexOf(el) !== arr.lastIndexOf(el)){
        return false;
      }
    }
    return true
  } 
  console.log(findUnique([1, 2, 3, 5, 3]));  // => false
  console.log(findUnique([1, 2, 3, 5, 11])); // => true 