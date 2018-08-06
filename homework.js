// 1. Set the variable `givenName` to the string "Addison".
var givenName = ("Addison")

// 2. Set candies equal to 20, people to 6, and leftover equal
// to the remainder of dividing 20 by 6.
var candies = 20
var people = 6
var leftover = candies % people

// 3. Create a function called greeting that returns "Hello, <name>!",
// where <name> is the name given as an argument to the function.


function greeting(name) {
    return "Hello, " + name + "!";
}

// 4. Create a function called isOdd that, given a number, will
// return true if it is odd and false if it is not.

function isOdd(number){
    if(number % 2 === 1 || number % 2 === -1) {
    return true
    }
    else if(number % 2 + 1 !==0) {
    return false}
}
// 5. Create a function called isEven that, given a number, will
// return true if it is even and false if it is not.

function isEven(number){
    if (number % 2 === 0) {
        return true}
    else {
        return false
    }
}
// 6. Create a function called fahrenheitToCelsius that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Celsius.



function fahrenheitToCelsius(F){
    return ((F)-32)*5/9  
}

// 6. Create a function called celsiusToFahrenheit that takes a
// Celsius temperature as an argument and returns the
// temperature in Fahrenheit.

function celsiusToFahrenheit(C){
    return ((C)*9/5)+32

}

// 7. Create a function called fahrenheitToKelvin that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Kelvin. This function must use your previous
// fahrenheitToCelsius function.
// Absolute zero (0 K) is equivalent to −273.15 C.
// 1 degree Kelvin equals 1 degree Celsius.



// 8. Create a function called lesser that takes two numbers as
// arguments and returns the lesser of them. This function should
// use an if/else statement.

// 9. Create a function called multigreeting that takes a name
// and a language code and returns a version of "Hello, <name>!"
// in the specified language. The supported languages and their
// translations are below.
//
// en - Hello, <name>!
// es - ¡Hola, <name>!
// fr - Bonjour, <name>!
// eo - Saluton, <name>!
//
// If any other language code is used, return nothing.

// 10. Create a function, howOld, that takes a birthdate and a another
// date (the "current date") and returns how many years old the person
// with that birthdate was on that date. The dates should be JavaScript
// Date objects.
// If the birth date is after than the current date, return nothing.
