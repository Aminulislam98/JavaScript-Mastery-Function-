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
