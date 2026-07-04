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

// The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: ` ${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(238, 'Aminul islam');
lufthansa.book(635, 'Aminul islam');
console.log(lufthansa.bookings);

const eurowings = {
  airline: ' Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call method
book.call(eurowings, 23, 'Aminul islam');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'Lx',
  bookings: [],
};

book.call(swiss, 430, 'Marry Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

// Bind method
// Bind method does not run Immediately
const bookEW = book.bind(eurowings);
const bookSS = book.bind(swiss);
bookEW(332, 'Aminul islam');
bookSS(333, 'Aminul islam');

const bookEW48 = book.bind(eurowings, 48);
bookEW48('Khadijah');

// With event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const greets = function (greeting, name) {
  console.log(`${greeting} ${name}`);
};

// Practiced about partial application
// const greetings = greets.bind(null, 'hello');
// greetings('Aminul');
// greetings('Khadijah');

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.23, 120));

// const addVat = addTax.bind(null, 0.23);
// addVat(22);

const taxRate = rate => value => value + value * rate;
const taxCal = taxRate(0.23);
console.log(taxCal(79));

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  // register the answer
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}
       ${this.options[0]}
       ${this.options[1]}
       ${this.options[2]}
       ${this.options[3]}
      `),
    );
    // checking Is answer valid
    typeof answer === 'number' &&
      answer < this.options.length &&
      answer >= 0 &&
      this.answers[answer]++;
    this.displayResult('string');
  },

  // Display the answer
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};

// task 1:
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 2, 3] }, 'string');

// Immediately Invoked function Expression (IIFE)

// Closures

// More closures Example

// Example 1
let f;
const g = function () {
  let a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  let b = 787;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re assign f function:
h();
f();
console.dir(f);

// Example 2;
const boardPassenger = function (n, wait) {
  // let perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} Passenger`);
    console.log(`There are 3 groups, each with ${perGroup} passenger`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

let perGroup = 23;

boardPassenger(129, 5);

// Coding challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
