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

//number
const syntax = {
    isNum: (num) => {
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
addtoArray: (array, num1) => {
array.unshift(num1);//.value
return array;
},

//arrays | add to the end
add2Array: (array, num) => {
    array.push(num);
    return array;
},
//update values 
people: (array, num3) => {
    array.unshift(num3);
    return array;
},
//loops | for loop
 forLoop:(arr) => {
     let newArr=[];
     for(var i=0;i<arr.length;i++){
newArr[i]=arr[i]+5;
     }
 return newArr[0];
 },

//loops | for-in loops
checkPerson:(obj1) => {
    var newLetters ='';
    var x=''
    for (x in obj1){
      newLetters+=obj1[x]+' ';
    }
    return newLetters;
     

},
//while loop
checkNumber: (range) => {
    let arr = []
    var i = 0;
    while (i < range) {
        arr.push(i);
        i++;
    }
        return arr;
    
},

//do while loop test
reduce: (size) => {
    let total = 0, i = 0;
    do {
        total += i;
        i++;
    } while (i <= size)
    return total;;
},

// aForEachFunction: (xyz) => {
    forEachLoop: (x) => {
        x.forEach(myFunction)
        // var counter=0;
        function myFunction(item, index, arr) {
            arr[index] = item*2;
        };
        return x;
    },

    //declare objects
    arraysToObject: (name, value) => {
        const myObject = {};
        for (var step = 0; step < name.length; step++){
            myObject[name[step]]=value[step];
        }
        return myObject;
},

//Lookup key to retrieve values
lookupKey: (newObject) => {
    // return newObject.buddha;
    var myKey = Object.keys(newObject)[0];
    return newObject[myKey];
},
}

export default syntax;