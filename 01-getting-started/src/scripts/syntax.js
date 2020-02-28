/* 
write a stub
write a test that fails
write the code for the test to pass
run the test
repeat 

1. define attributes / variables
    number
    string
    boolean
    array
    dictionary / objects
    undefined
2.  sample if / else
3.  functions
    parameters
    returns
4.  arrays
    add to the front
    add to the end
    update values
5.  loops 
    for
    for/in
    while
    do while
    forEach (with array and function)
6.  Objects / Dictionaries
    declare object
    lookup key to retrieve value
*/

/*function saveUser(user, callback) {
    $.post('/users', {
      first: user.firstname,
      last: user.lastname
    }, callback);
  }
*/
//number
const syntax = {
    isnum: (num) => {
        return true;
    },

    check: (num) => {
        if (num = 1) return number;
    },
//String
    isString: (str) => {
        return str;
    },

    check: (str) => {
        if (string === "2") return true;
    },
  //Boolean
  isOdd: (num) => {
      if ((num%2) !== 0) {
          return true;}
      else {
          return false;
  }
},
//Arrays
SortArray: (arr) => {
    arr.sort(); 
        return arr;
        
    },
//Objects
person: (firstname, lastname) => {
    return firstname +" "+ lastname;
    //person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
},
//Undefined
undefined: (num) => {
    return num;
},
//If/else
ifTime: (time) => {
    // block of code to be executed if the condition is true
    if (time = "00"){
        return noon;
    }
    else return beforeNoon;
  
    // block of code to be executed if the condition is false
},
//arrays | add to the front
//array.unshift(item1, item2, ..., itemX)
addtoArray: (array, num1) => {
array.unshift(num1);//.value
return array;
},

// //arrays | add to the end
add2Array: (array, num) => {
    array.push(num);
    return array;
},
//update values 
people: (array, num3) => {
    array.unshift(num3);
    return array;
},
//loops

};
export default syntax;