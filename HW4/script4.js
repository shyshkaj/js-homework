// task 1
function sumSliceArray(arr, first, second){
    if(typeof first !=='number' || typeof second !== 'number'){
      throw new TypeError('Arguments are not numbers')
    }
    if(first > arr.length || second > arr.length){
      throw new RangeError('Arguments are out of the array range')
    }
    return arr[first] + arr[second];
  }
  
  const arr1Task1 = [2, 3, 4, 5, 1, 9, 11, 5]; 
  
  try{
    console.log(`sum ${1} and ${5} elements of arr ${arr1Task1} = `, sumSliceArray(arr1Task1, 1, 5));
    console.log(`sum ${'1'} and ${3} elements of arr ${arr1Task1} = `, sumSliceArray(arr1Task1, '1', 9));
    console.log(`sum ${9} and ${3} elements of arr ${arr1Task1} = `, sumSliceArray(arr1Task1, 9, 3));
  }catch (e){
    if(e.name === "TypeError") {
      console.log(e.name, " ", e.message);
    }
    if(e.name === "RangeError") {
      console.log(e.name, " ", e.message);
    }
  }
  
  // task 2
  
  
  function checkAge(){
    const role = ['admin', 'moderator', 'user'];
    const userName = prompt('Enter your name');
    const userAge = +prompt('Enter your age');
    const userRole = prompt('Enter your role');
  
    try{
      if(!userName || !userAge || !userRole){
        throw new Error('The field is empty! Please enter your age')
      }
      if(!role.includes(userRole)){
        throw new EvalError('Incorrect role')
      }
      if(typeof userAge !== 'number'){
        throw new TypeError('Entered age is not a number')
      }
      if(userAge < 18 || userAge > 70){
        throw new RangeError('We don\'t recommend you watch the movie.')
      }
  
    }catch (ex){
      alert(`${ex.name}: ${ex.message}`)
      return
    }
    alert('You have access to watching film')
  }
  
  checkAge();
  
  // task 3
  function calcRectangleArea(width, height){
    if(typeof width !== 'number' || typeof height !== 'number'){
      throw new TypeError('Parameters are not valid')
    }
    return width * height;
  }
  
    try{
      console.log(`Rectangle (width = ${6}, height = ${8}) area = `,calcRectangleArea(6, 8));
      console.log(`Rectangle (width = ${'6'}, height = ${5}) area = `,calcRectangleArea('6', 5));
    }catch (e){
      console.log(e.name, e.message);
    }
  
  // task 4
  
  class MonthException extends Error{
    constructor(message){
      super(message);
      this.name = 'MonthException';
    }
  }
  
  function showMonthName(month){
    if(typeof month != 'number' || month < 1 || month > 12){
      throw new MonthException('Incorrect month number')
    }
    const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthsNames[month-1];
  }
  
  try{
    console.log(showMonthName(5));
    console.log(showMonthName(14));
  }catch (exeption){
    console.log(exeption.name,' ', exeption.message);
  }
  
  // task 5
  function showUser(id){
    if(id < 0){
      throw new Error('ID must not be negative')
    }
    return {id}
  }
  
  function showUsers(ids){
    return ids.map((element)=>{
      try{
        return showUser(element)
      }catch(exeption){
        console.log(exeption.name, ': ', exeption.message, ': ', element);
      }
    }).filter((elem)=>{
      return elem;
    });
  }
  console.log(showUsers([7, -12, 44, 22])); 