let arg = +prompt('Write the number');
// let str = prompt('Write a str');

// 1 //Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(num) {
    if(num%2 == 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}
// evenOrOdd(arg);

// 2 //given a number, find its opposite.
function opposite(num) {
    console.log(num * (-1))
}
// opposite(arg);

// 3 //Given a year, return the century it is in.
function century(year) {
    console.log(Math.ceil(year/100)+" century")
}
// century(arg);

// 4 //Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
function initials(name) {
    let strr = name.split(' ');
    let init = [];
    for(let i=0; i<strr.length; i++){
        if(i < strr.length-1 ){
            init.push(strr[i].charAt(0).toUpperCase()+'.');
        }else{
            init.push(strr[i].charAt(0).toUpperCase());
        }
    }
    console.log(init.join(''))
}
// initials(str);

// 5 //Complete the solution so that it reverses the string passed into it.
function reverse(string) {
    let strr = string.split('');
    console.log(strr.reverse().join('')) 
}
// reverse(str);

// 6 //Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cardd) {
    let card = cardd.split('');
    for(let i = 0; i < card.length-4; i++){
        card[i] = '#';
    }
    card = card.join('');
    console.log('CardNumberMask: '+card)
}
// maskify(str);

// 7 //It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. 
function removeFirstAndLast(string){
    let afterRemoving = '';
    for(let i = 0; i < string.length; i++){
        if(i > 0 && i < string.length-1){
            afterRemoving += string[i];
        }
    }
    console.log(afterRemoving)
}
// removeFirstAndLast(str);

// 8 //Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    for(let i = 0; i < numbers.length; i++){
        format = format.replace('x', numbers[i]);
    }
    console.log(format)
  }
// createPhoneNumber(str);

// 9 // In this kata you should simply determine, whether a given year is a leap year or not.
function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0)
    console.log('true')
    else 
    console.log('false')
}
// isLeapYear(arg);

// 10 //Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
function sheep(arg) {
    let num = arg;
    for(let i = 1; i <= num; i++){
        if(num != 0){
            console.log(i+' sheep...');
        }
    }
}
// sheep(arg);

