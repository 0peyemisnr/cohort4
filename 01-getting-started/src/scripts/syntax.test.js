import syntax from './syntax.js'
//Number
test('Does that isnum function work?', () => {
    expect(syntax.isNum(1)).toBe(true);
});
//String
test('Does that isString function work?', () => {
    expect(syntax.isString("2")).toBe("2");
});
//Boolean
test('Does that isOdd function work?', () => {
    expect(syntax.isOdd(3)).toBe(true);
});
//Array
test('Does that SortArray function work?', () => {
    expect(syntax.SortArray([2,1,3,4])).toStrictEqual([1,2,3,4]);
});
//Object
test('Does that person function work?', () => {
    let person ={firstname: "Kay", lastname: "Otegbeye"};
    expect(syntax.person(person.firstname, person.lastname)).toBe("Kay Otegbeye");
    
});
//Undefined
test('Does that undefined function work?', () => {
    expect(syntax.undefined(undefined)).toBe(undefined);
});

//If/Else
//test ('Does that if function work?', () => {
   // expect(syntax.ifTime(time)).toBe(true);
//});

//arrays | add to the front
test ('Does that letters function work?', () => {
   var array = ["d", "e", "f", "g"]; 
   var num1 = "a";
     expect(syntax.addtoArray(array, num1)).toStrictEqual(["a","d","e","f","g"]);
});
//Arrays add to the end
test ('arrays | add to end', () => {
    var array = ["1", "2", "3", "4"]; 
    var num = "5";
      expect(syntax.add2Array(array, num)).toStrictEqual(["1","2","3","4","5"]);
 });
 //update values
test ('update names of people', () => {
    var array = ["Teddy","Cathy","Bobby"]
    var num3 = "Kay";
    expect(syntax.people(array, num3)).toEqual(["Kay","Teddy","Cathy","Bobby"]);
});

//for loop test
var sumArray = [1,2,3,4,5];
var sumArray1 = [10,20,30,40,50];
var sumArray2 = [100,200,300,400,500];
var sumArray3 = ['a','b','c','d','e'];
test ('for loop to read arrays', () => {
       expect(syntax.forLoop(sumArray)).toBe(6);
        expect(syntax.forLoop(sumArray1)).toBe(15);
       expect(syntax.forLoop(sumArray2)).toBe(105);
       expect(syntax.forLoop(sumArray3)).toBe('a5');
});

//for-in loops
var person = {
    name:'Kay'
    ,Height: '5ft'
    ,weight:'500kg'};
    
//var myLetters1 = ['a1','b1','c1','d1','e1'];
test ('for-in loop to check a persons name', () => {
    expect(syntax.checkPerson(person)).toBe('Kay 5ft 500kg ');
    //expect(syntax.checkPerson(weight)).toBe('500kg ');
});

//while loop test
var i = 0;
test ('while loop test to check number range', () => {
    expect(syntax.checkNumber(5)).toEqual([0,1,2,3,4]);
});

//do while loop test
test("The reduced numbers added up", () => {
    expect(syntax.reduce(1)).toBe(1);
    expect(syntax.reduce(10)).toBe(55);
    expect(syntax.reduce(100)).toBe(5050);
});

//for each function test 
test('does for each loop work', () => {
    expect(syntax.forEachLoop([2,4,8])).toStrictEqual([4,8,16]);
    expect(syntax.forEachLoop([7,11,50])).toStrictEqual([14,22,100]);
});

//declare objects
test('convert 2 arrays to object', () => {
    expect(syntax.arraysToObject(['a','b','c'],[1,2,3])).toStrictEqual({a:1,b:2,c:3});
    expect(syntax.arraysToObject(['x','y','z'],[97,98,99])).toStrictEqual({x:97,y:98,z:99});
});

//Lookup key to retrieve values
test('new object', () => {
    expect(syntax.lookupKey({'buddha':108})).toBe(108);
    expect(syntax.lookupKey({'foldpath':8})).toBe(8);
});
