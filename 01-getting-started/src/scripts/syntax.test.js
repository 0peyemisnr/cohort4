import syntax from './syntax.js'
//Number
test('Does that isnum function work?', () => {
    expect(syntax.isnum(1)).toBe(true);
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
var sum = 0
test ('for loop to read numbers less than 5', () => {
        expect(syntax.forLoop(5)).toBe(15);
        expect(syntax.forLoop(10)).toBe(55);
});