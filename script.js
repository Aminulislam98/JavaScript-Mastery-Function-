'use strict';

// Default Parameters
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers,
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// console.log(bookings);
// createBooking('LH123', undefined, 800);

// How passing arguments works: value vs. reference

// const flight = 'LH234';
// const aminul = {
//   name: 'Aminul Islam',
//   passport: 2493042039,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = `Mr ${passenger.name}`;
//   if (passenger.passport === 2493042039) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, aminul);
// console.log(flight);
// console.log(aminul);

// const flightNum = flight;
// const passenger = aminul;
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };
// newPassport(aminul);
// checkIn(flight, aminul);

// First class and higher order functions
// First class function mean, a function can be used almost everywhere like , a function can be passed as parameter in another function and can be stored in variable , can be kept in object
// Function are also value in javaScript
// In JavaScript : Functions are objects
// Learn about Higher order function
// Function accepting callback function functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed strings: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
// Call back function mean passing a function into another function as a parameter that's called called back function

// JavaScript uses callback function all the time
const high5 = function () {
  console.log('👋');
};
// document.body.addEventListener('click', high5);
// Call back function is vital part in javaScript language

// Functions returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeter = greet('Hey');
// console.log(greeter);
// greeter('Aminul');

const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeter = greet('Hey');
greeter('Aminul');
greet('Hello')('Aminul');
// when a function return a anther function that time we can immediately call this function that will return inner function
// This kind of function calling called , chained function call or Immediately invoking the return function or IIFE : stands for Immediately invoked function expression
