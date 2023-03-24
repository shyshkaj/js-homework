//task 2//
console.log("Shyshka");
//task3//
var a;
a = 45;
var b;
b = 8;
a = b;
alert(a);
alert(b);
//task4//
const objects = {
    'String': "string",
    'Number': 4,
    'Boolean': false,
    'Undefined': undefined,
    'Null': null
}
//task5
const isAdult = confirm("Please confirm if you are 18+ years old");
console.log('is adult', isAdult);
//task 6
const username = "Yuliia";
const surname = "Shyshka";
const studygroup = 749;
const dateofbirth = "11/06/2003";
const marriagestatus = false;

console.log(studygroup, marriagestatus, username, surname, dateofbirth);

const siblings = undefined;
const children = null;
console.log(siblings, children)
//task7
const login = prompt("Please enter login");
const email = prompt("Please neter your email");
const password = prompt("Please enter your password");

alert("Dear " + login + " your email is " + email + ", your password is " + password);
//task8
const secondsinminute = 60;
const secondsinhour = secondsinminute*60;
const secondsinaday = secondsinhour*24;
const secondsinmonth=secondsinaday*31;

alert(secondsinhour);
alert(secondsinaday);
alert(secondsinmonth);